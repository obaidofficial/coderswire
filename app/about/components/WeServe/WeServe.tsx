import Image from "next/image";
import React from "react";

const WeServe = () => {
  return (
    <div className="pb-16 pt-16 bg-white">
      <div className="w-[92%] lg:w-[88%] mx-auto">
        {/* Text Content */}
        <div>
          <h2 className="text-[24px] mb-4 md:mb-3 md:text-[28px] text-center lg:text-[40px] leading-[1.2em] text-[#252525] dark:text-white font-normal uppercase">
            Whom We Serve
          </h2>
          <p className="text-[14px] mx-auto text-center w-[700px] mb-4 md:mb-6 md:text-[16px] lg:text-[20px] leading-[1.4em] tracking-[0.2px] text-[#252525] font-light">
            We work with all kinds of businesses, from Startups to SMB’s and
            Large-scale enterprises!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mx-auto">
          <div className="col-span-2 border-2 border-[#292929]/20 rounded-lg py-6 px-8 bg-white hover:shadow-xl hover:border-[#0486ff]">
            <Image
              src="/images/Serve/startup.png"
              alt="Startup"
              width={80}
              height={80}
            />
            <h4 className="text-[14px] md:text-[16px] lg:text-[30px] leading-[1.1em] text-black font-bold mb-2 mt-2">
              Startups
            </h4>
            <p className="text-[15px] text-[#505050] font-normal">
              Empowering startups with agile and scalable technology solutions
              that help turn innovative ideas into successful businesses.
            </p>
            <hr className="my-4 text-black/20" />
            <ul className="list-disc pl-5 leading-[1.7em] mb-2 marker:text-[#0486ff] marker:text-[18px]">
              <li>MVP Development Services</li>
              <li>Rapid Prototyping Solutions</li>
              <li>Scalable Architecture Design</li>
              <li>Lean & Agile Development</li>
              <li>Product Validation and Testing</li>
              <li>Growth Hacking Strategies</li>
            </ul>
          </div>

          <div className="col-span-2 border-2 border-[#292929]/20 rounded-lg py-6 px-8 bg-white hover:shadow-xl hover:border-[#0486ff]">
            <Image
              src="/images/Serve/business.png"
              alt="Startup"
              width={80}
              height={80}
            />
            <h4 className="text-[14px] md:text-[16px] lg:text-[30px] leading-[1.1em] text-black font-bold mb-2 mt-2">
              Small & Medium Sized Businesses
            </h4>
            <p className="text-[15px] text-[#505050] font-normal">
              Supporting small and medium-sized businesses with tailored
              software solutions that drive growth, improve efficiency, and
              enhance competitive edge.
            </p>
            <hr className="my-4 text-black/20" />
            <ul className="list-disc pl-5 leading-[1.7em] mb-2 marker:text-[#0486ff] marker:text-[18px]">
              <li>Custom Software Development</li>
              <li>Web Application Development</li>
              <li>Mobile App Development</li>
              <li>E-commerce Solutions</li>
              <li>CRM and ERP Systems</li>
              <li>Cloud Computing Services</li>
            </ul>
          </div>

          <div className="col-span-2 border-2 border-[#292929]/20 rounded-lg py-6 px-8 bg-white hover:shadow-xl hover:border-[#0486ff]">
            <Image
              src="/images/Serve/enterprises.png"
              alt="Startup"
              width={80}
              height={80}
            />
            <h4 className="text-[14px] md:text-[16px] lg:text-[30px] leading-[1.1em] text-black font-bold mb-2 mt-2">
              Large-Scale Enterprises
            </h4>
            <p className="text-[15px] text-[#505050] font-normal">
              Delivering robust, enterprise-grade technology services that meet
              the complex needs and scaling demands of large enterprises.
            </p>
            <hr className="my-4 text-black/20" />
            <ul className="list-disc pl-5 leading-[1.7em] mb-2 marker:text-[#0486ff] marker:text-[18px]">
              <li>Enterprise Software Solutions</li>
              <li>Legacy System Modernization</li>
              <li>Big Data Analytics</li>
              <li>AI and Machine Learning Integration</li>
              <li>Blockchain Development</li>
              <li>
                DevOps and Continuous Integration/Continuous Deployment (CI/CD)
              </li>
              <li>Cybersecurity Solution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeServe;
