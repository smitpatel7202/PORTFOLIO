import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { IntroLoader } from './components/IntroLoader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AIChatModal } from './components/AIChatModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E1] font-sans selection:bg-[#E5E5E1] selection:text-[#0A0A0A] relative overflow-x-hidden">
      {/* Background Editorial Radial Dot Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-15 z-0 editorial-dot-grid" />

      {/* Main Portfolio Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Interactive Particles & Light Glow Canvas */}
        <BackgroundCanvas />

        {/* Fixed Floating Header */}
        <Navbar
          onOpenAI={() => setIsAIOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          activeSection={activeSection}
        />

        {/* Main Content Sections */}
        <main>
          <HeroSection
            onOpenAI={() => setIsAIOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          <AboutSection />

          <ProjectsSection />

          <SkillsSection />

          <CertificationsSection />

          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* AI Resume Assistant Modal */}
        <AIChatModal
          isOpen={isAIOpen}
          onClose={() => setIsAIOpen(false)}
        />

        {/* Resume Viewer / Printer Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </motion.div>

    </div>
  );
}
