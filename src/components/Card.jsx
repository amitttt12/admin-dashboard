import React from "react";
import {AiOutlineDollar} from 'react-icons/ai'

import {BsArrowDownShort} from 'react-icons/bs';
import {BsArrowUpShort } from 'react-icons/bs';
import {CgNotes} from 'react-icons/cg'
import {TbDatabaseDollar} from 'react-icons/tb';
import {HiOutlineShoppingBag} from 'react-icons/hi'

const Card = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[110px] w-[240px] border-1 rounded-md border-black bg-white gap-1">
        <div className="left pl-1">
            <div className="h-[100px] w-[100px] rounded-full bg-green-300 flex justify-center items-center opacity-50 ">
            <AiOutlineDollar style={{fontSize:'65px',color:'green'}}/>

            </div>
            
        </div>
        <div className='right flex flex-col items-start'>
            <span className="text-gray-500">Earning</span>
            <span className="text-black font-bold ">$198K</span>
            <div className="flex justify-center items-center">
                <BsArrowUpShort style={{color:'green'}}/>
                <span className="text-green-500 font-bold">37.8%</span>
                <span className="text-xs">this month.</span>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[110px] w-[240px] border-1 rounded-md border-black bg-white gap-1">
        <div className="left pl-1">
            <div className="h-[100px] w-[100px] rounded-full bg-indigo-400 flex justify-center items-center opacity-50 ">
            <CgNotes style={{fontSize:'55px',color:'purple'}}/>

            </div>
            
        </div>
        <div className='right flex flex-col items-start'>
            <span className="text-gray-500">Orders</span>
            <span className="text-black font-bold ">$2.4K</span>
            <div className="flex justify-center items-center">
                <BsArrowDownShort style={{color:'red'}}/>
                <span className="text-red-500 font-bold">2%</span>
                <span className="text-xs">this month.</span>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[110px] w-[240px] border-1 rounded-md border-black bg-white gap-1">
        <div className="left pl-1">
            <div className="h-[100px] w-[100px] rounded-full bg-cyan-500 flex justify-center items-center opacity-50 ">
            <TbDatabaseDollar style={{fontSize:'55px',color:'blue'}}/>

            </div>
            
        </div>
        <div className='right flex flex-col items-start'>
            <span className="text-gray-500">Balance</span>
            <span className="text-black font-bold ">$2.4</span>
            <div className="flex justify-center items-center">
            <BsArrowDownShort style={{color:'red'}}/>
                <span className="text-red-500 font-bold">2%</span>
                <span className="text-xs">this month.</span>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[110px] w-[240px] border-1 rounded-md border-black bg-white gap-1">
        <div className="left pl-1">
            <div className="h-[100px] w-[100px] rounded-full bg-red-400 flex justify-center items-center opacity-50 ">
            <HiOutlineShoppingBag style={{fontSize:'55px',color:'red'}}/>

            </div>
            
        </div>
        <div className='right flex flex-col items-start'>
            <span className="text-gray-500">Total Sales</span>
            <span className="text-black font-bold ">$89K</span>
            <div className="flex justify-center items-center">
                <BsArrowUpShort style={{color:'green'}}/>
                <span className="text-green-500 font-bold">11%</span>
                <span className="text-xs">this week.</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Card;
