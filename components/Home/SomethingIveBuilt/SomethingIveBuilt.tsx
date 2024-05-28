import { useRouter } from "next/navigation";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://auth-js-v2.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"projects/auth_js.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/projects/blue-bg.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Auth.js</span>
                <a
                  href="https://auth-js-v2.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Modern Authentication Solution
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  <span className="text-AAsecondary">Auth.js</span> is a
                  comprehensive authentication solution built with the latest
                  technologies to ensure secure and seamless user experiences.
                  Crafted using{" "}
                  <span className="text-AAsecondary">Next.js 14</span>,{" "}
                  <span className="text-AAsecondary">TypeScript</span>,{" "}
                  <span className="text-AAsecondary">Tailwind CSS</span>, and{" "}
                  <span className="text-AAsecondary">NextAuth</span>, this It
                  offers seamless login and sign-up experiences, including
                  options to authenticate via{" "}
                  <span className="text-AAsecondary">Google</span> and {" "}
                  <span className="text-AAsecondary">GitHub</span>. For enhanced
                  security, it features{" "}
                  <span className="text-AAsecondary">
                    two-factor authentication
                  </span>{" "}
                  and{" "}
                  <span className="text-AAsecondary">email verification</span>,
                  ensuring robust protection for user accounts. Auth.js
                  leverages the latest technologies to provide a secure,
                  scalable, and user-friendly authentication solution for modern
                  web applications.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js 14</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">NextAuth</span>
                <span className="pr-4 z-10">2FA</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/GurudeepNaik/auth-js" />
                <a
                  href="https://auth-js-v2.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://e-commerce-store-delta-nine.vercel.app/cart"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/projects/e-commerce-store.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/projects/blue-bg.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">E-commerce</span>
                <a
                  href="https://e-commerce-store-delta-nine.vercel.app/cart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Your Ultimate Online Store Solution
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">E-commerce</span> is a
                  full-featured online store application built with{" "}
                  <span className="text-AAsecondary"> Next.js 14</span> ,
                  <span className="text-AAsecondary"> TypeScript</span>, and
                  <span className="text-AAsecondary"> Tailwind CSS</span>. It
                  offers a comprehensive suite of features for a seamless
                  shopping experience, including product listings, detailed
                  product pages, shopping cart functionality, and secure
                  checkout. Designed for scalability and ease of use, E-commerce
                  leverages modern web technologies to deliver a robust and
                  user-friendly platform for all your online retail needs. I had
                  the opportunity to lead the development of a token project,
                  which aimed to create a decentralized ecosystem for
                  peer-to-peer transactions.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js 14</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/GurudeepNaik/E-Commerce-Store" />
                <a
                  href="https://e-commerce-store-delta-nine.vercel.app/cart"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project  3*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://www.ens.vision"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/projects/e-commerce-admin.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/projects/blue-bg.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  E-commerce Admin
                </span>
                <a
                  href="https://e-commerce-admin-green.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Comprehensive Store Management
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  <span className="text-AAsecondary">E-commerce Admin </span>
                  is a powerful admin panel built with{" "}
                  <span className="text-AAsecondary">Next.js 14</span>,{" "}
                  <span className="text-AAsecondary">TypeScript</span>, and{" "}
                  <span className="text-AAsecondary">Tailwind CSS</span>,
                  designed for managing multiple online stores efficiently. It
                  features an overview{" "}
                  <span className="text-AAsecondary">dashboard</span>,{" "}
                  <span className="text-AAsecondary">billboards</span>, and{" "}
                  <span className="text-AAsecondary">
                    categories management
                  </span>
                  . Users can easily create and update sizes, colors, and
                  products, as well as manage orders and settings. With support
                  for dark mode and light mode, and secure authentication using{" "}
                  <span className="text-AAsecondary">Clerk</span>, E-commerce
                  Admin provides a versatile and user-friendly solution for all
                  your store management needs.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js 14</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">Clerk</span>
                <span className="pr-4 z-10">Dark Mode</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/GurudeepNaik/E-Commerce-Admin" />
                <a
                  href="https://e-commerce-admin-green.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
