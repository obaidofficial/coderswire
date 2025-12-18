import React from "react";
import TabsComponents from "./TabsComponents";

const items = [
  {
    title: "Cloud Services",
    content: (
      <div>
        <p className="pb-4">
          Our deep industry expertise, combined with the latest advancements in
          cloud technology, allows us to craft customized cloud solutions that
          enhance data accessibility, improve operational efficiency, and
          perfectly meet the evolving needs of your business. Trust us to
          transform your cloud strategy into a powerful asset for growth and
          innovation.
        </p>
        <ul className="list-disc pl-5 leading-[2em] mb-2">
          <li>Cloud Consulting</li>
          <li>Cloud Application Development</li>
          <li>Cloud Security Consulting</li>
          <li>Configuration Management</li>
          <li>Cloud Migration</li>
          <li>Cloud Infrastructure Management</li>
        </ul>
      </div>
    ),
    url: "#",
  },
  {
    title: "Software Development",
    content: (
      <div>
        <p className="pb-4">
          Transform ideas into robust solutions with our software development
          expertise. Benchmarking industry best practices, we deliver scalable,
          secure, and efficient custom software.
        </p>
        <ul className="list-disc pl-5 leading-[2em] mb-2">
          <li>Custom Software Development</li>
          <li>Software Development Outsourcing</li>
          <li>Software Consulting</li>
          <li>Enterprise Software Solutions</li>
          <li>Software Product Development</li>
          <li>API Development and Integration </li>
        </ul>
      </div>
    ),
    url: "#",
  },
  {
    title: "Application Development",
    content: (
      <div>
        <p className="pb-4">
          Harness the power of tailored applications with CodersWire.
          Benchmarking industry trends, we deliver scalable, efficient, and
          user-centric applications for diverse business needs.
        </p>
        <ul className="list-disc pl-5 leading-[2em] mb-2">
          <li>Custom Application Development</li>
          <li>Mobile App Development</li>
          <li>Web Application Development</li>
          <li>Enterprise Application Solutions</li>
          <li>Application Testing</li>
          <li>Application Migration</li>
          <li>Application Integration</li>
          <li>Desktop Application Development</li>
          <li>Application Maintenance and Support</li>
          <li>App Modernization</li>
        </ul>
      </div>
    ),
    url: "#",
  },
  {
    title: "QA Testing",
    content: (
      <div>
        <p className="pb-4">
          We ensure flawless software performance with CodersWire's QA testing
          services. Our rigorous testing processes guarantee robust, bug-free
          applications for optimal user satisfaction.
        </p>
        <ul className="list-disc pl-5 leading-[2em] mb-2">
          <li>Functional Testing</li>
          <li>Performance Testing</li>
          <li>Usability Testing</li>
          <li>Security Testing</li>
          <li>Compatibility Testing</li>
          <li>Regression Testing</li>
          <li>QA Outsourcing</li>
          <li>Test Automation</li>
        </ul>
      </div>
    ),
    url: "#",
  },
  {
    title: "UI/UX Design",
    content: (
      <div>
        <p className="pb-4">
          We craft visually stunning, intuitively designed interfaces that not
          only capture attention but also make every interaction feel seamless
          and effortless. By focusing on clarity, usability, and aesthetic
          appeal, we create digital experiences that resonate with users, boost
          engagement, and strengthen brand loyalty—helping businesses build
          meaningful and lasting connections with their audiences.
        </p>
        <ul className="list-disc pl-5 leading-[2em] mb-2">
          <li>UI Design</li>
          <li>Wireframing and Prototyping</li>
          <li>Responsive Web Design</li>
          <li>UX Design</li>
          <li>Website Redesign</li>
        </ul>
      </div>
    ),
    url: "#",
  },
  {
    title: "Data Analytics",
    content: (
      <div>
        <p className="pb-4">
          Harnessing data assets, CodersWire delivers analytics solutions
          illuminating business dynamics. With expertise in data management,
          processing, and visualization, we optimize processes, enhance CRM, and
          enable informed decisions.
        </p>
        <ul className="list-disc pl-5 leading-[2em] mb-2">
          <li>Data Science</li>
          <li>Big Data</li>
          <li>Predictive Analytics</li>
          <li>Data Visualization</li>
          <li>Data Warehousing</li>
          <li>Machine Learning</li>
          <li>Data Analytics as a Service</li>
          <li>Data Management </li>
        </ul>
      </div>
    ),
    url: "#",
  },
  {
    title: "Infrastructure Services",
    content: (
      <div>
        <p className="pb-4">
          With 7+ years of business excellence in the tech industry, we provide
          advanced infrastructure services that support and optimize your IT
          operations. Our expertise in various operating systems, browsers, and
          devices allows us to offer scalable and secure solutions tailored to
          meet the specific demands of your business. We integrate the latest
          technological advancements to ensure your infrastructure is robust,
          efficient, and perfectly aligned with your organizational needs and
          goals.
        </p>
        <ul className="list-disc pl-5 leading-[2em] mb-2">
          <li>Managed IT Support</li>
          <li>Network Management</li>
          <li>IT Consulting and Strategy Development</li>
        </ul>
      </div>
    ),
    url: "#",
  },
  {
    title: "Ecommerce Development ",
    content: (
      <div>
        <p className="pb-4">
          Our comprehensive e-commerce solutions go beyond just building your
          store. We offer expert consulting, seamless integration, and ongoing
          support to empower your digital presence, strengthen customer
          engagement, and propel your sales to new heights.
        </p>
        <ul className="list-disc pl-5 leading-[1.7em] lg:leading-[2em] mb-2">
          <li>Custom E-commerce Website Development</li>
          <li>Mobile Commerce (M-commerce) Solutions</li>
          <li>E-commerce Platform Migration and Upgrades</li>
          <li>Payment Gateway Integration Services</li>
          <li>E-commerce SEO and Digital Marketing</li>
          <li>Ecommerce Website Design</li>
        </ul>
      </div>
    ),
    url: "#",
  },
];

const HrTabs = () => {
  return (
    <div>
      <div className="w-[98%] mx-auto">
        {/* Tabs Components */}
        <TabsComponents items={items} />
      </div>
    </div>
  );
};

export default HrTabs;
