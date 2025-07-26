"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function UserDashBoard() {
  const pathname = usePathname();

  const navItems = [
    { name: "Profile", path: "/user/profile" },
    { name: "My Properties", path: "/user/properties" },
    { name: "Settings", path: "/user/settings" },
    { name: "Notifications", path: "/user/notifications" },
  ];

  return (
    <nav className="h-full w-[15%] bg-secondary p-3 flex flex-col gap-6">
      <h1 className="text-2xl font-extrabold">DashBoard</h1>
      <ul className="flex flex-col gap-4 text-xl font-bold">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`block px-3 py-2 rounded-md transition-colors ${
                pathname === item.path
                  ? "bg-white text-black"
                  : "text-black hover:bg-white/10"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
