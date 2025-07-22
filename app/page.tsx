import Link from "next/link";
import BlurImage from "./components/BlurImage";
import { blurData } from "./utils/getBlurDataURL";
import { LuArrowRight } from "react-icons/lu";

export default async function Home() {
  const blurDataURL = await blurData(
    "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg"
  );
  return (
    <main className="flex flex-col md:pt-18 md:h-screen w-screen font-redHat">
      <div className="h-[100svh] md:h-[40vh] w-full flex flex-col md:flex-row justify-center md:justify-around p-10 md:items-center gap-10">
        <h1 className="text-5xl md:text-[7rem] font-bold md:font-extrabold text-black md:w-[900px] uppercase">
          Find your perfect home
        </h1>
        <div className="flex flex-col gap-5">
          <p className="text-lg md:text-3xl font-light text-[#8c8c8c] md:w-[500px]">
            {" "}
            We offer 10,000 apartments for every request. You are guaranteed to
            be able to find an apartment.
          </p>
          <div className="flex mt-4">
            <input
              type="text"
              className="border-[1px] border-black outline-none py-2 px-3 w-full"
              placeholder="Enter country, city or region"
            />
            <button className="border-black border-[1px] border-l-0 outline-none py-2 px-4 hover:bg-black hover:text-white transition-all">
              <LuArrowRight className="text-xl" />
            </button>
          </div>
          <Link
            href={"/apartments"}
            className="font-light tracking-wider underline"
          >
            see apartments
          </Link>
        </div>
      </div>
      <div className="hidden md:block relative w-full h-[80vh] ">
        <BlurImage
          src={
            "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg"
          }
          alt="home"
          blurDataURL={blurDataURL}
          className="p-14 object-cover"
        />
      </div>
    </main>
  );
}
