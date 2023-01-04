import React from "react";
import HomeMiddleSection from "./HomeMiddleSection";
import Faq from "./Faq";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HomeMiddleSection />
      <Faq />
    </div>
  );
};

export default HomePage;
