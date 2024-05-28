import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function MyName() {
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.4, duration: 0.2 },
          y: { delay: 0.4, duration: 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.4, duration: 0.2 },
          y: { delay: 0.4, duration: 0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Gurudeep Naik.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.4, duration: 0.2 },
          y: { delay: 0.4, duration: 0.2 },
        }}
        className="text-gray-400 font-bold text-2xl lg:text-5xl sm:text-3xl md:text-4xl mt-4"
      >
        <i>
          &quot;Transforming ideas into reality, one line of code at a
          time.&quot;
        </i>
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: 0.4,
            duration: 0.2,
          },
          y: {
            delay: 0.4,
            duration: 0.2,
          },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a{" "}
        <span className="text-AAsecondary">MERN Stack Developer</span>, with a
        strong foundation in problem-solving and a knack for creating
        exceptional digital experiences. I specialize in developing and
        designing dynamic web applications using the MERN stack, and I am
        passionate about bringing innovative ideas to life through code..
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: 0.4,
            duration: 0.2,
          },
          y: {
            delay: 0.4,
            duration: 0.2,
          },
        }}
        className="mt-12"
      >
        <a href={"/resume/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Check out my resume!
          </button>
        </a>
      </motion.div>
    </div>
  );
}
