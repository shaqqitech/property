"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Data } from "../constants/Data";

const Trending = () => {
  const [data, setData] = useState(Data);

  const nextImage = (itemId) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === itemId) {
          const newIndex = (item.activeImageIndex + 1) % item.images.length;
          return { ...item, activeImageIndex: newIndex };
        }
        return item;
      })
    );
  };

  const prevImage = (itemId) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === itemId) {
          const newIndex =
            (item.activeImageIndex - 1 + item.images.length) %
            item.images.length;
          return { ...item, activeImageIndex: newIndex };
        }
        return item;
      })
    );
  };

  return (
    <main className="w-full px-20 py-5 space-y-2">
      <h1 className="w-full text-center py-4 text-2xl font-bold">Trending</h1>
      <div className="w-full gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="sm:w-40 sm:h-48 md:w-48 md:h-60 lg:w-60 lg:h-72 shadow-2xl rounded-xl overflow-hidden sm:grid grid-rows-2 grid-cols-1 relative"
          >
            <div className="relative">
              <Image
                src={item.images[item.activeImageIndex]}
                width={1}
                height={1}
                sizes="100%"
                className="w-full h-full bg-no-repeat bg-cover z-0"
              />
              <div className="">
                <button
                  onClick={() => prevImage(item.id)}
                  className="bg-white left-2 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-20 text-black bottom-1/3 text-xl transform -translate-y-1/2"
                >
                  <IoIosArrowBack />
                </button>
                <button
                  onClick={() => nextImage(item.id)}
                  className="bg-white right-2 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-20 text-black bottom-1/3 text-xl transform -translate-y-1/2"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div className="flex flex-col p-3 space-y-1 md:space-y-2 text-sm md:text-sm lg:text-xl cursor-pointer">
              <div className="font-bold text-orange-500">
                {item.rent}
                <span className="text-slate-500 font-medium text-sm">
                  /month
                </span>
              </div>
              <div className="font-bold text-[10px] md:text-xs lg:text-lg">
                {item.name}
              </div>
              <div className="flex space-x-2 text-xs">
                <span>{item.star}</span>
                <span>{item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Trending;
