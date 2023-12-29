import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPowerSettingsNew, MdOutlineSettings } from "react-icons/md";
import { PiReadCvLogo } from "react-icons/pi";
import MenuBar from "./MenuBar";
import ShareData from "./ShareData";
import Link from "next/link";

const Navbar = () => {
  return (
    <main className="w-[10vw] lg:w-[5vw] h-screen static top-0 left-0 bg-slate-100 flex justify-center items-center flex-col z-50">
      <div className="w-full h-screen space-y-5">
        <div className="w-full h-16 grid place-content-center">
          <PiReadCvLogo className="cursor-pointer p-1 rounded-full" size={35} />
        </div>

        {/* MenuBar Div */}
        <div className="flex justify-center items-center flex-col space-y-3">
          <h1 className="text-xs md:text-sm">Menu</h1>
          <MenuBar />
        </div>

        {/* ShareData Div */}
        <div className="flex justify-center items-center flex-col space-y-3">
          <h1 className="text-xs md:text-sm">Share</h1>
          <ShareData />
        </div>

        {/* Others Div */}
        <div className="flex justify-center items-center flex-col space-y-3">
          <h1 className="text-xs md:text-sm">Others</h1>
          <div className="w-fit p-4 rounded-xl space-y-3 flex flex-col">
            <Link href={"/contact"}>
              <FaPhoneAlt
                className="cursor-pointer text-sm md:text-lg"
                title="Contact"
              />
            </Link>
            <Link href={"/setting"}>
              <MdOutlineSettings
                className="cursor-pointer text-sm md:text-lg"
                title="Setting"
              />
            </Link>
            <Link href={"/"}>
              <MdPowerSettingsNew
                className="cursor-pointer text-sm md:text-lg"
                title="Log Out"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
