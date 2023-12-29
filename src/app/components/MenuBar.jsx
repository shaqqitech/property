"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaHome, FaSearch, FaStar } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import Search from "./Search";

const MenuBar = () => {
  const [isActive, setIsActive] = useState("Home");
  const [showSearch, setShowSearch] = useState(false);

  const menuData = [
    {
      logo: <FaHome />,
      title: "Home",
      link: "/",
    },
    {
      logo: <FaStar />,
      title: "Popular",
      link: "/popular",
    },
    {
      logo: <IoIosTrendingUp />,
      title: "Trending",
      link: "/trending",
    },
    { logo: <FaSearch />, title: "Search", link: '/' },
  ];

  const handleIconClick = (title) => {
    setIsActive(title);
    // if (title === "Search") {
    //   setShowSearch(true);
    // } else {
    //   setShowSearch(false);
    // }
  };

  return (
    <main className="w-fit p-3 flex flex-col rounded-xl space-y-3">
      {menuData.map((item, ind) => (
        <span
          className={
            isActive === item.title
              ? "text-blue-500 cursor-pointer text-sm md:text-lg"
              : "text-black cursor-pointer text-sm md:text-lg"
          }
          title={item.title}
          key={ind}
          onClick={() => handleIconClick(item.title)}
        >
          <Link href={`${item.link}`}>{item.logo}</Link>
        </span>
      ))}
    </main>
  );
};

export default MenuBar;
