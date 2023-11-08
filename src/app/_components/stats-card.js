"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function StatsCard() {
  const [current, setCurrent] = useState(0);

  const autoSlide = true;
  const autoSlideInterval = 4000;
  const statsList = [
    { header: 26, suffix: "", desc: "Ideas Supported" },
    { header: 5, suffix: "", desc: "Impact Scholarships Awarded" },
    {
      header: 65,
      suffix: "%",
      desc: "Of plants here double as lab assistants",
    },
    {
      header: 80,
      suffix: "%",
      desc: "Chance of running into a punny scientist",
    },
    {
      header: 2000,
      suffix: "kgs",
      desc: "Of science equipment diverted from landfill",
    },
  ];

  const next = () =>
    setCurrent((current) =>
      current === statsList.length - 1 ? 0 : current + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });
  return (
    <div className="w-full">
      <div className="sm:aspect-square rounded-[30px] sm:rounded-full flex-nowrap overflow-hidden  flex bg-[#dcb688]  relative">
        {statsList.map((item, index) => (
          <div
            key={index}
            className="py-16 sm:py-0 w-full shrink-0 flex flex-col items-center justify-center transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            <h1 className="text-center text-5xl font-bold">
              {index == current ? (
                <CountUp duration={1} end={item.header} />
              ) : (
                item.header
              )}
              {item.suffix}
            </h1>
            <span className="max-w-[180px] sm:max-w-none text-center sm:text-base lg:text-lg sm:px-4 lg:px-8">
              {item.desc}
            </span>
          </div>
        ))}
        <div className="absolute flex items-center sm:block right-[20px] top-0 bottom-0 sm:bottom-[30px] sm:top-auto sm:right-0 sm:left-0">
          <div className="flex rotate-90 translate-x-1/2 sm:translate-x-0 sm:rotate-0 items-center justify-center gap-2">
            {statsList.map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrent(index);
                }}
                className={clsx(
                  "transition-all w-4 h-4 sm:w-[10px] sm:h-[10px]  rounded-full cursor-pointer",
                  current == index ? "bg-[#333333]" : "bg-[rgba(51,51,51,.25)]"
                )}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
