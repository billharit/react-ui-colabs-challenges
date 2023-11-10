import Image from "next/image";
import "./stacking-card-section.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
export default function StackingCardSection() {
  const dataList = [
    {
      tags: "Lab Space",
      header:
        "Access fully equiped wet and dry lab spaces, essential equipment and amenities.",
      paragraph: "Designed to foster innovation and collaboration.",
      image: "/lab-spaces.webp",
      bgColor: "#bed2f5",
      paragraphColor: "#0046c7",
    },
    {
      tags: "Build a Lab",
      header:
        "Building and designing labs that are tailored and fit-for-purpose Australia wide.",
      paragraph: "Take your project from zero to one.",
      image: "/build-a-lab.webp",
      bgColor: "#dcb688",
      paragraphColor: "#b1653b",
    },
    {
      tags: "Innovation Facilitation",
      header:
        "Offering expertise across various stages of the startup lifecycle.",
      paragraph:
        "Refine your idea, access marketing support, and join a collaborative community.",
      image: "/innovation.webp",
      bgColor: "#d9db4d",
      paragraphColor: "#66662a",
    },
    {
      tags: "Office Space",
      header:
        "Offering expertise across various stages of the startup lifecycle.",
      paragraph:
        "Refine your idea, access marketing support, and join a collaborative community.",
      image: "/office-spaces.webp",
      bgColor: "#bfb9e3",
      paragraphColor: "#5757a5",
    },
  ];
  return (
    <div>
      <div className="container">
        <ul className="card-tags flex justify-center gap-[5px] items-stretch lg:gap-5 ">
          {dataList.map((item, index) => (
            <li
              key={index}
              className="rounded-[30px] font-semibold self-auto flex items-center justify-center cursor-pointer border py-[10px] text-xs lg:text-xl w-1/3 lg:w-auto px-[15px] sm:text- sm:px-[10px] lg:px-[15px] sm:py-[10px] text-center"
              style={{ backgroundColor: item.bgColor }}
            >
              <Link href={`#card${index + 1}`}>{item.tags}</Link>
            </li>
          ))}
        </ul>
        <ul id="#card-list">
          {dataList.map((item, index) => (
            <li
              className="cursor-pointer max-h-[850px] w-full sticky card"
              id={`card${index + 1}`}
              key={index}
            >
              <div
                className="h-[70vh] min-h-[750px] card-body flex flex-col items-start gap-12 lg:flex-row p-[30px] lg:py-[60px]"
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="relative lg:h-full min-h-[150px] w-full lg:w-1/3 overflow-hidden rounded-[30px]">
                  <Image
                    fill
                    src={item.image}
                    alt={item.header}
                    sizes="100%"
                    className="object-cover"
                  />
                </div>
                <div className="lg:w-[55%] lg:max-w-[500px]">
                  <h3 className="mb-[30px]">{item.header}</h3>
                  <h3
                    className="mb-[30px]"
                    style={{ color: item.paragraphColor }}
                  >
                    {item.paragraph}
                  </h3>
                  <div className="flex items-center gap-5">
                    <span className="lg:text-xl">Learn More</span>
                    <button className=" text-white flex items-center justify-center rounded-full z-10 bg-black w-[50px] h-[50px] ">
                      <AiOutlineArrowRight className="text-lg transition-transform duration-300 group-hover:-rotate-[30deg] group-hover:text-2xl " />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
