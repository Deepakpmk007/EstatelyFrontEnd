"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { CiLogin } from "react-icons/ci";
import toast from "react-hot-toast";

export default function page() {
  const [enterData, setEnterData] = React.useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/auth/register", enterData);
      setEnterData({
        userName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
      setError("");
      toast.success("Registration successful!");
      router.push("/auth/login");
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        console.log(err);
        setError(err.response?.data.message || "An error occurred");
      }
    }
  };
  return (
    <div className="w-full h-[70svh] flex items-center justify-center gap-10 flex-col ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-3 md:w-[600px] md:border-[1px] px-2 py-20 rounded"
      >
        <CiLogin className="text-4xl" />
        <h1 className="font-semibold text-xl tracking-wider">
          Register with email
        </h1>
        <input
          type="text"
          placeholder="Enter your user name"
          className="bg-secondary p-2 rounded outline-none"
          onChange={(e) =>
            setEnterData({ ...enterData, userName: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-secondary p-2 rounded
           outline-none"
          onChange={(e) =>
            setEnterData({ ...enterData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="bg-secondary p-2 rounded
           outline-none"
          onChange={(e) =>
            setEnterData({ ...enterData, password: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Re-Enter your password"
          className="bg-secondary p-2 rounded
           outline-none"
          onChange={(e) =>
            setEnterData({ ...enterData, passwordConfirm: e.target.value })
          }
        />
        <button className="bg-black py-2 px-10 outline-none rounded text-white">
          Get started
        </button>
        <p className="text-red-500">{error}</p>

        <p className="text-sm">
          Already have a account?{" "}
          <Link href="/auth/login" className="text-blue-500">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
