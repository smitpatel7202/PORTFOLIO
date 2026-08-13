import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini AI client lazily/safely
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

const RESUME_CONTEXT = `
You are the interactive AI Portfolio Assistant for Smit Patel. You respond on behalf of Smit Patel, a Full Stack MERN & AI Developer based in Ahmedabad, Gujarat, India.

Smit Patel Profile:
- Role: Full Stack Web Developer (MERN Stack) & B.Tech IT Student (Silver Oak University, 2022-2026, CGPA: 8.14 / 10).
- Location: Ahmedabad, Gujarat, India
- Email: sp7202037271@gmail.com
- Phone: +91 72020 37271
- LinkedIn: https://linkedin.com/in/patelsmit09
- GitHub: https://github.com/smitpatel7202

Core Technical Competencies:
- Frontend: React.js, Next.js 14, TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, HTML5, CSS3.
- Backend: Node.js, Express.js, RESTful API Design, JWT Authentication, RBAC, Server-Side Development.
- Databases & ORM: MongoDB, PostgreSQL, Prisma ORM, Database Design.
- AI & Integrations: Gemini AI API (auto-summarization, semantic search, prompt engineering), OpenWeather API, Google Maps API, Cloudinary.
- Tools: Git, GitHub, Netlify, Render, Vercel, Figma, VS Code.

Featured Projects:
1. Peblo AI Notes Workspace (React, Express, Prisma, PostgreSQL, Gemini AI API, JWT, Tailwind)
   - AI-powered notes app with auto-summarization, semantic search, markdown rendering, tag management, dark mode, and public sharing dashboard.
2. Full Stack Job Portal (MongoDB, Express, React, Node.js, JWT, Cloudinary, Tailwind)
   - Role-based access control (Admin, Employer, Job Seeker), applicant tracking system, Cloudinary resume uploads, live deployed on Netlify & Render.
3. AcademyPro – E-Learning Landing Page (Next.js 14, TypeScript, Tailwind CSS, Framer Motion)
   - High-converting e-learning platform with fluid scroll animations, Next.js static generation, and high Core Web Vitals performance.
4. ShopVault – Auth-Based E-Commerce Dashboard (React, Context API, JWT Auth, Tailwind CSS)
   - Protected routes, session-persistent JWT auth, real-time shopping cart via Context API, dynamic product filtering.
5. Sharda Steel – Business Website (Live Production)
   - Mobile-first responsive business site, Google Maps API, WhatsApp inquiry lead generation form, driving real client leads.

Certifications:
- AI Fundamentals (IBM SkillsBuild, 2025)
- Data Analytics – Data into Decisions (CSRBOX × IBM SkillsBuild, 2025)
- Data Analysis with Python (IBM SkillsBuild, 2024)
- Web Scraping with Python (Great Learning Academy, 2024)

Tone & Style: Friendly, professional, tech-savvy, confident, concise, and helpful. Always encourage recruiters or clients to reach out via email or phone!
`;

// AI Assistant Chat Route
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Fallback response if API key is not yet set
      const lower = message.toLowerCase();
      let reply = "Hello! I am Smit Patel's AI Assistant. How can I help you today?";
      if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack")) {
        reply = "Smit is proficient in the MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js 14, TypeScript, Tailwind CSS, PostgreSQL, Prisma ORM, and Google Gemini AI API integration!";
      } else if (lower.includes("project") || lower.includes("work")) {
        reply = "Smit has built impressive projects including Peblo AI Notes Workspace, a Full Stack Job Portal, AcademyPro E-Learning Landing Page, ShopVault E-Commerce Dashboard, and the live Sharda Steel Business site!";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire") || lower.includes("phone")) {
        reply = "You can reach Smit directly at sp7202037271@gmail.com or call him at +91 72020 37271. His LinkedIn is linkedin.com/in/patelsmit09.";
      } else if (lower.includes("education") || lower.includes("college") || lower.includes("cgpa")) {
        reply = "Smit is pursuing his B.Tech in Information Technology at Silver Oak University, Ahmedabad (2022-2026) with a CGPA of 8.14/10.";
      }
      return res.json({ reply, fallback: true });
    }

    // Format prompt with context
    const fullPrompt = `${RESUME_CONTEXT}\n\nUser Question: ${message}\nProvide a concise, direct, and helpful answer:`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt,
    });

    const reply = response.text || "I'm sorry, I couldn't process that response right now.";
    return res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Intelligent fallback generator based on question intent
    const message = req.body?.message || "";
    const lower = message.toLowerCase();
    let reply = "";

    if (lower.includes("gemini") || lower.includes("ai")) {
      reply = "Smit Patel has specialized experience with Google Gemini AI API, building applications like Peblo AI Notes Workspace featuring AI auto-summarization, semantic search, prompt engineering, and Markdown processing.";
    } else if (lower.includes("job") || lower.includes("portal") || lower.includes("recruitment")) {
      reply = "Smit built a Full Stack Job Portal using MongoDB, Express.js, React.js, and Node.js. It features Role-Based Access Control (RBAC for Admin/Employer/Job Seeker), Cloudinary resume uploads, applicant tracking, and live deployment on Netlify and Render.";
    } else if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack") || lower.includes("react") || lower.includes("node")) {
      reply = "Smit's technical stack includes Frontend (React.js, Next.js 14, TypeScript, Tailwind CSS, Framer Motion), Backend (Node.js, Express.js, REST APIs, JWT Auth, RBAC), Databases (MongoDB, PostgreSQL, Prisma ORM), and AI (Google Gemini API).";
    } else if (lower.includes("project") || lower.includes("github") || lower.includes("work")) {
      reply = "Smit has built impressive web projects including Accredian Enterprise Clone, Real-Time Socket.IO Kanban Board, Movie Finder (Next.js 15 & TMDB API), ProWeather Live, Advanced To-Do App, Peblo AI Workspace, Full Stack Job Portal, AcademyPro E-Learning, ShopVault, and Sharda Steel. Check them all out on his GitHub: https://github.com/smitpatel7202!";
    } else if (lower.includes("education") || lower.includes("college") || lower.includes("cgpa") || lower.includes("degree") || lower.includes("university")) {
      reply = "Smit is pursuing his B.Tech in Information Technology at Silver Oak University, Ahmedabad (2022-2026) with an impressive CGPA of 8.14 out of 10.";
    } else if (lower.includes("certif") || lower.includes("ibm") || lower.includes("course")) {
      reply = "Smit holds 4 professional certifications: AI Fundamentals (IBM SkillsBuild, 2025), Data Analytics (CSRBOX × IBM SkillsBuild, 2025), Data Analysis with Python (IBM SkillsBuild, 2024), and Web Scraping with Python (Great Learning Academy, 2024).";
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("reach") || lower.includes("hire")) {
      reply = "You can reach Smit directly via email at sp7202037271@gmail.com or by phone/WhatsApp at +91 72020 37271. He is open for full-time roles and freelance projects!";
    } else {
      reply = `Smit Patel is a Full Stack Web Developer (MERN Stack & AI) based in Ahmedabad, Gujarat. He holds an 8.14 CGPA in B.Tech IT from Silver Oak University. You can contact him at sp7202037271@gmail.com or check his GitHub at github.com/smitpatel7202. What specific details would you like to know about his projects or skills?`;
    }

    return res.json({ reply, fallback: true });
  }
});

// Start Server with Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
