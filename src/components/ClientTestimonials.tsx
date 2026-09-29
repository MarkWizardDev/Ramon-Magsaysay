import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Building,
  UserCheck,
  Code2
} from 'lucide-react';

interface Testimonial {
  id: string;
  category: 'client' | 'partner' | 'enterprise';
  quote: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  metric: string;
  metricLabel: string;
  verificationBadge: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    category: 'partner',
    quote: "Partnering with NEXATECH was completely seamless. I set up VMware as recommended, and they worked strictly within the sandbox environment. Every milestone payout was transferred exactly to the agreed percentage, with full bank compliance documentation provided for every transaction.",
    name: "Marcus Vance",
    role: "Regional Coordination Partner",
    organization: "Cross-Border Account Gateway",
    location: "Austin, Texas, USA",
    metric: "100%",
    metricLabel: "Payout Documentation Accuracy",
    verificationBadge: "Verified VMware Sandbox Partner"
  },
  {
    id: 't2',
    category: 'client',
    quote: "We needed a full-stack engineering team to build a multi-tenant logistics portal on Upwork. The NEXATECH Philippine team delivered clean TypeScript code, robust PostgreSQL schemas, and hit every sprint deadline ahead of schedule. Their technical rigor is world-class.",
    name: "David Chen",
    role: "VP of Product Engineering",
    organization: "OmniRoute Logistics",
    location: "Toronto, Canada",
    metric: "4 Months",
    metricLabel: "End-to-End Enterprise Delivery",
    verificationBadge: "Verified Enterprise Client"
  },
  {
    id: 't3',
    category: 'partner',
    quote: "As someone who isn't deeply technical, their 1-on-1 walkthrough made everything straightforward. The role division was clear: they handled 100% of the software engineering, while I facilitated regional account verification. We've sustained a high-trust relationship for over 18 months.",
    name: "Julian Alvarez",
    role: "Independent Account Partner",
    organization: "Global Verification Node",
    location: "Manchester, United Kingdom",
    metric: "18+ Mo",
    metricLabel: "Continuous Mutual Collaboration",
    verificationBadge: "Verified Long-Term Partner"
  },
  {
    id: 't4',
    category: 'enterprise',
    quote: "Operating across continents requires uncompromising privacy and mutual respect. NEXATECH's 70-developer remote team integrated into our CI/CD pipelines effortlessly. They proved that remote Southeast Asian engineering talent can rival any Tier-1 agency in velocity and reliability.",
    name: "Stefan Lindqvist",
    role: "Chief Technology Officer",
    organization: "Krona Nordic FinTech",
    location: "Stockholm, Sweden",
    metric: "3.2x",
    metricLabel: "Deployment Cycle Velocity",
    verificationBadge: "Verified SaaS Tech Contract"
  }
];

export const ClientTestimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'partner' | 'client' | 'enterprise'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTestimonials = TESTIMONIALS.filter(
    (t) => activeCategory === 'all' || t.category === activeCategory
  );

  const activeItem = filteredTestimonials[currentIndex % filteredTestimonials.length] || TESTIMONIALS[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800/80 transition-colors">
      {/* Background Decorative Lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3">
              <span>04. REPUTATION & PROOF</span>
              <span>·</span>
              <span>TESTED RELATIONSHIPS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight uppercase">
              PARTNER & CLIENT ENDORSEMENTS
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Concrete accounts from independent partners and global clients who have collaborated with our 70-member Philippine development core.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => { setActiveCategory('all'); setCurrentIndex(0); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'btn-3d-primary text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Feedback
            </button>
            <button
              onClick={() => { setActiveCategory('partner'); setCurrentIndex(0); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === 'partner'
                  ? 'btn-3d-primary text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Regional Partners
            </button>
            <button
              onClick={() => { setActiveCategory('client'); setCurrentIndex(0); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === 'client'
                  ? 'btn-3d-primary text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Platform Clients
            </button>
            <button
              onClick={() => { setActiveCategory('enterprise'); setCurrentIndex(0); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === 'enterprise'
                  ? 'btn-3d-primary text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Enterprise SaaS
            </button>
          </div>
        </div>

        {/* Featured Testimonial Hero Card */}
        <div className="relative rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 card-3d-depth p-8 sm:p-12 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Quote Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl icon-3d-cyan flex items-center justify-center text-white shadow-md">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{activeItem.verificationBadge}</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <blockquote className="text-xl sm:text-2xl text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                    &ldquo;{activeItem.quote}&rdquo;
                  </blockquote>

                  {/* Author Credentials */}
                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-200 dark:border-slate-800 gap-4">
                    <div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white font-display">
                        {activeItem.name}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        {activeItem.role} · <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{activeItem.organization}</span>
                      </div>
                      <div className="text-xs font-mono text-slate-400 dark:text-slate-500 mt-0.5">
                        {activeItem.location}
                      </div>
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <button
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer shadow-sm active:scale-95"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        aria-label="Next testimonial"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer shadow-sm active:scale-95"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Right Column: Concrete Outcome Metric Box (4 cols) */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 card-3d-depth text-center">
              <div className="w-10 h-10 rounded-xl icon-3d-gold mx-auto flex items-center justify-center text-slate-950 font-bold mb-3 shadow">
                <Sparkles className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest block font-semibold">
                QUANTIFIABLE OUTCOME
              </span>
              <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tabular-nums mt-2">
                {activeItem.metric}
              </div>
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-2">
                {activeItem.metricLabel}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 leading-normal">
                Audited against verified platform records and written contractual milestones.
              </div>
            </div>

          </div>

        </div>

        {/* 3-Column Mini Proof Tiles */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl icon-3d-cyan flex items-center justify-center text-white shrink-0 mt-0.5">
              <UserCheck className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Independent Partner Privacy
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Zero access to host computers outside isolated virtual machines; full partner oversight maintained.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl icon-3d-gold flex items-center justify-center text-slate-950 shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-slate-950 font-bold" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Guaranteed Revenue Split
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Agreed percentages are deducted immediately before funds transfer, ensuring partners are always compensated first.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl icon-3d-badge bg-cyan-100 dark:bg-cyan-950/60 flex items-center justify-center text-cyan-600 dark:text-cyan-300 shrink-0 mt-0.5">
              <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-300" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                6+ Years Proven Track Record
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Over 140+ completed software projects across international freelance platforms and enterprise clients.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
