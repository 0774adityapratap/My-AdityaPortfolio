import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Rolling from "../Rolling/Rolling";
import Landing from "../Landingpage/Landing";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";


function Layout() {


  return (
    <div style={{ fontFamily: '"Teko", sans-serif' }}  className="  overflow-hidden bg-[#e5d4efe0] dark:bg-black">
      
      <div className="  z-50 fixed w-full  ">
        <Navbar />
      </div>
      <Home />
      <motion.div
        initial={{ rotate: "5deg" }}
        animate={{ rotate: "0deg" }}
        transition={{ duration: 0.5, delay: 2 }}
        className="z-10"
      >
        <Rolling />
      </motion.div>
      <Landing />
      <Footer />
    </div>
  );
}

export default Layout;
