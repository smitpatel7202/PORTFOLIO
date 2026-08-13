import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/resumeData';
import { soundManager } from '../utils/audio';
import {
  Code2,
  Server,
  Database,
  Cpu,
  Wrench,
  Search,
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  const filteredSkills = activeCategory.skills.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Code2 className="w-5 h-5 text-orange-400" />;
      case 'Server': return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-400" />;
      default: return <Wrench className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070707] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[#888] text-[10px] uppercase tracking-[0.3em] font-mono">
            <Layers className="w-3.5 h-3.5 text-orange-400" />
            <span>04 / TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#E5E5E1] tracking-tight">
            Skills & <span className="font-editorial-serif italic text-white">Tech Stack</span>
          </h2>
          <p className="text-[#888] text-xs sm:text-sm max-w-xl mx-auto">
            Comprehensive breakdown of Smit Patel's technical competencies across full stack development, databases, and AI frameworks.
          </p>
        </div>

        {/* Search & Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Category Switcher */}
          <div className="lg:col-span-4 space-y-3">
            <div className="relative mb-4">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#555]" />
              <input
                type="text"
                placeholder="Search skill (e.g. React, Gemini)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#0A0A0A] border border-[#222] text-[#E5E5E1] text-xs font-mono focus:outline-none focus:border-white"
              />
            </div>

            <div className="space-y-2">
              {SKILL_CATEGORIES.map((cat, idx) => {
                const isActive = activeCategoryIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      soundManager.playClick();
                      setActiveCategoryIndex(idx);
                    }}
                    onMouseEnter={() => soundManager.playHover()}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#141414] border-[#333] shadow-lg'
                        : 'bg-[#0E0E0E] border-[#1A1A1A] hover:border-[#262626] text-[#888] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#0A0A0A] border border-[#222]">
                        {getCategoryIcon(cat.icon)}
                      </div>
                      <div>
                        <div className={`font-bold text-xs uppercase tracking-[0.15em] font-mono ${isActive ? 'text-white' : 'text-[#AAA]'}`}>
                          {cat.title}
                        </div>
                        <div className="text-[10px] font-mono text-[#666]">
                          {cat.skills.length} Competencies
                        </div>
                      </div>
                    </div>
                    {isActive && <span className="text-orange-400 font-bold font-mono">→</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Skill Bars Matrix */}
          <div className="lg:col-span-8 bg-[#0E0E0E] p-6 sm:p-8 rounded-3xl border border-[#1A1A1A] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-[#141414] border border-[#262626] text-orange-400">
                  {getCategoryIcon(activeCategory.icon)}
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#E5E5E1] uppercase tracking-[0.15em] font-mono">{activeCategory.title}</h3>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666]">Production Level Assessment</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredSkills.length > 0 ? (
                filteredSkills.map((skill, idx) => (
                  <div key={idx} className="space-y-2 p-3.5 rounded-2xl bg-[#050505] border border-[#1A1A1A]">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#E5E5E1] flex items-center gap-1.5 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{skill.name}</span>
                      </span>
                      <span className="font-mono text-orange-400 font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-[#141414] rounded-full overflow-hidden border border-[#222]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.05 }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono text-[#666] pt-0.5">
                      <span>Experience: {skill.experienceYears}</span>
                      {skill.isTop && (
                        <span className="text-emerald-400 font-bold">Top Core Stack</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-8 text-[#555] text-xs font-mono">
                  No skills matched "{searchQuery}" in this category.
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );

};
