"use client";

import clsx from "clsx";
import { AiOutlineArrowRight } from "react-icons/ai";
import { InView } from "react-intersection-observer";

export default function Principles() {
  return (
    <div className="container h-[85vh] w-full relative">
      <InView triggerOnce threshold={1}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 text-[#eae9dc]"
          >
            <ul className="flex flex-col items-center font-semibold leading-[1.15]  tracking-tighter text-center">
              <li
                className={clsx(
                  "-mb-[15px] duration-700 delay-100 ",
                  !inView && "opacity-0 -translate-y-10",
                  inView && "translate-y-0 opacity-100"
                )}
              >
                <h4 className="bg-[#66662a] px-5 pt-[10px] pb-[15px] rounded-[20px] whitespace-nowrap">
                  Reposition Science
                </h4>
              </li>
              <li
                className={clsx(
                  "-mb-[15px] duration-700 delay-200 ",
                  !inView && "opacity-0 -translate-y-10",
                  inView && "translate-y-0 opacity-100"
                )}
              >
                <h4 className="bg-[#66662a] px-5 pt-[10px] pb-[15px] rounded-[20px] whitespace-nowrap">
                  Redefine our Approach
                </h4>
              </li>
              <li
                className={clsx(
                  "-mb-[15px] duration-700 delay-300",
                  !inView && "opacity-0 -translate-y-10",
                  inView && "translate-y-0 opacity-100"
                )}
              >
                <h4 className="bg-[#66662a] px-5 pt-[10px] pb-[15px] rounded-[20px] whitespace-nowrap">
                  Rethink Entrepreneurship
                </h4>
              </li>
              <li
                className={clsx(
                  "-mb-[15px] duration-700 delay-[400ms] ",
                  !inView && "opacity-0 -translate-y-10",
                  inView && "translate-y-0 opacity-100"
                )}
              >
                <h4 className="bg-[#66662a] px-5 pt-[10px] pb-[15px] rounded-[20px] whitespace-nowrap">
                  Regenerate our Planet
                </h4>
              </li>
            </ul>
            <div
              className={clsx(
                "-mb-[15px] duration-700 delay-500 flex items-center justify-center gap-[10px]",
                !inView && "opacity-0 -translate-y-10",
                inView && "translate-y-0 opacity-100"
              )}
            >
              <span className="span-font bg-[#66662a] px-[15px] py-[5px] rounded-[20px]">
                Our Principle
              </span>
              <div className="bg-[#66662a] flex items-center justify-center rounded-full w-[50px] h-[50px] aspect-square">
                <AiOutlineArrowRight className="text-2xl" />
              </div>
            </div>
          </div>
        )}
      </InView>

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
