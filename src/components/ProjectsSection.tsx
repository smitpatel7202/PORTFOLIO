import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/resumeData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { soundManager } from '../utils/audio';
import {
  Sparkles,
  ExternalLink,
  Github,
  FolderGit2,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Globe,
  ArrowUpRight,
  Layers
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: `All Work (${PROJECTS.length})` },
    { id: 'ai', label: 'AI & Gemini' },
    { id: 'mern', label: 'MERN Apps' },
    { id: 'nextjs', label: 'Next.js 14 & Apps' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'live', label: 'Live Client Sites' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-orange-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-cyan-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-emerald-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-rose-400" />;
      default: return <FolderGit2 className="w-5 h-5 text-orange-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0A0A0A] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[#888] text-[10px] uppercase tracking-[0.3em] font-mono">
            <FolderGit2 className="w-3.5 h-3.5 text-orange-400" />
            <span>03 / SELECTED WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#E5E5E1] tracking-tight">
            Featured <span className="font-editorial-serif italic text-white">Projects</span>
          </h2>
          <p className="text-[#888] text-xs sm:text-sm max-w-xl mx-auto">
            Explore full-stack MERN applications, Gemini AI integrations, and responsive client websites engineered by Smit Patel.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundManager.playClick();
                setSelectedCategory(cat.id);
              }}
              onMouseEnter={() => soundManager.playHover()}
              className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.2em] transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#E5E5E1] text-[#0A0A0A] font-bold shadow-md'
                  : 'bg-[#121212] border border-[#222] text-[#888] hover:text-white hover:border-[#333]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#0E0E0E] rounded-3xl border border-[#1A1A1A] hover:border-[#333] p-6 flex flex-col justify-between overflow-hidden shadow-xl transition-all"
              >
                <div className="relative space-y-4">
                  {/* Card Header Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[#050505] border border-[#1A1A1A]">
                      {getIcon(project.icon)}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#050505] border border-[#1A1A1A] text-[#888] text-[10px] uppercase tracking-[0.2em] font-mono">
                      0{idx + 1} / {project.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-[#E5E5E1] group-hover:text-orange-400 transition-colors flex items-center gap-1.5">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                    </h3>
                    <p className="text-xs font-mono text-[#666] mt-1">{project.subtitle}</p>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-[#AAA] leading-relaxed line-clamp-3 font-normal">
                    {project.description}
                  </p>

                  {/* Key Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#050505] border border-[#1A1A1A] text-[#AAA] font-mono text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-[#050505] border border-[#1A1A1A] text-orange-400 font-mono text-[10px]">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="relative pt-6 mt-6 border-t border-[#1A1A1A] flex items-center justify-between text-xs font-mono">
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedProject(project);
                    }}
                    onMouseEnter={() => soundManager.playHover()}
                    className="text-orange-400 font-bold uppercase tracking-[0.2em] text-[11px] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Blueprint</span>
                    <span>→</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#050505] border border-[#1A1A1A] text-[#888] hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== project.githubUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#050505] border border-[#1A1A1A] text-[#888] hover:text-orange-400 transition-colors"
                        title="Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );

};
