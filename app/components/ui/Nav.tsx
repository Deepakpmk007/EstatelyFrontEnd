"use client";

import Link from "next/link";
import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="flex justify-between h-[7vh] items-center">
      <Link
        href={"/"}
        className="text-2xl md:text-4xl font-bold tracking-wider outline-none"
      >
        Estately
      </Link>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl mr-4"
      >
        {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
      </button>
      <div className="hidden md:flex gap-10 items-center text-xl font-light">
        <ul className="flex gap-5">
          <li>
            <Link className="outline-none" href={"/apartment"}>
              Apartment
            </Link>
          </li>
          <li>
            <Link className="outline-none" href={"/house"}>
              House
            </Link>
          </li>
          <li>
            <Link className="outline-none" href={"/service"}>
              Service
            </Link>
          </li>
          <li>
            <Link className="outline-none" href={"/about"}>
              About
            </Link>
          </li>
        </ul>
        <Link
          href={"/login"}
          className="px-7 py-2 bg-black text-white font-bold outline-none rounded"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
