import React from "react";
import Banner from "./components/banner/Banner";
import ClientSlider from "./components/clientsSlider/ClientSlider";
import Pricing from "./components/Pricing/Pricing";
import LeadershipValues from "./components/LeadershipValues/LeadershipValues";
import WeServe from "./components/WeServe/WeServe";

const Aboutpage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <ClientSlider />
      <LeadershipValues />
      <WeServe />
      <Pricing />
    </div>
  );
};

export default Aboutpage;
