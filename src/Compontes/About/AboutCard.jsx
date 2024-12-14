import { motion } from "framer-motion";
import React from "react";


function AboutCard({ Data, refrece }) {

  
  return (
    <div style={{ fontFamily: '"Krona One", sans-serif' }} className=" flex ">
  
      <motion.div
    
        drag
        className="lg:w-[15vw] md:w-[25vw] shadow-xl shadow-[#b236ff57]  max-w-25 rounded-xl bg-[#9f06c7] text-white flex px-3 items-center justify-center py-4 flex-col gap-2"
      >
        <div className=" object-cover ">
          <img
            className=" "
            width={150}
            src={Data.logo}
            alt="JavaScript Logo"
          />
        </div>
        <div className="text-sm px-2 tracking-tight font-semibold text-center">
          <h2>{Data.title}</h2>
        </div>
      </motion.div >
    </div>
  );
}

export default AboutCard;
