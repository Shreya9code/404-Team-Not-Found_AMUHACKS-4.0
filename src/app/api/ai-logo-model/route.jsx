import { AILogoPrompt } from "@/configs/AiModel";
import axios from "axios";
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
    const responseText = AiPromptJson.replace(/```json|```/g, "").trim();
    const AiPrompt = JSON.parse(responseText).prompt;
    console.log("🔥 AI Prompt Result:", AiPrompt);
    //generate logo frm aimodel
    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-dev"
    );
    AiPrompt,
      {
        headers: {
          Authorization: "Bearer "+ process.env.HUGGINGFACE_API_KEY,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      };
    //convert to base64 img
    const base64Image = Buffer.from(response.data, "binary").toString("base64");
    const imageUrl = `data:image/png;base64,${base64Image}`;
    console.log("🔥 AI Logo Image URL:", imageUrl);

    return NextResponse.json({image:imageUrl}); //return image url
    //ai logo img model
  } catch (error) {
    console.log("❌ Server error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
