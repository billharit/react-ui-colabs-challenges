"use client";
import InvertedCorner from "@/components/shared/inverted-corner";
import { AiOutlineArrowRight } from "react-icons/ai";
import clsx from "clsx";
import useLoaded from "@/hooks/use-loaded";
import Link from "next/link";

export default function VideoServiceSection({ scrollToSectionTwoRef }) {
  const isLoaded = useLoaded();

  return (
    <div className={clsx("container", isLoaded && "fade-in-start")}>
      <div data-fade="1" className=" relative overflow-hidden ">
        <video
          src="/vortex.mp4"
          className="rounded-[30px] w-full  h-[95vh] rounded-bl-none object-cover"
          autoPlay
          muted
          loop
        ></video>
        <div
          className={clsx(
            "absolute z-10 max-w-[300px] sm:max-w-[760px] bottom-0 bg-custom-white fade-in-start left-0  rounded-tr-[30px]"
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
              Co-Labs gives people a place to experiment and create
            </h1>

            <button
              onClick={scrollToSectionTwoRef}
              className="hidden rounded-full h-[50px] w-[50px] border border-black mt-5 sm:flex items-center justify-center"
              data-fade="2"
            >
              <AiOutlineArrowRight className="rotate-90 text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
