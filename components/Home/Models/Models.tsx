"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModelsCard from "./ModelsCard";

const responsive = {
  extraLarge: {
    breakpoint: { max: 4000, min: 1800 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 1800, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const OutSourceModels = [
  {
    id: 1,
    url: "https://facebook.com",
    title: "Software Development Outsourcing",
    list: [
      "Full-scale development handled with expertise.",
      "Skilled IT team managing the entire development life cycle.",
      "Pain-free project management and delivery assurance.",
    ],
  },
  {
    id: 2,
    url: "https://google.com",
    title: "Team Augmentation",
    list: [
      "Seamless integration of specialists into in-house teams.",
      "Blended-shore approach for rapid team expansion.",
      "Efficient management processes and methodologies implementation.",
    ],
  },
  {
    id: 3,
    url: "https://hostinger.com",
    title: "Dedicated Development Team",
    list: [
      "Custom developer teams tailored to project needs.",
      "Offloading team management responsibilities for peace of mind.",
      "Ready-to-go teams ensuring project objectives are met effectively.",
    ],
  },
  {
    id: 4,
    url: "https://instagram.com",
    title: "Managed IT Services",
    list: [
      "Comprehensive management scope for minimized workload.",
      "Proactive approach to IT maintenance and support.",
      "Strategic guidance for long-term technology optimization.",
    ],
  },
];

const Models = () => {
  return (
    <div className="pb-16 pt-16 bg-[#f2f9ff] dark:bg-black/50">
      <div className="w-[92%] lg:w-[88%] mx-auto">
        {/* Text Content */}
        <h2 className="text-[24px] mb-4 md:mb-3 md:text-[28px] text-center lg:text-[56px] leading-[1.2em] text-[#252525] dark:text-white font-normal uppercase">
          Our Outsourcing Models
        </h2>
        <p className="text-[14px] mx-auto text-center w-[900px] mb-4 md:mb-6 md:text-[16px] lg:text-[28px] leading-[1.2em] tracking-[0.2px] text-[#252525] dark:text-[#ffffffc3] font-light">
          Our outsourcing models are designed to optimize your operational
          success and project outcomes.
        </p>
        {/* Sliders */}
        <Carousel
          //   swipeable={false}
          //   draggable={false}
          showDots={false}
          responsive={responsive}
          //   ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          //   keyBoardControl={true}
          //   customTransition="all .5"
          //   transitionDuration={500}
          //   containerClass="carousel-container"
          //   removeArrowOnDeviceType={["tablet", "mobile"]}
          //   deviceType={this.props.deviceType}
          //   dotListClass="custom-dot-list-style"
          //   itemClass="carousel-item-padding-40-px"
        >
          {OutSourceModels.map((data) => {
            return <ModelsCard key={data.id} data={data} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Models;
