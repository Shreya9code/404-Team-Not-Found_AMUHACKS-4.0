// src/configs/AiModel.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const AIDesignIdea = {
  sendMessage: async (prompt) => {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    });
    const response = result.response;

    const text = await response.text();
    console.log("Raw AI response text:", text);
    // ✅ Clean and extract JSON from markdown
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    let ideas = [];

    try {
      const json = JSON.parse(cleaned);
      //ideas = json.logo_ideas?.map((idea) => idea.description) || [];
      // ✅ If it's an object with 'logo_ideas'
      if (json.logo_ideas) {
        ideas = json.logo_ideas;
      }

      // ✅ If it's an array of objects like { idea: "..." }
      else if (Array.isArray(json)) {
        ideas = json.map((item) => item.idea).filter(Boolean);
      }
    } catch (e) {
      console.error("Failed to parse JSON from AI response:", e);
    }

    // Assume each idea is on a separate line
    /*const ideas = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);*/

    return {
      response: {
        text: () => JSON.stringify({ ideas }),
      },
    };
  },
};
