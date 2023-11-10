"use client";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import clsx from "clsx";
import InvertedCorner from "@/components/shared/inverted-corner";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function CommunityCard() {
  const [current, setCurrent] = useState(0);

  const autoSlide = true;
  const autoSlideInterval = 4000;
  const cardList = [
    {
      description: "A Field Guide to <em>Transdisciplinary Innovation</em>.",
    },
    {
      description:
        "<em>Triskelion</em>. A monthly newsletter covering biotech news and articles from within the Co-",
    },
    {
      description:
        "Why We're Supporting the Development of a <em>Cultivated Meat</em> Industry in Australia",
    },
    { description: "Why We Need to Rethink Our <em>Worldview.</em>" },
    { description: "<em>Biomimicry:</em> Learning from Nature's Genius" },
    {
      description: "<em>Ecoliteracy:</em> Our Key to a Sustainable Future",
    },
  ];
  const next = () =>
    setCurrent((current) =>
      current === cardList.length - 1 ? 0 : current + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });
  return (
    <div
      data-fade-left="3"
      className="group w-full flex relative overflow-hidden sm:h-full h-full min-h-[220px]  bg-[#32c58b] rounded-[30px] row-span-2 sm:min-h-[140px]"
    >
      {cardList.map((item, i) => (
        <div
          key={i}
          className="w-full h-40 shrink-0 flex flex-col p-5 transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          <h5 className="max-w-[250px] sm:px-0 custom-em tracking-tighter text-[21px] lg:text-2xl font-semibold">
            {parse(item.description)}
          </h5>
        </div>
      ))}
      <div className="absolute bottom-[30px]  left-5">
        <div className="flex items-center justify-center gap-[6px]">
          {cardList.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrent(index);
              }}
              className={clsx(
                "transition-all w-7 sm:w-[22px] h-2 sm:h-[6px] rounded-full cursor-pointer",
                current == index ? "bg-[#333333]" : "bg-[rgba(51,51,51,.25)]"
              )}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 rounded-tl-[30px] z-10 bg-custom-white w-[60px] h-[60px]">
        <div className="relative w-full h-full">
          <InvertedCorner
            className={"absolute bottom-0 -left-[20px] rotate-180"}
            width={20}
            height={20}
          />
          <button className="absolute bottom-0 right-0 text-white flex items-center justify-center rounded-full z-10 bg-black w-[50px] h-[50px] ">
            <AiOutlineArrowRight className="text-lg group-hover:-rotate-[30deg] group-hover:text-2xl transition-transform duration-300" />
          </button>
          <InvertedCorner
            className={"absolute right-0 -top-[20px] rotate-180"}
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
