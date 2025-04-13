import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import LogoDesign from "@/app/_data/LogoDesign";
import Image from "next/image";

const LogoDesigns = ({ onHandleInputChange,formData }) => {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title);

  return (
    <div>
      <HeadingDescription
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {LogoDesign.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design); // Pass the selected design title to parent
            }}
            className={`cursor-pointer p-4 transition-all duration-300 ${
              selectedOption === design.title
                ? "border-4 border-primary rounded-lg"
                : "hover:scale-105 hover:border-2 hover:border-gray-300"
            }`}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h4 className="text-center text-lg font-semibold">{design.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoDesigns;
