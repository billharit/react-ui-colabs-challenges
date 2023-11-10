"use client";
import dynamic from "next/dynamic";
import JarallaxImage from "@/components/shared/jarallax-image";
import { AiOutlineArrowRight } from "react-icons/ai";
import InvertedCorner from "@/components/shared/inverted-corner";

const Jarallax = dynamic(() => import("@/components/shared/jarallax"), {
  ssr: false,
});

export default function ContactCard() {
  return (
    <div
      data-fade-left="2"
      className="group w-full h-full relative rounded-[30px] rounded-tl-none min-h-[170px]"
    >
      <h5 className="absolute text-white top-4 left-4 font-semibold z-10 text-[21px] tracking-tighter sm:text-2xl">
        Join the Lab
      </h5>

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
      <Jarallax
        speed={0.8}
        className="w-full h-full rounded-[30px] overflow-hidden"
      >
        <JarallaxImage src="/dragonfly.jpg" alt="dragonfly" />
      </Jarallax>
    </div>
  );
}
