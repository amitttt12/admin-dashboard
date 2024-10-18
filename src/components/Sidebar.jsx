import React from "react";
import { LuBadgePercent } from "react-icons/lu";
import { BiSolidWalletAlt } from "react-icons/bi";
import { MdOutlineLiveHelp } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";
import { TbHexagonNumber0 } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbSquareKey } from "react-icons/tb";
import { FaDiceD6 } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="wrapper ">
      <div className="top flex justify-center items-center gap-2 p-6 text-2xl">
        <TbHexagonNumber0 className="text-white bold" />
        <span className="text-white font-bold">Dashboard</span>
      </div>
      <div className="center flex justify-center items-center">
        <ul>
          <div className="flex justify-between items-center gap-[25px] m-3 hover:bg-blue-200 rounded">
            <div className="flex justify-center items-center">
              <TbSquareKey
                style={{ fontSize: "20px" }}
                className="text-gray-400"
              />
              <li className="sidebarMenuName text-gray-400  cursor-pointer text-xl pl-2">
                Dashboard
              </li>
            </div>
          </div>

          <div className="flex justify-between items-center gap-[25px] m-3  hover:bg-blue-200 text-white rounded ">
            <div className="flex justify-center items-center ">
              <FaDiceD6
                style={{ fontSize: "20px" }}
                className="text-gray-400"
              />
              <li className="sidebarMenuName text-gray-400  cursor-pointer text-xl pl-2">
                Product
              </li>
            </div>
            <MdKeyboardArrowRight
              style={{ fontSize: "18px", color: "gray", fontWeight: "500" }}
            />
          </div>

          <div className="flex justify-between items-center gap-[25px] m-3 hover:bg-blue-200 rounded">
            <div className="flex justify-center items-center">
              <BsPersonSquare
                style={{ fontSize: "20px" }}
                className="text-gray-400"
              />
              <li className="sidebarMenuName text-gray-400  cursor-pointer text-xl pl-2">
                Customers
              </li>
            </div>
            <MdKeyboardArrowRight
              style={{ fontSize: "18px", color: "gray", fontWeight: "500" }}
            />
          </div>

          <div className="flex justify-between items-center gap-[25px] m-3 hover:bg-blue-200 rounded">
            <div className="flex justify-center items-center">
              <BiSolidWalletAlt
                style={{ fontSize: "20px" }}
                className="text-gray-400"
              />
              <li className="sidebarMenuName text-gray-400  cursor-pointer text-xl pl-2">
                Income
              </li>
            </div>
            <MdKeyboardArrowRight
              style={{ fontSize: "18px", color: "gray", fontWeight: "500" }}
            />
          </div>

          <div className="flex justify-between items-center gap-[25px] m-3 hover:bg-blue-200 rounded">
            <div className="flex justify-center items-center">
              <LuBadgePercent
                style={{ fontSize: "20px" }}
                className="text-gray-400"
              />
              <li className="sidebarMenuName text-gray-400 cursor-pointer text-xl pl-2">
                Promote
              </li>
            </div>
            <MdKeyboardArrowRight
              style={{ fontSize: "18px", color: "gray", fontWeight: "500" }}
            />
          </div>

          <div className="flex justify-between items-center gap-[25px] m-3 hover:bg-blue-200 rounded">
            <div className="flex justify-center items-center">
              <MdOutlineLiveHelp
                style={{ fontSize: "20px" }}
                className="text-gray-400"
              />
              <li className="sidebarMenuName text-gray-400 cursor-pointer text-xl pl-2">
                Help
              </li>
            </div>
            <MdKeyboardArrowRight
              style={{ fontSize: "18px", color: "gray", fontWeight: "500" }}
            />
          </div>
        </ul>
      </div>

      <div className="bottom bg-blue-300  opacity-25 w-[90%] rounded-md p-3  m-2 absolute bottom-2">
        <div className="flex justify-around items-center">
          <BsPersonCircle style={{ fontSize: "25px" }} />
          <div className="flex flex-col justify-start items-start">
            <span className=" text-white font-bold">Evano</span>
            <span className="text-xs"> Project Manager</span>
          </div>
          

          <MdKeyboardArrowDown style={{ fontSize: "25px", color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
