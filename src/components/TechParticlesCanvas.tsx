import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

export const TechParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Palette: Subtle cyan, sky, and warm amber gold
    const particleColors = [
      'rgba(56, 189, 248, ',  // sky-400
      'rgba(6, 182, 212, ',   // cyan-500
      'rgba(14, 165, 233, ',  // sky-500
      'rgba(251, 191, 36, ',  // amber-400
    ];

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    // Mouse coordinates relative to canvas
    const mouse = {
      x: -9999,
      y: -9999,
      radius: 140, // interaction radius
    };

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Particle density: ~1 particle per 18,000 sq px, capped between 25 and 65
      const count = Math.max(25, Math.min(65, Math.floor((width * height) / 18000)));

      particles = [];
      for (let i = 0; i < count; i++) {
        const isGold = Math.random() < 0.18;
        const color = isGold ? particleColors[3] : particleColors[Math.floor(Math.random() * 3)];
        
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isReducedMotion ? 0.05 : 0.45),
          vy: (Math.random() - 0.5) * (isReducedMotion ? 0.05 : 0.45),
          radius: Math.random() * 1.4 + 1.1,
          baseAlpha: Math.random() * 0.35 + 0.25,
          color,
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse & Touch interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd);

    // Visibility observer to pause animation when scrolled away
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        lastTime = performance.now();
      }
    }, { threshold: 0.05 });

    observer.observe(canvas);

    // Main render loop
    const maxLinkDist = 115;
    let lastTime = performance.now();

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      const dt = Math.min((time - lastTime) / 16.66, 2.5);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Update positions & draw lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Bounce off canvas boundaries
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        else if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        else if (p.y > height) { p.y = height; p.vy *= -1; }

        // Subtle interactive mouse repulsion & attraction field
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 1.8;
          p.x -= (dxMouse / (distMouse || 1)) * force;
          p.y -= (dyMouse / (distMouse || 1)) * force;

          // Connecting laser line to mouse cursor
          const mouseLineAlpha = (1 - distMouse / mouse.radius) * 0.28;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${mouseLineAlpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }

        // Draw connections between neighboring particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLinkDist) {
            const lineAlpha = (1 - dist / maxLinkDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }

        // Draw individual particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseAlpha})`;
        ctx.fill();

        // Subtle glow halo for particles close to cursor
        if (distMouse < mouse.radius) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}0.15)`;
          ctx.fill();
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-1"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
};
