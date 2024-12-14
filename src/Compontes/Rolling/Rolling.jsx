import { motion } from "framer-motion";
import React from "react";
import Lottie from "lottie-react";
import car from "../../assets/Animation - 1720952901758.json";

function Rolling() {
  let name = "Front-end react js developer";
  return (
    <div className="w-full pb-[2vw] dark:bg-[#1f2937] bg-[#dcb5f4e0] rounded-tl-3xl overflow-hidden  rounded-tr-3xl drop-shadow-md my-2 shadow-lg shadow-[#b236ff57]  ">
      <Lottie className="  w-[15vh] -py-15" animationData={car}>
       
      </Lottie>

      <div className="border-t-2 border-b-2 border-zinc-200  flex whitespace-nowrap  ">
        <motion.h1
          style={{ fontFamily: '"Teko", sans-serif' }}
          inherit={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[8vw]  font-semibold uppercase leading-none dark:text-white text-[#8757a2]  -mb-[2.1vw]"
        >
          {name}
        </motion.h1>
        <motion.h1
          style={{ fontFamily: '"Teko", sans-serif' }}
          inherit={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[8vw]  font-semibold uppercase leading-none  dark:text-white text-[#8757a2]  -mb-[2.1vw]"
        >
          {name}
        </motion.h1>
      </div>
    </div>
  );
}

export default Rolling;
