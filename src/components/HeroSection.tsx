import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Award, 
  Globe2, 
  ShieldCheck, 
  ArrowUpRight, 
  ChevronDown,
  Cpu
} from 'lucide-react';
import { ASSETS } from '../constants/assets';
import { TechParticlesCanvas } from './TechParticlesCanvas';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      {/* Background Stack: Light/Dark Metropolis Photo + Adaptive Scrim + Subtle Particles */}
      <div className="absolute inset-0 z-0">
        
        {/* Light Mode: Sunlit Luminous Tech City Architecture */}
        <img
          src={ASSETS.heroDaylightCity}
          alt="Luminous futuristic technology metropolis in daylight with glass towers and skywalks"
          className="dark:hidden w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Dark Mode: Cyber Metropolis at Night */}
        <img
          src={ASSETS.heroSkyline}
          alt="Futuristic cyber metropolis with modern glass architecture and glowing fiber optic pathways"
          className="hidden dark:block w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        
        {/* Measured Scrim Overlays - Light & Dark adaptive */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-white/50 dark:from-slate-950 dark:via-slate-950/85 dark:to-slate-950/60 transition-colors" />
        
        {/* Subtle Cyber Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] dark:bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" 
        />

        {/* Subtle Interactive Particles Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <TechParticlesCanvas />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col justify-center items-start">
        
        {/* Clean Kicker */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-wider text-cyan-800 dark:text-cyan-300 mb-6 uppercase"
        >
          <div className="w-8 h-8 rounded-lg icon-3d-cyan flex items-center justify-center text-white shadow-md">
            <Cpu className="w-4 h-4 text-white" />
          </div>
          <span className="font-mono tracking-widest text-cyan-800 dark:text-cyan-300 font-bold">PHILIPPINES ENGINEERING EXCELLENCE</span>
          <span className="text-slate-400 dark:text-slate-500 font-normal">/</span>
          <span className="font-mono tracking-widest text-amber-700 dark:text-amber-300 font-bold">GLOBAL EXPANSION ALLIANCE</span>
        </motion.div>

        {/* Varied Style Headline with High Contrast */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 dark:text-white uppercase leading-[1.08] font-display">
            NEXATECH
            <span className="block mt-2 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-amber-600 dark:from-cyan-300 dark:via-sky-100 dark:to-amber-200">
              Technology for a Smart Tomorrow.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-800 dark:text-slate-200 leading-relaxed max-w-2xl font-normal">
            A high-performance 70-member remote software development team with over 6 years of international delivery experience. We engineer scalable systems while forging transparent, high-trust cross-border partnerships.
          </p>
        </motion.div>

        {/* 3D Action Controls with Light Mode Excellence */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
        >
          <button
            onClick={() => scrollTo('roles')}
            className="px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white btn-3d-primary flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-lg"
          >
            <span>Explore Collaboration Model</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-950 btn-3d-gold flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-lg"
          >
            <span>Send Direct Message</span>
          </button>

          <button
            onClick={() => scrollTo('faq')}
            className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 bg-white hover:bg-slate-50 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:btn-3d-dark flex items-center gap-2 cursor-pointer whitespace-nowrap border border-slate-300 dark:border-slate-700/60 shadow-md transition-all active:scale-95"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Partnership FAQ</span>
          </button>
        </motion.div>

        {/* 3D Floating Feature Stat Cards with Adaptive Light/Dark Colors */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-300 dark:border-slate-800/80"
        >
          {/* Stat 1 */}
          <div className="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 card-3d-depth shadow-xl shadow-slate-200/50 dark:shadow-none">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl icon-3d-cyan flex items-center justify-center text-white">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white font-display tabular-nums">70+</div>
                <div className="text-xs text-cyan-700 dark:text-cyan-300 font-bold">Software Engineers</div>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
              Specialized all-remote development powerhouse based in the Philippines.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 card-3d-depth shadow-xl shadow-slate-200/50 dark:shadow-none">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl icon-3d-gold flex items-center justify-center text-slate-950 font-bold">
                <Award className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white font-display tabular-nums">6+ Yrs</div>
                <div className="text-xs text-amber-700 dark:text-amber-300 font-bold">Proven Experience</div>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
              Deep expertise delivering enterprise, web, and freelance platform solutions.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 card-3d-depth shadow-xl shadow-slate-200/50 dark:shadow-none">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl icon-3d-badge bg-cyan-100 dark:bg-cyan-950/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Globe2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white font-display">Global</div>
                <div className="text-xs text-cyan-700 dark:text-cyan-300 font-bold">Market Reach</div>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
              Expanding from nationwide presence to active multi-region international nodes.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 card-3d-depth shadow-xl shadow-slate-200/50 dark:shadow-none">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl icon-3d-badge bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white font-display">100%</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300 font-bold">Privacy & Trust</div>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
              Sandboxed VM support, documented compliance, and guaranteed contractual terms.
            </p>
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <div className="w-full flex justify-center mt-12">
          <button 
            onClick={() => scrollTo('about')}
            aria-label="Scroll to About Section"
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer animate-bounce"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};
