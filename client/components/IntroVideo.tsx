import { useState, useEffect } from "react";

interface IntroVideoProps {
  videoUrl: string;
  onComplete: () => void;
}

export function IntroVideo({ videoUrl, onComplete }: IntroVideoProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Video Container */}
      <div className={`w-full h-full flex items-center justify-center ${isMobile ? "aspect-video" : ""}`}>
        <video
          autoPlay
          muted
          playsInline
          onEnded={onComplete}
          controls={false}
          className={`w-full ${
            isMobile ? "h-screen object-cover" : "max-w-6xl max-h-screen object-contain"
          }`}
          style={{
            aspectRatio: isMobile ? "16 / 9" : "auto",
            filter: "brightness(1.05) contrast(1.1)",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Skip button */}
      <button
        onClick={onComplete}
        className="absolute top-6 right-6 px-4 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/40 transition-all border border-accent/50 text-sm font-medium z-10"
      >
        Skip Intro →
      </button>
    </div>
  );
}

export default IntroVideo;
