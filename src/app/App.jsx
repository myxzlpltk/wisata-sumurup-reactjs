import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

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
