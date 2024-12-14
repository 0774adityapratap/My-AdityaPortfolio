import { motion } from "framer-motion";
import React from "react";
import Navbar from "../Header/Navbar";
function Contact() {
  return (
    <>
      <div  style={{ fontFamily: '"Teko", sans-serif' }}  className="dark:bg-black">
        <div className=" hidden lg:block">

        <Navbar />
        </div>
        <div className="  w-full  overflow-hidden flex justify-center min-h-screen  px-9 py-20  ">
          <div className=" lg:flex  gap-2  ">
            <motion.div
              whileHover={{ scale: 0.9 }}
              animate={{ x: [null, 50, 0] }}
              className=" w-auto -mt-12 rounded-md mb-10 dark:text-white text-zinc-100 dark:bg-gray-800 bg-[#B336FF] p-10"
            >
              <div>
                <h2 className="text-2xl dark:text-[#B336FF]  font-semibold  underline">
                  About Me :-{" "}
                </h2>
                <p className="text-xl tracking-tight dark:text-white text-[#b9a4c6] ">
                  Hello! I'm Aditya Pratap singh , a passionate React JS
                  front-end developer with a keen eye for detail and a love for
                  crafting seamless user experiences. Over the years, I've honed
                  my skills in building responsive, dynamic, and visually
                  appealing web applications. My journey in web development
                  began with a curiosity for how things work on the internet and
                  quickly turned into a full-fledged passion.
                </p>
              </div>
              <div>
                <h2 className="text-2xl dark:text-[#B336FF]  font-semibold  underline">
                  My Journey{" "}
                </h2>
                <p className="text-xl tracking-tight dark:text-white text-[#b9a4c6]   ">
                  My path into the world of front-end development has been
                  driven by a continuous desire to learn and innovate. From
                  mastering HTML, CSS, and JavaScript to diving deep into the
                  world of React, I've always strived to stay ahead of the curve
                  and keep up with the latest industry trends and best
                  practices.
                </p>
              </div>
              <div>
                <h2 className="text-2xl dark:text-[#B336FF]  font-semibold  underline">
                  Beyond Coding{" "}
                </h2>
                <p className="text-xl tracking-tight dark:text-white text-[#b9a4c6]   ">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying a good book. I also love connecting with other
                  developers and sharing knowledge within the community.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 0.9 }}
              animate={{ x: [null, -50, 0] }}

              className=" w-auto p-10 -mb-10 rounded-md bg-[#3c4a5c]"
            >
              <div>
                <h2 className="text-2xl dark:text-[#B336FF] text-white font-semibold  underline">
                  What I Do{" "}
                </h2>
                <p className="text-xl dark:text-white text-[#b9a4c6]     tracking-tight">
                  Responsive Web Design: Creating websites that look and
                  function beautifully on any device. Interactive User
                  Interfaces: Building intuitive and engaging user experiences
                  with React JS. Performance Optimization: Ensuring fast load
                  times and smooth performance for an optimal user experience.
                  State Management: Utilizing tools like Redux to manage
                  application state efficiently. API Integration: Seamlessly
                  connecting front-end applications with backend services.
                </p>
              </div>
              <div>
                <h2 className="text-2xl dark:text-[#B336FF] text-white  font-semibold  underline">
                  My Approach{" "}
                </h2>
                <p className="text-xl tracking-tight dark:text-white text-[#b9a4c6]   ">
                  I believe that great user experiences are born from a
                  combination of technical expertise and creative thinking. I
                  approach every project with a user-first mindset, aiming to
                  create interfaces that are not only functional but also
                  delightful to use. Collaboration and communication are key to
                  my process, ensuring that every project is aligned with the
                  client's vision and goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;



