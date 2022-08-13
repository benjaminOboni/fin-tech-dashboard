import React, { useState } from "react";
import { nav_icon, notif_icon, search_icon } from "../utils/svgs";
import Navlink from "./links/Navlink";

let navLinks= ["Overview", "Payments", "Cards", "Account", "Admin"];
let userImg= ""

function Header() {
  const [active, setActive]= useState("Overview");
  return (
    <div className="items-center justify-between flex w-full space-x-4 pb-3 pt-4 px-3">
      {/* logo */}
      <div className="border-b border-gray-900  w-[25%] flex md:space-x-2 md:pb-6 pb-2 items-center justify-center md:justify-start">
        <img
          className="md:w-12 md:h-12 w-10 h-10"
          src="data:image/jpeg;base64,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"
          alt="logo"
        />
        <h1 className="self-center md:inline md:font-bold md:text-xl text-md">
          OpenBank
        </h1>
      </div>
      {/* navlinks */}
      <div className="border-b pb-5 border-gray-900 w-[140%] items-center justify-center flex space-x-2">
        {navLinks.map((link)=>{ 
          return( 
          <div onClick={()=>setActive(link)}className="relative items-center justify-center flex">
            <Navlink title={link} key={link}/>
            <div className={`${link===active? "items-center justify-center flex absolute -bottom-3" :"hidden"}`}>
            {nav_icon}
            </div>
          </div>
       ) })}
      </div>
      {/* login */}
      <div className="border-b border-gray-900 pb-6 pt-4 hidden md:flex items-center justify-center px-3 space-x-6 w-[60%]">
        <div>{search_icon}</div>
        <div>{notif_icon}</div>
        <img src={userImg} alt="userimage" className="w-8 h-8 rounded-full object-center object-cover"
        />
      </div>
    </div>
  );
}

export default Header;
