import React from "react";
import DestinationsSection from "./components/destinations-section";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";

const App = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div>
      <Navbar activeIndex={activeIndex} />
      <HeroSection id="home" />
      <DestinationsSection id="destination" />
      <div className="h-[3000px] bg-gray-700" />
    </div>
  );
};

export default App;
