import Link from "next/link";
import React from "react";
import { CiLogin } from "react-icons/ci";

export default function page() {
  return (
    <div className="w-full h-[70svh] flex items-center justify-center gap-10 flex-col ">
      <div className="flex flex-col items-center justify-center gap-3 w-full border-[1px] px-2 py-20 rounded">
        <CiLogin className="text-4xl" />
        <h1 className="font-semibold text-xl tracking-wider">
          Register with email
        </h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-secondary p-2 rounded
           outline-none"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="bg-secondary p-2 rounded
           outline-none"
        />
        <input
          type="password"
          placeholder="Re-Enter your password"
          className="bg-secondary p-2 rounded
           outline-none"
        />
        <button className="bg-black py-2 px-10 outline-none rounded text-white">
          Get started
        </button>

        <p className="text-sm">
          Already have a account?{" "}
          <Link href="/auth/login" className="text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
