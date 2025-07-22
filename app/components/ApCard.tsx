import React, { Suspense } from "react";
import BlurImage from "./BlurImage";
import { CiHeart } from "react-icons/ci";

export default function ApCard() {
  return (
    <Suspense fallback={<p>loading</p>}>
      <div className="h-[400px] w-full flex flex-col gap-1 cursor-pointer text-black">
        <div className="w-full h-[70%] relative ratio aspect-video">
          <BlurImage
            src={
              "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg"
            }
            alt="house"
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">
            $230 <span className="text-secondary text-lg">/month</span>
          </p>
          <CiHeart className="text-2xl" />
        </div>
        <p className="font-bold">Address</p>
        <ul className="flex gap-2 text-secondary text-sm">
          <li>2 room</li>
          <li>1 bathroom</li>
          <li>2 floor</li>
        </ul>
      </div>
    </Suspense>
  );
}
