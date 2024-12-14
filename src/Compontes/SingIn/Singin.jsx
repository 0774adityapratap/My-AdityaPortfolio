import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import Lottie from "lottie-react";

import animationData from "../../assets/Animation - 1720857311754 (1).json";
import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Data } from "../../Data";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

function Singin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    
    <>
      <div style={{ fontFamily: '"Teko", sans-serif' }}  className="  overflow-hidden  dark:bg-black"> 
      <span className="  hidden lg:block">
        <Navbar />
      </span>
        <div
          style={{ fontFamily: '"Krona One", sans-serif' }}
          className="  lg:flex lg:h-screen justify-evenly  items-center overflow-hidden relative  "
        >
          <div className="flex justify-center mt-20">
            <Lottie className="  w-[70vh]" animationData={animationData} />
          </div>

          <div className="   border-t-[5px] border-l-[5px]  py-9 px-6 border-dashed border-[#404040] mr-[4vw] mt-[5vw]">
            <span className="text-[#404040] tracking-tight capitalize font-semibold text-[5vw]  ">
              Get in <span className="dark:text-[#B336FF] text-[#e0bef5]"> touch </span>
            </span>
            <div className=" flex max-md:flex-wrap justify-evenly gap-3 dark:bg-zinc-800 py-9 px-6 rounded   shadow-lg shadow-slate-700/60 ">
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-9 dark:text-white">
                    <div>
                      <input
                        className="py-[.5vw] px-[3vw] rounded-sm bg-transparent border border-b-black outline-none "
                        type="text"
                        {...register("Full Name")}
                        placeholder="name"
                      />
                    </div>
                    <div>
                      <input
                        className="py-[.5vw] px-[3vw] rounded-sm bg-transparent border border-b-black outline-none "
                        type="textarea"
                        {...register("Message")}
                        placeholder="Message"
                      />
                    </div>
                    <div>
                      <input
                        className="py-[.5vw] px-[3vw] rounded-sm bg-transparent border border-b-black outline-none "
                        type="text"
                        {...register("email", { required: true })}
                        placeholder="email"
                      />
                      {errors.email && (
                        <div className="text-[#d0382c] text-center">
                          this fild is required{" "}
                        </div>
                      )}
                    </div>
                    <motion.button
                      whileTap={{ scale: 1.05 }}
                      whileHover={{ scale: 1, rotate: "3deg" }}
                      transition={{ duration: 0.125, ease: "easeInOut" }}
                      className="py-[.5vw] px-[3vw] bg-[#B336FF] text-white rounded-md"
                      type="submit"
                    >
                      submit
                    </motion.button>
                  </div>
                </form>
                <div className="flex justify-center items-center py-4  "> </div>
              </div>

              <div className="w-full dark:text-white items-center flex justify-center flex-col  gap-12 overflow-hidden ">
                <div className=" ">
                  <h1
                    className="font-semibold text-center uppercase leading-none 
                  "
                  >
                    Contact me
                  </h1>
                  <span>demo@gmail.com</span>
                </div>
                <div className=" ">
                  <h1>Contact me </h1>
                  <span>00000000</span>
                </div>
                <div className="flex  gap-5 justify-center items-center">
                  {Data.map((i, index) => (
                    <div key={index} className=" ">
                      <Link to={i.Link}>
                        {index === 0 && <FaFacebookSquare />}
                        {index === 1 && <FaLinkedin />}
                        {index === 2 && <FaSquareXTwitter />}
                        {index === 3 && <FaGithub />}
                        {index === 4 && <FaWhatsappSquare />}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Singin;
