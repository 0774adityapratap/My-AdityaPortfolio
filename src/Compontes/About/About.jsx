import React, { useRef } from "react";
import AboutCard from "./AboutCard";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  const data = [
    {
      title:
        "JavaScript is a scripting or programming language that allows you to implement complex features on web pages",
      logo: "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png",
    },
    {
      title:
        "HTML5 improves web structure, multimedia integration, APIs, and performance.",
      logo: "https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png",
    },
    {
      title:
        "CSS (Cascading Style Sheets) styles and layouts web pages, enhancing visual presentation and user experience.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
    },

    {
      title:
        "React.js is a JavaScript library for building dynamic user interfaces with reusable components.",
      logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    },
    {
      title:
        "Tailwind CSS is a utility-first framework for creating custom, responsive designs efficiently.",
      logo: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
    },
    {
      title:
        "Bootstrap is a popular front-end framework for developing responsive and mobile-first websites with ease",
      logo: "https://cdn.dribbble.com/users/595/screenshots/14417863/media/8913cc1aae5de0cc7afdd1727e5582c0.png",
    },
    {
      title:
        "Redux is a predictable state container for JavaScript apps, managing state changes with a single source of truth.",
      logo: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    },
    {
      title:
        "GitHub is a web-based platform for version control and collaboration on software development projects.",
      logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
  ];

  return (
    <div
      style={{ fontFamily: '"Teko", sans-serif' }}
      className="dark:bg-black  overflow-hidden "
    >
      <span className=" hidden lg:block">
        <Navbar />
      </span>
      <div className="py-3 my-5 shadow-lg shadow-[#b236ff2a]">
      
        <h1 className="text-center text-[#B336FF]   text-2xl font-semibold ">
          This innovative technology is the backbone of my website development
          process, transforming ideas into dynamic digital experiences.
        </h1>
      </div>
      <div className="flex  flex-wrap mx-5  gap-4">
        {data.map((item) => (
          <AboutCard Data={item} />
        ))}
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default About;
