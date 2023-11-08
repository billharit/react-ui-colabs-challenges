import Image from "next/image";
import VideoHero from "./_components/video-hero";
import StatsCard from "./_components/stats-card";
import TestInview from "./_components/test-inview";
import ContactCard from "./_components/contact-card";
import CommunityCard from "./_components/community-card";

export const metadata = {
  title: "Colabs - Making space for transformative innovation.",
  description: "This is the home pages of Colabs",
};

export default function Home() {
  return (
    <main className="container flex min-h-screen bg-custom-white flex-col items-center ">
      <section
        id="section-one"
        className="pt-16 lg:pt-[10px] w-full h-auto sm:h-[95vh] min-h-[630px] gap-[10px] justify-between flex flex-col sm:flex-row"
      >
        <VideoHero />
        <div className="sm:w-[200px] lg:w-[270px] gap-[10px] shrink-0 flex flex-col items-center">
          <StatsCard />
          <div className="grid grid-rows-2 sm:grid-rows-3 gap-[10px] items-center h-full w-full ">
            <ContactCard />
            <CommunityCard />
          </div>
        </div>
      </section>
      <section id="section-two" className="min-h-screen">
        Second Section
      </section>
      <TestInview />
      <section id="section-three" className="min-h-screen ">
        Third Section
      </section>
    </main>
  );
}
