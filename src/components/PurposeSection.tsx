import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe2, 
  TrendingUp, 
  Building2, 
  Navigation2, 
  Sparkles
} from 'lucide-react';
import { ASSETS } from '../constants/assets';

interface ExpansionHub {
  id: string;
  name: string;
  region: string;
  status: 'operational' | 'expanding' | 'strategic';
  description: string;
  focus: string;
}

const HUBS: ExpansionHub[] = [
  {
    id: 'ph',
    name: 'Philippines HQ & Command',
    region: 'Southeast Asia',
    status: 'operational',
    description: 'Our primary 70-member technical operations core, leading full-stack engineering, QA, and high-velocity sprints.',
    focus: 'Core Engineering & Cloud Deployment'
  },
  {
    id: 'na',
    name: 'North America Gateway',
    region: 'United States & Canada',
    status: 'expanding',
    description: 'Active client acquisition and regional partner onboarding for enterprise SaaS and freelance platform pipelines.',
    focus: 'Marketplace Verification & Client Expansion'
  },
  {
    id: 'eu',
    name: 'Western Europe Node',
    region: 'United Kingdom & EU',
    status: 'expanding',
    description: 'Expanding software contracts with fintech, e-commerce, and logistics firms requiring high-standard delivery.',
    focus: 'Cross-Border Accounts & Financial Flow'
  },
  {
    id: 'apac',
    name: 'Asia Pacific Reach',
    region: 'Australia & East Asia',
    status: 'strategic',
    description: 'Strategic market development bridging time-zones and providing localized account communication.',
    focus: 'Regional Infrastructure & Support'
  }
];

export const PurposeSection: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<string>('na');

  const activeHub = HUBS.find(h => h.id === selectedHub) || HUBS[1];

  return (
    <section id="purpose" className="py-24 relative overflow-hidden bg-white dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            <span>02. STRATEGIC MISSION</span>
            <span>·</span>
            <span>NATIONWIDE TO GLOBAL TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight uppercase">
            OUR PURPOSE
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            <span className="text-slate-900 dark:text-white font-semibold">
              To expand our marketplace from a nationwide presence to a global market
            </span>, establishing our presence in multiple international locations as we grow.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Archipelago Constellation Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 card-3d-depth shadow-xl"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {/* Light Mode: Bright high-tech daytime satellite archipelago map */}
              <img
                src={ASSETS.archipelagoConstellationDaylight}
                alt="Philippines archipelago tech constellation with bright turquoise waters and golden global network lines"
                className="dark:hidden w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out brightness-105 contrast-105 saturate-110"
                referrerPolicy="no-referrer"
              />
              {/* Dark Mode: Cyber Constellation at Night */}
              <img
                src={ASSETS.archipelagoConstellation}
                alt="Philippines archipelago tech constellation with luminous nodes connecting to global network lines"
                className="hidden dark:block w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-slate-950 dark:via-slate-950/30 dark:to-transparent" />
              
              {/* Philippines High-Tech Badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-xs font-mono text-amber-800 dark:text-amber-300 font-bold shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>ARCHIPELAGO CYBER NETWORK</span>
              </div>

              {/* Dynamic Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-950 dark:text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold">
                    <Navigation2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-spin" />
                    <span>GLOBAL EXPANSION CORRIDORS</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                    Active Growth
                  </span>
                </div>
                <div className="mt-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                  Connecting Philippines engineering depth with overseas client access nodes.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Strategic Expansion Hubs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Interactive Hub Selector */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 card-3d-depth">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <span>Target International Locations</span>
                </h3>
                <span className="text-xs font-mono text-slate-500">Select Hub</span>
              </div>

              {/* Hub Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {HUBS.map(hub => (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                      selectedHub === hub.id
                        ? 'btn-3d-primary text-white shadow'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {hub.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Active Hub Details Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                      {activeHub.region}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display mt-0.5">
                      {activeHub.name}
                    </h4>
                  </div>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-md font-semibold uppercase ${
                    activeHub.status === 'operational'
                      ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                      : activeHub.status === 'expanding'
                      ? 'bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800'
                      : 'bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                  }`}>
                    {activeHub.status}
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeHub.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Core Strategic Focus:</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-300">
                    {activeHub.focus}
                  </span>
                </div>
              </div>
            </div>

            {/* Strategic Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg icon-3d-cyan flex items-center justify-center text-white shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Marketplace Scaling
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Transitioning high-volume freelance contracts into long-term global retainer accounts.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg icon-3d-gold flex items-center justify-center text-slate-950 shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4 text-slate-950 font-bold" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Future Physical Entities
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Establishing direct regional corporate branches and providing local equipment stipends as trust solidifies.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
