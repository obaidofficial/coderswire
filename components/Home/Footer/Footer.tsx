import Clock from "@/components/Helper/Clock";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-[#12110e]">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-3">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:gap-2">
          <div className="lg:col-span-1 py-2.5 px-4 ">
            <Clock timeZone="EST" locationName="Canada" />
            <p className="text-[13px] text-[#00000098] dark:text-white/60">
              107-536, Ivings Drive, Port Elgin, N0H2C1, Ontario, Canada
            </p>
          </div>

          <div className="lg:col-span-1 py-2.5 px-4 ">
            <Clock timeZone="Asia/Karachi" locationName="Pakistan" />
            <p className="text-[13px] text-[#00000098] dark:text-white/60">
              Office 102 Garden Tower, 47 Babar Block, Garden Town Lahore
            </p>
          </div>

          <div className="lg:col-span-1 py-2.5 px-4 ">
            <Clock timeZone="IST" locationName="India" />
            <p className="text-[13px] text-[#00000098] dark:text-white/60">
              1110-Zion Z1, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat
              380054
            </p>
          </div>

          <div className="lg:col-span-1 py-2.5 px-4 ">
            <Clock timeZone="EST" locationName="USA" />
            <p className="text-[13px] text-[#00000098] dark:text-white/60">
              Thinkwik LLC, 1 Biscayne Way, Monroe NJ-08831, USA
            </p>
          </div>

          <div className="lg:col-span-1 py-2.5 px-4 ">
            <Clock timeZone="CET" locationName="Germany" />
            <p className="text-[13px] text-[#00000098] dark:text-white/60">
              Berliner Str 38, 40880 Ratingen, Germany
            </p>
          </div>
        </div>

        <hr className="text-[#00000020] mt-3 mb-6 dark:text-white/30" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-10">
          <div className="lg:col-span-1 p-1">
            <h3 className="font-bold text-xl text-[#252525] dark:text-white">
              Explore
            </h3>
            <ul className="text-[#00000095] dark:text-white/60 mt-2">
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Case Studies
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Services
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1 p-1">
            <h3 className="font-bold text-xl text-[#252525] dark:text-white">
              Cloud Expertise
            </h3>
            <ul className="text-[#00000095] dark:text-white/60 mt-2">
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Cloud Consulting
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  AWS Consulting
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Azure Consulting
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  GCP Consulting
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  DevOps Consulting
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Kubernetes Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1 p-1">
            <h3 className="font-bold text-xl text-[#252525] dark:text-white">
              Services
            </h3>
            <ul className="text-[#00000095] dark:text-white/60 mt-2">
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Software Development
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Application Development
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  AI & ML Development
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Digital Transformation
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Mobile App Development
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Application Modernization
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Explore More
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1 p-1">
            <h3 className="font-bold text-xl text-[#252525] dark:text-white">
              Staffing
            </h3>
            <ul className="text-[#00000095] dark:text-white/60 mt-2">
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Staff Augmentation
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Dedicated Teams
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Software Outsourcing
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Managed IT Services
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Hire Offshore Developers
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Hire Remote Developers
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Hire Software Developers
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1 p-1">
            <h3 className="font-bold text-xl text-[#252525] dark:text-white">
              Tech Expertise
            </h3>
            <ul className="text-[#00000095] dark:text-white/60 mt-2">
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  .NET Development Services
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Next.js Development
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Node.js Development
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Angular Development
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Python
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  PHP
                </Link>
              </li>
              <li className="mb-0.5">
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Explore More
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="text-[#00000020] dark:text-white/30 mt-4 mb-5" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-10">
          <div className="lg:col-span-1 p-1">
            <div className="flex-wrap flex items-center justify-center lg:justify-start gap-5">
              <Image
                src="/images/footer/amazon.png"
                alt="team"
                width={60}
                height={60}
              />
              <Image
                src="/images/footer/clutch.png"
                alt="team"
                width={60}
                height={60}
              />
              <Image
                src="/images/footer/Goodfirms.png"
                alt="team"
                width={100}
                height={100}
              />
              <Image
                src="/images/footer/dmca.png"
                alt="team"
                width={55}
                height={55}
              />
              <Image
                src="/images/footer/iso.png"
                alt="team"
                width={50}
                height={50}
              />
              <Image
                src="/images/footer/sortlist.png"
                alt="team"
                width={65}
                height={65}
              />
            </div>
          </div>
          <div className="lg:col-span-1 p-1">
            <ul className="flex lg:justify-end justify-center items-center gap-2 mt-1">
              <li className="text-[#00000090] dark:text-white/80 dark:border-white/40 rounded-full p-1.5 border-2 border-[#00000050] bg-transparent hover:bg-[#4267b2] cursor-pointer hover:text-[#ffffff]">
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="text-[#00000090] dark:text-white/80 dark:border-white/40 rounded-full p-1.5 border-2 border-[#00000050] bg-transparent hover:bg-[#0a66c2] cursor-pointer hover:text-[#ffffff]">
                <Link href="#">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="text-[#00000090] dark:text-white/80 dark:border-white/40 rounded-full p-1.5 border-2 border-[#00000050] bg-transparent hover:bg-linear-to-br hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 cursor-pointer hover:text-[#ffffff]">
                <Link href="#">
                  <FiInstagram />
                </Link>
              </li>
              <li className="text-[#00000090] dark:text-white/80 dark:border-white/40 rounded-full p-1.5 border-2 border-[#00000050] bg-transparent hover:bg-[#ff0000] cursor-pointer hover:text-[#ffffff]">
                <Link href="#">
                  <FaYoutube />
                </Link>
              </li>
              <li className="text-[#00000090] dark:text-white/80 dark:border-white/40 rounded-full p-1.5 border-2 border-[#00000050] bg-transparent hover:bg-[#ea4c89] cursor-pointer hover:text-[#ffffff]">
                <Link href="#">
                  <FaDribbble />
                </Link>
              </li>
              <li className="text-[#00000090] dark:text-white/80 dark:border-white/40 rounded-full p-1.5 border-2 border-[#00000050] bg-transparent hover:bg-[#0a57ff] cursor-pointer hover:text-[#ffffff]">
                <Link href="#">
                  <FaBehance />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="text-[#00000020] dark:text-white/30 mt-5 mb-0.5" />

        <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-10 flex flex-col-reverse">
          <div className="lg:col-span-1 p-1">
            <p className="text-[#00000090] dark:text-white/80 text-[15px] text-center lg:text-left">
              © 2025 Coders Wire. All rights reserved.
            </p>
          </div>
          <div className="lg:col-span-1 p-1">
            <ul className="text-[#00000090] dark:text-white/60 text-right flex items-end lg:justify-end justify-center gap-5">
              <li>
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="cursor-pointer hover:text-[#0486ff] text-[15px]"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
