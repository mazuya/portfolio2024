// pages/index.tsx or any other page
import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Analytics from "./component/Analytics";
import Newslatter from "./component/Newslatter";
import Card from "./component/Card";
import { GetListSiteService } from "@/services/netlify";
import { UnsplashService } from "@/services/unsplash";
import { NasaService } from "@/services/Nasa";
import { PokemonService } from "@/services/pokemon";
import MySkill from "./component/MySkill";

function HomePage() {
  return (
    <div className="bg-[#F8F8F8] ">
      <Hero />
      <Analytics />
      <MySkill />
    </div>
  );
}

export default HomePage;
