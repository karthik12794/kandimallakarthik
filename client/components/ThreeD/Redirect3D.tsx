import { useEffect, useState } from "react";

interface Redirect3DProps {
  isActive: boolean;
  targetUrl?: string;
}

export function Redirect3D({ isActive, targetUrl }: Redirect3DProps) {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setShouldRedirect(true);
        if (targetUrl) {
          window.open(targetUrl, "_blank");
        }
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [isActive, targetUrl]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <style>{`
        @keyframes redirect-portal {
          0% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: perspective(1000px) rotateX(180deg) rotateY(360deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: perspective(1000px) rotateX(720deg) rotateY(720deg) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes redirect-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        @keyframes redirect-pulse {
          0%, 100% {
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.8), inset 0 0 30px rgba(168, 85, 247, 0.3);
          }
          50% {
            box-shadow: 0 0 60px rgba(217, 70, 239, 1), inset 0 0 60px rgba(217, 70, 239, 0.5);
          }
        }

        .redirect-container {
          animation: redirect-portal 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .redirect-ring {
          animation: redirect-ring 1.2s ease-out forwards;
        }

        .redirect-core {
          animation: redirect-pulse 0.6s ease-in-out infinite;
        }
      `}</style>

      <div className="redirect-container relative">
        {/* Central portal core */}
        <div className="redirect-core w-32 h-32 rounded-full bg-gradient-to-r from-primary via-secondary to-accent relative flex items-center justify-center">
          {/* Inner glow */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-b from-accent to-primary blur-lg opacity-60"></div>

          {/* Text */}
          <div className="relative z-10 text-center">
            <div className="text-2xl font-bold text-white mb-2">→</div>
            <p className="text-xs text-white font-medium">Redirecting...</p>
          </div>
        </div>

        {/* Expanding rings */}
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="redirect-ring absolute inset-0 rounded-full border-2 border-accent"
            style={{
              animation: `redirect-ring 1.2s ease-out ${index * 0.2}s forwards`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Redirect3D;
