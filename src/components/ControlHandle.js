/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

const ControlHandle = ({ state, type, className, textClassName, text = "0%" }) => {
  return (
    <div
      className={`z-10 w-[24px] h-[24px] rounded-[12px] bg-white ${["text", "tooltip"].includes(type) ? "relative" : ""
        } ${className}`}
    >
      {["text", "tooltip"].includes(type) && (
        <>
          <div
            className={`border-[1.5px] border-solid border-[#7F56D9] w-[24px] left-0 top-0 h-[24px] rounded-[12px] bg-white absolute ${state === "focused" ? "shadow-shadow-sm-focused-4px-primary-100" : "shadow-shadow-md"
              }`}
          />
          <div
            className={`absolute ${type === "tooltip" ? "inline-flex" : ""} ${type === "text" ? "[font-style:var(--text-md-medium-font-style)]" : ""
              } ${type === "tooltip" ? "items-center" : ""} ${type === "tooltip" ? "top-[-42px]" : "top-[30px]"} ${type === "text" ? "text-gray-900" : ""
              } ${type === "tooltip" ? "shadow-shadow-lg" : ""} ${type === "text" ? "leading-[var(--text-md-medium-line-height)]" : ""
              } ${type === "text" ? "font-text-md-medium" : ""} ${type === "tooltip" ? "flex-col" : ""} ${type === "text" ? "font-[number:var(--text-md-medium-font-weight)]" : ""
              } ${type === "text" ? "text-center" : ""} ${type === "text" ? "whitespace-nowrap" : ""} ${type === "text" ? "text-[length:var(--text-md-medium-font-size)]" : ""
              } ${type === "tooltip" ? "left-[-10px]" : "left-0"} ${type === "text" ? "tracking-[var(--text-md-medium-letter-spacing)]" : ""
              } ${type === "text" ? "h-[24px]" : ""} ${textClassName}`}
          >
            {type === "text" && <>{text}</>}

            {type === "tooltip" && (
              <div className="border border-solid border-gray-200 w-full flex self-stretch flex-col items-start flex-[0_0_auto] px-[12px] py-[8px] rounded-[8px] bg-basewhite relative">
                <div className="font-text-xs-semibold w-fit mt-[-1.00px] tracking-[var(--text-xs-semibold-letter-spacing)] text-[length:var(--text-xs-semibold-font-size)] [font-style:var(--text-xs-semibold-font-style)] text-gray-700 relative font-[number:var(--text-xs-semibold-font-weight)] text-center whitespace-nowrap leading-[var(--text-xs-semibold-line-height)]">
                  {text}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {type === "false" && (
        <div
          className={`border-[1.5px] border-solid border-primary-600 h-[24px] rounded-[12px] bg-basewhite ${state === "focused" ? "shadow-shadow-sm-focused-4px-primary-100" : "shadow-shadow-md"
            }`}
        />
      )}
    </div>
  );
};



export default ControlHandle;