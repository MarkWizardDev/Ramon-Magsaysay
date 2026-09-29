import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { BrilliantLogo } from './BrilliantLogo';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-slate-950/85 border-b border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brilliant Logo wordmark */}
        <a 
          href="#" 
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl"
        >
          <BrilliantLogo size="md" />
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700 dark:text-slate-300">
          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
          >
            About Team
          </button>
          <button 
            onClick={() => scrollToSection('purpose')} 
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Our Purpose
          </button>
          <button 
            onClick={() => scrollToSection('roles')} 
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Collaboration Model
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </nav>

        {/* Zone 3: Actions + Working Theme Toggle Switch */}
        <div className="flex items-center gap-3">
          
          {/* Functional 3D Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            type="button"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            className="relative px-3 py-1.5 rounded-xl flex items-center gap-2 border border-slate-300 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 transition-transform" />
              )}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>

          {/* Primary 3D CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white tracking-wide btn-3d-primary cursor-pointer whitespace-nowrap"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden h-10 w-10 rounded-xl flex items-center justify-center border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 px-6 py-6 space-y-4 backdrop-blur-xl shadow-xl transition-colors">
          <div className="flex flex-col space-y-3 text-base font-semibold text-slate-800 dark:text-slate-200">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left py-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              About Team
            </button>
            <button 
              onClick={() => scrollToSection('purpose')} 
              className="text-left py-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Our Purpose
            </button>
            <button 
              onClick={() => scrollToSection('roles')} 
              className="text-left py-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Collaboration Model
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-left py-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-left py-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full justify-center inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white btn-3d-primary cursor-pointer"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 py-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
              <span>Independent Verification & Transparent Terms</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
