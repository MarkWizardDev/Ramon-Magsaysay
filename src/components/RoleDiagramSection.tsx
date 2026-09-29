import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UserCheck, 
  Briefcase, 
  ArrowRight, 
  Code, 
  ShieldCheck, 
  Play, 
  RotateCcw,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ASSETS } from '../constants/assets';

type RoleType = 'team' | 'you' | 'client';

export const RoleDiagramSection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<RoleType>('you');
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: 'Step 1: Project Initiation & Regional Verification',
      detail: 'Client posts a high-value software project. You provide remote verification access (via VMware VM if desired) so client onboarding succeeds.',
      flow: 'Client ➔ You ➔ NEXATECH'
    },
    {
      title: 'Step 2: Technical Execution & Development',
      detail: 'Our 70-member engineering team writes 100% of the code, builds features, resolves bugs, and deploys builds. You do zero coding.',
      flow: 'NEXATECH ➔ Client'
    },
    {
      title: 'Step 3: Milestone Approval & Escrow Release',
      detail: 'Client approves the completed milestone. Agreed funds arrive in your account in compliance with bank policies and documented statements.',
      flow: 'Client ➔ You'
    },
    {
      title: 'Step 4: Payout & Commission Distribution',
      detail: 'You retain your agreed fixed percentage commission, and send the development share to NEXATECH via documented bank transfer.',
      flow: 'You ➔ NEXATECH'
    }
  ];

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const roleData = {
    team: {
      title: 'Our Team (NEXATECH)',
      badge: 'TECHNICAL EXECUTION',
      description: 'We handle 100% of the technical workload. Our seasoned developers, QA testers, and devops engineers manage codebases and delivery.',
      duties: [
        'Full-stack architecture, software & web application development',
        'Managing Freelancer & Upwork milestone deliverables & bug fixes',
        '24/7 technical customer support & sprint demos',
        'Providing step-by-step guidance & VMware VM setup instructions'
      ],
      nonDuties: [
        'Does not ask for personal bank passwords or credentials',
        'Does not touch personal files outside the designated virtual sandbox'
      ],
      color: 'cyan',
      tagline: 'Technical heavy-lifting & software excellence'
    },
    you: {
      title: 'You (Regional Partner)',
      badge: 'NON-TECHNICAL COLLABORATION',
      description: 'You assist with non-technical elements in your geographical region. No coding or IT background is needed at all.',
      duties: [
        'Provide remote access for verification (VMware virtual machine recommended)',
        'Receive milestone disbursements into your agreed domestic bank account',
        'Retain your pre-agreed fixed percentage share upon every payout',
        'Send the development balance to NEXATECH with documented bank records'
      ],
      nonDuties: [
        'Zero programming, software design, or IT skills required',
        'No upfront financial investment or equipment purchase required'
      ],
      color: 'gold',
      tagline: 'Local presence, verified accounts & financial coordination'
    },
    client: {
      title: 'The Client (Project Requester)',
      badge: 'PROJECT OWNER',
      description: 'Enterprise companies and product startups seeking world-class software engineering in international markets.',
      duties: [
        'Submits software requirements and product backlog',
        'Funds project milestones via recognized platform escrow',
        'Reviews sprint deliverables and approves completed features',
        'Maintains direct contact and feedback through agreed channels'
      ],
      nonDuties: [
        'Does not interact with internal engineering personnel directly',
        'Does not dictate internal revenue share ratios'
      ],
      color: 'emerald',
      tagline: 'Demand, requirements & project funding'
    }
  };

  return (
    <section id="roles" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3">
            <span>03. COLLABORATION ARCHITECTURE</span>
            <span>·</span>
            <span>ROLE DELINEATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight uppercase">
            THE ROLE OF BOTH SIDES
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            <span className="text-slate-900 dark:text-white font-semibold">
              We will handle technical aspects, while you may assist with non-technical elements.
            </span> Our clear tripartite workflow guarantees transparency, data privacy, and prompt financial compensation.
          </p>
        </div>

        {/* 3-Way Interactive Triangular Diagram */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 card-3d-depth mb-12 shadow-xl">
          
          <div className="flex flex-col md:flex-row items-center justify-between pb-8 mb-8 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div>
              <div className="text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider font-semibold">
                INTERACTIVE ECOSYSTEM VISUALIZER
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                Our Team – You – Client Framework
              </h3>
            </div>

            {/* Interactive Step Simulator Control */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleNextStep}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white btn-3d-primary flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Next Lifecycle Phase ({activeStep + 1}/4)</span>
              </button>
              <button
                onClick={() => setActiveStep(0)}
                aria-label="Reset simulation"
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Current Step Banner */}
          <div className="mb-10 p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-700 dark:text-cyan-300 font-semibold uppercase">
                {steps[activeStep].title}
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1 font-medium">
                {steps[activeStep].detail}
              </p>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono text-amber-600 dark:text-amber-300 shrink-0 font-bold">
              Flow: {steps[activeStep].flow}
            </div>
          </div>

          {/* Diagram Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Node 1: Our Team */}
            <div 
              onClick={() => setSelectedRole('team')}
              className={`p-6 rounded-2xl transition-all cursor-pointer border ${
                selectedRole === 'team'
                  ? 'bg-slate-50 dark:bg-slate-900/90 border-cyan-500 ring-2 ring-cyan-500/30 shadow-lg'
                  : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl icon-3d-cyan flex items-center justify-center text-white">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 font-semibold">
                  70 ENGINEERS
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Our Team (NEXATECH)
              </h4>
              <p className="text-xs text-cyan-600 dark:text-cyan-300 font-semibold mt-1">
                Technical Execution & Delivery
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                Builds all software, commits code, and delivers platform deliverables.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                <span>View Full Scope</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Node 2: YOU (Middle Hub) */}
            <div 
              onClick={() => setSelectedRole('you')}
              className={`p-6 rounded-2xl transition-all cursor-pointer border ${
                selectedRole === 'you'
                  ? 'bg-slate-50 dark:bg-slate-900/90 border-amber-500 ring-2 ring-amber-500/30 shadow-lg'
                  : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl icon-3d-gold flex items-center justify-center text-slate-950 font-bold">
                  <UserCheck className="w-6 h-6 text-slate-950" />
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 font-semibold">
                  YOU (PARTNER)
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                You (Regional Bridge)
              </h4>
              <p className="text-xs text-amber-600 dark:text-amber-300 font-semibold mt-1">
                Non-Technical Support & Verification
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                Provides computer verification (VMware VM) and manages domestic payouts.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-amber-600 dark:text-amber-400 font-semibold">
                <span>View Full Scope</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Node 3: Client */}
            <div 
              onClick={() => setSelectedRole('client')}
              className={`p-6 rounded-2xl transition-all cursor-pointer border ${
                selectedRole === 'client'
                  ? 'bg-slate-50 dark:bg-slate-900/90 border-emerald-500 ring-2 ring-emerald-500/30 shadow-lg'
                  : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl icon-3d-badge bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Briefcase className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-semibold">
                  ENTERPRISE BUYER
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Client (Project Owner)
              </h4>
              <p className="text-xs text-emerald-600 dark:text-emerald-300 font-semibold mt-1">
                Requirements & Project Funding
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                Supplies project scope, funds milestones, and accepts completed deliverables.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <span>View Full Scope</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>

          {/* Visual 3D Asset Illustration */}
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden shrink-0 border border-slate-300 dark:border-slate-700">
              <img
                src={ASSETS.collaborationRoles}
                alt="Tripartite collaboration model graphic"
                className="w-full h-full object-cover brightness-105 contrast-105 dark:brightness-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Seamless Isolation & Direct Financial Accounting</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                By maintaining a clear division between technical engineering (handled exclusively in the Philippines) and regional access/banking, every participant performs strictly within their comfort zone with zero skill barriers.
              </p>
            </div>
          </div>

        </div>

        {/* Selected Role Detailed Breakdown Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRole}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 card-3d-depth shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-1">
                  DETAILED SPECIFICATION
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  {roleData[selectedRole].title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {roleData[selectedRole].description}
                </p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono text-cyan-700 dark:text-cyan-300 font-semibold self-start sm:self-auto border border-slate-200 dark:border-slate-700">
                {roleData[selectedRole].badge}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Specific Responsibilities */}
              <div>
                <h4 className="text-sm font-mono text-amber-600 dark:text-amber-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Key Responsibilities & Deliverables</span>
                </h4>
                <ul className="space-y-3">
                  {roleData[selectedRole].duties.map((duty, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What is NOT expected */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <h4 className="text-sm font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>What You Do NOT Have to Worry About</span>
                </h4>
                <ul className="space-y-3">
                  {roleData[selectedRole].nonDuties.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
