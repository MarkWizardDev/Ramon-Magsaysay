import React from 'react';
import { Mail, Globe2, ShieldCheck } from 'lucide-react';
import { BrilliantLogo } from './BrilliantLogo';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <BrilliantLogo size="lg" showTagline={true} />

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed mt-3">
              Technology for a Smart Tomorrow. An elite 70-member remote software development team with over 6 years of expertise, expanding across global markets.
            </p>

            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 flex items-center gap-2 pt-1">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Headquartered in the Philippines · Global Talent Network</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-amber-500 dark:text-amber-300 uppercase tracking-widest font-semibold">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 font-medium">
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                  About NEXATECH Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('purpose')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                  Our Global Purpose
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('roles')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                  Our Team – You – Client Model
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                  Verification & Bank FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                  Send Direct Message
                </button>
              </li>
            </ul>
          </div>

          {/* Official Inquiries & Compliance (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono text-amber-500 dark:text-amber-300 uppercase tracking-widest font-semibold">
              DIRECT INQUIRIES & COMPLIANCE
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              For partnership agreements, VMware sandbox procedures, and transparent contract records:
            </p>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-xs text-slate-500 dark:text-slate-400">Direct Recipient Inbox:</div>
              <a
                href="mailto:james@zeusguy.xyz"
                className="text-sm font-mono font-bold text-cyan-600 dark:text-cyan-300 hover:underline flex items-center gap-2 mt-0.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>james@zeusguy.xyz</span>
              </a>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Full compliance with international bank policies and local regulations.</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} NEXATECH. All rights reserved. Technology for a Smart Tomorrow.
          </div>
          <div className="flex items-center gap-4 font-medium">
            <span>Philippines Engineering Team</span>
            <span>·</span>
            <span>Worldwide Market Expansion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
