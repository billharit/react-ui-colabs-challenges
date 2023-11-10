import TestInview from "../_components/test-inview";
import StackingCardSection from "./_components/stacking-card-section";
import VideoServiceSection from "./_components/video-service-sections";
import WhyColabSection from "./_components/why-colabs-sections";

export default function Service() {
  return (
    <main className="pb-20">
      <div className="pt-[10px] pb-10">
        <VideoServiceSection />
      </div>
      <div className="pt-20">
        <StackingCardSection />
      </div>
      <div className="pt-20">
        <WhyColabSection />
      </div>
    </main>
  );
}
