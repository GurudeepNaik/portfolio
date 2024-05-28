import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

interface TypeIconeMenu {
  rotate: boolean;
  setRotate: React.Dispatch<React.SetStateAction<boolean>>;
  setShowElement: React.Dispatch<React.SetStateAction<boolean>>;
  ShowElement: boolean;
}

const IconMenu: React.FC<TypeIconeMenu> = ({
  rotate,
  setRotate,
  setShowElement,
  ShowElement,
}) => {
  return (
    <div
      className="md:hidden  text-white space-y-2 left-0 hover:cursor-pointer mt-2"
      onClick={() => {
        setRotate(!rotate);
        setShowElement(!ShowElement);
      }}
    >
      <div className="flex justify-end">
        <motion.div
          animate={rotate ? { y: 10, rotate: 45 } : { rotate: 0, y: 0 }}
          transition={
            rotate
              ? { y: 0.15, rotate: { delay: 0.2 } }
              : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
          }
          className="w-8 h-0.5 rounded bg-AAsecondary"
        ></motion.div>
      </div>
      <motion.div
        animate={rotate ? { opacity: 0 } : { opacity: 1 }}
        transition={{ opacity: { duration: 0 } }}
        className="flex justify-end"
      >
        <div className="w-6 h-0.5 rounded bg-AAsecondary"></div>
      </motion.div>
      <div className="flex justify-end">
        <motion.div
          animate={
            rotate
              ? { y: -10, width: "150%", rotate: -45 }
              : { y: 0, rotate: 0, width: "50%" }
          }
          transition={
            rotate
              ? { y: 0.15, rotate: { delay: 0.2 } }
              : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
          }
          className="w-4 h-0.5 rounded bg-AAsecondary"
        ></motion.div>
      </div>
    </div>
  );
};
export default IconMenu;
