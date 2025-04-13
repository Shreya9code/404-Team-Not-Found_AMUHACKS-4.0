import { AIDesignIdea } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    console.log("🔥 Request Received!",req);
    const {prompt}=await req.json();
    console.log("Prompt in route.js:",prompt);
    try{
        const result=await AIDesignIdea.sendMessage(prompt)
        console.log("🌐 AI Response:", result);
        const text = await result.response.text();
        console.log("Text response:", text);
        return NextResponse.json(JSON.parse(text));
    }
    catch(e)
    {
        console.error("❌ AI Error:", e);
        return NextResponse.json({error:e})
    }
}