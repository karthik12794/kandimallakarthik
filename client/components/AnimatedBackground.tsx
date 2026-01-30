import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random() * 0.5 + 0.5,
        size: Math.random() * 3 + 1,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      // Clear canvas with semi-transparent background for motion blur
      ctx.fillStyle = "rgba(3, 0, 18, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.003;

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Add slight gravity
        p.vy += 0.05;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `rgba(168, 85, 247, ${p.life * 0.6})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${p.life * 0.3})`);
        gradient.addColorStop(1, `rgba(139, 92, 246, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Reset particle if it drifts off
        p.life -= 0.002;
        if (p.life <= 0) {
          particles[i] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            life: 1,
            size: Math.random() * 3 + 1,
          };
        }
      }

      // Draw floating bubbles
      for (let i = 0; i < 5; i++) {
        const bubbleY = (Math.sin(time + i) * 50 + 100) % canvas.height;
        const bubbleX = (canvas.width * (i / 5)) + Math.cos(time * 0.5 + i) * 30;
        const bubbleSize = 20 + Math.sin(time + i) * 10;

        // Bubble outline with glow
        ctx.strokeStyle = `rgba(168, 85, 247, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(bubbleX, bubbleY, bubbleSize, 0, Math.PI * 2);
        ctx.stroke();

        // Inner glow
        const bubbleGradient = ctx.createRadialGradient(
          bubbleX - 5,
          bubbleY - 5,
          0,
          bubbleX,
          bubbleY,
          bubbleSize
        );
        bubbleGradient.addColorStop(
          0,
          `rgba(168, 85, 247, ${0.1 + Math.sin(time + i) * 0.05})`
        );
        bubbleGradient.addColorStop(1, "rgba(168, 85, 247, 0)");
        ctx.fillStyle = bubbleGradient;
        ctx.beginPath();
        ctx.arc(bubbleX, bubbleY, bubbleSize, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20"
      style={{ background: "linear-gradient(135deg, #0f0018 0%, #1a0033 50%, #0f0018 100%)" }}
    />
  );
}

export default AnimatedBackground;
