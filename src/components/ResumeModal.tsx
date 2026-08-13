import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, PROJECTS, EDUCATION, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/resumeData';
import { soundManager } from '../utils/audio';
import { X, Printer, Download, Sparkles, CheckCircle2, FileText, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    soundManager.playSuccess();
    
    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl bg-[#0E0E0E] border border-[#222] rounded-3xl p-6 sm:p-10 shadow-2xl text-[#E5E5E1] my-8 space-y-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A] print:hidden">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#141414] border border-[#262626] text-orange-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#E5E5E1] text-base">Smit Patel — Curriculum Vitae</h3>
                <p className="text-xs font-mono text-[#888] uppercase tracking-[0.15em]">Full Stack MERN & AI Engineering</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-full bg-[#E5E5E1] text-[#0A0A0A] font-mono uppercase tracking-[0.15em] font-bold text-xs flex items-center gap-2 shadow-md hover:bg-white transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playClick();
                  onClose();
                }}
                className="p-2 rounded-full bg-[#141414] text-[#888] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Styled Printable Resume Document */}
          <div id="printable-resume-container" className="bg-[#050505] p-6 sm:p-10 rounded-2xl border border-[#1A1A1A] space-y-6 text-[#E5E5E1] font-sans text-xs sm:text-sm print:bg-white print:text-black print:p-0 print:border-none">
            
            {/* Contact Header */}
            <div className="text-center space-y-1.5 pb-6 border-b border-[#1A1A1A] print:border-gray-300">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase print:text-black">
                SMIT PATEL
              </h1>
              <div className="text-xs font-bold text-orange-400 print:text-black font-mono uppercase tracking-[0.2em]">
                Full Stack Web Developer (MERN Stack)
              </div>
              <div className="text-xs font-mono text-[#888] print:text-gray-700 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-1">
                <span>{PERSONAL_INFO.location}</span>
                <span>|</span>
                <span>{PERSONAL_INFO.email}</span>
                <span>|</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span>|</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-orange-400 print:text-black">
                  linkedin.com/in/patelsmit09
                </a>
                <span>|</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline text-orange-400 print:text-black">
                  github.com/smitpatel7202
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-[0.25em] border-b border-[#1A1A1A] pb-1 print:text-black print:border-gray-300">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-[#AAA] print:text-gray-800 leading-relaxed text-xs sm:text-sm font-normal">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h2 className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-[0.25em] border-b border-[#1A1A1A] pb-1 print:text-black print:border-gray-300">
                PROJECTS
              </h2>

              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <h3 className="font-bold text-[#E5E5E1] print:text-black text-sm">
                      {proj.title}
                    </h3>
                    <span className="text-[10px] font-mono text-[#888] print:text-gray-600">
                      {proj.techStack.join(' · ')}
                    </span>
                  </div>

                  <ul className="space-y-1 text-[#AAA] print:text-gray-800 text-xs list-disc pl-4 font-normal">
                    {proj.fullDescription.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-[0.25em] border-b border-[#1A1A1A] pb-1 print:text-black print:border-gray-300">
                EDUCATION
              </h2>

              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline flex-wrap text-xs">
                  <div>
                    <span className="font-bold text-[#E5E5E1] print:text-black">{edu.degree}</span>
                    <span className="text-[#888] print:text-gray-600"> — {edu.institution}, {edu.location}</span>
                  </div>
                  <div className="font-mono text-[#AAA] print:text-gray-800">
                    {edu.duration} | <span className="font-bold text-orange-400 print:text-black">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <h2 className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-[0.25em] border-b border-[#1A1A1A] pb-1 print:text-black print:border-gray-300">
                SKILLS
              </h2>

              <div className="space-y-1 text-xs text-[#AAA] print:text-gray-800">
                <div><strong className="text-[#E5E5E1] print:text-black">Frontend Development:</strong> React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design, SPA</div>
                <div><strong className="text-[#E5E5E1] print:text-black">Backend Development:</strong> Node.js, Express.js, RESTful API Design, Server-Side Development</div>
                <div><strong className="text-[#E5E5E1] print:text-black">Full Stack / MERN:</strong> MERN Stack, JWT Authentication, RBAC, Session Management</div>
                <div><strong className="text-[#E5E5E1] print:text-black">Database:</strong> MongoDB, PostgreSQL, Prisma ORM, Database Design</div>
                <div><strong className="text-[#E5E5E1] print:text-black">AI & APIs:</strong> Gemini AI API, OpenWeather API, Google Maps API</div>
                <div><strong className="text-[#E5E5E1] print:text-black">Tools:</strong> Git, GitHub, Netlify, Render, Vercel, Figma, VS Code</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <h2 className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-[0.25em] border-b border-[#1A1A1A] pb-1 print:text-black print:border-gray-300">
                CERTIFICATIONS
              </h2>

              <ul className="space-y-1 text-xs text-[#AAA] print:text-gray-800 list-disc pl-4">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.id}>
                    <strong className="text-[#E5E5E1] print:text-black">{cert.title}</strong> — {cert.issuer}, {cert.year}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

};
