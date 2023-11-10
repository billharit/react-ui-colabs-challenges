"use client";

import InvertedCorner from "@/components/shared/inverted-corner";
import clsx from "clsx";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { InView } from "react-intersection-observer";

export default function CardCollectionSection() {
  return (
    <InView triggerOnce threshold={0.3}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className="grid grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 container gap-[10px]"
        >
          <div
            className={clsx(
              "row-span-1 delay-100 duration-300 cursor-pointer sm:row-span-2 group bg-[#b1653b] rounded-[30px]",
              inView && "opacity-100 translate-x-0",
              !inView && "opacity-0 -translate-x-10"
            )}
          >
            <div className="flex rounded-[30px] h-full w-full items-center justify-center duration-300 relative transition-transform">
              <div className="py-5 px-[30px] w-full">
                <span>
                  <h4 className="text-left relative leading-[1.1] max-w-[500px] text-white z-10 tracking-tighter">
                    We believe biology is the future of technology
                  </h4>
                  <div className="w-3/5 overflow-hidden rounded-full relative aspect-square -mt-10 mr-auto sm:mb-auto ml-auto">
                    <Image
                      fill
                      src="/crystal.webp"
                      alt="crystal"
                      sizes="100%"
                      className="rounded-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </span>
              </div>
              <div className="absolute bottom-0 right-0 rounded-tl-[30px] z-10 bg-custom-white w-[60px] h-[60px]">
                <div className="relative w-full h-full">
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
          </div>
          <div
            className={clsx(
              "cols-span-1 cursor-pointer group relative duration-300 delay-150",
              inView && "opacity-100 translate-x-0",
              !inView && "opacity-0 translate-x-10"
            )}
          >
            <div className="flex rounded-[30px]  h-full w-full  justify-center duration-300 relative transition-transform">
              <div className="py-5 px-[30px] w-full">
                <span>
                  <h4 className="text-left relative leading-[1.1] max-w-[500px] text-white z-10 tracking-tighter">
                    Join a thriving ecosystem that supports big ideas
                  </h4>
                </span>
              </div>
              <div className="absolute bottom-0 right-0 rounded-tl-[30px] z-10 bg-custom-white w-[60px] h-[60px]">
                <div className="relative w-full h-full">
                  <InvertedCorner
                    className={"absolute bottom-0 -left-[20px] rotate-180"}
                    width={20}
                    height={20}
                  />
                  <button className="absolute bottom-0 right-0  text-white flex items-center justify-center rounded-full z-10 bg-black w-[50px] h-[50px] ">
                    <AiOutlineArrowRight className="text-lg transition-transform duration-300 group-hover:-rotate-[30deg] group-hover:scale-[1.4] " />
                  </button>
                  <InvertedCorner
                    className={"absolute right-0 -top-[20px] rotate-180"}
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[30px]">
              <Image
                fill
                sizes="100%"
                src="/bigideas.jpg"
                alt="bigideas"
                className="object-cover group-hover:scale-110 duration-300"
              />
            </div>
          </div>
          <div
            className={clsx(
              "cols-span-1 group rounded-[30px] cursor-pointer bg-[#66662a] duration-300 delay-200",
              inView && "opacity-100 translate-x-0",
              !inView && "opacity-0 translate-x-10"
            )}
          >
            <div className="flex h-full w-full  justify-center duration-300 relative transition-transform">
              <div className="py-5 px-[30px] w-full">
                <span>
                  <h4 className="text-left relative leading-[1.1] max-w-[500px] text-white z-10 tracking-tighter">
                    We’ve helped launch ideas in less than a week — let’s
                    collaborate
                  </h4>
                </span>
              </div>
              <div className="absolute bottom-0 right-0 rounded-tl-[30px] z-10 bg-custom-white w-[60px] h-[60px]">
                <div className="relative w-full h-full">
                  <InvertedCorner
                    className={"absolute bottom-0 -left-[20px] rotate-180"}
                    width={20}
                    height={20}
                  />
                  <button className="absolute bottom-0 right-0  text-white flex items-center justify-center rounded-full z-10 bg-black w-[50px] h-[50px] ">
                    <AiOutlineArrowRight className="text-lg transition-transform duration-300 group-hover:-rotate-[30deg] group-hover:scale-[1.4] " />
                  </button>
                  <InvertedCorner
                    className={"absolute right-0 -top-[20px] rotate-180"}
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
