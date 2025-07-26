import MapWraper from "@/app/components/MapWraper";

export default function page() {
  return (
    <section className="p-5 flex flex-col md:flex-row gap-10">
      {/* //////////////profile */}
      <section className="flex flex-col gap-5 ">
        <div className="flex items-center gap-5">
          <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-amber-200">
            {/* <Image/> */}
          </div>
          <div>
            <h2 className="text-xl font-bold">name</h2>
            <p className="text-sm">Gender</p>
          </div>
        </div>
        {/* //// end */}
        <section>
          <div className="flex gap-2 items-center">
            <p className="font-bold md:text-2xl">Email :</p>
            <span className="text-lg">deepakpmk@hotmail.com</span>
          </div>
          <div className="flex gap-2 items-center ">
            <p className="font-bold md:text-2xl">Phone :</p>
            <span className="text-lg">9600945364</span>
          </div>
          <div className="flex flex-wrap gap-2 items-start">
            <p className="font-bold md:text-2xl">Address :</p>
            <span className="whitespace-normal break-words md:w-[400px] md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              fuga eveniet debitis, magni in ipsum laborum cumque corporis
              consequuntur blanditiis vel
            </span>
          </div>
        </section>
      </section>
      {/* ////////////////////// */}
      <section className="md:w-[50vw] h-full ">
        <div className="w-full h-[12vh] md:h-[19vh] gap-2 md:gap-6 flex flex-col  items-start justify-center">
          <h2 className="text-xl md:text-2xl font-semibold">
            Total Property you post
          </h2>
          <span className="text-5xl md:text-8xl font-bold">4</span>
        </div>
      </section>

      {/* /////////////////////// MAP */}
      <section className="w-full h-full bg-black md:block hidden">
        <MapWraper />
      </section>
    </section>
  );
}
