import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/resumeData';
import { soundManager } from '../utils/audio';
import {
  Sparkles,
  Bot,
  FileText,
  Send,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowDown,
  CheckCircle2,
  Code2,
  Database,
  Cpu,
  Layers,
  Terminal
} from 'lucide-react';

interface HeroSectionProps {
  onOpenAI: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAI,
  onOpenResume,
  onOpenContact
}) => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const marqueeSkills = [
    'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Next.js 14',
    'Google Gemini AI API', 'TypeScript', 'PostgreSQL', 'Prisma ORM',
    'Tailwind CSS', 'Framer Motion', 'JWT Auth & RBAC', 'Cloudinary'
  ];

  return (
    <section id="top" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & CTAs Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Editorial Status Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#888]">
                Full Stack MERN Developer
              </span>
              <div className="w-12 h-[1px] bg-[#333]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ahmedabad, IN</span>
              </span>
            </div>

            {/* Main Editorial Display Heading */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-center lg:justify-start gap-4 flex-wrap">
                <span className="text-4xl sm:text-6xl lg:text-7xl font-editorial-serif italic text-white tracking-tight">
                  Full Stack
                </span>
                <span className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-[#E5E5E1]">
                  ENGINEER
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-right mr-0 lg:mr-12 editorial-stroke-text">
                SMIT PATEL
              </h1>

              {/* Animated Tagline Banner */}
              <div className="h-10 flex items-center justify-center lg:justify-start pt-2">
                <motion.div
                  key={taglineIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-orange-400 font-semibold flex items-center gap-2"
                >
                  <Terminal className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{PERSONAL_INFO.taglines[taglineIndex]}</span>
                </motion.div>
              </div>
            </div>

            {/* Editorial Description */}
            <p className="text-[#AAA] text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Crafting digital products through a lens of brutalist elegance and technical precision. B.Tech IT graduate specializing in MERN stack architectures, PostgreSQL/Prisma ORM, and high-performance Gemini AI integrations.
            </p>

            {/* Editorial Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenContact();
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-6 py-3.5 rounded-full bg-[#E5E5E1] text-[#0A0A0A] font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:scale-102 transition-all cursor-pointer flex items-center gap-2 shadow-lg"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Contact Direct</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenResume();
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-6 py-3.5 rounded-full bg-[#0A0A0A] border border-[#333] hover:border-white text-[#E5E5E1] font-mono text-xs uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-orange-400" />
                <span>CV / Resume</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenAI();
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-5 py-3.5 rounded-full bg-[#141414] border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center gap-2 group"
              >
                <Bot className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Chat AI</span>
              </button>
            </div>

            {/* Social Links & Info Row */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-[11px] font-mono text-[#888] uppercase tracking-[0.2em]">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span>/</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span>/</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>Email Direct</span>
              </a>
            </div>
          </motion.div>

          {/* Right Editorial Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Editorial Frame */}
              <div className="p-6 bg-[#0E0E0E] border border-[#222] rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
                
                {/* Numbered Section Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#666]">
                      01 / PROFILE INDEX
                    </span>
                    <span className="font-bold text-[#E5E5E1] text-base font-mono">
                      SMIT PATEL
                    </span>
                  </div>
                  <span className="text-xs font-mono text-orange-400 border border-orange-500/30 px-2.5 py-1 rounded-full bg-orange-500/10">
                    MERN & AI
                  </span>
                </div>

                {/* Highlights Grid inside avatar card */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 bg-[#070707] border border-[#1A1A1A] rounded-2xl space-y-1">
                    <div className="text-[#666] text-[9px] uppercase tracking-[0.2em]">DEGREE</div>
                    <div className="font-bold text-[#E5E5E1]">B.Tech IT</div>
                    <div className="text-emerald-400 text-[10px]">CGPA: 8.14</div>
                  </div>

                  <div className="p-3 bg-[#070707] border border-[#1A1A1A] rounded-2xl space-y-1">
                    <div className="text-[#666] text-[9px] uppercase tracking-[0.2em]">CORE STACK</div>
                    <div className="font-bold text-[#E5E5E1]">MERN + Next</div>
                    <div className="text-orange-400 text-[10px]">PostgreSQL</div>
                  </div>

                  <div className="p-3 bg-[#070707] border border-[#1A1A1A] rounded-2xl space-y-1">
                    <div className="text-[#666] text-[9px] uppercase tracking-[0.2em]">FEATURED AI</div>
                    <div className="font-bold text-[#E5E5E1]">Peblo Workspace</div>
                    <div className="text-cyan-400 text-[10px]">Gemini 3.6 API</div>
                  </div>

                  <div className="p-3 bg-[#070707] border border-[#1A1A1A] rounded-2xl space-y-1">
                    <div className="text-[#666] text-[9px] uppercase tracking-[0.2em]">ISSUERS</div>
                    <div className="font-bold text-[#E5E5E1]">IBM SkillsBuild</div>
                    <div className="text-amber-400 text-[10px]">4 Verified Certs</div>
                  </div>
                </div>

                {/* Code snippet card preview */}
                <div className="p-4 bg-[#050505] border border-[#1A1A1A] rounded-2xl font-mono text-[11px] space-y-1.5 text-[#AAA]">
                  <div className="flex items-center justify-between text-[10px] text-[#666] mb-1 uppercase tracking-widest">
                    <span>ethos_manifest.ts</span>
                    <span className="text-emerald-400">● Live</span>
                  </div>
                  <div><span className="text-purple-400">export const</span> engineer = &#123;</div>
                  <div className="pl-4"><span className="text-slate-300">philosophy</span>: <span className="text-amber-300">"Technical Precision"</span>,</div>
                  <div className="pl-4"><span className="text-slate-300">architectures</span>: [<span className="text-cyan-300">"MERN"</span>, <span className="text-cyan-300">"Gemini AI"</span>],</div>
                  <div className="pl-4"><span className="text-slate-300">status</span>: <span className="text-emerald-300">"Ready for Hire"</span></div>
                  <div>&#125;;</div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-8 border-t border-[#1A1A1A]"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#0E0E0E] border border-[#1A1A1A] rounded-2xl text-center hover:border-[#333] transition-all"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#666] mb-1">
                0{idx + 1} / METRIC
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#E5E5E1] font-mono">{stat.value}</div>
              <div className="text-xs font-bold text-[#AAA] mt-1">{stat.label}</div>
              <div className="text-[10px] text-[#666] font-mono mt-0.5">{stat.description}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Banner */}
      <div className="w-full mt-12 py-3 bg-[#080808] border-y border-[#1A1A1A] overflow-hidden">
        <div className="flex w-max animate-marquee space-x-8 text-xs font-mono text-[#888] uppercase tracking-[0.2em]">
          {[...marqueeSkills, ...marqueeSkills].map((tech, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

};
