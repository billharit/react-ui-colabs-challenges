"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import InvertedCorner from "@/components/shared/inverted-corner";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function OurServiceCarousel() {
  const cardList = [
    {
      header: "Build a Lab",
      image: "/build-a-lab.webp",
      color: "#66662a",
      url: "/services",
    },
    {
      header: "Innovation Facilitation",
      image: "/innovation.webp",
      color: "#b1653b",
      url: "/services",
    },
    {
      header: "Office Space",
      image: "/office-spaces.webp",
      color: "#5757a5",
      url: "/services",
    },
    {
      header: "Lab Space",
      image: "/lab-spaces.webp",
      color: "#0046c7",
      url: "/services",
    },
  ];

  const cardListD = cardList.concat(cardList, cardList);
  return (
    <div>
      <div className="container narrow">
        <div className="mb-5">
          <p className="inline rounded-[20px] py-[5px] px-[10px] border border-black">
            Our Services
          </p>
        </div>
      </div>
      <Swiper
        slidesPerView={1.2}
        centeredSlides={false}
        breakpoints={{
          500: {
            slidesPerView: 2.4,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 4.7,
            centeredSlides: true,
          },
        }}
        spaceBetween={10}
        loop={true}
        modules={[Pagination]}
        className=" overflow-visible"
      >
        {cardListD.map((item, index) => (
          <SwiperSlide
            key={index}
            className="group py-2 overflow-visible cursor-pointer flex items-center justify-center rounded-[30px]"
          >
            <div
              className="flex hover:-translate-y-[5px] rounded-[30px]  h-full items-center justify-center duration-300 transition-transform"
              style={{ backgroundColor: item?.color }}
            >
              <div className="py-5 px-[30px] w-full">
                <span>
                  <h4 className="text-left relative leading-[1.1] h-10 max-w-[220px] text-white z-10 tracking-tighter">
                    {item.header}
                  </h4>
                  <div className="w-[90%] sm:w-3/5 sm:max-w-[300px] overflow-hidden rounded-full relative aspect-square -mt-10 sm:mt-auto mr-auto sm:mb-auto ml-auto">
                    <Image
                      fill
                      sizes="100%"
                      src={item.image}
                      alt={item.header}
                      className="rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </span>
              </div>
              <div className="absolute bottom-0 right-0 rounded-tl-[30px] z-10 bg-custom-white w-[60px] h-[60px]">
                <div className="relative w-full h-full">
                  <span className="absolute text-white -left-28 lg:-left-32 bottom-4 span-font">
                    Learn more
                  </span>
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
          </SwiperSlide>
        ))}
      </Swiper>
      <div></div>
      {/* <div className="bg-gray-400 flex flex-row  w-full">
        {cardList.map((item, index) => (
          <OurServiceCard key={index} item={item} />
        ))}
      </div> */}
    </div>
  );
}
