import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, FileText, Volume2, VolumeX, Menu, X, Code2, Sparkles, Send } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  onOpenAI: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAI,
  onOpenResume,
  onOpenContact,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills & Stack' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    soundManager.playClick();
    setIsMobileMenuOpen(false);
    if (id === 'education') {
      window.dispatchEvent(new Event('nav-education'));
      const element = document.getElementById('about') || document.getElementById('education');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSoundToggle = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1A1A1A] py-3.5'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Editorial Brand Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onMouseEnter={() => soundManager.playHover()}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-[#333] flex items-center justify-center group-hover:bg-[#E5E5E1] group-hover:text-[#0A0A0A] transition-all">
            <Code2 className="w-4 h-4 text-orange-400 group-hover:text-[#0A0A0A] transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#E5E5E1] flex items-center gap-1.5">
              SMIT PATEL <span className="text-orange-400 text-[10px] font-mono">&copy;</span>
            </span>
            <span className="text-[9px] text-[#666] font-mono uppercase tracking-[0.3em]">
              FULL STACK & AI
            </span>
          </div>
        </a>

        {/* Editorial Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#121212] p-1.5 rounded-full border border-[#222]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                onMouseEnter={() => soundManager.playHover()}
                className={`relative px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] rounded-full transition-all cursor-pointer ${isActive
                    ? 'text-white font-bold'
                    : 'text-[#888] hover:text-white'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#262626] border border-[#333] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Editorial Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Audio Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={() => soundManager.playHover()}
            className="p-2.5 rounded-full bg-[#121212] border border-[#222] text-[#888] hover:text-white transition-all cursor-pointer"
            title={isMuted ? 'Enable Sound' : 'Mute Sound'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-[#555]" /> : <Volume2 className="w-4 h-4 text-orange-400" />}
          </button>

          {/* AI Assistant Button */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenAI();
            }}
            onMouseEnter={() => soundManager.playHover()}
            className="px-3.5 py-2 rounded-full bg-[#121212] border border-[#222] hover:border-cyan-500/50 text-[#AAA] hover:text-cyan-300 text-[11px] font-mono uppercase tracking-[0.15em] font-medium flex items-center gap-2 transition-all cursor-pointer group"
          >
            <Bot className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>Ask AI</span>
          </button>

          {/* Resume Button */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenResume();
            }}
            onMouseEnter={() => soundManager.playHover()}
            className="px-4 py-2 rounded-full bg-[#E5E5E1] text-[#0A0A0A] font-mono text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all cursor-pointer flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleSoundToggle}
            className="p-2 rounded-lg bg-[#121212] border border-[#222] text-[#888]"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-orange-400" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#121212] border border-[#222] text-[#E5E5E1]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A]/98 border-b border-[#1A1A1A] backdrop-blur-xl px-4 pt-3 pb-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-xl font-mono text-xs uppercase tracking-[0.2em] transition-all ${activeSection === link.id
                      ? 'bg-[#1A1A1A] text-white font-bold border border-[#333]'
                      : 'text-[#888] hover:bg-[#121212]'
                    }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#1A1A1A]">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAI();
                  }}
                  className="py-3 px-3 rounded-xl bg-[#121212] border border-[#222] text-orange-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Bot className="w-4 h-4" />
                  <span>Chat AI</span>
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="py-3 px-3 rounded-xl bg-[#E5E5E1] text-[#0A0A0A] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>CV</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );

};
