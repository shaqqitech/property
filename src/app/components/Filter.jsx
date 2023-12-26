import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Filter = () => {
  return (
    <main className="w-full h-36 py-3 px-6">
        {/* Upper Div */}
      <div className="flex">
        <p className="font-bold text-lg lg:text-2xl">
          178 <span className="text-slate-400 font-medium">Results</span>
        </p>
      </div>
      {/* Lower Div */}
      <div className="flex flex-col bg-black/10 rounded-lg w-full h-24 px-2 md:px-5 py-3 space-y-3">
        <h3 className="flex justify-start items-center cursor-pointer space-x-2">
          <IoFilterOutline /> <span className="font-semibold text-lg md:text-xl">Filter</span>
        </h3>
        <div className="flex justify-between md:justify-around items-center">
            <ul className="flex space-x-2 md:space-x-5">
                <h1 className="text-sm md:text-lg">Type:</h1>
                <li className="flex justify-between w-full items-center space-x-2 bg-white lg:px-4 cursor-pointer rounded-md font-bold text-sm md:text-lg">House <span><MdKeyboardArrowDown /></span></li>
            </ul>
            <ul className="flex space-x-2 md:space-x-5">
                <h1 className="text-sm md:text-lg">Bed:</h1>
                <li className="flex justify-between w-full items-center space-x-2 bg-white lg:px-4 cursor-pointer rounded-md font-bold text-sm md:text-lg">4-5 <span><MdKeyboardArrowDown /></span></li>
            </ul>
            <ul className="flex space-x-2 md:space-x-5">
                <h1 className="text-sm md:text-lg">Near:</h1>
                <li className="flex justify-between w-full items-center space-x-2 bg-white lg:px-4 cursor-pointer rounded-md font-bold text-sm md:text-lg">Movie <span><MdKeyboardArrowDown /></span></li>
            </ul>
        </div>
      </div>
    </main>
  );
};

export default Filter;
