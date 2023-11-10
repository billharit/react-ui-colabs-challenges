"use client";
import InvertedCorner from "@/components/shared/inverted-corner";
import clsx from "clsx";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { InView } from "react-intersection-observer";

export default function CommunityList() {
  const dataList = [
    {
      tags: "Thoughts",
      tagColor: "#d9db4d",
      header:
        "Rising to the biggest challenge of our time: Australia’s duty of care to collectively re-imagine and re-design our nation",
      paragraph:
        "A transdisciplinary, existentially hopeful response to Australia’s draft National Science and Research Priorities",
      image: "/trippy.webp",
    },
    {
      tags: "Beyond the Bench",
      tagColor: "#32c58b",
      header: "What are the 3 Horizons of Transformative Innovation?",
      paragraph:
        "‘Three Horizons thinking’ is a useful method for making sense of and facilitating transformative innovation.",
      image: "/budgetmountain.webp",
    },
    {
      tags: "Thoughts",
      tagColor: "#d9db4d",
      header:
        "Why We’re Supporting the Development of a Cultivated Meat Industry In Australia",
      paragraph: "",
      image: "/ballhand.webp",
    },
  ];
  return (
    <InView triggerOnce threshold={0.4}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className="w-full container narrow flex justify-between flex-wrap lg:flex-nowrap"
        >
          <div
            className={clsx(
              "w-[200px] flex-shrink-0 pb-[15px] duration-300 delay-100",
              inView && "opacity-100 translate-x-0",
              !inView && "opacity-0 -translate-x-10"
            )}
          >
            <span className="rounded-[20px] py-[5px] px-[10px] border border-black">
              Community
            </span>
          </div>
          <div className="grid sm:grid-cols-3 w-full gap-[10px] ">
            {dataList.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "col-span-1 cursor-pointer duration-300 group hover:delay-0 hover:-translate-y-2 flex flex-col",
                  inView && "opacity-100 translate-y-0",
                  !inView && "opacity-0 -translate-y-10"
                )}
                style={{ transitionDelay: `${100 + 100 * (index + 1)}ms` }}
              >
                <div className="aspect-[1.5/1] sm:aspect-square mb-[10px] rounded-[30px] overflow-hidden relative">
                  <div className="p-[15px] relative z-10">
                    <span
                      className={`rounded-[20px] z-10 py-[5px] px-[10px] text-lg font-medium text-black bg-[${item.tagColor}]`}
                    >
                      {item.tags}
                    </span>
                  </div>
                  <Image
                    src={item.image}
                    fill
                    sizes="100%"
                    alt={item.header}
                    className="h-full group-hover:scale-105 object-cover transition-transform ease-out duration-500"
                  />
                  <div className="absolute bottom-0 right-0 rounded-tl-[30px] z-10 bg-custom-white w-[60px] h-[60px]">
                    <div className="relative h-full w-full">
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
                </div>
                <div>
                  <h4 className="mb-[15px] leading-[1.1] tracking-tighter">
                    {item.header}
                  </h4>
                  <p className="leading-[1.1] tracking-tighter span-font">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </InView>
  );
}
