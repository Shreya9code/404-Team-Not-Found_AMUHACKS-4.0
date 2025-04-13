import { AILogoPrompt } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json(
        { error: "No prompt provided" },
        { status: 400 }
      );
    }
    const AiPromptResult = await AILogoPrompt.sendMessage(prompt);
    const AiPromptJson = await AiPromptResult.response.text();
    const AiPrompt = JSON.parse(AiPromptJson).prompt;
    console.log("🔥 AI Prompt Result:", AiPrompt);
    return NextResponse.json({ prompt: AiPrompt });
    //ai logo img model
  } catch (error) {
    console.log("❌ Server error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
