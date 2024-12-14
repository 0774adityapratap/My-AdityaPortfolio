import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/20240606_213711_0000-removebg-preview (1).png";

export default function Header() {
  return (
    <div>
      {/* <div className=" fixed z-10 w-full px-20 flex justify-between items-center py-4 bg-black ">
        <div className=" drop-shadow-lg border-none w-[3.5vw] pb-[-10]">
          <img className=" " src={logo} alt="" />
        </div>
        <div className="flex links gap-10 text-xl text-white cursor-pointer ">
          {["Home", "About", "Contact"].map((item, index) => (
            <Link key={index} to={`/${item}`}>
              {item}
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
}
