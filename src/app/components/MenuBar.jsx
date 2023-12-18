"use client";
import React, { useState } from "react";
import { FaHome, FaSearch, FaStar } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";

const MenuBar = () => {
  const [isActive, setIsActive] = useState("Home");

  const menuData = [
    {
      logo: <FaHome size={20} />,
      title: "Home",
    },
    {
      logo: <FaStar size={20} />,
      title: "Popular",
    },
    {
      logo: <IoIosTrendingUp size={20} />,
      title: "Trending",
    },
    { logo: <FaSearch size={20} />, title: "Search" },
  ];

  const handleIconClick = (title) => {
    setIsActive(title);
  };

  return (
    <main className="w-fit p-3 flex flex-col bg-white rounded-xl space-y-3">
      {menuData.map((item, ind) => (
        <div
          className={
            isActive === item.title
              ? "text-blue-500 cursor-pointer"
              : "text-black cursor-pointer"
          }
          title={item.title}
          key={ind}
          onClick={() => handleIconClick(item.title)}
        >
          {item.logo}
        </div>
      ))}
    </main>
  );
};

export default MenuBar;
