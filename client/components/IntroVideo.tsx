import { useState, useEffect, useRef } from "react";

interface IntroVideoProps {
  videoUrl: string;
  onComplete: () => void;
}

export function IntroVideo({ videoUrl, onComplete }: IntroVideoProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch((err) => {
        console.error("Error playing video:", err);
        // If autoplay fails, still continue
        setIsLoaded(true);
      });
    };

    const handleLoadedMetadata = () => {
      setIsLoaded(true);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Force play after a short delay
    const playTimeout = setTimeout(() => {
      video.play().catch(() => {
        setIsLoaded(true);
      });
    }, 100);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      clearTimeout(playTimeout);
    };
  }, [videoUrl]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Video Container */}
      <div
        className={`w-full h-full flex items-center justify-center ${isMobile ? "aspect-video" : ""}`}
      >
        <video
          autoPlay
          playsInline
          onEnded={onComplete}
          controls={false}
          className={`w-full ${
            isMobile
              ? "h-screen object-cover"
              : "max-w-6xl max-h-screen object-contain"
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
