"use client";

import { useEffect, useRef } from "react";

export function AmbientCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // Define particles
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const particleCount = 100; // Increased for visibility

    const init = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
      console.log("Canvas initialized with size:", width, height);

      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5, // Increased speed
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 1, // Increased radius
        });
      }
    };

    const draw = () => {
      if (!ctx || !isVisible) return;
      
      ctx.clearRect(0, 0, width, height);

      // Brand coral color for particles (increased opacity for visibility)
      ctx.fillStyle = "rgba(232, 82, 26, 0.4)";
      ctx.strokeStyle = "rgba(232, 82, 26, 0.2)";
      ctx.lineWidth = 1.0;

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges softly
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            cancelAnimationFrame(animationFrameId);
            draw();
          }
        });
      },
      { threshold: 0 }
    );

    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);
    init();
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (canvas.parentElement) {
        observer.unobserve(canvas.parentElement);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
