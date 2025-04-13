import React from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";

const LogoDesc = ({ onHandleInputChange,formData }) => {
  return (
    <div>
      <HeadingDescription
        title={Lookup.LogoDescTitle}
        description={Lookup.LogoDescDesc}
      />
      <input
        type="text"
        placeholder={Lookup?.InputTitlePlaceholder}
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
        onChange={(e) => onHandleInputChange(e.target.value)}
        //defaultValue={formData?.desc}
        value={formData?.desc||""} // Controlled component to reflect changes in the input field
      />
    </div>
  );
};

export default LogoDesc;
