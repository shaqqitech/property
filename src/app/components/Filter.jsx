import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDown from "./DropDown";

const Filter = () => {

  const type = ['House', 'Apartment', 'Department', 'Office', 'Hall', 'Basement',];
  const bed = ['1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9',];
  const near = ['Theater', 'Cinema', 'Mall', 'Mosque', 'Mandir', 'Church', 'Valley',];

  return (
    <main className="w-full h-36 py-3 px-6 -z-10">
        {/* Upper Div */}
      <div className="flex">
        <p className="font-bold text-lg lg:text-2xl">
          178 <span className="text-slate-400 font-medium">Results</span>
        </p>
      </div>
      {/* Lower Div */}
      <div className="flex flex-col bg-black/10 rounded-lg w-full h-24 px-2 md:px-5 py-3 space-y-1">
        <h3 className="flex justify-start items-center cursor-pointer space-x-2">
          <IoFilterOutline /> <span className="font-semibold text-lg md:text-xl">Filter</span>
        </h3>
        <div className="flex flex-wrap justify-around items-center gap-2">
            <ul className="flex space-x-2 md:space-x-5">
                <h1 className="text-[10px] md:text-lg">Type:</h1>
                <li className="flex justify-between w-full items-center space-x-2 bg-white lg:px-4 cursor-pointer rounded-md font-bold text-sm md:text-lg"><DropDown Data={type} Title={type[0]}/> <span><MdKeyboardArrowDown /></span></li>
            </ul>
            <ul className="flex space-x-2 md:space-x-5">
                <h1 className="text-[10px] md:text-lg">Bed:</h1>
                <li className="flex justify-between w-full items-center space-x-2 bg-white lg:px-4 cursor-pointer rounded-md font-bold text-sm md:text-lg"><DropDown Data={bed} Title={bed[0]}/> <span><MdKeyboardArrowDown /></span></li>
            </ul>
            <ul className="flex space-x-2 md:space-x-5">
                <h1 className="text-[10px] md:text-lg">Near:</h1>
                <li className="flex justify-between w-full items-center space-x-2 bg-white lg:px-4 cursor-pointer rounded-md font-bold text-sm md:text-lg"><DropDown Data={near} Title={near[0]}/> <span><MdKeyboardArrowDown /></span></li>
            </ul>
        </div>
      </div>
    </main>
  );
};

export default Filter;
