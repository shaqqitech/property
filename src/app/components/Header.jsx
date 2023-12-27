'use client'
import React, { useRef } from "react";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  const inputFileRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      document.getElementById("imagePreview").style.backgroundImage = `url(${reader.result})`;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    inputFileRef.current.click();
  };

  return (
      <main className="w-[95vw] static h-24 flex justify-between items-center px-5 md:px-7 border-b-2">
        {/* Left box */}
        <div className="w-48 h-full flex justify-start items-center">
          {/* Image Box */}
          <div className="flex flex-col justify-center items-center space-y-1">
            <div id="imagePreview" className="w-8 md:w-10 h-8 md:h-10 rounded-lg border-2"></div>
            <input
              type="file"
              accept="image/*"
              ref={inputFileRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <button className="w-fit text-[10px] px-1 bg-red-200 rounded-md" onClick={handleClick}>
              Change
            </button>
          </div>
          {/* Name Box */}
          <div className="t text-slate-400 text-sm md:text-lg lg:text-xl">
            Hi, <span className="font-bold text-black">Anna✋</span>
          </div>
        </div>

        {/* Right box */}
        <div className="w-52 md:w-60 flex justify-evenly items-center px-5 text-sm md:text-lg">
            <span className="cursor-pointer"><FaRegHeart /></span>
            <div className="w-20 sm:w-24 md:w-32 h-10 flex justify-between items-center bg-black/10 rounded-lg px-1">
                <p className="bg-white w-full h-1/2 grid place-content-center cursor-pointer rounded-md text-sm p-1">Buy</p>
                <p className=" w-full h-full grid place-content-center cursor-pointer rounded-md text-sm p-1">Rent</p>
            </div>
        </div>
      </main>
  );
};

export default Header;
