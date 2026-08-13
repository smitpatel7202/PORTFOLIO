import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { soundManager } from '../utils/audio';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  Code2,
  Database,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl bg-[#0E0E0E] border border-[#222] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#E5E5E1] my-8 space-y-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-[#181818] text-[#888] hover:text-white hover:bg-[#262626] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="space-y-2 pr-10">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#333] text-orange-400 text-[10px] uppercase tracking-[0.2em] font-mono font-bold">
                {project.categoryLabel}
              </span>
              {project.metrics && (
                <span className="px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-cyan-400 text-[10px] uppercase tracking-[0.2em] font-mono">
                  {project.metrics}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h2>
            <p className="text-xs font-mono text-orange-400">{project.subtitle}</p>
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-3 text-[#AAA] text-xs sm:text-sm leading-relaxed border-t border-[#1A1A1A] pt-4">
            {project.fullDescription.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Key Features & Highlights */}
          <div className="space-y-3 bg-[#050505] p-5 rounded-2xl border border-[#1A1A1A]">
            <h3 className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-[0.25em] flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <span>Technical Highlights & Capabilities</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[#E5E5E1]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h3 className="text-[10px] font-mono font-bold text-[#666] uppercase tracking-[0.25em]">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222] text-[#AAA] font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1A1A1A]">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#141414] hover:bg-[#222] border border-[#333] text-[#E5E5E1] font-mono text-xs uppercase tracking-[0.15em] font-bold flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
              )}

              {project.liveUrl && project.liveUrl !== project.githubUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#E5E5E1] text-[#0A0A0A] font-mono text-xs uppercase tracking-[0.15em] font-bold flex items-center gap-2 shadow-md hover:bg-white transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Site</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="px-5 py-2.5 rounded-full bg-[#141414] hover:bg-[#222] text-[#AAA] font-mono text-xs uppercase tracking-[0.15em] cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

};
