"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientSliderCard from "./ClientSliderCard";

const responsive = {
  extraLarge: {
    breakpoint: { max: 4000, min: 1800 },
    items: 8,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 1800, min: 1324 },
    items: 7,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ClientsLogos = [
  {
    id: 1,
    image: "/images/clients/1.webp",
    alt: "Tiles Paradise",
  },
  {
    id: 2,
    image: "/images/clients/2.webp",
    alt: "Pristine Packaging",
  },
  {
    id: 3,
    image: "/images/clients/3.webp",
    alt: "Dina Melwani",
  },
  {
    id: 4,
    image: "/images/clients/4.webp",
    alt: "D'Lashes",
  },
  {
    id: 5,
    image: "/images/clients/5.webp",
    alt: "Lucy Darling",
  },
  {
    id: 6,
    image: "/images/clients/6.webp",
    alt: "RYP",
  },
  {
    id: 7,
    image: "/images/clients/7.webp",
    alt: "Office Technology Solutions",
  },
  {
    id: 8,
    image: "/images/clients/8.webp",
    alt: "MK Printing Ads",
  },
];

const ClientSlider = () => {
  return (
    <div className="pb-10 bg-[#f2f9ff]">
      <div className="relative -mt-12 z-30 w-[92%] lg:w-[88%] mx-auto bg-white px-3 py-2 rounded-xl shadow-lg">
        {/* Text Content */}
        {/* <h2 className="text-[24px] mb-4 md:mb-3 md:text-[28px] text-center lg:text-[56px] leading-[1.2em] text-[#252525] dark:text-white font-normal uppercase">
          Our Outsourcing Models
        </h2>
        <p className="text-[14px] mx-auto text-center w-[900px] mb-4 md:mb-6 md:text-[16px] lg:text-[28px] leading-[1.2em] tracking-[0.2px] text-[#252525] dark:text-[#ffffffc3] font-light">
          Our outsourcing models are designed to optimize your operational
          success and project outcomes.
        </p> */}
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
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "extraLarge",
          ]}
          //   deviceType={this.props.deviceType}
          //   dotListClass="custom-dot-list-style"
          //   itemClass="carousel-item-padding-40-px"
        >
          {ClientsLogos.map((data) => {
            return <ClientSliderCard key={data.id} data={data} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ClientSlider;
