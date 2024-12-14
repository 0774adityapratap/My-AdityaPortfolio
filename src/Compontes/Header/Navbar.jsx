import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Thamebtn from "./Thamebtn";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 1, x: "0" },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <>
      <div className=" md:hidden block overflow-hidden ">
        <div className="relative dark:text-white z-40 gap-9 drop-shadow-lg py-3 px-6 flex justify-end">
          <motion.div
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            whileTap={{ rotate: "360deg" }}
            whileHover={{ scale: 1.2 }}
            className=" relative drop-shadow-xl"
          >
            {isOpen ? <GrClose /> : <GiHamburgerMenu />}
          </motion.div>
        </div>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className={`absolute  right-0   px-2  bg-[#0000] shadow-xl  shadow-[#b236ff2a]  rounded-md `}
        >
          {["My TechTooles", "know me", "Get In Tuch" , "get"].map((item, index) => (
            <div className={` flex justify-end  dark:text-white`}>
              <Link
                key={index}
                to={`/${item}`}
                className={`text-xl dark:text-white capitalize`}
              >
                {item}
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
      <div className=" z-50 w-full px-20 flex justify-between items-center  dark:bg-[#000000] bg-[#dcb5f4e0] shadow-lg shadow-[#b236ff2a] md:visible invisible">
        <div className="py-4 flex gap-10 items-center   ">
          <h1 className="text-[2.5vw] text-[#B336FF]  cursor-pointer tracking-tighter  font-light">
            <Link to="/"> WELCOME </Link>
            <span className="px-1">!</span>{" "}
          </h1>
          <Thamebtn />
        </div>
        <div>
          <div className="flex  gap-10   ">
            {["My TechTooles", "know me", "Get In Tuch" ,"get"].map((item, index) => (
              <Link
                key={index}
                to={`/${item}`}
                className={`text-3xl dark:text-white capitalize cursor-pointer tracking-tighter font-light ${
                  index === 2 && "ml-52"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
