"use client";
import React, { useState, useEffect } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import { useSearchParams } from "next/navigation";

const LogoTitle = ({ onHandleInputChange, formData }) => {
  const searchParams = useSearchParams();
  const [title, setTitle] = useState(
    searchParams?.get("title") ?? formData?.title ?? ""
  );
  // Sync the title in local state with formData.title
  useEffect(() => {
    setTitle(formData.title ?? "");
  }, [formData?.title]);

  return (
    <div>
      <HeadingDescription
        title={Lookup?.LogoTitle}
        description={Lookup?.LogoTitleDesc}
      />
      <input
        type="text"
        placeholder={Lookup?.InputTitlePlaceholder}
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          onHandleInputChange(e.target.value); // ✅ Only pass the value
        }}
      />
    </div>
  );
};

export default LogoTitle;
