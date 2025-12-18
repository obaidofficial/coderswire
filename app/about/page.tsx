import React from "react";
import Banner from "./components/banner/Banner";
import ClientSlider from "./components/clientsSlider/ClientSlider";
import Pricing from "./components/Pricing/Pricing";

const Aboutpage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <ClientSlider />
      <Pricing />
    </div>
  );
};

export default Aboutpage;
