// pages/index.tsx or any other page
import React from "react";
import Hero from "./component/Hero";
import Analytics from "./component/Analytics";

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
