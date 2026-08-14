# Smit Patel | Full Stack Developer Portfolio

A modern, high-end personal portfolio for Smit Patel built with React, TypeScript, Vite, Node.js, Express, and Gemini AI integration. The project showcases developer experience, projects, certifications, skills, resume access, direct contact actions, and an AI-powered assistant that answers portfolio-related questions.

<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/Gemini-AI-8A2BE2?style=for-the-badge&logo=google" alt="Gemini AI" />
</div>

## Live Demo

- Portfolio Website: https://portfolio-ya16.onrender.com/
- GitHub: https://github.com/smitpatel7202/PORTFOLIO
## Overview

This portfolio is designed for:

- recruiters evaluating technical skills quickly
- clients looking for a full-stack developer or freelancer
- hiring managers viewing work samples and stack expertise
- users who want to ask AI-driven questions about the developer's experience

It includes:

- a premium editorial design layout
- animated hero section and sections for about, projects, skills, and certifications
- direct contact methods for email and phone
- WhatsApp and call options for communication
- a Gemini-powered AI assistant that answers what the project does, skills, education, and experience
- a downloadable resume modal

## Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind-like dark theme styling with custom UI patterns
- Framer Motion / Motion library for animations
- Lucide React icons
- Canvas-based background effects and micro-interactions

### Backend
- Node.js
- Express
- Gemini AI API via Google GenAI SDK

### Features
- Portfolio sections with portfolio-specific data stored in typed data files
- direct mailto links for direct communication
- AI chat endpoint for user questions
- app-friendly contact flow for mobile and desktop

## Project Structure

```bash
.
├── src/
│   ├── components/
│   ├── data/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── types.ts
├── server.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .env.example
├── .gitignore
├── index.html
├── README.md
└── metadata.json
```

## Features Included

### Portfolio Experience
- About section with bio and summary
- Projects showcase with clear project cards and details
- Skills + stack display
- Education and certification timeline
- Resume modal
- Contact section with direct email and phone access

### AI Assistant
- Chat feature available from the navbar and hero CTA
- Uses Gemini API to answer questions related to:
  - developer skills
  - project experience
  - education and certifications
  - contact information
  - technical capabilities

### Professional UX
- responsive layout for mobile, tablet, laptop, and desktop
- premium black/white UI aesthetic
- motion-based polish and user interaction feedback
- accessible buttons, contact flows, and navigation

## Prerequisites

Before running locally, make sure you have:

- Node.js 18+ or 20+
- npm or pnpm
- a Google Gemini API key

## Local Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/your-portfolio-repo.git
cd your-portfolio-repo
```

2. Install dependencies

```bash
npm install
```

3. Create environment file

```bash
cp .env.example .env
```

Then update `.env` with your values:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

4. Run the app locally

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Production Build

```bash
npm run build
```

This creates the production bundle for deployment.

## Deployment Options

### Recommended for this project
This portfolio includes a custom Express API for the Gemini chat route, so the best deployment targets are:

- Render
- Railway
- Vercel with a proper Node server setup
- a custom VPS / Linux server

### Netlify note
Netlify is good for pure static sites, but this project currently uses a custom backend API and Node server, so Netlify is only recommended if you convert the API into serverless functions or move the AI logic elsewhere.

For a portfolio like this, a Node-capable host is usually the best option.

## GitHub Workflow

### 1. Initialize repo

```bash
git init
git add .
git commit -m "Initial portfolio release"
```

### 2. Create a new GitHub repository

- Go to GitHub
- Click New repository
- Name it something like:
  - `smit-patel-portfolio`
  - `smit-patel-dev-portfolio`
  - `smit-patel-full-stack-portfolio`

### 3. Link the repo

```bash
git branch -M main
git remote add origin https://github.com/yourusername/your-portfolio-repo.git
git push -u origin main
```

### 4. Replace the old portfolio

If you already have an old portfolio repo and do not want two portfolios:

- delete the old repo, or
- archive it and keep it only as a previous version
- use the new repo as the official one

Best practice:

- keep only the latest portfolio repository active
- use your current portfolio URL as the primary online identity

## Recommended Live Deployment Steps

### Option A — Render (most straightforward for this project)

1. Push the repo to GitHub
2. Open Render dashboard
3. Click New + > Web Service
4. Connect your GitHub repo
5. Choose the correct repository
6. Set the build config:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`
7. Add environment variable:
   - `GEMINI_API_KEY`
8. Deploy
9. Copy the live URL

### Option B — Vercel

1. Push repo to GitHub
2. Import project in Vercel
3. Set framework as Vite or generic Node app
4. Add environment variable:
   - `GEMINI_API_KEY`
5. Deploy

### Option C — Netlify

Use this only if the app is refactored to static frontend with external API hosting or serverless functions.

## Security Notes

- never commit `.env` files
- keep the Gemini API key in the deployment dashboard environment variables
- use `.gitignore` to keep secrets out of GitHub

## Future Improvements

- add a real backend email sending service for contact form submissions
- add analytics and visitor tracking
- add blog or insights section
- add case-study deep dives for each project
- add custom domain and SEO optimization

## Author

Smit Patel

Full Stack Developer • MERN Stack • AI Integrations

## License

This project is for personal portfolio use.

If you plan to publish or reuse it, please credit the original author and keep the portfolio branding consistent.
