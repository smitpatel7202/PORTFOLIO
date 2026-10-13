import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { getPortfolioFallbackReply, RESUME_CONTEXT } from "./src/utils/portfolioAssistant";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const GEMINI_MODELS = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-flash-latest",
  "gemini-1.5-flash",
];

app.use(express.json());

const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "smit-patel-portfolio",
      },
    },
  });
};

type ChatTurn = { sender?: string; role?: string; text?: string; content?: string };

function extractReplyText(response: any): string {
  if (!response) return "";
  if (typeof response.text === "string" && response.text.trim()) return response.text.trim();
  if (typeof response.text === "function") {
    const value = response.text();
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  const parts = response.candidates?.[0]?.content?.parts;
  if (Array.isArray(parts)) {
    const text = parts.map((part: any) => part?.text || "").join("").trim();
    if (text) return text;
  }
  return "";
}

function buildContents(message: string, history: ChatTurn[] = []) {
  const turns = Array.isArray(history) ? history.slice(-8) : [];
  const contents: { role: "user" | "model"; parts: { text: string }[] }[] = [
    {
      role: "user",
      parts: [
        {
          text: `${RESUME_CONTEXT}\n\nFollow the profile facts above. Answer only the next visitor questions with specific, non-generic replies.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Understood. I am Smit Patel's portfolio assistant. I will answer with specific facts, and I will describe Smit as a B.Tech IT graduate who completed the degree in 2026.",
        },
      ],
    },
  ];

  for (const turn of turns) {
    const text = (turn.text || turn.content || "").trim();
    if (!text) continue;
    const sender = (turn.sender || turn.role || "").toLowerCase();
    contents.push({
      role: sender === "ai" || sender === "model" || sender === "assistant" ? "model" : "user",
      parts: [{ text }],
    });
  }

  contents.push({
    role: "user",
    parts: [{ text: `Visitor question: ${message}\nGive a concise, direct, question-specific answer.` }],
  });

  return contents;
}

async function generateGeminiReply(message: string, history: ChatTurn[]) {
  const ai = getGeminiClient();
  if (!ai) return null;

  const contents = buildContents(message, history);
  let lastError: unknown = null;

  for (const model of GEMINI_MODELS) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents,
      });
      const reply = extractReplyText(response);
      if (reply) return reply;
    } catch (error) {
      lastError = error;
      console.error(`Gemini model ${model} failed:`, error);
    }
  }

  if (lastError) throw lastError;
  return null;
}

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body || {};
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = await generateGeminiReply(message.trim(), history);
    if (reply) {
      return res.json({ reply });
    }

    return res.json({
      reply: getPortfolioFallbackReply(message),
      fallback: true,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    const message = typeof req.body?.message === "string" ? req.body.message : "";
    return res.json({
      reply: getPortfolioFallbackReply(message),
      fallback: true,
    });
  }
});

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
    app.get("*", (req, res, next) => {
      if (req.path.startsWith("/api")) return next();
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
