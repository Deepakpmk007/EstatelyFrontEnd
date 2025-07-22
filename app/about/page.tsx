import React from "react";
import BlurImage from "../components/BlurImage";

export default function page() {
  return (
    <div className="pt-18 overflow-hidden">
      <div className="w-screen h-[100svh] relative ">
        <BlurImage
          src="https://images.pexels.com/photos/1587947/pexels-photo-1587947.jpeg"
          alt="bg"
          className="object-cover md:object-fill blur-[3px]"
        />
        <div className="absolute top-50 left-10 flex flex-col gap-10">
          <h1 className="text-2xl font-extrabold text-secondary md:text-5xl">
            About Us
          </h1>
          <p className="text-white font-bold text-3xl md:text-7xl tracking-wide text-pretty">
            Whether you're a seasoned investor or new to real estate, Foundation
            ® delivers seamless capital, AI-generated insights and expert
            guidance – empowering you to invest with confidence.
          </p>
        </div>
      </div>
      <div className="w-screen h-fit pt-18 flex p-5 flex-col gap-10 md:h-[50vh]">
        <h1 className="text-4xl font-bold text-black md:text-6xl">
          Effortless Capital, Limitless Opportunities.
        </h1>
        <p className="text-lg tracking-wide font-light text-primary text-pretty md:text-2xl w-4/5 `">
          At Foundation, we're focused on fusing expert knowledge and insight
          with cutting-edge technology, elevating investment property financing
          to the next level.
        </p>
      </div>
      <div className="p-5  flex flex-col gap-4 md:flex-row md:flex-wrap">
        <div className="w-full h-[250px] flex flex-col justify-between p-5 rounded-2xl bg-green-300 md:h-[300px] md:w-[500px] md:grow ">
          <span className="text-7xl font-extrabold">18</span>
          <p className="text-2xl font-light">Custom Loan Products</p>
        </div>
        <div className="w-full h-[250px] flex flex-col justify-between p-5 rounded-2xl bg-blue-300 md:h-[300px] md:w-[500px] md:grow ">
          <span className="text-7xl font-extrabold">10</span>
          <p className="text-2xl font-light">Days Average Close Time</p>
        </div>
        <div className="w-full h-[250px] flex flex-col justify-between p-5 rounded-2xl bg-yellow-300 md:h-[300px] md:w-[500px] md:grow ">
          <span className="text-7xl font-extrabold">99%</span>
          <p className="text-2xl font-light">Client Success Rate</p>
        </div>
        <div className="w-full h-[250px] flex flex-col justify-between p-5 rounded-2xl bg-red-300 md:h-[300px] md:w-[500px] md:grow ">
          <span className="text-7xl font-extrabold">01</span>
          <p className="text-2xl font-light">Mission</p>
        </div>{" "}
        <div className="w-full h-[250px] flex flex-col justify-between p-5 rounded-2xl bg-teal-300 md:h-[300px] md:w-[500px] md:grow ">
          <span className="text-7xl font-extrabold">$25B</span>
          <p className="text-2xl font-light">In Lending Experience</p>
        </div>
      </div>
    </div>
  );
}
