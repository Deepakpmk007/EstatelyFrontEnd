"use client";

import Link from "next/link";
import React from "react";
import { CiLogin } from "react-icons/ci";
import axios from "axios";
import { setUser } from "@/app/utils/slice/userSlice";
import { useDispatch } from "react-redux";

export default function page() {
  const dispatch = useDispatch();

  const [enterData, setEnterData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/auth/login`,
      enterData
    );
    dispatch(
      setUser({
        id: data.user._id,
        name: data.user.name,
        email: data.user.email,
        role: data.user.role,
      })
    );
    console.log(data);
  };
  return (
    <div className="w-full h-[70svh] flex items-center justify-center gap-10 flex-col ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-3 md:border-[1px] px-2 py-20 rounded md:w-[600px]"
      >
        <CiLogin className="text-4xl" />
        <h1 className="font-semibold text-xl tracking-wider">
          Sign in with email
        </h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-secondary p-2 rounded
           outline-none md:w-[400px]"
          onChange={(e) =>
            setEnterData({ ...enterData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="bg-secondary p-2 rounded md:w-[400px]
           outline-none"
          onChange={(e) =>
            setEnterData({ ...enterData, password: e.target.value })
          }
        />

        <button className="bg-black py-2 px-10 outline-none rounded text-white">
          Login
        </button>

        <p className="text-sm">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
