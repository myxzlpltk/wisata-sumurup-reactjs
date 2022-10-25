import React from "react";
import CommunitySection from "./organisms/community-section";
import DestinationsSection from "./organisms/destinations-section";
import Footer from "./organisms/footer";
import HeroSection from "./organisms/hero-section";
import Navbar from "./organisms/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection id="home" />
      <DestinationsSection id="destination" />
      <CommunitySection id="community" />
      <Footer />
    </div>
  );
};

export default App;
