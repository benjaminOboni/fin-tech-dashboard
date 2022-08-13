import React from "react";
import Card from "./card/Card";

function Navbar() {
  return (
    <div>
      <div className="md: w-[250px] h-[91%] hidden overflow-hidden md:flex flex-col items-center justify-between px-3">
        {/* cards */}
        <div className="pt-12 pb-4 border-b border-gray-900 w-full space-y-4 max-h-[400px] h-[350px] overflow-y-scroll scrollbar-hide">
            <Card type="mastercard"/>
            <Card type="visa"/>
        </div>
        <div className="my-2 items-center 
        justify-center flex w-full border-dashed border rounded-lg border-gray-400 py-3">
          <button className="w-full">
          Add card
          </button>
        </div>
        {/* footer */}
        <div className="pb-2 pt-[150px] px-3 flex flex-col space-y-4 items-start justify-between w-full h-full">
          <div className="flex flex-col items-start justify-center w-full space-y-4 pb-6 border-b border-gray-900">
            <a>Deposits</a>
            <a>loyalty program</a>
            <a>Loans</a>
          </div>
          <div className="space-y-3 text-black">
            <h1 className="font-bold text-lg">OpenBank.</h1>
            <p className="text-sm">2022 openbank license #19 from 06.05.2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

