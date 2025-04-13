import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import Colors from "@/app/_data/Colors";

const LogoPalette = ({onHandleInputChange,formData}) => {
  const [selectedOption, setSelectedOption] = useState(formData?.palette);
  return (
    <div>
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />
      <div className="grid grid-cols-2 gap-4 mt-4">
        {Colors.map((palette, index) => (
          <div
            key={index}
            onClick={() => setSelectedOption(palette.name)} // Set the palette name when clicked
            className={`flex p-1 cursor-pointer ${
              selectedOption === palette.name ? 'border rounded-lg border-primary' : ''
            }`}
          >
            {palette.colors.map((color, index) => (
              <div
                key={index}
                className="h-24 w-full"
                onClick={()=>{setSelectedOption(palette.name)
                  onHandleInputChange(palette.name)
                }}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoPalette;
