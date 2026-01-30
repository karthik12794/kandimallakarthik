import { useRef, useState } from "react";

interface ImageCard3DProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageCard3D({ src, alt, className = "" }: ImageCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotationX = ((y - centerY) / rect.height) * 15;
    const rotationY = ((x - centerX) / rect.width) * -15;

    setRotation({ x: rotationX, y: rotationY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative perspective cursor-none ${className}`}
      style={{
        perspective: "1000px",
        transition: "transform 0.1s ease-out",
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-50 blur-2xl group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Card container */}
      <div className="relative bg-card rounded-3xl overflow-hidden border border-accent/30 shadow-2xl">
        {/* Image */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>

        {/* Corner accent */}
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent rounded-tr-2xl"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-accent rounded-bl-2xl"></div>
      </div>
    </div>
  );
}

export default ImageCard3D;
