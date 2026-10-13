import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, EDUCATION } from '../data/resumeData';
import { soundManager } from '../utils/audio';
import {
  GraduationCap,
  Briefcase,
  Code2,
  Cpu,
  Database,
  Layers,
  Award,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'education' | 'pillars'>('overview');

  React.useEffect(() => {
    const handleEducationNav = () => {
      setActiveTab('education');
    };
    window.addEventListener('nav-education', handleEducationNav);

    // Check if hash is #education
    if (window.location.hash === '#education') {
      setActiveTab('education');
    }

    return () => window.removeEventListener('nav-education', handleEducationNav);
  }, []);

  const pillars = [
    {
      icon: Code2,
      title: "MERN & Full Stack Engineering",
      description: "Proficient in end-to-end full stack architecture using MongoDB, Express.js, React.js, and Node.js with Next.js 14 and TypeScript.",
      color: "text-orange-400 bg-orange-500/10 border-orange-500/20"
    },
    {
      icon: Cpu,
      title: "AI API & Gemini Integration",
      description: "Hands-on expertise in Google Gemini AI API for auto-summarization, semantic search, AI prompt workflows, and content generation.",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      icon: Database,
      title: "Database Architecture & Prisma",
      description: "Skilled in designing relational PostgreSQL schemas with Prisma ORM as well as document-driven NoSQL structures in MongoDB.",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      icon: Layers,
      title: "JWT Authentication & RBAC",
      description: "Implementing secure JWT session tokens, encrypted password hashing, protected routes, and Role-Based Access Control (Admin/Employer/User).",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070707] border-t border-[#1A1A1A]">
      <div id="education" className="absolute top-0 left-0 w-full h-1 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[#888] text-[10px] uppercase tracking-[0.3em] font-mono">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>02 / BACKGROUND & ETHOS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#E5E5E1] tracking-tight">
            About <span className="font-editorial-serif italic text-white">Smit Patel</span>
          </h2>
          <p className="text-[#888] text-xs sm:text-sm max-w-xl mx-auto">
            B.Tech Information Technology graduate (completed 2026) & Full Stack Web Developer passionate about building high-performance, AI-augmented digital experiences.
          </p>

          {/* Editorial Tab Switcher */}
          <div className="flex justify-center pt-6">
            <div className="inline-flex p-1 rounded-full bg-[#121212] border border-[#222]">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setActiveTab('overview');
                }}
                className={`px-5 py-2 rounded-full font-mono text-[11px] uppercase tracking-[0.2em] font-bold transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#E5E5E1] text-[#0A0A0A] shadow-md'
                    : 'text-[#888] hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => {
                  soundManager.playClick();
                  setActiveTab('pillars');
                }}
                className={`px-5 py-2 rounded-full font-mono text-[11px] uppercase tracking-[0.2em] font-bold transition-all cursor-pointer ${
                  activeTab === 'pillars'
                    ? 'bg-[#E5E5E1] text-[#0A0A0A] shadow-md'
                    : 'text-[#888] hover:text-white'
                }`}
              >
                Capabilities
              </button>
              <button
                onClick={() => {
                  soundManager.playClick();
                  setActiveTab('education');
                }}
                className={`px-5 py-2 rounded-full font-mono text-[11px] uppercase tracking-[0.2em] font-bold transition-all cursor-pointer ${
                  activeTab === 'education'
                    ? 'bg-[#E5E5E1] text-[#0A0A0A] shadow-md'
                    : 'text-[#888] hover:text-white'
                }`}
              >
                Education
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Column: Summary */}
            <div className="lg:col-span-7 space-y-6 bg-[#0E0E0E] p-6 sm:p-8 rounded-3xl border border-[#1A1A1A]">
              <h3 className="text-xl font-bold text-[#E5E5E1] flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-[#1A1A1A] text-orange-400 border border-[#333]">
                  <Code2 className="w-5 h-5" />
                </span>
                <span>Full Stack Developer & IT Engineer</span>
              </h3>

              <p className="text-[#AAA] text-xs sm:text-sm leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-[0.25em]">
                  Core Competencies & Expertise:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#AAA] font-mono">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#050505] border border-[#1A1A1A]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>MERN Stack Web Apps</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#050505] border border-[#1A1A1A]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>RESTful API & Server Design</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#050505] border border-[#1A1A1A]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Google Gemini AI Integration</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#050505] border border-[#1A1A1A]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>JWT Authentication & RBAC</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#050505] border border-[#1A1A1A]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>PostgreSQL & Prisma ORM</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#050505] border border-[#1A1A1A]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Agile & Team Collaboration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Profile Info Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-[#0E0E0E] border border-[#1A1A1A] space-y-4 shadow-xl">
                <div className="flex items-center gap-3 pb-3 border-b border-[#1A1A1A]">
                  <div className="p-3 rounded-2xl bg-[#1A1A1A] text-orange-400 border border-[#333]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666]">Education</div>
                    <div className="font-bold text-[#E5E5E1] text-sm">B.Tech Information Technology</div>
                  </div>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between items-center py-1.5 border-b border-[#1A1A1A]">
                    <span className="text-[#666]">Institution:</span>
                    <span className="text-[#E5E5E1] font-bold">Silver Oak University</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-[#1A1A1A]">
                    <span className="text-[#666]">Location:</span>
                    <span className="text-[#AAA]">Ahmedabad, Gujarat</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-[#1A1A1A]">
                    <span className="text-[#666]">Batch Duration:</span>
                    <span className="text-orange-400 font-bold">2022 – 2026</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-[#1A1A1A]">
                    <span className="text-[#666]">Academic Score:</span>
                    <span className="text-emerald-400 font-bold">CGPA: 8.14 / 10</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Core Capabilities */}
        {activeTab === 'pillars' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-3xl bg-[#0E0E0E] border border-[#1A1A1A] hover:border-[#333] transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-4">
                    <div className="p-3 rounded-2xl w-max bg-[#1A1A1A] border border-[#333] text-orange-400 group-hover:bg-[#E5E5E1] group-hover:text-[#0A0A0A] transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#E5E5E1] text-sm">{pillar.title}</h3>
                    <p className="text-xs text-[#888] leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Tab 3: Education Roadmap */}
        {activeTab === 'education' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="relative border-l border-[#262626] pl-6 sm:pl-8 space-y-10 ml-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0A] border border-orange-500 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  </div>

                  <div className="p-6 sm:p-8 rounded-3xl bg-[#0E0E0E] border border-[#1A1A1A] space-y-4 hover:border-[#333] transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1A1A1A] pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-[#E5E5E1]">{edu.degree}</h3>
                          {edu.degree.includes('B.Tech') && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-mono uppercase tracking-wider">
                              COMPLETED 2026
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-orange-400 font-mono mt-0.5 flex items-center gap-2">
                          <span>{edu.institution}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-[#666]">
                            <MapPin className="w-3 h-3" /> {edu.location}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-mono font-bold text-[#AAA] flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-orange-400" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="text-xs font-mono font-bold text-emerald-400 mt-0.5">
                          {edu.grade}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 text-xs text-[#AAA] font-sans">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-400 mt-0.5">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );

};
