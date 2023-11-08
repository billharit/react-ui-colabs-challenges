"use client";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

import { useEffect, useState } from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { LiaSearchSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import InvertedCorner from "../shared/inverted-corner";

const navList = [
  { title: "Services", url: "/services" },
  { title: "About", url: "/about" },
  { title: "Our Principles", url: "/our-principles" },
  { title: "Community", url: "/community" },
  { title: "Contact", url: "/contact" },
];
const socmedList = [
  { title: <BsInstagram size={24} />, url: "/instagram" },
  { title: <BsFacebook size={24} />, url: "/facebook" },
];

export default function Navbar() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isNavbarOpened, setNavbarOpened] = useState(false);

  const pathChange = usePathname();
  useEffect(() => {
    setNavbarOpened(false);
    setSearchVisible(false);
  }, [pathChange]);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleNavBar = () => {
    setNavbarOpened(!isNavbarOpened);
  };

  return (
    <header className="fixed z-50 w-full">
      <div className="hidden lg:block lg:h-[10px] lg:bg-custom-white lg:w-full"></div>
      <div className="container bg-custom-white lg:bg-transparent flex justify-between">
        <div className="flex items-center h-[60px] lg:h-[80px]">
          <div className="relative h-full w-[166px] lg:w-[261px] bg-custom-white lg:rounded-br-[30px] before:hidden before:lg:block before:content-['Naarm/Melbourne'] before:top-0 before:left-[15px] z-10 before:absolute before:text-xs">
            <InvertedCorner
              className={"absolute top-0 -right-[30px]"}
              width={30}
              height={30}
            />
            <InvertedCorner
              className={"absolute left-0 -bottom-[30px]"}
              width={30}
              height={30}
            />
            <Image
              src="/logo.svg"
              alt="Colabs Logo"
              className="pt-[15px] pr-[15px] pb-[15px] lg:pt-[25px] lg:pr-[30px] lg:pb-[12px] lg:pl-[15px] translate-y-[3px] lg:-translate-y-1"
              fill={true}
              priority
            />
          </div>
          <nav className="hidden lg:flex bg-transparent pr-[10px] pl-[50px] -translate-x-[50px] items-center">
            <ul className="flex items-center h-[58px] ml-[10px] px-[25px] rounded-[30px] border shadow-nav-shadow bg-hsla-white backdrop-blur-[10px] ">
              {navList.map((item, index) => (
                <li key={index} className="px-[15px] hover:text-[#005241]">
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
              <div className="pl-[10px] flex items-center justify-center">
                {socmedList.map((item, index) => (
                  <li key={index} className="px-[5px] hover:text-[#005241]">
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </div>
            </ul>
          </nav>
        </div>
        <div className="hidden lg:flex lg:h-[80px] mr-[14px] items-center shrink-0 relative">
          <div
            className={clsx(
              "bg-hsla-white h-[58px] shadow-nav-shadow rounded-[35px] absolute z-10 -right-[9px] flex items-center transition-all duration-500 overflow-hidden backdrop-blur-[10px]",
              {
                "w-80 opacity-100": isSearchVisible,
                "w-0 opacity-0": !isSearchVisible,
              }
            )}
          >
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent focus:outline-none px-5"
            />
          </div>
          <button
            onClick={toggleSearch}
            className="h-10 w-10 cursor-pointer border z-20 rounded-full bg-search flex items-center justify-center"
          >
            <LiaSearchSolid size={24} />
          </button>
        </div>
        <div className="lg:hidden flex items-center justify-center gap-5 text-lg font-medium mr-[10px] translate-y-1">
          <button
            onClick={toggleNavBar}
            className={clsx(
              "flex items-center py-[3px] justify-center px-3 rounded-[20px] transition-all duration-300",
              {
                "bg-[#d9db4d]": !isNavbarOpened,
                "outline-black outline-2 outline": isNavbarOpened,
              }
            )}
          >
            {isNavbarOpened ? <span>Close</span> : <span>Menu</span>}
          </button>
          <div
            className={clsx(
              "h-full w-full flex items-center transition-all duration-300 px-4 rounded-t-[20px] relative",
              {
                "bg-[#d9db4d]": isNavbarOpened,
                "bg-transparent": !isNavbarOpened,
              }
            )}
          >
            <InvertedCorner
              className={clsx(
                "absolute -left-5 bottom-0 -translate-y-1 duration-300 transition-opacity rotate-180",
                {
                  "opacity-100": isNavbarOpened,
                  "opacity-0": !isNavbarOpened,
                }
              )}
              width={20}
              height={20}
              fill={"#d9db4d"}
            />
            <ul
              className={clsx(
                " gap-[10px] py-[5px] px-[12px] flex items-center justify-center rounded-[30px] ",
                {
                  "bg-[#d9db4d]": isNavbarOpened,
                  "outline-black outline-2 outline": !isNavbarOpened,
                }
              )}
            >
              {socmedList.map((item, index) => (
                <li key={index} className="hover:text-[#005241]">
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "lg:hidden absolute top-[60px] left-1/2 -translate-x-1/2 transition-all duration-300 w-[calc(100%-20px)]",
          {
            "visible opacity-100 fade-in-start ": isNavbarOpened,
            "invisible opacity-0": !isNavbarOpened,
          }
        )}
      >
        <div className="bg-[#d9db4d]  items-center rounded-l-[30px] container rounded-b-[30px] justify-center w-full flex flex-col">
          <span className="font-semibold py-7">Welcome to Colabs</span>
          <div className="flex items-center justify-end shrink-0 relative w-full">
            <div className="bg-hsla-white h-[58px] w-full  shadow-nav-shadow rounded-[35px] absolute z-10 flex items-center overflow-hidden backdrop-blur-[10px]">
              <input
                type="text"
                placeholder="Search here..."
                className="bg-transparent focus:outline-none px-5"
              />
            </div>
            <button
              onClick={toggleSearch}
              className="-translate-x-[10px] h-10 w-10 cursor-pointer border z-20 rounded-full bg-search flex items-center justify-center"
            >
              <LiaSearchSolid size={24} />
            </button>
          </div>
          <nav className="w-full">
            <ul className="w-full text-[32px] pt-6 pb-10">
              <li data-fade="1" className="border-b border-black py-[15px]">
                <Link href="/">Home </Link>
              </li>
              {navList.map((item, index) => (
                <li
                  key={index}
                  data-fade={index + 1}
                  className="border-b border-black py-[15px]"
                >
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
