import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  Sparkles, 
  MessageSquare
} from 'lucide-react';
import { FAQ_DATA } from '../constants/faqData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('role');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Inquiries' },
    { id: 'role', label: 'Your Role' },
    { id: 'financial', label: 'Banking & Payouts' },
    { id: 'security', label: 'Trust & Privacy' },
    { id: 'operations', label: 'Team & Projects' },
  ];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3">
            <span>04. TRANSPARENCY & CLARITY</span>
            <span>·</span>
            <span>ANSWERS FOR PARTNERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Everything you need to know about our partnership structure, virtual machine isolation, compensation percentages, and legal compliance.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions (e.g. VMware, bank account, pay, computer)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm shadow-sm transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'btn-3d-primary text-white shadow-md'
                    : 'bg-white dark:bg-slate-950/70 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another query or reach out to our team directly.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white dark:bg-slate-900/90 border-cyan-500 shadow-md'
                      : 'bg-white/80 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen 
                          ? 'icon-3d-cyan text-white' 
                          : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                      }`}>
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen 
                        ? 'rotate-180 bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                          <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                            {faq.answer}
                          </p>

                          {faq.highlight && (
                            <div className="mt-4 p-3.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/50 flex items-start gap-2.5">
                              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                              <div className="text-xs text-cyan-800 dark:text-cyan-300 font-medium">
                                <strong className="font-semibold text-slate-900 dark:text-white">Key Guarantee:</strong> {faq.highlight}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 p-8 rounded-3xl bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-900 dark:to-cyan-950/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 card-3d-depth shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl icon-3d-gold flex items-center justify-center text-slate-950 shrink-0">
              <MessageSquare className="w-6 h-6 text-slate-950 font-bold" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Have specific questions about VMware or bank agreements?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Our operations director James can review terms, answer privacy questions, and share agreement templates.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-xl font-bold text-sm text-white btn-3d-primary cursor-pointer whitespace-nowrap shrink-0"
          >
            Contact Team Direct
          </button>
        </div>

      </div>
    </section>
  );
};
