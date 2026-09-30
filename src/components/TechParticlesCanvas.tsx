import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  isGold: boolean;
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

    let isDark = document.documentElement.classList.contains('dark');

    // MutationObserver to track real-time theme changes
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains('dark');
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    // Mouse coordinates relative to canvas
    const mouse = {
      x: -9999,
      y: -9999,
      radius: 150, // interaction radius
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

      // Particle density: ~1 particle per 17,000 sq px, capped between 30 and 70
      const count = Math.max(30, Math.min(70, Math.floor((width * height) / 17000)));

      particles = [];
      for (let i = 0; i < count; i++) {
        const isGold = Math.random() < 0.22;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isReducedMotion ? 0.05 : 0.42),
          vy: (Math.random() - 0.5) * (isReducedMotion ? 0.05 : 0.42),
          radius: Math.random() * 1.5 + 1.1,
          baseAlpha: Math.random() * 0.35 + 0.3,
          isGold,
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
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        lastTime = performance.now();
      }
    }, { threshold: 0.05 });

    visibilityObserver.observe(canvas);

    // Main render loop
    const maxLinkDist = 120;
    let lastTime = performance.now();

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      const dt = Math.min((time - lastTime) / 16.66, 2.5);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Palette configuration based on Dark vs Light mode
      const cyanColor = isDark ? 'rgba(56, 189, 248, ' : 'rgba(2, 132, 199, ';
      const altCyanColor = isDark ? 'rgba(6, 182, 212, ' : 'rgba(8, 145, 178, ';
      const goldColor = isDark ? 'rgba(251, 191, 36, ' : 'rgba(217, 119, 6, ';
      const lineBaseColor = isDark ? 'rgba(56, 189, 248, ' : 'rgba(2, 132, 199, ';
      const mouseLineColor = isDark ? 'rgba(103, 232, 249, ' : 'rgba(2, 132, 199, ';

      // Update positions & draw lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Bounce off canvas boundaries smoothly
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        else if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        else if (p.y > height) { p.y = height; p.vy *= -1; }

        // Subtle interactive mouse repulsion & attraction field
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 1.6;
          p.x -= (dxMouse / (distMouse || 1)) * force;
          p.y -= (dyMouse / (distMouse || 1)) * force;

          // Connecting laser line to mouse cursor
          const mouseLineAlpha = (1 - distMouse / mouse.radius) * (isDark ? 0.35 : 0.28);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `${mouseLineColor}${mouseLineAlpha})`;
          ctx.lineWidth = isDark ? 0.9 : 1.1;
          ctx.stroke();
        }

        // Draw connections between neighboring particles (Constellation mesh)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLinkDist) {
            const lineAlpha = (1 - dist / maxLinkDist) * (isDark ? 0.18 : 0.14);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${lineBaseColor}${lineAlpha})`;
            ctx.lineWidth = isDark ? 0.65 : 0.8;
            ctx.stroke();
          }
        }

        // Draw individual particle node
        const particleColorPrefix = p.isGold ? goldColor : (i % 2 === 0 ? cyanColor : altCyanColor);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColorPrefix}${p.baseAlpha})`;
        ctx.fill();

        // Subtle glow halo for particles close to cursor
        if (distMouse < mouse.radius) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${particleColorPrefix}${isDark ? 0.2 : 0.14})`;
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
      visibilityObserver.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-1"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
};
