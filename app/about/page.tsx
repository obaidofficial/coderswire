import React from "react";
import Banner from "./components/banner/Banner";
import ClientSlider from "./components/clientsSlider/ClientSlider";
import Pricing from "./components/Pricing/Pricing";
import LeadershipValues from "./components/LeadershipValues/LeadershipValues";
import WeServe from "./components/WeServe/WeServe";
import HourlyPricing from "./components/HourlyPricing/HourlyPricing";
import SiteRatings from "@/components/Home/SiteRatings/SiteRatings";
import Technologies from "@/components/Home/Technologies/Technologies";
import Models from "@/components/Home/Models/Models";
import Services from "@/components/Home/Services/Services";
import TechnologiesTabsDark from "@/components/Home/TechnologiesTabsDark/TechnologiesTabsDark";
import Industries from "@/components/Home/Industries/Industries";

const Aboutpage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <ClientSlider />
      <LeadershipValues />
      <WeServe />
      <Services />
      <Models />
      <HourlyPricing />
      <SiteRatings />
      <Technologies />
      <TechnologiesTabsDark />
      <Industries />
      <Pricing />
    </div>
  );
};

export default Aboutpage;
