import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

import index from "@/public/image/index.jpg";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col overflow-hidden md:mt-2  mt-20 gap-10">
      <div className="flex flex-col md:flex-row  justify-center items-center gap-10">
        <h1 className="text-2xl md:text-8xl font-bold">
          FIND YOUR PERFECT HOME
        </h1>
        <div className="flex flex-col md:p-6 gap-10 items-center md:items-start">
          <p className="text-xl text-center md:text-start">
            We offer 10,000 apartments for every request. You are guaranteed to
            find the perfect home with us.
          </p>
          <div className="flex items-center">
            <input
              type="text"
              name=""
              id=""
              className="border-[1px] p-2 outline-none md:w-[500px]"
            />
            <button className="border-[1px] border-l-0 p-3 outline-none">
              <CiSearch />
            </button>
          </div>
          <Link href="/apartments" className="text-blue-400 underline">
            see more apartments
          </Link>
        </div>
      </div>
      <div className="relative w-full h-[30vh] md:h-[50vh] mt-10">
        <Image
          src={index}
          fill
          className="object-cover"
          alt="index image"
          loading="lazy"
        />
      </div>
    </div>
  );
}
