"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

export default function Nav() {
  const [open, isOpen] = useState(false);
  return (
    <nav className="w-screen h-16 md:h-18 bg-white flex items-center px-4 fixed justify-between z-20">
      <Link href="/" className="text-2xl font-bold tracking-wider md:text-4xl">
        Estately
      </Link>
      <div className="hidden md:flex items-center justify-between  gap-10">
        <ul className="flex items-center gap-6 text-xl font-light tracking-wide">
          <li>
            <Link href="/apartments">Apartments</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/contact">Help</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <button className="text-xl font-semibold bg-black text-white py-2 px-4 rounded cursor-pointer outline-none hover:bg-gray-800 transition-colors">
          Sign In
        </button>
      </div>
      <div className="md:hidden flex items-center justify-center cursor-pointer">
        <RiMenu3Line className="text-2xl" onClick={() => isOpen(!open)} />
      </div>
      {open && (
        <AnimatePresence>
          <motion.div
            className="absolute top-18 right-0 w-[300px] h-fit bg-white flex flex-col items-end px-10 p-20 gap-10 z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {
                opacity: 0,
                transition: {
                  staggerChildren: 0.1,
                  staggerDirection: -1,
                },
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  staggerDirection: 1,
                },
              },
            }}
          >
            <motion.ul className="flex flex-col items-end gap-6 text-xl font-light tracking-wide">
              {[
                { href: "/apartments", label: "Apartments" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About us" },
                { href: "/contact", label: "Help" },
                { href: "/blog", label: "Blog" },
              ].map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={item.href}>{item.label}</Link>
                </motion.li>
              ))}
            </motion.ul>
            <motion.button
              className="text-xl font-semibold bg-black text-white py-2 px-4 rounded cursor-pointer outline-none hover:bg-gray-800 transition-colors"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              Sign In
            </motion.button>
          </motion.div>
        </AnimatePresence>
      )}
    </nav>
  );
}
