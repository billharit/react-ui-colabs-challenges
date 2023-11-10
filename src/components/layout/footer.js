"use client";

import dynamic from "next/dynamic";

const Jarallax = dynamic(() => import("@/components/shared/jarallax"), {
  ssr: false,
});
import JarallaxImage from "@/components/shared/jarallax-image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { InView } from "react-intersection-observer";
import clsx from "clsx";

export default function Footer() {
  return (
    <div className="flex flex-col gap-[10px] pb-[10px] overflow-x-hidden bg-custom-white">
      <InView triggerOnce threshold={0.5}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className="flex flex-col sm:flex-row container gap-[10px]"
          >
            <div
              className={clsx(
                "rounded-[30px] w-full duration-300 delay-100",
                inView && "opacity-100 translate-x-0",
                !inView && "opacity-0 -translate-x-10"
              )}
            >
              <Jarallax
                speed={0.8}
                className="w-full h-full aspect-[1.5/1] sm:aspect-auto rounded-[30px] overflow-hidden"
              >
                <JarallaxImage src="/doctor.jpg" alt="doctor" />
              </Jarallax>
            </div>
            <div
              className={clsx(
                "rounded-[30px] shrink-0 sm:w-3/5 bg-[#0046c7] p-[30px] flex flex-col justify-between duration-300 delay-100",
                inView && "opacity-100 translate-x-0",
                !inView && "opacity-0 translate-x-10"
              )}
            >
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
        )}
      </InView>

      <footer className="container">
        <div className="bg-[#2a2c2d] py-10 px-[30px] rounded-[30px] w-full grid sm:grid-cols-2 gap-[5%]">
          <h5 className="text-white col-span-1 font-normal tracking-tighter leading-[1.1] sm:pr-[25px] lg:pr-[50px]">
            Co-Labs Melbourne respectfully acknowledges the Traditional
            Custodians of the land on which we operate our business – the Boon
            Wurrung and Wurundjeri peoples of the Kulin Nation.
          </h5>
          <div className="flex flex-col ">
            <div className="grid max-w-[400px]  grid-cols-2 grid-rows-2 tracking-tighter leading-[1.1] gap-5 text-white">
              <span className="line-clamp-3">
                CoLabs Coworking 1/306 Albert St, Brunswick <br />
                <a href="tel:(03) 9111 2399">(03) 9111 2399</a>
              </span>
              <span className="line-clamp-3">
                17/306 Albert St, Brunswick <br />
                <a href="tel:(03) 9111 2399">(03) 9111 2399</a>
              </span>
              <span className="line-clamp-3">
                20/306 Albert St, Brunswick <br />
                <a href="tel:(03) 9111 2399">(03) 9111 2399</a>
              </span>
              <span className="line-clamp-3">
                2 Acacia Place, Notting Hill <br />
                <a href="tel:(03) 9111 2399">(03) 9111 2399</a>
              </span>
            </div>
            <nav className="mt-10">
              <ul className="grid max-w-[400px] grid-cols-2 grid-rows-5 text-opacity-60 text-white gap-x-5 ">
                <li>
                  <Link className="line-clamp-1" href="/">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="line-clamp-1" href="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="line-clamp-1" href="/">
                    Our Principles
                  </Link>
                </li>
                <li>
                  <Link className="line-clamp-1" href="/">
                    Terms and Conditions
                  </Link>
                </li>
                <li className="col-span-2">
                  <Link className="line-clamp-1" href="/">
                    About
                  </Link>
                </li>
                <li className="col-span-2">
                  <Link className="line-clamp-1" href="/">
                    Community
                  </Link>
                </li>
                <li>
                  <Link className="line-clamp-1" href="/">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="line-clamp-1" href="/">
                    @ 2023 CoLabs
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex sm:justify-between flex-col-reverse sm:flex-row pt-[30px] sm:pt-[100px] gap-5 sm:gap-0 pb-5">
              <div className="relative w-[200px] ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 99.15">
                  <path
                    d="m153.21,86.34c-5.94-3.05-10.68-7.62-14.24-13.72-3.56-6.1-5.33-13.48-5.33-22.13s1.79-16.03,5.39-22.13c3.6-6.1,8.35-10.67,14.29-13.72,5.94-3.05,12.38-4.57,19.34-4.57,6.04,0,11.51,1.06,16.4,3.16,4.87,2.11,8.89,5.11,12.03,8.98,3.14,3.88,5.17,8.42,6.07,13.61l-13.17,2.82c-1.07-5.27-3.5-9.43-7.32-12.47-3.82-3.05-8.49-4.57-14.01-4.57-4.92,0-9.3,1.13-13.17,3.39-3.85,2.26-6.89,5.55-9.08,9.89-2.19,4.33-3.29,9.54-3.29,15.65s1.1,11.31,3.29,15.65c2.19,4.33,5.22,7.62,9.08,9.88,3.85,2.26,8.25,3.39,13.17,3.39,5.52,0,10.12-1.41,13.79-4.23,3.67-2.82,6.1-6.76,7.32-11.8l13.27,2.94c-1.97,7.68-5.97,13.7-12.03,18.07-6.06,4.37-13.51,6.55-22.35,6.55-7.04,0-13.52-1.53-19.46-4.57v-.05Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="m224.74,87.14c-4.46-2.52-7.96-6.03-10.5-10.5-2.53-4.48-3.79-9.5-3.79-15.07s1.27-10.69,3.79-15.13c2.53-4.44,6.03-7.93,10.5-10.45,4.46-2.52,9.54-3.78,15.2-3.78s10.74,1.26,15.2,3.78c4.46,2.52,7.96,6,10.5,10.45,2.53,4.44,3.79,9.49,3.79,15.13s-1.27,10.69-3.79,15.13c-2.53,4.44-6.03,7.93-10.5,10.45-4.46,2.52-9.54,3.78-15.2,3.78s-10.74-1.26-15.2-3.78Zm24.05-9.32c2.57-1.59,4.58-3.78,6.01-6.61,1.44-2.82,2.16-6.04,2.16-9.65s-.71-6.83-2.16-9.65c-1.44-2.82-3.44-5.02-6.01-6.61-2.58-1.59-5.52-2.37-8.85-2.37s-6.28.79-8.84,2.37c-2.58,1.59-4.58,3.77-6.01,6.55-1.44,2.79-2.16,6.03-2.16,9.71s.71,6.93,2.16,9.71c1.44,2.79,3.44,4.97,6.01,6.55,2.57,1.59,5.52,2.37,8.84,2.37s6.28-.79,8.85-2.37Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="m278.06,10.97h13.27v67.53h37.89v11.52h-51.16V10.97Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="m380,42.47c-2.08-3.39-4.95-5.95-8.62-7.68-3.68-1.74-7.93-2.6-12.77-2.6-6.13,0-11.38,1.69-15.77,5.08-4.39,3.39-7.04,7.87-7.94,13.44l11.12,2.03c.38-3.31,1.7-5.95,3.97-7.9,2.27-1.96,5.14-2.94,8.62-2.94,3.78,0,6.78,1,9.02,3h0c2.24,1.98,3.35,4.76,3.35,8.29v.81l-10.78,1.13c-8.84.9-15.45,2.91-19.8,6.04-4.35,3.12-6.52,7.44-6.52,12.93,0,3.24.81,6.14,2.44,8.7,1.63,2.55,3.89,4.55,6.81,5.98h-.01c2.92,1.43,6.23,2.15,9.93,2.15,3.94,0,7.59-.93,10.95-2.82,3.14-1.75,5.46-4.03,6.98-6.82v8.73h12.13v-35.45c0-4.66-1.03-8.69-3.12-12.08Zm-13.05,34.39c-2.75,3.04-6.56,4.57-11.4,4.57-2.88,0-5.19-.71-6.92-2.15-1.75-1.43-2.61-3.28-2.61-5.54,0-2.48,1.17-4.56,3.51-6.21,2.34-1.66,5.87-2.7,10.55-3.16l10.89-1.22v1.8c.07,4.9-1.26,8.86-4.03,11.92Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="m422.72,90.91c-3.78,0-7.26-.76-10.44-2.26-3.17-1.5-5.45-3.46-6.81-5.88v7.23h-12.37V10.06h12.37v30.15c1.73-2.41,4.18-4.35,7.32-5.82,3.14-1.47,6.53-2.2,10.16-2.2,5.67,0,10.53,1.25,14.58,3.73,4.04,2.48,7.15,5.95,9.3,10.39,2.16,4.44,3.23,9.53,3.23,15.25s-1.08,10.81-3.23,15.25c-2.16,4.44-5.27,7.9-9.36,10.39-4.09,2.48-9.01,3.73-14.75,3.73h-.01Zm-1.59-10.73c4.99,0,9-1.69,12.03-5.08,3.02-3.39,4.53-7.9,4.53-13.55s-1.51-10.17-4.53-13.55c-3.02-3.39-7.04-5.08-12.03-5.08s-9.01,1.69-12.03,5.08c-3.02,3.39-4.53,7.9-4.53,13.55s1.51,10.17,4.53,13.55c3.02,3.39,7.04,5.08,12.03,5.08Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="m462.42,86c-4.16-3.28-6.99-7.21-8.51-11.8l10.22-4.29c1.05,3.39,2.76,6.1,5.11,8.13,2.34,2.03,5.41,3.05,9.19,3.05,2.87,0,5.24-.71,7.09-2.15,1.85-1.43,2.77-3.19,2.77-5.3,0-1.66-.55-3.03-1.64-4.13-1.1-1.1-2.49-1.94-4.19-2.54-1.7-.61-3.88-1.2-6.53-1.81-4-1.05-7.32-2.11-9.93-3.16-2.61-1.05-4.86-2.73-6.75-5.02-1.89-2.3-2.84-5.36-2.84-9.2,0-2.94.83-5.58,2.49-7.96,1.66-2.37,4.03-4.23,7.09-5.58,3.07-1.35,6.59-2.03,10.61-2.03,5.45,0,10.23,1.29,14.35,3.89,4.12,2.6,6.78,5.97,8,10.11l-10.22,4.29c-.68-2.7-2.18-4.85-4.49-6.44-2.31-1.59-4.83-2.37-7.54-2.37s-4.87.51-6.47,1.53c-1.59,1.01-2.38,2.47-2.38,4.35,0,1.43.49,2.58,1.48,3.44.98.86,2.21,1.54,3.69,2.03,1.48.49,3.57,1.07,6.3,1.75,4.31.98,7.82,2.02,10.55,3.1,2.72,1.1,5.08,2.9,7.09,5.42,2,2.52,3.01,5.93,3.01,10.22,0,3.31-.91,6.28-2.72,8.92-1.82,2.63-4.37,4.71-7.66,6.21-3.29,1.5-7.02,2.26-11.17,2.26-6.5,0-11.84-1.63-16-4.91l-.02-.02Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    fill="#FFFFFF"
                    d="m95.68,69.27c-7.66,17.58-25.28,29.87-45.79,29.87C22.34,99.15,0,76.96,0,49.58S22.34,0,49.9,0c20.51,0,38.12,12.3,45.79,29.88-5.25,1.07-9.76,4.16-12.66,8.42-.01,0-.01.01-.02.03-.06.08-.12.16-.17.25-2.06,2.98-6.28,5.02-11.14,5.02s-9.08-2.04-11.15-5.02c-.05-.09-.11-.18-.17-.25,0-.01,0-.02-.02-.03-3.64-5.34-9.78-8.84-16.76-8.84-11.18,0-20.24,9-20.24,20.11s9.06,20.12,20.24,20.12c6.97,0,13.1-3.5,16.75-8.82,0-.02.02-.03.03-.05.06-.09.12-.16.17-.25,2.06-2.98,6.28-5.02,11.15-5.02s9.08,2.04,11.14,5.02c.05.09.11.16.17.25,0,.01.02.03.03.05,2.92,4.25,7.41,7.33,12.65,8.4Z"
                  ></path>
                  <path
                    fill="#FFFFFF"
                    d="m107.77,49.58c0,4.38-3.57,7.93-7.98,7.93-.21,0-.43,0-.64-.03-4.11-.32-7.34-3.73-7.34-7.9s3.23-7.59,7.34-7.91c.21-.02.43-.03.64-.03,4.41,0,7.98,3.55,7.98,7.93Z"
                  ></path>
                </svg>
              </div>
              <ul className="text-white flex sm:flex-col lg:flex-row sm:justify-between gap-5">
                <li>
                  <Link href="/">
                    <BsInstagram size={24} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <BsFacebook size={24} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <BsLinkedin size={24} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <BsTwitter size={24} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
