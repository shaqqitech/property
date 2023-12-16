'use client'
import React, { useRef } from "react";
import { CiGift } from "react-icons/ci";

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
      <main className="w-[95vw] h-24 flex justify-between items-center px-5">
        {/* Left box */}
        <div className="w-48 h-full flex justify-start items-center">
          {/* Image Box */}
          <div className="flex flex-col justify-center items-center space-y-1">
            <div id="imagePreview" className="w-10 h-10 rounded-lg border-2"></div>
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
          <div className="text-xl text-slate-400">
            Hi, <span className="font-bold text-black">Anna✋</span>
          </div>
        </div>

        {/* Right box */}
        <div className="w-60 flex justify-between items-center px-5">
            <span className="cursor-pointer"><CiGift size={25}/></span>
            <div className="w-32 h-10 grid place-content-center place-items-center grid-cols-2 bg-slate-200 rounded-lg px-3">
                <p className="bg-white w-full h-full grid place-content-center cursor-pointer rounded-lg">Buy</p>
                <p>Rent</p>
            </div>
        </div>
      </main>
  );
};

export default Header;
