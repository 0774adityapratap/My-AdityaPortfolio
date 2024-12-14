import React, { useRef } from "react";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import MyCV from "../../pds/ADITYA PRATAP S.pdf";
import { Link } from "react-router-dom";
import { Data } from "../../Data";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import resumeimg from "../../images/Resume.png";

function Home() {
  const ref = useRef(null);
  return (
    <div className="">
      <div className="justify-evenly items-center w-full flex  py-[5vw] bg-no-repeat bg-center bg-cover">
        <motion.div
          className=" my-8 "
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card refrece={ref} />
        </motion.div>
        <div className="tracking-tight w-1/2 ">
          <motion.div
            className="masker  "
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h1 className=" dark:dark:text-white text-[6vw]  whitespace-nowrap   tracking-normal">
              {" "}
              I AM <span className="text-[#b236ffe2] px-3 ">
                ADITYA PRATAP{" "}
              </span>{" "}
            </h1>
            <span className="dark:text-white text-[3vw]   leading-[2vw] text-center">
              Creative <span className="text-[#B336FF]"> React Developer  </span>  with  years designing useful,
              approachable user interfaces. Knowledgeable on all aspects of
              Facebook's design best practices and emerging UI development
              techniques. <span className="text-[#B336FF]">  Skilled</span> at connecting exceptional assets with users
              via creative UI frameworks and careful user experience
              optimization
            </span>
          </motion.div>

          <div className="flex  justify-between items-center">
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.8 }}
              className="    "
            >
              <a href={MyCV} download>
                <img className="w-[10vw]" src={resumeimg} />
              </a>
            </motion.div>

            <motion.div
              className="flex items-center justify-end cursor-pointer text-[2.5vw] gap-5 my-5 "
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.8 }}
            >
              {Data.map((i, index) => (
                <div key={index} className="flex text-[#B336FF]">
                  <Link to={i.Link}>
                    {index === 0 && <FaFacebookSquare />}
                    {index === 1 && <FaLinkedin />}
                    {index === 2 && <FaSquareXTwitter />}
                    {index === 3 && <FaGithub />}
                  </Link>
                  <div>{index === 4 && <FaWhatsappSquare />}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
