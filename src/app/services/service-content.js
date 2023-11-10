"use client";
import { useRef } from "react";
import TestInview from "../_components/test-inview";
import StackingCardSection from "./_components/stacking-card-section";
import VideoServiceSection from "./_components/video-service-sections";
import WhyColabSection from "./_components/why-colabs-sections";

export default function ServiceContent() {
  const sectionTwoRef = useRef(null);

  const scrollToSectionTwoRef = () => {
    if (sectionTwoRef.current) {
      sectionTwoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <main className="pb-20">
      <div className="pt-[10px] pb-10">
        <VideoServiceSection scrollToSectionTwoRef={scrollToSectionTwoRef} />
      </div>
      <div className="pt-20" ref={sectionTwoRef}>
        <StackingCardSection />
      </div>
      <div className="pt-20">
        <WhyColabSection />
      </div>
    </main>
  );
}
