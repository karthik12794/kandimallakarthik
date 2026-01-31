import { useState, useEffect, useRef } from "react";

interface IntroVideoProps {
  videoUrl: string;
  onComplete: () => void;
}

export function IntroVideo({ videoUrl, onComplete }: IntroVideoProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const checkOrientation = () => {
      if (window.innerWidth < 768) {
        setIsLandscape(window.innerWidth > window.innerHeight);
      }
    };
    checkMobile();
    checkOrientation();
    window.addEventListener("resize", () => {
      checkMobile();
      checkOrientation();
    });
    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        checkMobile();
        checkOrientation();
      }, 100);
    });
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkOrientation);
    };
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
        className={`flex items-center justify-center ${
          isMobile && isLandscape
            ? "w-screen h-screen"
            : isMobile
            ? "w-full aspect-video"
            : "w-full h-screen"
        }`}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-accent text-sm">Loading intro...</p>
            </div>
          </div>
        )}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          onEnded={onComplete}
          controls={false}
          className={`w-full h-full ${
            isMobile
              ? "object-cover"
              : "object-contain"
          }`}
          style={{
            filter: "brightness(1.05) contrast(1.1)",
            backgroundColor: "#000",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Skip button */}
      <button
        onClick={onComplete}
        className={`absolute px-4 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/40 transition-all border border-accent/50 text-sm font-medium z-10 ${
          isMobile && isLandscape ? "top-3 right-3" : "top-6 right-6"
        }`}
      >
        Skip Intro →
      </button>
    </div>
  );
}

export default IntroVideo;
