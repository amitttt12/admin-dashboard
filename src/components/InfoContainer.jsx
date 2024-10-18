import React from "react";
import { PiHandWavingBold } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";



const InfoContainer = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="nameContainer flex font-bold ">
        Hello Shahrukh <PiHandWavingBold style={{ fontSize: "25px" }} />
      </div>
      <form className="relative">
        <BsSearch className="absolute top-[10px] left-[5px] "/>
        <input type="text" id="filter" placeholder="Search..." className="rounded-md py-1 pl-[30px] border  border-black bg-white  outline-none placeholder:text-black" />
      </form>
    </div>
  );
};

export default InfoContainer;
