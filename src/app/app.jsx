import React from "react";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="h-[3000px] bg-gray-700" />
    </div>
  );
};

export default App;
