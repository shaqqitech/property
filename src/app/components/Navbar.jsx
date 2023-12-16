"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPlus,
  FaMixer,
  FaHome,
  FaEnvelope,
  FaSearch,
  FaPhoneAlt,
  FaLinkedinIn,
  FaPinterest,
  FaSnapchat,
} from "react-icons/fa";
import { MdPowerSettingsNew, MdOutlineSettings } from "react-icons/md";
import { PiReadCvLogo } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuData = [
    {
      logo: <FaHome size={20} />,
      title: "Home",
    },
    { logo: <FaSearch size={20} />, title: "Search" },
    {
      logo: <FaEnvelope size={20} />,
      title: "Envelope",
    },
    { logo: <FaPhoneAlt size={20} />, title: "Contact" },
  ];

  const data = [
    {
      logo: <FaLinkedinIn size={20} />,
      link: "https://linkedin.com/",
      title: "Linkedin",
    },
    {
      logo: <FaFacebook size={20} />,
      link: "https://fb.com/",
      title: "Facebook",
    },
    {
      logo: <FaPinterest size={20} />,
      link: "https://pinterest.com/",
      title: "Pinterest",
    },
    {
      logo: <FaSnapchat size={20} />,
      link: "https://snapchat.com/",
      title: "Snapchat",
    },
  ];

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="lg:w-[5vw] h-screen static top-0 left-0 bg-slate-100 flex justify-center items-center flex-col">
      <div className="w-full h-screen space-y-5">
        <div className="w-full h-16 grid place-content-center">
          <PiReadCvLogo className="cursor-pointer p-1 rounded-full" size={35} />
        </div>
        <div className="flex justify-center items-center flex-col space-y-3">
          <h1 className="text-sm">Menu</h1>
          <div className="w-fit p-3 flex flex-col bg-white rounded-xl space-y-3">
            {menuData.map((item, ind) => (
              <Link href={"/"} title={item.title} key={ind}>
                {item.logo}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center flex-col space-y-3">
          <h1 className="text-sm">Share</h1>
          <div className="w-fit flex flex-col p-4 bg-white rounded-xl space-y-3">
            <Link href={"https://web.whatsapp.com/"} target="_blank">
              <FaWhatsapp
                className="cursor-pointer rounded-full text-green-600"
                size={20}
                title="WhatpsApp"
              />
            </Link>
            <Link href={"https://x.com/"} target="_blank">
              <FaTwitter
                className="cursor-pointer rounded-full text-blue-400"
                size={20}
                title="X"
              />
            </Link>
            <Link href={"https://instagram.com/"} target="_blank">
              <FaInstagram
                className="cursor-pointer rounded-full text-red-500"
                size={20}
                title="Instagram"
              />
            </Link>
            <div className="relative">
              <Link href={""}>
                {isOpen ? (
                  <FaMixer
                    className="cursor-pointer rounded-full text-black"
                    size={20}
                    onClick={handleOnClick}
                  />
                ) : (
                  <FaPlus
                    className="cursor-pointer rounded-full text-black"
                    size={20}
                    onClick={handleOnClick}
                  />
                )}
              </Link>
              {isOpen && (
                <ul className="absolute top-0 left-12 w-20 p-3 border-2 h-20 place-content-center place-items-center gap-4 bg-slate-300 rounded-lg grid grid-cols-2">
                  {data.map((item, ind) => (
                      <Link href={item.link} target="_blank" title={item.title} key={ind}>
                        {item.logo}
                      </Link>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col space-y-3">
          <h1 className="text-sm">Others</h1>
          <div className="w-fit p-4 bg-white rounded-xl space-y-3">
            <MdOutlineSettings
              className="cursor-pointer"
              size={20}
              title="Setting"
            />
            <MdPowerSettingsNew
              className="cursor-pointer"
              size={20}
              title="Log Out"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
