import React from 'react';
import { soundManager } from '../utils/audio';
import { ArrowUp, Code2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1A1A1A] py-12 relative z-10 text-[#888] font-mono text-[11px] uppercase tracking-[0.15em]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center text-orange-400">
            <Code2 className="w-3.5 h-3.5" />
          </div>
          <span className="text-[#E5E5E1] font-bold font-sans tracking-normal">Smit Patel Portfolio</span>
          <span className="text-[#333]">|</span>
          <span className="text-[#666]">Editorial Spec</span>
        </div>

        {/* Center Copyright */}
        <div className="flex items-center gap-1.5 text-center">
          <span>Engineered by</span>
          <span className="text-white font-bold">Smit Patel</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => soundManager.playHover()}
          className="px-4 py-2 rounded-full bg-[#141414] border border-[#262626] text-[#E5E5E1] hover:bg-[#222] transition-all cursor-pointer flex items-center gap-2 shadow-sm text-[10px]"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
        </button>

      </div>
    </footer>

  );
};
