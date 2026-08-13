import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../types';
import { soundManager } from '../utils/audio';
import {
  X,
  Bot,
  Send,
  User,
  Sparkles,
  Loader2,
  RefreshCw,
  Terminal,
  Copy,
  Check
} from 'lucide-react';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hello! I am Smit Patel's AI Resume Representative. Ask me anything about Smit's MERN stack experience, Gemini AI integrations, B.Tech IT degree, or project architecture!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const presetQuestions = [
    "What is Smit's experience with Gemini AI?",
    "Tell me about the Full Stack Job Portal project.",
    "What is Smit's college, CGPA, and degree?",
    "How can I contact or hire Smit Patel?"
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    soundManager.playClick();

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text, history: messages })
      });

      const data = await res.json();
      soundManager.playChime();

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.reply || "I'm sorry, I couldn't process your request right now.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "Smit is skilled in MERN stack, PostgreSQL, Next.js, and Google Gemini AI integration. You can contact him directly at sp7202037271@gmail.com!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl h-[620px] max-h-[90vh] bg-[#0E0E0E] border border-[#222] rounded-3xl shadow-2xl flex flex-col overflow-hidden text-[#E5E5E1]"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#050505] border-b border-[#1A1A1A] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-[#141414] border border-[#262626] flex items-center justify-center text-orange-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#E5E5E1] flex items-center gap-2">
                  <span>Smit's AI Assistant</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#141414] border border-[#262626] text-orange-400 text-[10px] font-mono uppercase tracking-wider">
                    Gemini 2.5 Flash
                  </span>
                </h3>
                <p className="text-[10px] font-mono text-[#666] uppercase tracking-[0.15em]">
                  Trained on Smit Patel's Credentials
                </p>
              </div>
            </div>

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

          {/* Messages Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 font-sans text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-xl bg-[#141414] border border-[#222] text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`relative max-w-[85%] p-4 rounded-2xl space-y-1 shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-[#E5E5E1] text-[#0A0A0A] font-medium rounded-tr-none'
                      : 'bg-[#050505] border border-[#1A1A1A] text-[#E5E5E1] rounded-tl-none'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  
                  <div className={`flex items-center justify-between text-[10px] pt-1 ${msg.sender === 'user' ? 'text-[#333]' : 'text-[#666] font-mono'}`}>
                    <span>{msg.timestamp}</span>
                    {msg.sender === 'ai' && (
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="text-[#888] hover:text-white transition-colors ml-2 cursor-pointer"
                        title="Copy text"
                      >
                        {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    )}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-[#141414] border border-[#222] text-[#E5E5E1] flex items-center justify-center shrink-0 mt-0.5 font-bold font-mono text-xs">
                    YOU
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-xl bg-[#141414] border border-[#222] text-orange-400 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="p-4 rounded-2xl bg-[#050505] border border-[#1A1A1A] text-[#888] text-xs flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-orange-400" />
                  <span>Processing query...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Preset Question Chips */}
          <div className="p-3 bg-[#050505] border-t border-[#1A1A1A] flex gap-2 overflow-x-auto text-[10px] font-mono uppercase tracking-[0.15em] text-[#AAA]">
            {presetQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="px-3 py-1.5 rounded-full bg-[#141414] border border-[#222] hover:border-[#444] hover:text-white whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-4 bg-[#050505] border-t border-[#1A1A1A] shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about Smit's projects, skills, or education..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-full bg-[#0E0E0E] border border-[#222] text-[#E5E5E1] text-xs font-sans focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-3 rounded-full bg-[#E5E5E1] text-[#0A0A0A] font-bold hover:bg-white disabled:opacity-50 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

};
