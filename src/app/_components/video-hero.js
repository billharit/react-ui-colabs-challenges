"use client";
import InvertedCorner from "@/components/shared/inverted-corner";
import clsx from "clsx";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function VideoHero() {
  return (
    <div className=" relative overflow-hidden h-[500px] sm:h-auto w-full">
      <video
        src="/colabs-hero.mp4"
        className="h-full rounded-[30px] rounded-bl-none object-cover"
        autoPlay
        muted
        loop
      ></video>
      <div
        className={clsx(
          "absolute z-10 max-w-[300px] sm:max-w-[70%] lg:max-w-[50%] bottom-0 scroll-smooth bg-custom-white fade-in-start left-0  rounded-tr-[30px]"
        )}
      >
        <div className="relative h-full w-full pt-5 pr-5">
          <InvertedCorner
            className={"absolute bottom-0 -right-[30px] -rotate-90"}
            width={30}
            height={30}
          />
          <InvertedCorner
            className={"absolute -top-[30px] left-0 -rotate-90"}
            width={30}
            height={30}
          />
          <h1
            className="video-font leading-[1.15] tracking-tighter"
            data-fade="1"
          >
            Making
            <div className="block sm:hidden"></div> space for transformative
            innovation
          </h1>
          <Link href="#section-three" className="scroll-smooth">
            <button
              className="hidden rounded-full h-[50px] w-[50px] border border-black mt-5 sm:flex items-center justify-center"
              data-fade="2"
            >
              <AiOutlineArrowRight className="rotate-90 text-lg" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
