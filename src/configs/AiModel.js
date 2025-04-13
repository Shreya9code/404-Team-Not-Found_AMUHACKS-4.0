// src/configs/AiModel.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// Generation config (optional, for temperature etc.)
const generationConfig = {
  temperature: 0.7,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048,
};
export const AIDesignIdea = {
  sendMessage: async (prompt) => {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent({
      contents: [
        {
          parts: [{ text: prompt }],
          role: "user",
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

    return {
      response: {
        text: () => JSON.stringify({ ideas }),
      },
    };
  },
};
export const AILogoPrompt = genAI
  .getGenerativeModel({ model: "gemini-1.5-flash" })
  .startChat({
    generationConfig: { temperature: 0.9 },
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Generate a text prompt to create Logo for Logo Title/Brand name : CureMe,with description: healthcare, with Color combination of Forest Greens, also include the {logoIdea} and include Vintage Logo Designs With Text & Icon design idea and Referring to this Logo Prompt:Design a collection of vintage-inspired logos with a hand-drawn, artistic style. Incorporate a variety of themes, including food, animals, characters, and unique brand elements. Each logo should feature bold typography, intricate details, and a retro aesthetic that is versatile and suitable for diverse brands or businesses.  Give me result in JSON portal with prompt field only",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: 'The user wants a JSON output containing a single field named "prompt".\nThis prompt should be designed to generate a logo for the brand "CureMe".\n\nHere\'s a breakdown of the requirements for the logo prompt:\n1.  **Logo Title/Brand name:** CureMe\n2.  **Description:** healthcare\n3.  **Color combination:** Forest Greens\n4.  **Logo Idea Placeholder:** {logoIdea} (needs to be included literally)\n5.  **Design Style:** Vintage Logo Designs With Text & Icon\n6.  **Reference Prompt Inspiration:** The provided prompt emphasizes vintage, hand-drawn, artistic style, bold typography, intricate details, retro aesthetic, versatility, and suitability for diverse brands. It also mentions themes like food, animals, characters, unique brand elements.\n\n**Drafting the Prompt:**\n\n*   Start with the core request: "Design a vintage-inspired logo..."\n*   Specify the brand name: "...for the healthcare brand \'CureMe\'."\n*   Incorporate the required style: "The logo should follow a Vintage Logo Designs With Text & Icon approach, featuring a hand-drawn, artistic style with intricate details and a retro aesthetic."\n*   Mention the color palette: "Utilize a color palette dominated by Forest Greens."\n*   Include the icon/element description, incorporating the placeholder: "The central element should be an icon representing {logoIdea}, clearly linking to healthcare." (Need to make sure {logoIdea} fits naturally). Maybe phrase it as "The icon should represent {logoIdea} and clearly relate to the healthcare theme."\n*   Add typography details inspired by the reference: "Employ bold, vintage typography for the brand name \'CureMe\'."\n*   Ensure versatility (from reference): "The overall design should feel trustworthy, established, and versatile."\n*   Combine and refine.\n\n**Refined Prompt Draft 1:**\n"Design a vintage-inspired logo for the healthcare brand \'CureMe\'. The logo must adhere to a Vintage Logo Designs With Text & Icon style, featuring a hand-drawn, artistic look with intricate details and a retro aesthetic. Use a color palette primarily consisting of Forest Greens. The central icon should represent {logoIdea} and clearly connect to the healthcare theme. Incorporate bold, vintage typography for the name \'CureMe\'. The final logo should evoke trustworthiness and feel established yet versatile."\n\n**Checking against requirements:**\n1.  Logo Title/Brand name: CureMe - Yes\n2.  Description: healthcare - Yes\n3.  Color combination: Forest Greens - Yes\n4.  Logo Idea Placeholder: {logoIdea} - Yes\n5.  Design Style: Vintage Logo Designs With Text & Icon - Yes\n6.  Reference Prompt Inspiration: Vintage, hand-drawn, artistic, intricate details, retro, bold typography, versatile - Yes\n\n**Formatting as JSON:**\nThe final output needs to be a JSON object with a single key "prompt" and the generated prompt string as its value.\n\n```json\n{\n  "prompt": "Design a vintage-inspired logo for the healthcare brand \'CureMe\'. The logo must adhere to a Vintage Logo Designs With Text & Icon style, featuring a hand-drawn, artistic look with intricate details and a retro aesthetic. Use a color palette primarily consisting of Forest Greens. The central icon should represent {logoIdea} and clearly connect to the healthcare theme. Incorporate bold, vintage typography for the name \'CureMe\'. The final logo should evoke trustworthiness and feel established yet versatile."\n}\n```\nThis looks correct and fulfills all requirements.',
          },
          {
            text: "```json\n{\n  \"prompt\": \"Design a vintage-inspired logo for the healthcare brand 'CureMe'. The logo must follow a 'Vintage Logo Designs With Text & Icon' style, featuring a hand-drawn, artistic feel with intricate details and a retro aesthetic. The primary color palette should consist of Forest Greens. Incorporate a central icon representing {logoIdea} that clearly relates to healthcare. Use bold, vintage typography for the brand name 'CureMe'. The overall design should convey trustworthiness and feel established, suitable for a healthcare service, drawing inspiration from classic, hand-crafted logo styles.\"\n}\n```",
          },
        ],
      },
    ],
  });
