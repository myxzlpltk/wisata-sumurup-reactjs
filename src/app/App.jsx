import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <img src="/images/kedunggede.jpg" className="w-full" alt="sample" />
      <div className="h-[3000px]" />
    </div>
  );
};

export default App;
