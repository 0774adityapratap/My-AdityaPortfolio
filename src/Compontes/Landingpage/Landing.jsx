import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import webVideos from "../../images/bento-grid.mp4";
import webVideos2 from "../../images/openai-demo.mp4";
import webVideos3 from "../../images/ssofEcommers - Made with Clipchamp.mp4";

function Landing() {
  let bounceTran = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };

  const [routed, setrouted] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let DeltaX = mouseX - window.innerWidth / 2;
      let DeltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(DeltaY, DeltaX) * (180 / Math.PI);
      setrouted(angle - 180);
    });
  });

  return (
    <div className="overflow-hidden ">
      <div className=" shadow-lg shadow-[#b236ff57] my-5 mb-8 ">
        <h2 className="text-[5vw] dark:text-white tracking-tight text-center   ">
          MY PROJECTS{" "}
        </h2>
      </div>
      <motion.div className=" flex  flex-wrap mx-5  gap-4 px-5 justify-evenly items-center">
        <div class="p-4 max-w-sm">
          <div class="flex rounded-lg h-full dark:bg-gray-800 bg-[#e0cbec] p-8 flex-col">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg pb-2"
              src={webVideos}
            ></video>
            <div class="flex items-center mb-3">
              <h2 class=" dark:text-white text-lg font-medium">
                animated dashboard 
              </h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base  dark:text-gray-300">
                This dashboard, created by my team and me, is used for
                monitoring user data. We aim to make it more efficient.
                this is made for can App
              </p>
              <a
                href="#"
                class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-3 max-w-sm">
          <div class="flex rounded-lg h-full dark:bg-gray-800 bg-[#e0cbec] p-8 flex-col">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg pb-2 object-cover  bg-center "
              src={webVideos2}
            ></video>
            <div class="flex items-center mb-3">
              <h2 class=" dark:text-white text-lg font-medium">
                animated dashboard 
              </h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base  dark:text-gray-300">
                This dashboard, created by my team and me, is used for
                monitoring user data. We aim to make it more efficient.
              </p>
              <a
                href="#"
                class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-3 max-w-sm">
          <div class="flex rounded-lg h-full dark:bg-gray-800 bg-[#e0cbec] p-8 flex-col">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg bg-white pb-2 object-cover  bg-center "
              src={webVideos3}
            ></video>
            <div class="flex items-center mb-3">
              <h2 class=" dark:text-white text-lg font-medium">
                E- Commers Website
              </h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base  dark:text-gray-300">
              this app web app made by for prectice in this i use redux for state Management and tailwind for responsive desine and aslo use axios for fecthing Apis
              </p>
              <a
                href="#"
                class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Landing;

{
  /* <div className="">
<div className=" flex items-center justify-center w-[11vw] h-[11vw] rounded-full bg-[#3a86ff]">
  <div className=" relative w-[8vw] h-[8vw] rounded-full bg-[#b336ff]">
    <div
      style={{
        transform: `translate(-50%, -50%) rotate(${routed}deg)`,
      }}
      className="  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[5vw]  rotate-180"
    >
      <div className="w-[4vw] h-[4vw] flex  items-center rounded-full bg-white">
        <div className="w-[2vw] h-[2vw] rounded-full bg-black"></div>
      </div>
    </div>
  </div>
</div>
</div> */
}
