import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";

export default function page() {
  return (
    <section className="pt-18 w-screen h-screen overflow-x-hidden">
      <div className="w-screen h-[60%] bg-orange-200 p-5"></div>
      <div className="w-full h-[7vh] flex flex-col md:flex-row justify-between p-5 md:items-center gap-4">
        <div className="flex gap-2 ">
          <CiLocationOn className="text-2xl text-primary" />
          <p className="text-xl font-light text-black">Address</p>
        </div>
        <div className="flex gap-4 text-black">
          <button className="flex items-center gap-2 py-2 px-4 border-[1px] tracking-wider hover:bg-secondary cursor-pointer transition-colors">
            <CiHeart className="text-2xl" />
            Save
          </button>
          <button className="flex items-center gap-2 py-2 px-4 border-[1px] tracking-wider hover:bg-secondary cursor-pointer transition-colors">
            <RiShare2Line className="text-2xl" />
            Share
          </button>
        </div>
      </div>
      {/* //// */}
      <section className="grid grid-cols-1 md:grid-cols-2 py-5 px-10 gap-20">
        <div className="flex flex-col gap-4 text-black mt-10">
          <p className="text-3xl md:text-5xl font-extrabold">
            $54{" "}
            <span className="text-lg md:text-xl text-secondary">/month</span>
          </p>
          <div className="flex gap-7">
            <p className="text-2xl font-bold">
              72 <span className="text-lg md:text-xl text-secondary">m</span>
            </p>
            <p className="text-2xl font-bold">
              3 <span className="text-lg md:text-xl text-secondary">beds</span>
            </p>{" "}
            <p className="text-2xl font-bold">
              2 <span className="text-lg md:text-xl text-secondary">baths</span>
            </p>{" "}
            <p className="text-2xl font-bold">
              2{" "}
              <span className="text-lg md:text-xl text-secondary">floors</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-7 w-full">
            <button className="py-4  border-[1px] text-black w-full cursor-pointer">
              Agent:name
            </button>
            <button className="py-4  border-[1px] bg-black text-white w-full cursor-pointer">
              Send a Request
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-black ">
          <h1 className="text-2xl md:text-4xl font-bold">About Apartment</h1>
          <p className="text-lg md:text-xl font-light ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            aliquam recusandae. Qui, facere, id explicabo incidunt velit,
            tempora eius modi sequi iusto deserunt consequatur accusantium vitae
            aut porro culpa! Omnis.
          </p>
          <ul className="flex flex-row flex-wrap gap-2">
            <li className="flex gap-2 items-center px-2 py-2">
              <IoMdCheckmark />
              <span>Free Pracking</span>
            </li>{" "}
            <li className="flex gap-2 items-center px-2 py-2">
              <IoMdCheckmark />
              <span>Free Pracking</span>
            </li>{" "}
            <li className="flex gap-2 items-center px-2 py-2">
              <IoMdCheckmark />
              <span>Free Pracking</span>
            </li>{" "}
            <li className="flex gap-2 items-center px-2 py-2">
              <IoMdCheckmark />
              <span>Free Pracking</span>
            </li>{" "}
            <li className="flex gap-2 items-center px-2 py-2">
              <IoMdCheckmark />
              <span>Free Pracking</span>
            </li>{" "}
            <li className="flex gap-2 items-center px-2 py-2">
              <IoMdCheckmark />
              <span>Free Pracking</span>
            </li>{" "}
            <li className="flex gap-2 items-center px-2 py-2">
              <IoMdCheckmark />
              <span>Free Pracking</span>
            </li>{" "}
            <li className="flex gap-2 items-center px-2 py-2">
              <IoMdCheckmark />
              <span>Free Pracking</span>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
