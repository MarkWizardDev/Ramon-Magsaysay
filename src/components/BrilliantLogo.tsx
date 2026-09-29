import React from 'react';

interface BrilliantLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrilliantLogo: React.FC<BrilliantLogoProps> = ({ 
  size = 'md',
  showTagline = false 
}) => {
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  const emblemDimension = isLg 
    ? 'w-14 h-14' 
    : isSm 
    ? 'w-9 h-9' 
    : 'w-11 h-11 sm:w-12 sm:h-12';
    
  const textTitleSize = isLg 
    ? 'text-3xl sm:text-4xl' 
    : isSm 
    ? 'text-lg sm:text-xl' 
    : 'text-2xl sm:text-3xl';

  const taglineSize = isLg
    ? 'text-[11px] sm:text-xs'
    : 'text-[9px] sm:text-[10.5px]';

  return (
    <div className="group inline-flex items-center gap-3 sm:gap-3.5 select-none transition-transform duration-300">
      
      {/* 3D Hyper-Brilliant Emblem Chassis */}
      <div className={`relative ${emblemDimension} shrink-0`}>
        
        {/* Ambient Chromatic Halo Glow (Cyan + Gold Dispersion) */}
        <div 
          className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500/40 via-sky-400/25 to-amber-400/45 blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-300 animate-aura-breath pointer-events-none" 
        />

        {/* Outer 3D Precision Beveled Frame */}
        <div className="relative w-full h-full rounded-2xl p-[1.5px] bg-gradient-to-br from-white/70 via-cyan-400/50 to-slate-900/90 shadow-[0_8px_20px_-3px_rgba(6,182,212,0.45)] dark:shadow-[0_10px_24px_-4px_rgba(6,182,212,0.55)] transition-transform duration-300 group-hover:scale-[1.03]">
          
          {/* Inner Deep Crystalline Obsidian Chamber */}
          <div className="w-full h-full rounded-[14px] bg-[radial-gradient(circle_at_75%_25%,#1e293b_0%,#090d16_65%,#020617_100%)] flex items-center justify-center overflow-hidden relative border border-white/10">
            
            {/* Prismatic Laser Sweep Gleam */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full animate-laser-sweep pointer-events-none" />

            {/* High-Precision SVG Monogram with Radiant Crowned Solar Orb */}
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[84%] h-[84%] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
            >
              <defs>
                {/* Left Strut: Electric Laser Cyan */}
                <linearGradient id="nexaCyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#67e8f9" />
                  <stop offset="30%" stopColor="#38bdf8" />
                  <stop offset="70%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>

                {/* Diagonal Blade: Brilliant Diamond Prism */}
                <linearGradient id="nexaPrismBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#a5f3fc" />
                  <stop offset="60%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>

                {/* Right Strut: Imperial 24K Gold */}
                <linearGradient id="nexaGoldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="40%" stopColor="#fbbf24" />
                  <stop offset="80%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>

                {/* Solar Crown Orb Multi-Layer Glow */}
                <radialGradient id="solarOrbRadial" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#fef08a" />
                  <stop offset="55%" stopColor="#fbbf24" />
                  <stop offset="85%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </radialGradient>

                {/* Specular Edge Bevel Reflection */}
                <linearGradient id="specularHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>

                {/* Ambient Halo Filter */}
                <filter id="orbGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Left Pillar: High-Tech Beveled Cyan Strut */}
              <path
                d="M17 26 C17 23.5 19 21.5 21.5 21.5 H33 C35.5 21.5 37.5 23.5 37.5 26 V81 C37.5 83.5 35.5 85.5 33 85.5 H21.5 C19 85.5 17 83.5 17 81 Z"
                fill="url(#nexaCyanGlow)"
              />
              {/* Left Pillar Specular Edge */}
              <path
                d="M17 26 C17 23.5 19 21.5 21.5 21.5 H33 V26 H22 V85.5 H17 Z"
                fill="url(#specularHighlight)"
                opacity="0.65"
              />

              {/* Right Pillar: Imperial Gold Strut */}
              <path
                d="M62.5 38 C62.5 35.5 64.5 33.5 67 33.5 H78.5 C81 33.5 83 35.5 83 38 V81 C83 83.5 81 85.5 78.5 85.5 H67 C64.5 85.5 62.5 83.5 62.5 81 Z"
                fill="url(#nexaGoldGlow)"
              />
              {/* Right Pillar Inset Specular */}
              <path
                d="M77.5 33.5 H83 V81 C83 83.5 81 85.5 78.5 85.5 H75 V38 C75 35.5 76 34 77.5 33.5 Z"
                fill="url(#specularHighlight)"
                opacity="0.45"
              />

              {/* Dynamic Prismatic Diagonal Cross-Beam */}
              <path
                d="M26 22 L74 76 H83 L35 22 Z"
                fill="url(#nexaPrismBeam)"
                className="drop-shadow-[0_0_6px_rgba(56,189,248,0.75)]"
              />

              {/* Radiant Crowned Golden Orb (Positioned above Right Pillar as in user reference) */}
              <g className="animate-orb-pulse">
                {/* Corona Outer Glow Flare */}
                <circle
                  cx="72.8"
                  cy="17"
                  r="13"
                  fill="#f59e0b"
                  opacity="0.38"
                  filter="url(#orbGlowFilter)"
                />
                
                {/* 4-Point Micro Starburst Cross Glint */}
                <path
                  d="M72.8 5 L74 17 L85 17 L74 17 L72.8 29 L71.6 17 L60.6 17 L71.6 17 Z"
                  fill="#ffffff"
                  opacity="0.85"
                />

                {/* Primary Radiant Sphere */}
                <circle
                  cx="72.8"
                  cy="17"
                  r="7.8"
                  fill="url(#solarOrbRadial)"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  className="drop-shadow-[0_0_8px_rgba(251,191,36,0.95)]"
                />

                {/* Specular Micro Diamond Center Core */}
                <circle
                  cx="70.8"
                  cy="14.8"
                  r="2.4"
                  fill="#ffffff"
                  opacity="0.95"
                />
              </g>
            </svg>

          </div>
        </div>
      </div>

      {/* Brilliant Sculpted Typography */}
      <div className="flex flex-col justify-center">
        
        {/* Main Wordmark: NEXA + TECH */}
        <div className={`font-black tracking-normal leading-none font-brand ${textTitleSize} flex items-center`}>
          
          {/* NEXA: Polished Sculpted Metallic Obsidian / Platinum */}
          <span className="tracking-wide bg-gradient-to-b from-slate-950 via-slate-900 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent font-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]">
            NEXA
          </span>

          {/* TECH: Radiant Celestial Cyan-to-Molten-Gold Gradient with Luminous Glint */}
          <span 
            className="tracking-normal font-black bg-gradient-to-r from-[#00f7ff] via-[#00a8ff] to-[#ffb700] bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(0, 247, 255, 0.4)) drop-shadow(0 0 4px rgba(255, 183, 0, 0.35))'
            }}
          >
            TECH
          </span>

          {/* Dynamic Laser Glint Dot */}
          <span className="relative flex h-2 w-2 ml-1.5 self-start mt-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-tr from-amber-300 to-amber-500 shadow-[0_0_8px_#f59e0b]" />
          </span>
        </div>

        {/* Refined Tagline Underneath (Subtle, Crisp & Perfectly Aligned) */}
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className={`font-mono font-bold tracking-[0.24em] sm:tracking-[0.28em] text-cyan-700 dark:text-cyan-300 uppercase ${taglineSize} leading-none`}>
              TECHNOLOGY FOR A SMART TOMORROW
            </span>
          </div>
        )}
      </div>

    </div>
  );
};
