import React from "react";
import {
  MobileAppHeroSection,
  MobileAppWhyChoose,
  MobileAppWorkProcess,
} from "../components/mobileapp";

const MobileApp = () => {
  return (
    <div className="bg-white overflow-hidden">
      <MobileAppHeroSection />
      <MobileAppWhyChoose />
      <MobileAppWorkProcess />
    </div>
  );
};

export default MobileApp;
