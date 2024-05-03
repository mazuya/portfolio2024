import React from "react";
//import myLogo from "/mylogo.png";
import Image from "next/image";

function Hero() {
  return (
    <div className=" tracking-widest bg-[#F8F8F8] mb-10 md:mb-0  ">
      <div className="pt-10 max-w-[80%] lg:max-w-[60%] mx-auto flex lg:flex-row flex-col items-center justify-center">
        <div className="relative w-[120px] lg:w-[200px] ">
          <Image
            src="/me.png"
            width={130}
            height={130}
            alt="/"
            className="w-full object-cover overflow-hidden rounded-full border-2"
          />
        </div>

        <div className="flex justify-center flex-col lg:ml-10 mt-5 lg:mt-0 text-center lg:text-start gap-3">
          <section className="-mt-4 lg:-mt-3 uppercase font-Barlow font-semibold tracking-[0.2em]">
            <h1 className="text-[3rem] lg:text-[5rem]">Thunpitcha</h1>
            <h1 className="text-[1.67rem] lg:text-[3rem] -mt-4 lg:-mt-9 text-[#F783A0]">
              Rattanatamjaroen
            </h1>
          </section>
          <section className="flex gap-2 text-[0.6rem] lg:text-base -mt-2 lg:-mt-3 ">
            <div className="bg-[#E8E8E8] border-solid border-[1px] border-[#9B9B9B] px-2 py-1 rounded-full">
              Front-end
            </div>
            <div className="bg-[#E8E8E8] border-solid border-[1px] border-[#9B9B9B] px-2 py-1 rounded-full">
              Back-end
            </div>
            <div className="bg-[#E8E8E8] border-solid border-[1px] border-[#9B9B9B] px-2 py-1 rounded-full">
              UX/UI designs
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
