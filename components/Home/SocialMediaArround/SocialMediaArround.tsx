import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";

interface IconClickableWithAnimationProps {
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const IconClickableWithAnimation: React.FC<IconClickableWithAnimationProps> = ({
  href,
  Icon,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <a href={href} className="" target={"_blank"} rel="noreferrer">
        <Icon
          className={
            "w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
          }
        />
      </a>
    </motion.div>
  );
};
export default function SocialMediaEmail() {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: 0.4, duration: 0.5 } }}
        className="z-10 fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* Github Icon */}
            <IconClickableWithAnimation
              Icon={GithubIcon}
              href={"https://github.com/GurudeepNaik"}
            />
            {/* Linkedin icon */}
            <IconClickableWithAnimation
              Icon={LinkedinIcon}
              href={"https://www.linkedin.com/in/gurudeep-naik-422853236/"}
            />
            {/* Instagram Icon */}
            <IconClickableWithAnimation
              Icon={InstagramIcon}
              href={"https://www.instagram.com/gurudeep_n_a_i_k/"}
            />
          </div>
          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>

      {/* // ? Email Address bar               */}
      <motion.div
        initial={{ y: "170%" }}
        animate={{ y: "0%" }}
        // ! change delay from 0 to 11
        transition={{ y: { delay: 0.4, duration: 0.5 } }}
        className="z-10 fixed bottom-0 -right-10 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-24 justify-center items-center">
          {/* Open Email on click */}
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=""
          >
            <a
              href="mailto:gurudeepnaik1999@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className=" font-Header tracking-wider text-gray-400 hover:text-AAsecondary hover:cursor-pointer">
                gurudeepnaik<span className="text-AAsecondary">@</span>gmail
                <span className="text-AAsecondary">.</span>com
              </span>
            </a>
          </motion.div>

          <div className="h-24 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
}
