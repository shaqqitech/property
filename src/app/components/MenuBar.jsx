"use client";
import React, { useState } from "react";
import { FaHome, FaSearch, FaStar } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";

const MenuBar = () => {
  const [isActive, setIsActive] = useState("Home");

  const menuData = [
    {
      logo: <FaHome  />,
      title: "Home",
    },
    {
      logo: <FaStar  />,
      title: "Popular",
    },
    {
      logo: <IoIosTrendingUp  />,
      title: "Trending",
    },
    { logo: <FaSearch  />, title: "Search" },
  ];

  const handleIconClick = (title) => {
    setIsActive(title);
  };

  return (
    <main className="w-fit p-3 flex flex-col rounded-xl space-y-3">
      {menuData.map((item, ind) => (
        <div
          className={
            isActive === item.title
              ? "text-blue-500 cursor-pointer text-sm md:text-lg"
              : "text-black cursor-pointer text-sm md:text-lg"
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
