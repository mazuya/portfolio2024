import React from "react";

import Image from "next/image";

function Analytics() {
  return (
    <div className="bg-[#1E1B1B] mt-5 lg:mt-[7.5rem]  w-full py-16 px-4 flex justify-center items-center font-domine tracking-widest h-[700px] lg:h-[500px] md:h-[450px]   ">
      <div className="md:mt-15 max-w-[80%] lg:max-w-[60%] mx-auto flex lg:flex-row flex-col items-center md:items-start justify-center">
        <div className="relative w-[120px] lg:w-[200px] uppercase font-semibold font-Barlow text-[#C2C2C2] text-2xl md:text-5xl ">
          <span className="flex flex-row gap-3 lg:gap-0 lg:flex-col items-center justify-center lg:items-end lg:justify-start">
            <h1>About </h1>
            <h1>me</h1>
          </span>
        </div>

        <div className="flex justify-center flex-col lg:ml-10 mt-8 lg:mt-0 text-start lg:text-start ">
          <p className="text-[0.7rem] lg:text-[0.83rem]  text-[#FFFFFF] font-Poppins md:w-[38rem] lg:w-[41 rem]">
            As a senior student at Faculty of Ecommerce at Chulalongkorn
            University,
          </p>
          <p className="mt-3 text-[0.7rem] lg:text-[0.83rem]  text-[#FFFFFF] font-Poppins md:w-[38rem] lg:w-[41 rem]">
            I created this portfolio website to express my interest in the
            Software Engineering position. Due to my passion for continually
            learning in new tech stacks and I possess proficiency across the
            Full stack developer that adeptly handling both Front-end and
            Back-end development.
          </p>

          <div className="flex flex-col text-center md:text-start justify-end md:flex-row gap-3 md:gap-8 mt-10 md:mt-20">
            <div className="flex items-center justify-center">
              <Image src="/cu.png" width={270} height={250} alt="/"></Image>
            </div>
            <section className="flex flex-col font-Poppins md:mt-0 my-7 ">
              <h1 className="font-semibold text-[#F783A0] md:text-base text-[0.9rem]">
                Chulalongkorn University
              </h1>
              <p className="mt-4 md:mt-7 text-[0.7rem]  text-white">
                Faculty of Commerce and <br></br> Accountancy (Statisitc)
                <br></br> Major:
                <span className="text-[#F783A0]">
                  Statistics and Data Science
                </span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
