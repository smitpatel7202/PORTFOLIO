import React from 'react';
import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../data/resumeData';
import { soundManager } from '../utils/audio';
import { Award, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#0A0A0A] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[#888] text-[10px] uppercase tracking-[0.3em] font-mono">
            <Award className="w-3.5 h-3.5 text-orange-400" />
            <span>05 / CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#E5E5E1] tracking-tight">
            Certifications & <span className="font-editorial-serif italic text-white">Courses</span>
          </h2>
          <p className="text-[#888] text-xs sm:text-sm max-w-xl mx-auto">
            Professional certifications completed with IBM SkillsBuild, CSRBOX, and Great Learning Academy.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -2 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#0E0E0E] border border-[#1A1A1A] hover:border-[#333] transition-all flex flex-col justify-between space-y-4 shadow-xl relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#050505] border border-[#1A1A1A] text-orange-400 group-hover:bg-[#E5E5E1] group-hover:text-[#0A0A0A] transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-mono uppercase tracking-[0.2em] bg-[#050505] border border-[#1A1A1A] px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified • {cert.year}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#E5E5E1] group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-orange-400 mt-1 uppercase tracking-widest">
                    {cert.issuer}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-[10px] font-mono text-[#666] mb-2 uppercase tracking-[0.2em]">
                    Competencies Verified:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#050505] border border-[#1A1A1A] text-[#AAA] font-mono text-[10px] flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-orange-400 shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );

};
