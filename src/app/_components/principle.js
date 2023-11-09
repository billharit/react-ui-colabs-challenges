"use client";

import { AiOutlineArrowRight } from "react-icons/ai";

export default function Principles() {
  return (
    <div className="container h-[85vh] w-full relative">
      <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 text-[#eae9dc]">
        <ul className="flex flex-col items-center font-semibold leading-[1.15]  tracking-tighter text-center">
          <li className="-mb-[15px]">
            <h4 className="bg-[#66662a] px-5 pt-[10px] pb-[15px] rounded-[20px] whitespace-nowrap	">
              Reposition Science
            </h4>
          </li>
          <li className="-mb-[15px]">
            <h4 className="bg-[#66662a] px-5 pt-[10px] pb-[15px] rounded-[20px] whitespace-nowrap	">
              Redefine our Approach
            </h4>
          </li>
          <li className="-mb-[15px]">
            <h4 className="bg-[#66662a] px-5 pt-[10px] pb-[15px] rounded-[20px] whitespace-nowrap	">
              Rethink Entrepreneurship
            </h4>
          </li>
          <li className="-mb-[15px]">
            <h4 className="bg-[#66662a] px-5 pt-[10px] pb-[15px] rounded-[20px] whitespace-nowrap	">
              Regenerate our Planet
            </h4>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-[10px]">
          <span className="span-font bg-[#66662a] px-[15px] py-[5px] rounded-[20px]">
            Our Principle
          </span>
          <div className="bg-[#66662a] flex items-center justify-center rounded-full w-[50px] h-[50px] aspect-square">
            <AiOutlineArrowRight className="text-2xl" />
          </div>
        </div>
      </div>
      <video
        src="/homepage-cells.mp4"
        className="w-full h-[85vh] rounded-[30px] relative mx-auto object-fill"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}
