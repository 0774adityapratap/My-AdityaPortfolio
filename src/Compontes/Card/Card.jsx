import React, { useState, useEffect } from "react";
import adip from "../../images/adi.p.jpg.jpg";
import adis from "../../images/adi.s.jpg.png";
import { motion } from "framer-motion";
import arrow from "../../images/Group.png";
import me from "../../images/ME!!.png";

function Card() {
  const [currentImage, setCurrentImage] = useState(adip);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((pre) => (pre == adip ? adis : adip));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        style={{ borderRadius: "33% 67% 32% 68% / 91% 5% 95% 9% " }}
        className="shadow-xl shadow-[#b236ff57] w-[18vw] flex justify-center  bg-[#B336FF]"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" w-[15vw]  "
        >
          <img
            style={{ borderRadius: " 91% 5% 95% 9% /20% 67% 32% 68% " }}
            className=" "
            src={currentImage}
            alt="Swappable"
          />
        </motion.div>
      </div>
  
        <div className="flex justify-end -mt-[3vw]">
          <img className=" w-[6vw]  " src={arrow} alt="" />
        </div>
        <div className="flex justify-end ">
          <img  className=" w-[6vw]" src={me} alt="" />
        </div>
      </div>
   
  );
}

export default Card;
