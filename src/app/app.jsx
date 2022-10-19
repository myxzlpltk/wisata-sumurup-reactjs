import React from "react";
import CommunitySection from "./organisms/community-section";
import DestinationsSection from "./organisms/destinations-section";
import HeroSection from "./organisms/hero-section";
import Navbar from "./organisms/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection id="home" />
      <DestinationsSection id="destination" />
      <CommunitySection id="community" />
      <div className="h-[3000px] bg-gray-700" />
    </div>
  );
};

export default App;
