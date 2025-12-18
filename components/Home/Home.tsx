import React from "react";
import Hero from "./Hero/Hero";
import MapSection from "./Map/MapSection";
import Models from "./Models/Models";
import Services from "./Services/Services";
import SiteRatings from "./SiteRatings/SiteRatings";
import TechnologiesTabsDark from "./TechnologiesTabsDark/TechnologiesTabsDark";
import CaseStudies from "./CaseStudies/CaseStudies";
import Industries from "./Industries/Industries";
import Technologies from "./Technologies/Technologies";
import TeamCards from "./Team/TeamCards";
import ExpertSolutions from "./ExpertSolutions/ExpertSolutions";
import About from "./About/About";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      {/* <MapSection /> */}
      {/* <Models /> */}
      <Services />
      {/* <SiteRatings /> */}
      {/* <TechnologiesTabsDark /> */}
      {/* <CaseStudies /> */}
      <Industries />
      {/* <Technologies /> */}
      {/* <ExpertSolutions /> */}
      <TeamCards />
    </div>
  );
};

export default Home;
