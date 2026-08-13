import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/resumeData';
import { soundManager } from '../utils/audio';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  MessageSquare,
  Check,
  Copy,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  const openMailClient = (subject?: string, body?: string) => {
    const mailSubject = encodeURIComponent(subject || `Portfolio Contact from ${formData.name || 'Visitor'}`);
    const mailBody = encodeURIComponent(body || `Name: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'Not provided'}\n\nMessage:\n${formData.message || ''}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  const handlePhoneAction = () => {
    soundManager.playClick();
    setShowPhoneOptions((prev) => !prev);
  };

  const handlePhoneCall = () => {
    const formattedPhone = PERSONAL_INFO.phone.replace(/[^+0-9]/g, '');
    setShowPhoneOptions(false);
    window.location.href = `tel:${formattedPhone}`;
  };

  const handleWhatsAppOpen = () => {
    const formattedPhone = PERSONAL_INFO.phone.replace(/[^+0-9]/g, '');
    const whatsappUrl = `https://wa.me/${formattedPhone.replace('+', '')}?text=${encodeURIComponent('Hi Smit, I found your portfolio and would like to connect.')}`;
    setShowPhoneOptions(false);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = (type: 'email' | 'phone', value: string) => {
    soundManager.playClick();
    navigator.clipboard.writeText(value);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playSuccess();

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    openMailClient(
      formData.subject || `Portfolio Contact from ${formData.name}`,
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    setIsSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSent(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070707] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[#888] text-[10px] uppercase tracking-[0.3em] font-mono">
            <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
            <span>06 / DIRECT CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#E5E5E1] tracking-tight">
            Let's Build <span className="font-editorial-serif italic text-white">Together</span>
          </h2>
          <p className="text-[#888] text-xs sm:text-sm max-w-xl mx-auto">
            Open for full-time Full Stack MERN roles, AI web applications, or freelance opportunities. Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#0E0E0E] border border-[#1A1A1A] space-y-3 shadow-xl hover:border-[#333] transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#050505] text-orange-400 border border-[#1A1A1A]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666]">Direct Email</div>
                    <div className="font-bold text-[#E5E5E1] text-xs font-mono">{PERSONAL_INFO.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      openMailClient();
                    }}
                    className="p-2.5 rounded-xl bg-[#050505] border border-[#1A1A1A] text-[#888] hover:text-orange-400 transition-colors cursor-pointer"
                    title="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleCopy('email', PERSONAL_INFO.email)}
                    className="p-2.5 rounded-xl bg-[#050505] border border-[#1A1A1A] text-[#888] hover:text-orange-400 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-[#0E0E0E] border border-[#1A1A1A] space-y-3 shadow-xl hover:border-[#333] transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#050505] text-cyan-400 border border-[#1A1A1A]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666]">Phone / WhatsApp</div>
                    <div className="font-bold text-[#E5E5E1] text-xs font-mono">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePhoneAction}
                    className="p-2.5 rounded-xl bg-[#050505] border border-[#1A1A1A] text-[#888] hover:text-cyan-400 transition-colors cursor-pointer"
                    title="Call / WhatsApp"
                  >
                    <Phone className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleCopy('phone', PERSONAL_INFO.phone)}
                    className="p-2.5 rounded-xl bg-[#050505] border border-[#1A1A1A] text-[#888] hover:text-cyan-400 transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {showPhoneOptions && (
                <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-[#1A1A1A] bg-[#050505] p-2">
                  <button
                    onClick={handlePhoneCall}
                    className="rounded-xl bg-[#090909] border border-[#1A1A1A] text-[#E5E5E1] hover:border-cyan-500/50 px-2 py-2 text-[10px] font-mono uppercase tracking-[0.15em] cursor-pointer"
                  >
                    Call
                  </button>
                  <button
                    onClick={handleWhatsAppOpen}
                    className="rounded-xl bg-[#090909] border border-[#1A1A1A] text-[#E5E5E1] hover:border-emerald-500/50 px-2 py-2 text-[10px] font-mono uppercase tracking-[0.15em] cursor-pointer"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      handleCopy('phone', PERSONAL_INFO.phone);
                      setShowPhoneOptions(false);
                    }}
                    className="rounded-xl bg-[#090909] border border-[#1A1A1A] text-[#E5E5E1] hover:border-orange-500/50 px-2 py-2 text-[10px] font-mono uppercase tracking-[0.15em] cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
              )}
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-[#0E0E0E] border border-[#1A1A1A] space-y-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#050505] text-purple-400 border border-[#1A1A1A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666]">Location</div>
                  <div className="font-bold text-[#E5E5E1] text-xs font-mono">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-3xl bg-[#0E0E0E] border border-[#1A1A1A] space-y-3 shadow-xl">
              <div className="text-[10px] font-mono text-[#666] uppercase tracking-[0.2em]">Social Presence</div>
              <div className="flex gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-2xl bg-[#050505] border border-[#1A1A1A] text-[#E5E5E1] hover:text-white font-mono text-xs uppercase tracking-[0.15em] font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-2xl bg-[#050505] border border-[#1A1A1A] text-[#E5E5E1] hover:text-white font-mono text-xs uppercase tracking-[0.15em] font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0E0E0E] p-6 sm:p-8 rounded-3xl border border-[#1A1A1A] shadow-2xl">
            {isSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#141414] text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#E5E5E1]">Message Transmitted</h3>
                <p className="text-xs text-[#AAA] max-w-md mx-auto">
                  Thank you for contacting Smit Patel. I will respond promptly to your message!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#888]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#1A1A1A] text-[#E5E5E1] text-xs font-sans focus:outline-none focus:border-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#888]">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#1A1A1A] text-[#E5E5E1] text-xs font-sans focus:outline-none focus:border-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#888]">Subject</label>
                  <input
                    type="text"
                    placeholder="Full Stack Opportunity / Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#1A1A1A] text-[#E5E5E1] text-xs font-sans focus:outline-none focus:border-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#888]">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Smit, I reviewed your portfolio..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#1A1A1A] text-[#E5E5E1] text-xs font-sans focus:outline-none focus:border-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#E5E5E1] text-[#0A0A0A] font-bold font-mono text-xs uppercase tracking-[0.2em] hover:bg-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );

};
