import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PurposeSection } from './components/PurposeSection';
import { RoleDiagramSection } from './components/RoleDiagramSection';
import { ClientTestimonials } from './components/ClientTestimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
        <ScrollProgressBar />
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <PurposeSection />
          <RoleDiagramSection />
          <ClientTestimonials />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
