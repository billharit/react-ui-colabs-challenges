"use client";
import InvertedCorner from "@/components/shared/inverted-corner";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { InView } from "react-intersection-observer";

export default function TwoSideCarousel() {
  const [current, setCurrent] = useState(0);
  const autoSlide = true;
  const autoSlideInterval = 4000;

  const dataList = [
    {
      tags: "Thoughts",
      header:
        "Rising to the biggest challenge of our time: Australia’s duty of care to collectively re-imagine and re-design our nation",
      paragraph:
        "A transdisciplinary, existentially hopeful response to Australia’s draft National Science and Research Priorities",
      image: "/trippy.webp",
    },
    {
      tags: "Beyond the Bench",
      header: "What are the 3 Horizons of Transformative Innovation?",
      paragraph:
        "‘Three Horizons thinking’ is a useful method for making sense of and facilitating transformative innovation.",
      image: "/budgetmountain.webp",
    },
    {
      tags: "Thoughts",
      header:
        "Why We’re Supporting the Development of a Cultivated Meat Industry In Australia",
      paragraph: "",
      image: "/ballhand.webp",
    },
    {
      tags: "News",
      header:
        "Cortical Labs Raises $15M to Scale Up BiOS, an Organic-Digital Intelligence System",
      paragraph:
        "What if Biology + Technology is the only way to make true AI?",
      image: "/brain.webp",
    },
  ];

  const next = () =>
    setCurrent((current) =>
      current === dataList.length - 1 ? 0 : current + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className="container grid grid-cols-1 sm:grid-cols-3 sm:gap-[10px]"
        >
          <div
            className={clsx(
              "sm:col-span-2 h-full w-full flex overflow-hidden rounded-t-[20px] sm:rounded-[20px] duration-300 delay-100",
              inView && "opacity-100 translate-x-0",
              !inView && "opacity-0 -translate-x-10"
            )}
          >
            {dataList.map((item, i) => (
              <div
                className="relative w-full aspect-[1.5/1]  sm:aspect-square lg:aspect-[1.5/1] shrink-0 flex transition-transform ease-out duration-500"
                key={i}
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                <Image
                  src={item.image}
                  fill
                  sizes="100%"
                  alt={item.header}
                  className="h-full object-cover transition-transform ease-out duration-500"
                />
              </div>
            ))}
          </div>
          <div
            className={clsx(
              "col-span-1 cursor-grab relative rounded-b-[20px] sm:rounded-[20px] h-full flex bg-[#eaf1fc] overflow-hidden duration-300 delay-100",
              inView && "opacity-100 translate-x-0",
              !inView && "opacity-0 translate-x-10"
            )}
          >
            {dataList.map((item, i) => (
              <div
                key={i}
                className="w-full h-full shrink-0 flex p-[30px] gap-5 flex-col transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                <div>
                  <span className="border border-black rounded-[20px] py-[5px] px-[10px]">
                    {item.tags}
                  </span>
                </div>
                <h4 className="leading-[1.1] lg:max-w-[450px] tracking-tighter font-semibold">
                  {item.header}
                </h4>
                <p className="leading-[1.15] lg:max-w-[450px] span-font tracking-tighter pb-10">
                  {item.paragraph}
                </p>
              </div>
            ))}

            <div className="absolute cursor-pointer group bottom-0 right-0 rounded-tl-[30px] z-10 bg-custom-white w-[60px] h-[60px]">
              <div className="relative h-full w-full">
                <span className="span-font absolute w-[100px] top-3 right-[80px]">
                  Read More
                </span>
                <InvertedCorner
                  className={"absolute bottom-0 -left-[20px] rotate-180"}
                  width={20}
                  height={20}
                />
                <button className="absolute bottom-0 right-0  text-white flex items-center justify-center rounded-full z-10 bg-black w-[50px] h-[50px] ">
                  <AiOutlineArrowRight className="text-lg transition-transform duration-300 group-hover:-rotate-[30deg] group-hover:text-2xl " />
                </button>
                <InvertedCorner
                  className={"absolute right-0 -top-[20px] rotate-180"}
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className="absolute bottom-[30px] left-5">
              <div className="flex items-center justify-center gap-[6px]">
                {dataList.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrent(index);
                    }}
                    className={clsx(
                      "transition-all w-7 sm:w-[22px] h-2 sm:h-[6px] rounded-full cursor-pointer",
                      current == index
                        ? "bg-[#333333]"
                        : "bg-[rgba(51,51,51,.25)]"
                    )}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
