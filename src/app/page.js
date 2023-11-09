import Image from "next/image";
import VideoHero from "./_components/video-hero";
import StatsCard from "./_components/stats-card";
import TestInview from "./_components/test-inview";
import ContactCard from "./_components/contact-card";
import CommunityCard from "./_components/community-card";
import OurServiceCarousel from "./_components/our-service-carousel";
import Principles from "./_components/principle";
import CardCollectionSection from "./_components/card-collection-section";
import TwoSideCarousel from "./_components/two-side-carousel";
import CommunityList from "./_components/community-list";
import ContactUsSection from "./_components/contact-us-section";

export const metadata = {
  title: "Colabs - Making space for transformative innovation.",
  description: "This is the home pages of Colabs",
};

export default function Home() {
  return (
    <main className="flex min-h-screen bg-custom-white flex-col items-center ">
      <section
        id="section-one"
        className="container pt-16 lg:pt-[10px] mb-20 w-full h-auto sm:h-[95vh] min-h-[630px] gap-[10px] justify-between flex flex-col sm:flex-row"
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
      <section id="section-two" className="mt-20 mb-10 w-full">
        <div className="container narrow">
          <h2 className="tracking-tighter sm:max-w-[880px] leading-tight">
            We design, build and run collaborative spaces where bio-led science,
            technology and people can thrive
          </h2>
        </div>
      </section>
      <section id="section-three" className="mb-10 w-full">
        <OurServiceCarousel />
      </section>
      <section className="my-20 w-full">
        <Principles />
      </section>
      <section className="mb-2 w-full">
        <CardCollectionSection />
      </section>
      <section className="mb-20 w-full">
        <TwoSideCarousel />
      </section>
      <section className=" container narrow">
        <h2 className="max-w-[860px] leading-[1.1] tracking-tighter">
          Space for big thinking, problem-solvers and bio-innovators
        </h2>
      </section>
      <section className="w-full my-20">
        <CommunityList />
      </section>
    </main>
  );
}
