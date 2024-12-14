import React from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { motion } from "framer-motion";

function Thamebtn() {
  const toggleDarkMode = () => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div>
      {" "}
      <motion.div
        whileTap={{ rotate: "360deg" }}
        whileHover={{ scale: 1.2 }}
        onClick={toggleDarkMode}
        className="dark:text-white text-xl"
      >
        <MdOutlineLightMode />
      </motion.div>
    </div>
  );
}

export default Thamebtn;
