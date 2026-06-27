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
    let particleCount = 100;
    let particleOpacity = 0.4;

    const init = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
      console.log("Canvas initialized with size:", width, height);

      // Dynamically calculate bubble density based on viewport size for impeccable UI
      if (window.innerWidth < 768) {
        particleCount = 30;
        particleOpacity = 0.25;
      } else if (window.innerWidth < 1024) {
        particleCount = 60;
        particleOpacity = 0.3;
      } else {
        particleCount = 100;
        particleOpacity = 0.4;
      }

      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 1,
        });
      }
    };

    const draw = () => {
      if (!ctx || !isVisible) return;
      
      ctx.clearRect(0, 0, width, height);

      // Brand coral color for particles with dynamic opacity
      ctx.fillStyle = `rgba(232, 82, 26, ${particleOpacity})`;
      ctx.strokeStyle = `rgba(232, 82, 26, ${particleOpacity * 0.5})`;
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
