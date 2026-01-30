import { useEffect, useState } from "react";

interface Animated3DNameProps {
  text: string;
  className?: string;
  onComplete?: () => void;
}

export function Animated3DName({
  text,
  className = "",
  onComplete,
}: Animated3DNameProps) {
  const [displayedLetters, setDisplayedLetters] = useState<string[]>([]);
  const [phase, setPhase] = useState<"appearing" | "disappearing" | "complete">(
    "appearing",
  );

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];

    if (phase === "appearing") {
      // Letters appearing one by one
      for (let i = 0; i <= text.length; i++) {
        timeouts.push(
          setTimeout(() => {
            setDisplayedLetters(text.split("").slice(0, i));
            if (i === text.length) {
              // Wait then start disappearing
              setTimeout(() => setPhase("disappearing"), 1500);
            }
          }, i * 80),
        );
      }
    } else if (phase === "disappearing") {
      // Letters disappearing one by one
      for (let i = text.length; i >= 0; i--) {
        timeouts.push(
          setTimeout(
            () => {
              setDisplayedLetters(text.split("").slice(0, i));
              if (i === 0) {
                setTimeout(() => {
                  setPhase("complete");
                  onComplete?.();
                }, 500);
              }
            },
            (text.length - i) * 60,
          ),
        );
      }
    }

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [phase, text, onComplete]);

  return (
    <h1 className={`${className}`}>
      <style>{`
        @keyframes float3d {
          0%, 100% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0);
          }
          25% {
            transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) translateZ(20px);
          }
          50% {
            transform: perspective(1000px) rotateX(0deg) rotateY(10deg) translateZ(30px);
          }
          75% {
            transform: perspective(1000px) rotateX(-5deg) rotateY(5deg) translateZ(20px);
          }
        }

        @keyframes letterPop {
          0% {
            opacity: 0;
            transform: scale(0.3) rotateZ(-180deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateZ(0deg);
          }
        }

        @keyframes letterFade {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.3) rotateZ(180deg);
          }
        }

        .letter {
          display: inline-block;
          animation: ${
            phase === "appearing" ? "letterPop" : "letterFade"
          } 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          perspective: 1000px;
        }

        .letter:nth-child(even) {
          color: #a855f7;
        }

        .letter:nth-child(odd) {
          color: #d946ef;
        }

        .text-container {
          animation: float3d 6s ease-in-out infinite;
          text-shadow: 0 0 30px rgba(168, 85, 247, 0.8),
                       0 0 60px rgba(217, 70, 239, 0.5),
                       0 0 90px rgba(168, 85, 247, 0.3);
        }
      `}</style>
      <div
        className={`text-container gradient-text text-6xl md:text-7xl font-extrabold leading-tight`}
      >
        {displayedLetters.map((letter, index) => (
          <span key={index} className="letter">
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </h1>
  );
}

export default Animated3DName;
