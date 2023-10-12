import React from "react";
import ControlHandle from "./ControlHandle";

const Slider = () => {
  return (
    <div className="w-[325px] h-[35px] rounded-[8px] relative">
      <div className="relative h-[8px] top-[8px] bg-gray-200 rounded-[4px]">
        <div className="relative w-[162px] h-[8px] left-[81px]">
          <div className="relative w-[187px] h-[24px] top-[-8px] left-[-12px]">
            <div className="absolute w-[163px] h-[8px] top-[8px] left-[12px] bg-blue-500 rounded-[4px]" />
            <ControlHandle
              className="!absolute !left-0 !top-0 "
              state="default"
              text="06:00AM"
              textClassName="!tracking-[0] !text-[12px] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !left-[-15px] !leading-[24px]"
              type="text"
            />
            <ControlHandle
              className="!absolute !left-[163px] !top-0"
              state="default"
              text="10:00AM"
              textClassName="!tracking-[0] !text-[12px] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !left-[-14px] !leading-[24px]"
              type="text"
            />
          </div>
          <div className="absolute bg-[#7F56D9] h-2 top-0 left-0 w-full" ></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;