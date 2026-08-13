import { Project, SkillItem, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Smit Patel",
  role: "Full Stack Web Developer (MERN Stack)",
  taglines: [
    "MERN Stack & Full Stack Architect",
    "AI API & Gemini Specialist",
    "React.js & Next.js 14 Developer",
    "PostgreSQL & Prisma Integrator",
    "B.Tech IT Engineer & Problem Solver"
  ],
  location: "Ahmedabad, Gujarat, India",
  email: "sp7202037271@gmail.com",
  phone: "+91 72020 37271",
  linkedin: "https://linkedin.com/in/patelsmit09",
  github: "https://github.com/smitpatel7202",
  summary: "B.Tech IT graduate and Full Stack Web Developer skilled in both Frontend Development and Backend Development using the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in designing, building, and deploying responsive, production-grade web applications — from RESTful API development and database integration to JWT-based authentication and AI-powered features. Strong problem-solver, fast learner, and effective collaborator in cross-functional, fast-paced teams.",
  stats: [
    { label: "CGPA (B.Tech IT)", value: "8.14 / 10", description: "Silver Oak University" },
    { label: "Major Web Projects", value: "9+", description: "Full Stack & Live Client Apps" },
    { label: "Core Technologies", value: "15+", description: "MERN, Next.js, AI APIs" },
    { label: "Certifications", value: "4", description: "IBM SkillsBuild & Great Learning" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "peblo-ai",
    title: "Peblo AI Notes Workspace",
    subtitle: "Gemini AI Markdown & Semantic Search Workspace",
    category: "ai",
    categoryLabel: "Gemini AI",
    description: "Built an AI-powered note-taking workspace using Google Gemini API for auto-summarization, semantic search, prompt templates, and Markdown preview.",
    fullDescription: [
      "Built an AI-powered note-taking workspace using Google Gemini API for auto-summarization, semantic search, prompt templates, and real-time Markdown preview.",
      "Implemented Express.js proxy routes to keep Gemini API keys secure; engineered rich note organization with tag filtering, auto-save local caching, and custom prompt presets."
    ],
    techStack: ["React.js", "Express.js", "Google Gemini API", "Tailwind CSS", "TypeScript", "Markdown"],
    highlights: [
      "Gemini AI Server-Side Proxy & AI Summarizer",
      "Semantic Search & Smart Auto-Tagging",
      "Real-Time Live Markdown Render Engine",
      "Secure Backend API Key Obfuscation"
    ],
    githubUrl: "https://github.com/smitpatel7202",
    featured: true,
    metrics: "Gemini AI API Proxy & Semantic Search",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    icon: "Sparkles"
  },
  {
    id: "job-portal",
    title: "Full Stack Job Portal",
    subtitle: "MERN Stack Role-Based Recruitment Platform",
    category: "mern",
    categoryLabel: "MERN Stack",
    description: "Full-stack MERN job portal featuring RBAC (Admin, Employer, Job Seeker), Cloudinary resume uploads, job posting management, and applicant tracking.",
    fullDescription: [
      "Developed a full-stack MERN application (MongoDB, Express.js, React.js, Node.js) with JWT + RBAC-based role management for Admin, Employer, and Job Seeker workflows, including applicant tracking and job expiration logic.",
      "Built and integrated RESTful APIs and Cloudinary file uploads (resumes, logos, photos); deployed a performance-optimized, responsive frontend on Netlify and Render."
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "RBAC", "Cloudinary", "Tailwind CSS"],
    highlights: [
      "Role-Based Access Control (Admin, Employer, Job Seeker)",
      "Applicant Tracking Pipeline & Job Expiration Logic",
      "Cloudinary Resume & Asset Upload Integration",
      "Deployed on Netlify (Frontend) & Render (Backend)"
    ],
    githubUrl: "https://github.com/smitpatel7202",
    liveUrl: "https://job-1portal.netlify.app",
    featured: true,
    metrics: "Multi-Role RBAC & Resume Tracking",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    icon: "Briefcase"
  },
  {
    id: "accredian-clone",
    title: "Accredian Enterprise — Partial Clone",
    subtitle: "Next.js App Router Lead-Capture Assignment",
    category: "nextjs",
    categoryLabel: "Next.js App Router",
    description: "Partial clone of Accredian Enterprise built as a full-stack take-home assignment featuring scroll-spy navbar, lead-capture modal, and modular sections.",
    fullDescription: [
      "Built section by section (Hero → Stats → Clients → Accredian Edge → CAT → How It Works → FAQs → Testimonials) using modular Next.js components.",
      "Integrated scroll-spy navigation, React Context modal trigger for lead capture, and a Next.js API route (/api/lead) with input validation."
    ],
    techStack: ["Next.js (App Router)", "React", "Tailwind CSS v4", "Lucide React", "Next.js API Routes"],
    highlights: [
      "Scroll-Spy Navbar with Active State Sync",
      "Lead-Capture Modal via React Context API",
      "Validated Next.js API Route (/api/lead)",
      "Tailwind CSS v4 Responsive Layout"
    ],
    githubUrl: "https://github.com/smitpatel7202",
    liveUrl: "https://accredian-enterprise-clone-smit.vercel.app/",
    featured: true,
    metrics: "Next.js App Router & Lead API Route",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    icon: "Globe"
  },
  {
    id: "realtime-kanban",
    title: "Real-Time Kanban Board",
    subtitle: "Socket.IO Multi-Client Collaborative Workflow",
    category: "mern",
    categoryLabel: "MERN & WebSockets",
    description: "Full-stack real-time Kanban board built with React, Socket.IO, Node.js, and Express featuring live multi-client sync, drag & drop, and analytics.",
    fullDescription: [
      "Engineered a full-stack real-time task manager using Socket.IO for instant client synchronization across To Do, In Progress, and Done columns.",
      "Features drag-and-drop task movements, priority/category tagging, attachment file validation/previews, analytics charts, and comprehensive unit/E2E testing (Vitest, RTL, Playwright)."
    ],
    techStack: ["React", "Node.js", "Express.js", "Socket.IO", "React DnD", "Chart.js", "Vitest", "Playwright"],
    highlights: [
      "Socket.IO Instant Multi-Client Synchronization",
      "Smooth Drag & Drop Column Task Movement",
      "File Upload Attachments & Image Previews",
      "Task Distribution & Analytics Dashboard"
    ],
    githubUrl: "https://github.com/smitpatel7202/realtime-kanban-board",
    liveUrl: "https://kanban-board-real-time.vercel.app/",
    featured: true,
    metrics: "Socket.IO Live Sync & React DnD",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    icon: "Briefcase"
  },
  {
    id: "movie-finder",
    title: "Movie Finder — Movie Discovery App",
    subtitle: "Next.js 15 & TMDB API Search & Favorites",
    category: "nextjs",
    categoryLabel: "Next.js 15 & TMDB",
    description: "Movie discovery app built with Next.js 15 and TMDB API featuring real-time search, 12 movies/page pagination, detail modals, and local favorites.",
    fullDescription: [
      "Built with Next.js 15 App Router querying TMDB API endpoints with real-time movie search, poster grids, rating badges, and release dates.",
      "Includes modal detail popups, 12 movies per page strict pagination, and a slide-out favorites drawer backed by localStorage persistence."
    ],
    techStack: ["Next.js 15", "TMDB API", "Tailwind CSS", "LocalStorage API", "Vercel"],
    highlights: [
      "Real-Time Movie Search & Poster Grid Layout",
      "Movie Detail Modal & Rating Indicators",
      "Favorites Manager Persisted via LocalStorage",
      "Strict 12 Items/Page Pagination Engine"
    ],
    githubUrl: "https://github.com/smitpatel7202/movie-finder-smit",
    liveUrl: "https://movie-finder-smit.vercel.app/",
    featured: true,
    metrics: "Next.js 15 App Router & TMDB API",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    icon: "Globe"
  },
  {
    id: "proweather-live",
    title: "ProWeather Live",
    subtitle: "Real-Time OpenWeather Meteorological App",
    category: "ai",
    categoryLabel: "REST API",
    description: "Modern responsive weather application querying OpenWeather REST APIs via a lightweight backend proxy to securely handle API key credentials.",
    fullDescription: [
      "Built a production-ready weather application featuring real-time temperature, humidity, wind speed, and weather condition metrics for any global city.",
      "Includes lightweight backend server proxy for API key protection, dynamic UI updates, and mobile-first responsive styling."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Node.js", "OpenWeather API", "Netlify"],
    highlights: [
      "Real-Time Weather Data for Global Cities",
      "Secure Backend API Key Obfuscation",
      "Dynamic Atmosphere Cards & Weather Icons",
      "Hosted Live on Netlify Infrastructure"
    ],
    githubUrl: "https://github.com/smitpatel7202/proweather-live",
    liveUrl: "https://proweather-live.netlify.app",
    featured: false,
    metrics: "OpenWeather REST API & Secure Key Proxy",
    gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
    icon: "Globe"
  },
  {
    id: "todo-advanced",
    title: "To-Do App — Advanced Productivity Suite",
    subtitle: "Feature-Rich Vanilla JS Task Manager",
    category: "live",
    categoryLabel: "JavaScript & Storage",
    description: "Enhanced productivity todo application featuring inline @tag parsing, due dates, priority levels, drag-and-drop reordering, and JSON import/export.",
    fullDescription: [
      "Single-file vanilla JS productivity application with modern UI and localStorage persistence for task data and theme preferences.",
      "Supports inline @tag parsing, due date & priority filters, drag-and-drop task reordering, bulk actions, and JSON backup export/import."
    ],
    techStack: ["JavaScript (ES6+)", "HTML5", "CSS3", "LocalStorage API", "Netlify"],
    highlights: [
      "Inline @tag Parsing & Priority Levels (High/Med/Low)",
      "Drag-and-Drop Task Reordering & Bulk Actions",
      "JSON Backup Import & Export Functionality",
      "Keyboard Shortcuts & Light/Dark Theme Storage"
    ],
    githubUrl: "https://github.com/smitpatel7202",
    liveUrl: "https://to-do-aapps.netlify.app",
    featured: false,
    metrics: "LocalStorage Persistence & JSON Backup",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
    icon: "Sparkles"
  },
  {
    id: "academy-pro",
    title: "AcademyPro – E-Learning Landing Page",
    subtitle: "High-Converting Animated E-Learning Platform",
    category: "nextjs",
    categoryLabel: "Next.js & Animations",
    description: "Built a high-converting, fully responsive e-learning landing page with fluid Framer Motion animations and Next.js 14 static generation.",
    fullDescription: [
      "Built a high-converting, fully responsive e-learning landing page with fluid Framer Motion animations, TypeScript type safety, and Next.js static generation for optimal SEO and Core Web Vitals."
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "SSG"],
    highlights: [
      "Fluid Scroll Animations with Motion/Framer Motion",
      "100/100 Core Web Vitals & Static Site Generation",
      "Fully Responsive Mobile-First Design & TypeScript Safety"
    ],
    githubUrl: "https://github.com/smitpatel7202",
    liveUrl: "https://academmy-pro.vercel.app/",
    featured: false,
    metrics: "100/100 Core Web Vitals & Fluid Motion",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    icon: "GraduationCap"
  },
  {
    id: "shop-vault",
    title: "ShopVault – Auth E-Commerce Dashboard",
    subtitle: "Real-time E-Commerce Management Platform",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    description: "Developed a feature-rich e-commerce dashboard with session-persistent JWT auth, protected routes, and real-time cart management via Context API.",
    fullDescription: [
      "Developed a feature-rich e-commerce dashboard with session-persistent JWT auth, protected routes, real-time cart management via Context API, and dynamic product filtering."
    ],
    techStack: ["React.js", "Context API", "JavaScript (ES6+)", "Tailwind CSS", "JWT Auth"],
    highlights: [
      "Session-Persistent JWT Auth & Protected Route Guards",
      "Real-Time Shopping Cart State with React Context API",
      "Dynamic Multi-Facet Product Search & Filtering"
    ],
    githubUrl: "https://github.com/smitpatel7202",
    featured: false,
    metrics: "Real-time Context API & Auth Guards",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    icon: "ShoppingBag"
  },
  {
    id: "sharda-steel",
    title: "Sharda Steel – Business Website",
    subtitle: "Production Live Commercial Lead Generation Site",
    category: "live",
    categoryLabel: "Live Client Web",
    description: "Designed and deployed a live production business website with mobile-first layout, SEO, WhatsApp inquiry form, and Google Maps API.",
    fullDescription: [
      "Designed and deployed a live production business website with mobile-first responsive layout, on-page SEO, WhatsApp inquiry form, and Google Maps integration — driving real client leads."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Google Maps API", "WhatsApp API", "Netlify"],
    highlights: [
      "Live Commercial Deployment Driving Real Client Leads",
      "Google Maps API Location Integration",
      "Instant WhatsApp Inquiry Lead Generation Form",
      "Mobile-First Responsive Layout & On-Page SEO"
    ],
    githubUrl: "https://github.com/smitpatel7202",
    liveUrl: "https://shardasteel.netlify.app",
    featured: true,
    metrics: "Live In Production Driving Real Leads",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    icon: "Globe"
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 92, category: "frontend", experienceYears: "3 yrs", isTop: true },
      { name: "Next.js 14", level: 88, category: "frontend", experienceYears: "2 yrs", isTop: true },
      { name: "TypeScript", level: 85, category: "frontend", experienceYears: "2 yrs", isTop: true },
      { name: "JavaScript (ES6+)", level: 95, category: "frontend", experienceYears: "3+ yrs", isTop: true },
      { name: "Tailwind CSS", level: 92, category: "frontend", experienceYears: "3 yrs", isTop: true },
      { name: "HTML5 & CSS3", level: 96, category: "frontend", experienceYears: "4 yrs" },
      { name: "Responsive Web Design", level: 94, category: "frontend", experienceYears: "3 yrs" },
      { name: "Framer Motion", level: 86, category: "frontend", experienceYears: "2 yrs" }
    ]
  },
  {
    title: "Backend Development & MERN",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 90, category: "backend", experienceYears: "3 yrs", isTop: true },
      { name: "Express.js", level: 92, category: "backend", experienceYears: "3 yrs", isTop: true },
      { name: "RESTful API Design", level: 94, category: "backend", experienceYears: "3 yrs", isTop: true },
      { name: "JWT Authentication", level: 90, category: "backend", experienceYears: "2 yrs", isTop: true },
      { name: "RBAC & Authorization", level: 88, category: "backend", experienceYears: "2 yrs" },
      { name: "Server-Side Development", level: 88, category: "backend", experienceYears: "3 yrs" }
    ]
  },
  {
    title: "Databases & ORM",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 88, category: "database", experienceYears: "3 yrs", isTop: true },
      { name: "PostgreSQL", level: 85, category: "database", experienceYears: "2 yrs", isTop: true },
      { name: "Prisma ORM", level: 84, category: "database", experienceYears: "2 yrs", isTop: true },
      { name: "Database Design & Schema", level: 88, category: "database", experienceYears: "3 yrs" }
    ]
  },
  {
    title: "AI & External APIs",
    icon: "Cpu",
    skills: [
      { name: "Google Gemini AI API", level: 92, category: "ai", experienceYears: "1+ yr", isTop: true },
      { name: "Cloudinary API", level: 86, category: "ai", experienceYears: "2 yrs" },
      { name: "Google Maps API", level: 85, category: "ai", experienceYears: "2 yrs" },
      { name: "OpenWeather API", level: 82, category: "ai", experienceYears: "2 yrs" }
    ]
  },
  {
    title: "Tools & Deployment",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 92, category: "tools", experienceYears: "4 yrs", isTop: true },
      { name: "Vercel / Netlify / Render", level: 90, category: "tools", experienceYears: "3 yrs", isTop: true },
      { name: "VS Code & Figma", level: 94, category: "tools", experienceYears: "4 yrs" },
      { name: "Agile & Problem Solving", level: 90, category: "tools", experienceYears: "3 yrs" }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech – Information Technology",
    institution: "Silver Oak University",
    location: "Ahmedabad, Gujarat",
    duration: "2022 – 2026",
    grade: "CGPA: 8.14 / 10",
    current: true,
    highlights: [
      "Specializing in Full Stack Web Engineering, Data Structures, Database Systems & AI Software.",
      "Maintained a strong 8.14 CGPA across 8 semesters with active technical leadership.",
      "Built multiple real-world MERN and AI web applications as part of university software labs."
    ]
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "GSEB Board",
    location: "Ahmedabad, Gujarat",
    duration: "2022",
    grade: "Passed with Science & Mathematics Focus",
    current: false,
    highlights: [
      "Focused on Advanced Mathematics, Physics, and Computer Science Fundamentals."
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "ibm-ai",
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2025",
    skillsCovered: ["Artificial Intelligence", "Prompt Engineering", "Machine Learning Concepts", "AI Ethics"],
    badgeColor: "from-amber-500 to-orange-600"
  },
  {
    id: "csrbox-ibm-data",
    title: "Data Analytics – Data into Decisions",
    issuer: "CSRBOX × IBM SkillsBuild",
    year: "2025",
    skillsCovered: ["Data Analysis", "Decision Intelligence", "Data Visualization", "Business Analytics"],
    badgeColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "ibm-python-data",
    title: "Data Analysis with Python",
    issuer: "IBM SkillsBuild",
    year: "2024",
    skillsCovered: ["Python Data Stack", "Pandas", "Data Cleaning", "Statistical Modeling"],
    badgeColor: "from-emerald-500 to-teal-600"
  },
  {
    id: "gl-scraping",
    title: "Web Scraping with Python",
    issuer: "Great Learning Academy",
    year: "2024",
    skillsCovered: ["BeautifulSoup", "Automated Data Extraction", "HTML Parsing", "API Pipelines"],
    badgeColor: "from-purple-500 to-indigo-600"
  }
];
