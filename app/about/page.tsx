import React from "react";
import Banner from "./components/banner/Banner";
import ClientSlider from "./components/clientsSlider/ClientSlider";

const Aboutpage = () => {
  return (
    <div className="overflow-hidden h-screen">
      <Banner />
      <ClientSlider />
    </div>
  );
};

export default Aboutpage;
