import { CERTIFICATIONS, PERSONAL_INFO, PROJECTS } from '../data/resumeData';

export const RESUME_CONTEXT = `
You are the interactive AI Portfolio Assistant for Smit Patel. You respond on behalf of Smit Patel, a Full Stack MERN & AI Developer based in Ahmedabad, Gujarat, India.

Smit Patel Profile:
- Role: Full Stack Web Developer (MERN Stack) and B.Tech IT graduate.
- Education: Completed B.Tech in Information Technology at Silver Oak University, Ahmedabad in 2026 (batch 2022-2026, CGPA: 8.14 / 10). He is not currently pursuing the degree.
- Location: Ahmedabad, Gujarat, India
- Email: ${PERSONAL_INFO.email}
- Phone: ${PERSONAL_INFO.phone}
- LinkedIn: ${PERSONAL_INFO.linkedin}
- GitHub: ${PERSONAL_INFO.github}

Core Technical Competencies:
- Frontend: React.js, Next.js 14, TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, HTML5, CSS3.
- Backend: Node.js, Express.js, RESTful API Design, JWT Authentication, RBAC, Server-Side Development.
- Databases & ORM: MongoDB, PostgreSQL, Prisma ORM, Database Design.
- AI & Integrations: Gemini AI API (auto-summarization, semantic search, prompt engineering), OpenWeather API, Google Maps API, Cloudinary.
- Tools: Git, GitHub, Netlify, Render, Vercel, Figma, VS Code.

Featured Projects:
${PROJECTS.map((project, index) => `${index + 1}. ${project.title} (${project.techStack.join(', ')})
   - ${project.description}`).join('\n')}

Certifications:
${CERTIFICATIONS.map((cert) => `- ${cert.title} (${cert.issuer}, ${cert.year})`).join('\n')}

Rules:
- Never say Smit is pursuing B.Tech, is a current student, or is still studying. He completed B.Tech IT in 2026.
- Answer the visitor's actual question with specific facts. Do not repeat a generic bio for unrelated questions.
- Tone: Friendly, professional, concise, and helpful. Invite recruiters or clients to email or call when relevant.
`;

const EDUCATION_REPLY =
  "Smit completed his B.Tech in Information Technology at Silver Oak University, Ahmedabad in 2026 (2022–2026 batch) with a CGPA of 8.14/10. He is a B.Tech IT graduate, not a current student.";

const CONTACT_REPLY = `You can reach Smit directly at ${PERSONAL_INFO.email} or call/WhatsApp +91 72020 37271. LinkedIn: linkedin.com/in/patelsmit09. GitHub: github.com/smitpatel7202. He is open to full-time roles and freelance work.`;

const SKILLS_REPLY =
  "Smit's stack covers Frontend (React.js, Next.js 14, TypeScript, Tailwind CSS, Framer Motion), Backend (Node.js, Express.js, REST APIs, JWT, RBAC), Databases (MongoDB, PostgreSQL, Prisma ORM), and AI (Google Gemini API). He also uses Git, Vercel, Netlify, and Render for delivery.";

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

function matchProject(question: string) {
  return PROJECTS.find((project) => {
    const titleWords = project.title
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length > 3 && word !== 'stack' && word !== 'full');
    const aliases = [
      project.id.replace(/-/g, ' '),
      project.title.toLowerCase(),
      ...titleWords,
    ];
    return includesAny(question, aliases);
  });
}

export function getPortfolioFallbackReply(message: string): string {
  const question = (message || '').toLowerCase().trim();

  const project = matchProject(question);
  if (project) {
    const live = project.liveUrl ? ` Live demo: ${project.liveUrl}.` : '';
    const github = project.githubUrl ? ` GitHub: ${project.githubUrl}.` : '';
    return `${project.title} — ${project.subtitle}. ${project.description} Tech: ${project.techStack.join(', ')}. Highlights: ${project.highlights.slice(0, 3).join('; ')}.${live}${github}`;
  }

  if (includesAny(question, ['gemini', ' ask ai', 'chat ai', 'ai api', 'llm', 'generative'])) {
    return "Smit has hands-on Google Gemini API experience, including Peblo AI Notes Workspace: auto-summarization, semantic search, prompt templates, Markdown preview, and an Express proxy so API keys stay on the server.";
  }

  if (includesAny(question, ['job portal', 'recruitment', 'rbac', 'cloudinary'])) {
    return "Smit built a Full Stack Job Portal with MongoDB, Express.js, React.js, and Node.js. It includes RBAC for Admin, Employer, and Job Seeker, Cloudinary resume uploads, applicant tracking, and a live Netlify + Render deployment.";
  }

  if (includesAny(question, ['skill', 'tech stack', 'stack', 'react', 'node', 'mongo', 'postgres', 'prisma', 'next.js', 'nextjs', 'typescript', 'tailwind'])) {
    return SKILLS_REPLY;
  }

  if (includesAny(question, ['project', 'github', 'portfolio work', 'built', 'apps'])) {
    const names = PROJECTS.map((item) => item.title).join(', ');
    return `Smit has shipped ${PROJECTS.length}+ web projects, including ${names}. Ask about any one of them for architecture and tech details. GitHub: ${PERSONAL_INFO.github}`;
  }

  if (includesAny(question, ['education', 'college', 'cgpa', 'degree', 'university', 'b.tech', 'btech', 'b tech', 'graduate', 'graduation', 'student', 'pursuing', 'silver oak'])) {
    return EDUCATION_REPLY;
  }

  if (includesAny(question, ['certif', 'ibm', 'course', 'skillsbuild'])) {
    const list = CERTIFICATIONS.map((cert) => `${cert.title} (${cert.issuer}, ${cert.year})`).join('; ');
    return `Smit holds ${CERTIFICATIONS.length} certifications: ${list}.`;
  }

  if (includesAny(question, ['contact', 'email', 'phone', 'reach', 'hire', 'whatsapp', 'linkedin'])) {
    return CONTACT_REPLY;
  }

  if (includesAny(question, ['where', 'location', 'ahmedabad', 'based', 'city'])) {
    return `Smit is based in ${PERSONAL_INFO.location} and is available for remote or on-site Full Stack roles. ${CONTACT_REPLY}`;
  }

  if (includesAny(question, ['who is', 'about smit', 'about you', 'yourself', 'bio', 'profile', 'introduce'])) {
    return `Smit Patel is a Full Stack Web Developer (MERN & AI) based in Ahmedabad. He completed B.Tech IT at Silver Oak University in 2026 with a CGPA of 8.14/10. He builds production MERN apps, Next.js sites, and Gemini-powered features. ${CONTACT_REPLY}`;
  }

  return `I can help with Smit Patel's completed B.Tech IT (2026, Silver Oak University, CGPA 8.14), MERN/Next.js/Gemini skills, projects (${PROJECTS.map((item) => item.title).slice(0, 4).join(', ')}, and more), certifications, or contact details. Could you ask about one of those specifically?`;
}
