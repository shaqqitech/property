import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPlus,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <main className="w-20 h-screen fixed top-0 left-0 border-2 bg-slate-200 p-3 flex justify-center items-center flex-col">
      <div className="w-full space-y-8">
        <div className="w-full grid place-content-center">
          <FaWhatsapp />
        </div>
        <div className="flex justify-center items-center flex-col space-y-1">
          <h1>Menu</h1>
          <div className="w-fit p-4 bg-white rounded-xl space-y-3">
            <FaWhatsapp />
            <FaWhatsapp />
            <FaWhatsapp />
            <FaWhatsapp />
            <FaWhatsapp />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col space-y-1">
          <h1>Share</h1>
          <div className="w-fit p-4 bg-white rounded-xl space-y-3">
            <FaWhatsapp className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaPlus className="cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col space-y-1">
          <h1>Others</h1>
          <div className="w-fit p-4 bg-white rounded-xl space-y-3">
            <FaWhatsapp />
            <FaWhatsapp />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
