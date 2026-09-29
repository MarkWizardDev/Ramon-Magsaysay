import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-80'
      }`}
      aria-hidden="true"
    >
      {/* Background Track (Subtle Hairline) */}
      <div className="absolute inset-0 bg-slate-900/10 dark:bg-white/5" />

      {/* Animated Glowing Progress Fill */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="w-full h-full relative bg-gradient-to-r from-cyan-500 via-sky-400 to-amber-400 shadow-[0_0_12px_rgba(6,182,212,0.85)]"
      >
        {/* Leading edge light particle beam */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-full bg-white/70 blur-[1px]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#f59e0b]" />
      </motion.div>
    </div>
  );
};
