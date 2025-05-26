import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.5-flash-latest";
const BOT_NAME = "Portfolio Bot"; // Or fetch from env if you prefer

if (!GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not defined in environment variables");
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

const pareshInfoPlaceholder =
  "Paresh is a passionate software developer with expertise in Next.js, TypeScript, and building AI-powered applications. He has worked on several innovative projects and is always eager to learn new technologies. More details: [Link to resume or about section if available, otherwise leave as is]";

export async function POST(request: NextRequest) {
  try {
    const { question, history: incomingHistory } = await request.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json({ error: "Invalid question" }, { status: 400 });
    }

    // Transform history
    const chatHistory = [
      {
        role: "user",
        parts: [
          {
            text: `You are a friendly and helpful AI assistant for Paresh's portfolio website. Your name is '${BOT_NAME}'. You should answer questions about Paresh, his skills, projects, and experiences based on the following information: ${pareshInfoPlaceholder}. If a question is outside this scope, politely decline to answer or say you don't have that information.`,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay, I understand! I'm Portfolio Bot, ready to help answer questions about Paresh based on the information provided.",
          },
        ],
      },
    ];

    if (Array.isArray(incomingHistory)) {
      incomingHistory.forEach((message: { from: string; text: string }) => {
        if (message.from === "You") {
          chatHistory.push({ role: "user", parts: [{ text: message.text }] });
        } else if (message.from === BOT_NAME) {
          chatHistory.push({ role: "model", parts: [{ text: message.text }] });
        }
      });
    }

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 1000, // Adjust as needed
        temperature: 0.7, // Adjust as needed
      },
      // safetySettings: [ // Optional: configure safety settings
      //   {
      //     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      //   },
      // ],
    });

    const result = await chat.sendMessage(question);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ answer: text });
  } catch (error) {
    console.error("Error in ask-bot route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
