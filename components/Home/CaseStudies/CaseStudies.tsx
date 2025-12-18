"use client";
import MyButton from "@/components/Helper/MyButton";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cases from "./Cases";

const responsive = {
  extraLarge: {
    breakpoint: { max: 4000, min: 1800 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 1800, min: 1324 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
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
    title: "Optimizing Cloud Cost on AWS",
    image: "/images/casestudies/cloud-cost-aws.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla earum eum sint sapiente velit nemo odit sunt voluptate blanditiis officia.",
  },
  {
    id: 2,
    url: "https://google.com",
    title:
      "Enhancing Cloud Security with Automated IAM User Key Rotation in AWS",
    image: "/images/casestudies/aws-iam-key-rotation.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla earum eum sint sapiente velit nemo odit sunt voluptate blanditiis officia.",
  },
  {
    id: 3,
    url: "https://hostinger.com",
    title: "Dedicated Development Team",
    image: "/images/casestudies/dedicated-development-team.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla earum eum sint sapiente velit nemo odit sunt voluptate blanditiis officia.",
  },
  {
    id: 4,
    url: "https://instagram.com",
    title: "Managed IT Services",
    image: "/images/casestudies/managed-it-service.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla earum eum sint sapiente velit nemo odit sunt voluptate blanditiis officia.",
  },
];

const CaseStudies = () => {
  return (
    <div className="pt-16 pb-16 bg-[#252525]">
      <div className="w-[88%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-20">
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h3 className="text-[20px] mb-4 md:mb-3 md:text-[28px] lg:text-[30px] leading-[1.2em] text-[#ffffff] font-semibold">
            Business Insights and Case Studies
          </h3>
          <p className="text-[14px] mb-4 md:mb-6 md:text-[16px] lg:text-[15px] leading-[1.6em] tracking-[0.2px] text-[#ffffff] font-regular">
            Read real-world transformations in action. Explore CodersWire’s case
            studies to see how our tailored solutions drive measurable
            results—from performance boosts to streamlined workflows—in AI,
            cloud, and custom software initiatives.
          </p>
          <div>
            <MyButton>View all Success Stories</MyButton>
          </div>
        </div>
        <div className="lg:col-span-3">
          <Carousel
            // swipeable={true}
            // draggable={true}
            showDots={true}
            responsive={responsive}
            //   ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            // keyBoardControl={true}
            //   customTransition="all .5"
            //   transitionDuration={500}
            //   containerClass="carousel-container"
            removeArrowOnDeviceType={[
              "extraLarge",
              "desktop",
              "tablet",
              "mobile",
            ]}
            //   deviceType={this.props.deviceType}
            dotListClass="case-dot"
            //   itemClass="carousel-item-padding-40-px"
            className="pb-8"
          >
            {OutSourceModels.map((data) => {
              return <Cases key={data.id} data={data} />;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
