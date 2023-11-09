"use client";

import dynamic from "next/dynamic";

const Jarallax = dynamic(() => import("@/components/shared/jarallax"), {
  ssr: false,
});
import JarallaxImage from "@/components/shared/jarallax-image";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ContactUsSection() {
  return (
    <div className="flex container gap-[10px]">
      <div className="rounded-[30px] w-full">
        <Jarallax
          speed={0.8}
          className="w-full h-full rounded-[30px] overflow-hidden"
        >
          <JarallaxImage src="/doctor.jpg" alt="doctor" />
        </Jarallax>
      </div>
      <div className="rounded-[30px] shrink-0 w-3/5 bg-[#0046c7] p-[30px] flex flex-col justify-between">
        <h3 className="leading-[1.1] tracking-tighter text-white font-semibold">
          An ecosystem to be part of. <br /> Stay in the loop.
        </h3>
        <div className="py-[25px] relative">
          <input
            type="email"
            className="w-full bg-white p-5 rounded-[20px] "
            placeholder="Your Email Address"
          />
          <div className="mt-4 group cursor-pointer flex gap-6 items-center justify-end">
            <span className="span-font text-white">Subscribe</span>
            <button className=" text-white flex items-center justify-center rounded-full z-10 bg-black w-[50px] h-[50px] ">
              <AiOutlineArrowRight className="text-lg group-hover:-rotate-[30deg] group-hover:text-2xl transition-transform duration-300" />
            </button>
          </div>
        </div>
        <p className="max-w-[500px] span-font text-white">
          Subscribe for updates, news, events, and community resources.
        </p>
      </div>
    </div>
  );
}
