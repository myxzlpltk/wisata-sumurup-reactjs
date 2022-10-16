import React from "react";
import DestinationsSection from "./components/destinations-section";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";

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
