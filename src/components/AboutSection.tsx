import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  ShieldCheck, 
  Code2, 
  Server, 
  Cpu, 
  Lock, 
  HeartHandshake, 
  Layers,
  CheckCircle2
} from 'lucide-react';
import { ASSETS } from '../constants/assets';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'culture' | 'tech'>('overview');

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Human Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3">
              <span>01. ORGANIZATIONAL PROFILE</span>
              <span>·</span>
              <span>SOUTHEAST ASIA TECH HUB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight uppercase">
              ABOUT NEXATECH
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              An elite 70-member, all-male remote engineering team delivering mission-critical software solutions across global marketplaces.
            </p>
          </div>

          {/* Interactive Navigation Switcher */}
          <div className="flex items-center p-1.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'btn-3d-primary text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('culture')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'culture'
                  ? 'btn-3d-primary text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Values & Trust
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'tech'
                  ? 'btn-3d-primary text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Tech Capabilities
            </button>
          </div>
        </div>

        {/* Bento Grid Layout with High-Fidelity Visual Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Command Center & Team Photography Card (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 card-3d-depth shadow-xl"
          >
            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
              {/* Light Mode: Bright, Sunlit Dev Center Photography */}
              <img
                src={ASSETS.devCenterDaylight}
                alt="Bright sunlit NEXATECH software engineering office in Manila with developer workstations"
                className="dark:hidden w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out brightness-105 contrast-105 saturate-110"
                referrerPolicy="no-referrer"
              />
              {/* Dark Mode: Command Center at Night */}
              <img
                src={ASSETS.devCenter}
                alt="NEXATECH command center with remote development workstations in the Philippines"
                className="hidden dark:block w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent dark:from-slate-950 dark:via-slate-950/40 dark:to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-between transition-colors">
                <div>
                  <span className="text-[11px] font-mono font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider block mb-0.5">
                    ENGINEERING OPERATIONS LAB
                  </span>
                  <div className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display">
                    Manila & Remote Hubs
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-50 dark:bg-slate-900 border border-cyan-200 dark:border-slate-700 text-xs font-mono text-cyan-800 dark:text-cyan-300 font-bold shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span>70 ACTIVE ENGINEERS</span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  <strong className="text-slate-900 dark:text-white font-semibold">We are a 70-member, all-male remote software development team based in the Philippines, with global talent.</strong> With over six years of rigorous experience, we specialize in high-velocity web development, enterprise architectures, and distributed client platforms.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We are deeply committed to client respect, absolute privacy, and fostering professional, trusting relationships. Every partnership is treated as a foundational bridge to expand our horizons and establish long-lasting mutual prosperity.
                </p>
              </div>

              {/* Verified Trust Markers */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Team Structure</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    70 All-Male Developers
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Track Record</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    6+ Years Industry Run
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Verification</div>
                  <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Compliant Sandbox</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Values & Technical Highlights with Subtle Floating Animation (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Card 1: Respect & Privacy (Floating keyframe animation) */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 card-3d-depth animate-subtle-float">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl icon-3d-cyan flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    Client Respect & Privacy
                  </h3>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-300">NON-NEGOTIABLE ETHICS</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We believe mutual respect is the cornerstone of successful software delivery. When collaborating, we respect client boundaries and partner privacy above all else.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <Lock className="w-4 h-4" />
                <span>Zero personal data retention · Strict sandboxing</span>
              </div>
            </div>

            {/* Card 2: Professional Trusting Relationships (Floating with staggered delay) */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 card-3d-depth animate-subtle-float-delayed">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl icon-3d-gold flex items-center justify-center text-slate-950 shrink-0">
                  <HeartHandshake className="w-6 h-6 text-slate-950" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    Trusting Relationships
                  </h3>
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-300">TRANSPARENT TERMS</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Clear agreements define all financial shares, responsibilities, and communication timelines prior to work commencing. Both parties retain complete transparency.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-amber-600 dark:text-amber-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Documented records compliant with financial laws</span>
              </div>
            </div>

            {/* Card 3: Virtual Machine & Isolation First (Floating with slow harmonic delay) */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-950/40 dark:via-slate-900/60 dark:to-slate-900/90 border border-cyan-200 dark:border-cyan-800/40 card-3d-depth animate-subtle-float-slow">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl icon-3d-badge bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center text-cyan-600 dark:text-cyan-300 shrink-0">
                  <Layers className="w-6 h-6 text-cyan-600 dark:text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    VMware Sandboxing Option
                  </h3>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">PARTNER PRIVACY SAFEGUARD</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Partners can install VMware or VirtualBox to grant access strictly inside an isolated virtual machine, completely separating personal files from verification tasks.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
