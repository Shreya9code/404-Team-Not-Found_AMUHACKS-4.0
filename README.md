# PixelForge

**PixelForge** is an AI-powered logo generation platform built during  AMUHACKS 4.0 that enables anyone to create unique, professional-grade logos by simply describing their brand in natural language. Whether you're an entrepreneur, designer, or student, PixelForge brings powerful design tools to your fingertips — no experience required.

---

## 🔍 Description

PixelForge solves the problem of expensive, time-consuming, and skill-intensive logo design. With just a short text prompt describing your brand's personality, vision, and style, our platform generates high-quality, personalized logos using generative AI models.

---

## ⚙️ Proposed System

The platform uses a prompt-to-image pipeline that works as follows:
1. The user provides a textual brand description.
2. The system processes the input with an LLM to create a suitable design prompt.
3. That prompt is passed to an image generation model (like FLUX.1 or FastAI).
4. The generated logo is displayed and can be saved or downloaded.

**Tech Features:**
- AI-powered logo prompt generation.
- Image generation via Hugging Face model inference.
- Firebase Firestore for storing logos.
- Built with Next.js, Tailwind CSS, and Axios.

---

## ⚠️ Existing System and Drawbacks

### Existing Tools:
- Canva, Looka, Wix Logo Maker, Photoshop, etc.

### Limitations:
- Mostly template-based with minimal originality.
- Requires manual editing and design sense.
- Often gated behind premium subscriptions.
- Generic outputs with limited customization.

**PixelForge** eliminates these issues by:
- Using pure generative AI (not templates).
- Allowing full customization via natural language.
- Delivering original and unique logo designs instantly.
- Being free and open to all.

---

## 💡 Key Use Cases

- New startups looking for instant brand identity.
- Students creating logos for academic or personal projects.
- Freelancers needing fast and creative logo solutions.
- Hackathon teams needing a brand logo on the fly.

---

## ⚔️ Challenges We Ran Into

- Parsing the AI prompt outputs when the LLM included markdown syntax (e.g., ```json blocks).
- Axios 401 errors due to misconfigured Hugging Face API keys.
- Async data handling between prompt generation and image generation.
- Firebase data structure design for organized storage.

We tackled these with detailed error logging, sanitizing prompt responses, and restructuring request payloads properly.

---

## 🧰 Technologies We Used

Next.js, Tailwind CSS, Hugging Face APIs, Axios, Firebase, Vercel, FastAI (FLUX.1), OpenRouter, JavaScript

---

## 🌍 How It Fits Engineering and Environmental Solutions Pvt: Open Track

PixelForge contributes to open innovation by:
- Democratizing design access through AI.
- Reducing dependency on manual graphic tools.
- Encouraging ethical, sustainable branding by reducing the need for physical creative resources.
- Empowering young entrepreneurs and engineers with instant brand creation tools.

---

## ▶️ Video Demo

[Watch Video on YouTube](https://youtube.com/shorts/St-xQxNbLa8?si=LSGA7an6iymgdi41)

---

## 📂 Project Structure

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
