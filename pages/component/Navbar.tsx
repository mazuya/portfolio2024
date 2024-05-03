import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex  items-center h-20 max-w-[1240px]  font-Barlow  z-30   bg-[#F8F8F8] text-black">
      <div className="pr-5 fixed flex justify-between items-center border-b-[1px] border-[#8B6A2F]  h-20 w-full bg-[#F8F8F8] z-50">
        <h1 className=""></h1>
        <ul className="hidden md:flex uppercase tracking-widest font-semibold text-base md:text-xl ">
          <li className="w-36 p-4 hover:text-[#F783A0] hover:cursor-pointer hover:duration-300 transition ">
            <Link href={"/"}>About me</Link>
          </li>
          <li className="w-32 p-4 hover:text-[#F783A0] hover:cursor-pointer hover:duration-300 transition ">
            <Link href={"/about"}>Projects</Link>
          </li>
          <li className="w-56 p-4 hover:text-[#F783A0] hover:cursor-pointer hover:duration-300 transition ">
            <Link href={"/other"}>other activities</Link>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden mr-8 z-50">
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      <div
        className={
          !nav
            ? "mr-5 z-50 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-[#F8F8F8] ease-out duration-300 md:hidden"
            : "z-50 top-0 w-[60%] h-full fixed left-[-50%] ease-in duration-200"
        }
      >
        <h1 className=" ml-[3.2rem] mt-[4rem] text-3xl  text-black tracking-widest md:hidden"></h1>
        <ul className="ml-10 pt-20 pr-10 tracking-widest text-xl md:hidden uppercase">
          <Link href={"/"}>
            <li className="p-4 hover:text-[#F783A0] hover:cursor-pointer hover:duration-300 transition border-b-[1px] border-[#1E1B1B]">
              About me
            </li>
          </Link>

          <Link href={"/about"}>
            <li className="p-4 hover:text-[#F783A0] hover:cursor-pointer hover:duration-300 transition border-b-[1px] border-[#1E1B1B]">
              Projects
            </li>
          </Link>

          <Link href={"/other"}>
            <li className="p-4 hover:text-[#F783A0] hover:cursor-pointer hover:duration-300 transition border-b-[1px] border-[#1E1B1B]">
              Other activities
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
