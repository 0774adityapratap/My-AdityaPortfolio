import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Data } from "../../Data";
import { Link } from "react-router-dom";
import WalkimgBoll from "../../assets/Animation - walkingBoll.json";
import Lottie from "lottie-react";

function Footer() {
  return (
    <div className=" w-full  overflow-hidden ">
     
        <div
          className=" flex justify-between shadow-lg shadow-[#b236ff2a]  dark:bg-[#000] bg-[#dcb5f4e0] mb-5  w-full "
          style={{ borderRadius: "30% 90% 0% 0% " }}
        >
          <div className="flex ml-7  ">
            <div className="  top-5 right-10">
              <div className=" pt-16 pb-10">
                <h3 className="text-[5vw] text-[#B336FF] font-bold mb-8 leading-4">
                  Education
                </h3>
                <p
                  className="text-xl dark:text-white font-normal text-wrap  leading-6 mb-6"
                  
                >
                  Hello! I'm Aditya Pratap singh , a passionate React JS
                  front-end developer with a Bachelor's degree in Computer
                  Applications (BCA).
                  <br className="hidden xl:inline" /> I specialize in creating
                  responsive, dynamic, and user-friendly web applications.{" "}
                  <br className="hidden xl:inline" /> With a strong foundation
                  in computer science and a keen eye for detail, I strive to
                  deliver seamless and engaging user experiences.
                  <br className="hidden xl:inline" />
                </p>
                <div className="text-2xl dark:text-white font-normal leading-6 mb-6 flex gap-4 items-center">
                  From :- <span className="text-[#B336FF]">ICFAI Universcity Jaipur</span>{" "}
                   Rajasthan
                </div>
                <div className="flex items-center  text-2xl gap-9 my-5 dark:text-white ">
                  {Data.map((i, index) => (
                      <div key={index} className="flex text-[#B336FF]">
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
        {/* <Lottie className="w-[70vh] z-0" animationData={WalkimgBoll}></Lottie> */}
        </div>

    </div>
  );
}

export default Footer;

{
  /* <span
style={{ borderRadius: "30% 90% 0% 0% " }}
className="bg-red-400 w-1/2 h-1/2  -mr-20 "
></span>
<span
style={{ borderRadius: "30% 90% 0% 0% " }}
className="bg-red-400 w-1/2 h-1/2  -mr-20 "
></span>
<span
style={{ borderRadius: "30% 90% 0% 0% " }}
className="bg-red-400 w-1/2 h-1/2  -mr-20 "
></span> */
}
