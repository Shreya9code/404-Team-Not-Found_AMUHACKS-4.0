"use client";
import React, { useState,useEffect } from "react";
import LogoTitle from "./_components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LogoDesc from "./_components/LogoDesc";
import LogoPalette from "./_components/LogoPalette";
import LogoDesigns from "./_components/LogoDesigns";
import LogoIdea from "./_components/LogoIdea";
import PricingModel from "./_components/PricingModel";

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    //console.log("Form Data:", formData);
  };
  useEffect(() => {
    console.log("Form Data Updated:", formData);
  }, [formData]);
  
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 py-8">
      {step === 1?
        <LogoTitle onHandleInputChange={(v) => onHandleInputChange("title", v)} 
        formData={formData}/>
        : step === 2 ? <LogoDesc onHandleInputChange={(v) => onHandleInputChange("desc", v)}
        formData={formData} />:
        step === 3 ? <LogoPalette onHandleInputChange={(v) => onHandleInputChange("palette", v)}
        formData={formData} />:
        step === 4 ? <LogoDesigns onHandleInputChange={(v) => onHandleInputChange("design", v)}
        formData={formData} />:
        step === 5 ? <LogoIdea onHandleInputChange={(v) => onHandleInputChange("idea", v)}
        formData={formData} />:
        step === 6 ? <PricingModel onHandleInputChange={(v) => onHandleInputChange("pricing", v)}
        formData={formData} />:
        null}

      <div className="flex gap-4">
        {step !== 1 && (
          <Button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
          >
            <ArrowLeft />
            Previous
          </Button>
        )}

        <Button
          onClick={() => setStep(step + 1)}
          className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
        >
          Continue
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo;
