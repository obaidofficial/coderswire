"use client";
import MyButton from "@/components/Helper/MyButton";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Team from "./Team";
import Link from "next/link";

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

const teamMembers = [
  {
    id: 1,
    url: "https://facebook.com",
    title: "Muhammad Khizar",
    expert: "Expert in UI/UX Design and Texturing",
    years: "5+",
    skills: [
      "Blender",
      "Substance Painter",
      "Adobe Photoshop",
      "Illustrator",
      "Unity",
      "3D Modeling",
      "Texturing",
      "UI / UX",
      "Web Design",
      "Animation",
    ],
    image: "/images/team/Khizar.webp",
  },
  {
    id: 2,
    url: "https://google.com",
    title: "Haris",
    expert: "Expert in ASO Optimization",
    years: "3+",
    skills: ["Sensor Tower", "Data AI", "Key App Top", "ASO Desk", "App Radar"],
    image: "/images/team/Haris.webp",
  },
  {
    id: 3,
    url: "https://hostinger.com",
    title: "Abdul Rehman",
    expert: "Expert in Unity and Adobe Photoshop",
    years: "4+",
    skills: [
      "Game Development",
      "Unity",
      "Unreal",
      "Animation",
      "C#",
      "C++",
      "Adobe Photoshop",
      "Adobe Premiere",
    ],
    image: "/images/team/AbdulRehman.webp",
  },
  {
    id: 4,
    url: "https://instagram.com",
    title: "Tayyab Liaqat",
    expert: "Expert in ASO Optimization",
    years: "8+",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Ansible",
      "Terraform",
      "Jenkins",
    ],
    image: "/images/team/TayyabLiaqat.webp",
  },
  {
    id: 5,
    url: "https://instagram.com",
    title: "Mubashir Hassan",
    expert: "Expert in Applied AI Engineer",
    years: "8+",
    skills: ["Python", "RAG", "Agentic AI", "NLP", "NLU", "Transformers"],
    image: "/images/team/MubashirHassan.webp",
  },
  {
    id: 6,
    url: "https://instagram.com",
    title: "Ali Hamza",
    expert: "Expert in ASO Tools and Strategies",
    years: "5+",
    skills: [
      "Sensor Tower",
      "Data AI",
      "Key App Top",
      "App Tweak",
      "App Spy",
      "ASO Desk",
      "App Radar",
      "Gummicube",
    ],
    image: "/images/team/AliHamzaQureshi.webp",
  },
  {
    id: 7,
    url: "https://instagram.com",
    title: "Ghufran Abbas",
    expert: "Expert in Animation and C# Programming",
    years: "7+",
    skills: ["Game Development", "Unity", "Unreal", "Animation", "C#", "C++"],
    image: "/images/team/SyedGhufranAbbas.webp",
  },
  {
    id: 8,
    url: "https://instagram.com",
    title: "Muzammil Bela",
    expert: "Expert in Game Development (Unity, Unreal)",
    years: "7+",
    skills: [
      "Game Development",
      "Unity",
      "Unreal",
      "Animation",
      "C#",
      "C++",
      "Adobe Photoshop",
      "Adobe Premiere",
    ],
    image: "/images/team/MuzammilBela.webp",
  },
  {
    id: 9,
    url: "https://instagram.com",
    title: "Usama Ameen",
    expert: "Expert in 3D Modeling and UX/UI Design",
    years: "3+",
    skills: [
      "Blender",
      "Substance Painter",
      "Adobe Photoshop",
      "Illustrator",
      "Premiere Pro",
      "3D Modeling",
      "Texturing",
      "UI / UX",
      "ZBrush",
      "After Effects",
    ],
    image: "/images/team/UsamaAmeen.webp",
  },
];

const TeamCards = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="w-[88%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="col-span-4">
            <h2 className="text-[24px] mb-4 md:mb-3 md:text-[28px] lg:text-[40px] leading-[1.2em] text-black font-normal uppercase">
              Our Network of Talent Pool
            </h2>
            <p className="text-[14px] mb-4 md:mb-6 md:text-[16px] lg:text-[20px] leading-[1.2em] tracking-[0.2px] text-black font-light">
              At CodersWire, we have a diverse talent network comprising skilled
              developers, designers, project managers, and product managers,
              ensuring comprehensive expertise for your project's success
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end">
            <Link href="#">
              <MyButton>Hire Developers Now</MyButton>
            </Link>
          </div>
        </div>
        <div className="">
          <Carousel
            // swipeable={true}
            // draggable={true}
            // showDots={true}
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
            itemClass="cursor-grab"
          >
            {teamMembers.map((data) => {
              return <Team key={data.id} data={data} />;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
