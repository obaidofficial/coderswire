import React from "react";
import TabsComponents from "./TabsComponents";

const items = [
  {
    title: "Artificial Intelligence",
    content:
      "We offer end-to-end AI consulting and development, shaping ideas into actionable solutions. From initial assessment to deployment and ongoing support, we guide clients through the entire AI implementation lifecycle, ensuring transformative outcomes and continued success in leveraging AI technologies.",
    image: "/images/technologies/artificial-intelligence.webp",
    url: "#",
  },
  {
    title: "Business Intelligence",
    content:
      "Unlock insights with our BI expertise. We leverage platforms like Tableau, Qlik, and Power BI, ensuring compliance with data protection laws and crafting hacker-proof solutions fortified with advanced cybersecurity measures.",
    image: "/images/technologies/business-intelligence.webp",
    url: "#",
  },
  {
    title: "AR / VR Development",
    content:
      "We create immersive AR experiences that overlay digital elements in the real world and develop realistic VR applications for unparalleled user engagement. Our solutions redefine sensory experiences, from product visualization to virtual training simulations.",
    image: "/images/technologies/ar-vr.webp",
    url: "#",
  },
  {
    title: "Big Data",
    content:
      "With over 7 years of industry-leading expertise, we provide Big Data solutions that harness the power of large datasets to drive innovation and efficiency across your business. We combine deep industry knowledge with cutting-edge tools to deliver insights that perfectly align with the needs and behaviors of your users, empowering your organization to make data-driven decisions with precision.",
    image: "/images/technologies/big-data.webp",
    url: "#",
  },
  {
    title: "Data Science",
    content:
      "Leverage our Data Science Services to empower your business and unlock the full potential of your data. We utilize cutting-edge analytical tools to provide custom solutions that enhance decision-making and operational efficiency. By leveraging our expertise, you can make data-driven decisions that propel your business forward.",
    image: "/images/technologies/data-science.webp",
    url: "#",
  },
  {
    title: "Internet of Things",
    content:
      "CodersWire designs fault-tolerant IoT architectures tailored to business needs. From startups to enterprises, we automate operations with robust IoT solutions, ensuring scalability and security in every deployment.",
    image: "/images/technologies/iot.webp",
    url: "#",
  },
];

const HrTabs = () => {
  return (
    <div>
      <div className="w-[96%] mx-auto">
        {/* Tabs Components */}
        <TabsComponents items={items} />
      </div>
    </div>
  );
};

export default HrTabs;
