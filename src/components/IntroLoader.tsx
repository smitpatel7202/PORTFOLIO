import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Sparkles, ArrowRight, Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface IntroLoaderProps {
  onEnter: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          soundManager.playChime();
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const handleEnterClick = () => {
    soundManager.playBoot();
    onEnter();
  };

  const handleToggleMute = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 text-slate-100 overflow-hidden font-sans"
    >
      {/* Subtle glowing radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-slate-950 to-slate-950 pointer-events-none" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      {/* Audio Mute/Unmute Float */}
      <button
        onClick={handleToggleMute}
        className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-orange-400 transition-all shadow-lg backdrop-blur-md flex items-center gap-2 text-xs"
        title="Toggle Audio Effects"
      >
        {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-orange-400 animate-pulse" />}
        <span>{isMuted ? 'Sound Off' : 'Sound On'}</span>
      </button>

      <div className="relative w-full max-w-lg p-6 sm:p-8 mx-4 bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-2xl backdrop-blur-xl text-center">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="font-mono text-slate-400 ml-2">smit_patel_portfolio_os.sh</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>v2.0 ACTIVE</span>
          </div>
        </div>

        {/* Console Graphic / Mascot */}
        <div className="my-6 relative flex flex-col items-center justify-center">
          <div className="relative p-4 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/60 shadow-inner">
            <Terminal className="w-12 h-12 text-orange-400 mb-2 animate-bounce" />
            <div className="font-mono text-lg font-bold tracking-wider text-slate-100 uppercase">
              SMIT PATEL
            </div>
            <div className="text-xs text-orange-400 font-mono mt-1">
              FULL STACK MERN & AI ENGINEER
            </div>
          </div>
        </div>

        {/* Progress Bar & Status */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-xs font-mono mb-2 text-slate-400">
            <span>{isReady ? 'SYSTEM INITIALIZED' : 'LOADING CORE MODULES...'}</span>
            <span className="text-orange-400 font-bold">{Math.min(progress, 100)}%</span>
          </div>

          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Enter Button */}
        <div className="min-h-[56px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isReady ? (
              <motion.button
                key="enter-btn"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleEnterClick}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-slate-950 font-bold font-mono tracking-wider shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 flex items-center justify-center gap-3 transition-all cursor-pointer group"
              >
                <Sparkles className="w-5 h-5 text-slate-950 animate-spin" />
                <span>ENTER PORTFOLIO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            ) : (
              <motion.div
                key="loading-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs font-mono text-slate-500 tracking-widest uppercase animate-pulse flex items-center justify-center gap-2"
              >
                <span>BOOTING SYSTEM DEPENDENCIES...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Footer hint */}
        <div className="mt-6 text-[11px] text-slate-500 font-mono">
          <span>Silver Oak University B.Tech IT • MERN & Gemini AI Stack</span>
        </div>
      </div>
    </motion.div>
  );
};
