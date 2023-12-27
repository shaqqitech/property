"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPlus,
  FaMixer,
  FaLinkedinIn,
  FaPinterest,
  FaSnapchat,
} from "react-icons/fa";

const ShareData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <main className="w-fit flex flex-col p-4 rounded-xl space-y-3">
      <Link href={"https://web.whatsapp.com/"} target="_blank">
        <FaWhatsapp
          className="cursor-pointer rounded-full text-green-600 text-sm md:text-lg"
          title="WhatpsApp"
        />
      </Link>
      <Link href={"https://x.com/"} target="_blank">
        <FaTwitter
          className="cursor-pointer rounded-full text-blue-400 text-sm md:text-lg"
          title="X"
        />
      </Link>
      <Link href={"https://instagram.com/"} target="_blank">
        <FaInstagram
          className="cursor-pointer rounded-full text-red-500 text-sm md:text-lg"
          title="Instagram"
        />
      </Link>
      <div className="relative" ref={menuRef}>
        {isOpen ? (
          <FaMixer
            className="cursor-pointer rounded-full text-black text-sm md:text-lg"
            onClick={handleOnClick}
          />
        ) : (
          <FaPlus
            className="cursor-pointer rounded-full text-black text-sm md:text-lg"
            onClick={handleOnClick}
          />
        )}

        {isOpen && (
          <ul className="absolute top-0 left-12 w-20 p-3 border-2 h-20 place-content-center place-items-center gap-4 rounded-lg grid grid-cols-2 z-40 bg-slate-300 text-sm md:text-lg">
            {data.map((item, ind) => (
              <Link
                href={item.link}
                target="_blank"
                title={item.title}
                key={ind}
              >
                {item.logo}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default ShareData;
