import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function PageTransition() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      <style>{`
        @keyframes page-transition-in {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            opacity: 1;
          }
          50% {
            clip-path: polygon(0 50%, 100% 0, 100% 50%, 0 100%);
            opacity: 0.8;
          }
          100% {
            clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%);
            opacity: 0;
          }
        }

        @keyframes page-transition-glow {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .page-transition {
          animation: page-transition-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          background: linear-gradient(135deg, #a855f7 0%, #d946ef 50%, #a855f7 100%);
        }

        .page-transition-glow {
          animation: page-transition-glow 0.6s ease-out forwards;
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%);
        }
      `}</style>

      <div className="page-transition w-full h-full"></div>

      {/* Glow effects */}
      <div className="page-transition-glow" style={{ top: "50%", left: "25%", transform: "translate(-50%, -50%)" }}></div>
      <div className="page-transition-glow" style={{ top: "50%", left: "75%", transform: "translate(-50%, -50%)", animationDelay: "0.1s" }}></div>
    </div>
  );
}

export default PageTransition;
