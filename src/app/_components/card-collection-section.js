"use client";

import InvertedCorner from "@/components/shared/inverted-corner";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function CardCollectionSection() {
  return (
    <div className="grid grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 container gap-[10px]">
      <div className="row-span-1 sm:row-span-2 group bg-[#b1653b] rounded-[30px]">
        <div className="flex rounded-[30px]  h-full w-full items-center justify-center duration-300 relative transition-transform">
          <div className="py-5 px-[30px] w-full">
            <span>
              <h4 className="text-left relative leading-[1.1] max-w-[500px] text-white z-10 tracking-tighter">
                We believe biology is the future of technology
              </h4>
              <div className="w-[90%] sm:w-3/5 overflow-hidden rounded-full relative aspect-square -mt-10 mr-auto sm:mb-auto ml-auto">
                <Image
                  fill
                  src="/crystal.webp"
                  alt="crystal"
                  sizes="100%"
                  className="rounded-full group-hover:scale-110 transition-transform duration-300"
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
      <div className="cols-span-1 relative">
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
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[30px]">
          <Image
            fill
            sizes="100%"
            src="/bigideas.jpg"
            alt="bigideas"
            className="object-cover"
          />
        </div>
      </div>
      <div className="cols-span-1 rounded-[30px] bg-[#66662a]">
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
    </div>
  );
}
