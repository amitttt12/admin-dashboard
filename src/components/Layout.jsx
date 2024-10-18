import React, { useState } from "react";
import Sidebar from "./Sidebar";
import InfoContainer from "./InfoContainer";
import Card from "./Card";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { UserData } from "./Data";
import { BsSearch } from "react-icons/bs";
import Product from "./Product";

const Layout = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        lable: "",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });

  return (
    <>
      <div className="outerContainer h-[100%] w-[100%] flex overflow-x-hidden bg-neutral-200">
        {/* SideBar section */}

        <div className="sidebar h-[100-screen]  w-[18%] rounded-md bg-blue-950 relative">
          <Sidebar />
        </div>

        {/* Info Container */}

        <div className="mainPage h-[100%] w-[100%]  rounded-md m-4 flex flex-col gap-[10px]">
          <div className="infoContainer">
            <InfoContainer />
          </div>

          {/* Card Section */}

          <div className="cardsContainer flex  rounded-sm  justify-between items-center p-2 gap-5">
            <Card />
          </div>

          {/* Chart Section */}

          <div className="chartContainer  p-[10px] flex h-[60vh] gap-[20px]">

            {/* <div>
              
            </div> */}


            <div className="calendarContainer  flex flex-col gap-[40px] h-[100%] w-[62%] bg-white rounded-md">
              <div className="headerPart flex justify-between items-center p-[8px]">
                <div className="leftSection flex flex-col ">
                  <span className="text-lg text-black font-bold">Overview</span>
                  <span className="text-gray-500 ">Monthly Earning</span>
                </div>
                <div className="rightSection pr-2">
                  <select
                    id="dropdown"
                    className="py-1 rounded-md outline-none border-none bg-neutral-200"
                  >
                    <option value="option1">Quarterly</option>
                    <option value="option2">Annually</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  width: "95%",
                  height: "300px",
                  paddingBottom: "20px",
                  paddingLeft: "50px",
                  position:'absolute',
                  bottom:'50px',
                  left:'250px',
                }}
              >
                <BarChart chartData={userData} />
              </div>
            </div>

            <div className="piChart border-2 flex flex-col h-[100%] w-[38%] bg-white rounded-md">
              <div className="flex flex-col p-2">
                <span className="text-black font-bold">Customers</span>
                <span className="text-gray-500">
                  Customers that buy products
                </span>
              </div>
              <div className="flex justify-center items-center">
                <div className="h-[50%] w-[65%] bg-white rounded-full flex justify-center items-center text-white">
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      paddingBottom: "15px",
                    }}
                  >
                    <PieChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Section */}

          <div className="tableContainer rounded-md h-[90%] bg-white ">
            <div className="flex justify-between items-center p-[10px]">
              <span className="text-black font-bold">Product Sell</span>
              <div className="rightSection flex gap-2">
                <form className="relative">
                  <BsSearch className="absolute top-[10px] left-[5px] " />
                  <input
                    type="text"
                    id="filter"
                    placeholder="Search..."
                    className="rounded-md py-1 pl-[30px] border border-none bg-neutral-200  outline-none placeholder:text-black"
                  />
                </form>

                <select
                  id="dropdown"
                  className="pr-1 py-1 rounded-md outline-none border-none bg-neutral-200"
                >
                  <option value="option1">Last 30 days</option>
                  <option value="option2">Last 6 months</option>
                </select>
              </div>
            </div>
            <div className="">
              <Product />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
