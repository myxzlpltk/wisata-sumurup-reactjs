import React from "react";
import DestinationsSection from "./organisms/destinations-section";
import HeroSection from "./organisms/hero-section";
import Navbar from "./organisms/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection id="home" />
      <DestinationsSection id="destination" />
      <div className="h-[3000px] bg-gray-700" />
    </div>
  );
};

export default App;
