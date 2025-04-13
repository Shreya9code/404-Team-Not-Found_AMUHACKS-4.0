"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "../_context/UserDetailContext";
import Prompt from "../_data/Prompt";
import axios from "axios";

function GenerateLogo() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [formData, setFormData] = useState();
  useEffect(() => {
    if (typeof window !== "undefined" && userDetail?.email) {
      const storage = localStorage.getItem("formData");
      if (storage) {
        setFormData(JSON.parse(storage));
        console.log(JSON.parse(storage));
      }
    }
  }, [userDetail]);
  useEffect(() => {
    if (formData?.title) {
      GeneratteAILogo();
    }
  }, [formData]);
  console.log(userDetail);
  console.log(formData);
  const GeneratteAILogo = async() => {
    const PROMPT = Prompt.LOGO_PROMPT.replace("{logoTitle}", formData?.title)
      .replace("{logoDesc}", formData?.desc)
      .replace("{logoColor}", formData?.palette)
      .replace("{logoDesign}", formData?.design?.title)
      .replace("{logoPrompt}", formData?.design?.prompt);
    console.log("🔥 Prompt:", PROMPT);
    //gen logo prompt
    //generate logo image
    const result=await axios.post("/api/ai-logo-model", {
      prompt: PROMPT,
    });
    console.log("🔥 AI Logo Result:", result.data);
  };
  return <div></div>;
}

export default GenerateLogo;
