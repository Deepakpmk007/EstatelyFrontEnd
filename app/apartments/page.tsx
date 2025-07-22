"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import ApCard from "../components/ApCard";

const MapContiner = dynamic(() => import("@/app/components/MapContiner"), {
  ssr: false,
});

export default function page() {
  const [mapShow, isMapShow] = useState(true);
  const [longTerm, isLongTerm] = useState(true);
  // const [shortTerm,i]

  const handleMapShow = (e: React.ChangeEvent<HTMLInputElement>): void => {
    isMapShow(e.target.checked);
    console.log(mapShow);
  };
  return (
    <div className="pt-20 pb-2 px-5 w-screen md:h-screen flex gap-2 relative overflow-hidden">
      <div className="h-full w-[450px] hidden md:flex flex-col gap-5 p-4 ">
        <div className="flex w-full gap-1">
          <button className="grow py-3 bg-black text-white rounded-sm cursor-pointer">
            Bye
          </button>{" "}
          <button className="grow py-3 bg-black text-white rounded-sm cursor-pointer">
            Rent
          </button>
        </div>
        <div className="flex p-2 justify-between items-center py-5">
          <p className="text-primary">256 results</p>
          <div className="flex gap-2 items-center">
            <label
              form="checkbox"
              className="text-lg font-light text-black"
              htmlFor="checkbox"
            >
              Show on map
            </label>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="border-0 accent-black"
              onChange={() => handleMapShow}
            />
          </div>
        </div>
        <div>
          <p className="text-lg font-light text-black">Rental Period</p>
          <div className="flex py-5 justify-around items-center">
            <div className="flex gap-2 items-center text-lg text-black">
              <input
                type="checkbox"
                name="long"
                id="long"
                className="accent-black"
                checked={longTerm}
                onChange={() => isLongTerm(!longTerm)}
              />
              <label htmlFor="long">Long term</label>
            </div>
            <div className="flex gap-2 items-center text-lg text-black">
              <input
                type="checkbox"
                name="shot"
                id="shot"
                className="accent-black"
                checked={!longTerm}
                onChange={() => isLongTerm(!longTerm)}
              />
              <label htmlFor="shot">Shot term</label>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-3">
          <p className="text-lg font-light text-black">Price</p>
          <input type="range" name="" id="" min={210} max={1200} />
          <div className="flex gap-4 justify-around">
            <input
              type="number"
              name=""
              id=""
              className="border-[1px] w-[80px] py-4 px-2 text-center rounded-2xl text-2xl font-light text-black outline-none"
            />

            <input
              type="number"
              name=""
              id=""
              className="border-[1px] w-[80px] py-4 px-2 text-center rounded-2xl text-2xl font-light text-black outline-none"
            />
          </div>
        </div> */}
        <div className="flex flex-col gap-2">
          <p className="text-lg font-light text-black">Real estate type</p>
          <select className="outline-none border-[1px] p-3 text-lg text-black font-bold accent-black">
            <option value="house">House</option>
            <option value="apartments">Apartments</option>
            <option value="commerical">Commerical</option>
          </select>
        </div>
      </div>

      {/* // Filter */}
      <div className="md:hidden absolute top-14 left-5 z-20">
        <button className="underline text-black text-lg">Filter</button>
      </div>
      {/* /////////////////////  */}
      <div className="w-full h-full flex flex-col gap-1 overflow-y-scroll sm:mt-5">
        <div className="h-[40%] w-full ">
          <MapContiner
            markers={[
              { position: [51.505, -0.09], popup: "London" },
              { position: [48.8566, 2.3522], popup: "Paris" },
              { position: [40.7128, -74.006], popup: "New York" },
            ]}
          />
        </div>
        <div className="h-[60%] w-full p-2 md:mt-8">
          <div className="h-[5vh] flex justify-between w-full">
            <div className="flex gap-5 text-2xl">
              <button className="cursor-pointer">
                <IoGridOutline />
              </button>
              <button className="cursor-pointer">
                <CiBoxList />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-primary">Sort by</p>
              <select className="outline-none p-1 text-sm text-black font-bold">
                <option value="price">Price</option>
                <option value="A-Z">A-Z</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 auto-rows-auto gap-7 pb-5">
            <ApCard />
            <ApCard />
            <ApCard />
            <ApCard />
            <ApCard />
          </div>
        </div>
        {/* //////////// */}
      </div>
    </div>
  );
}
