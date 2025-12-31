import Image from "next/image";
import React from "react";
import Link from "next/link";
import ContactForm from "../form/ContactForm";
import {
  EnvelopeIcon,
  FlagIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const ContactFormSection = () => {
  return (
    <div className="pb-8 pt-8 lg:pb-16 lg:pt-16 bg-[#f4faff]">
      <div className="w-[92%] lg:w-[88%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto pt-8">
          <div className="col-span-2">
            <h2 className="text-[26px] mb-2 md:text-[28px] lg:text-[40px] leading-[1.2em] text-[#252525] dark:text-white font-normal uppercase">
              Contact Info
            </h2>

            <div className="grid grid-cols-1 gap-2 my-2">
              <div className="py-1 px-1 lg:py-3 lg:px-3">
                <h4 className="text-[22px] mb-4 md:text-[28px] lg:text-[26px] leading-[1.2em] text-[#252525] dark:text-white font-medium">
                  Head Office
                </h4>
                <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-3">
                  <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                    <MapPinIcon
                      width={25}
                      height={25}
                      className="text-[#0486ff]"
                    />
                  </div>
                  <div className="col-span-10 lg:col-span-11 text-left flex items-center">
                    <p className="text-md text-black font-light text-[15px] lg:text-[20px]">
                      2320 Richard road, Cedar Falls, Iowa
                    </p>
                  </div>
                </div>

                <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-3">
                  <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                    <PhoneIcon
                      width={25}
                      height={25}
                      className="text-[#0486ff]"
                    />
                  </div>
                  <div className="col-span-10 lg:col-span-11 text-left flex items-center">
                    <p className="text-md text-black font-light text-[15px] lg:text-[20px]">
                      (267) 356-7409
                    </p>
                  </div>
                </div>

                <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-3">
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <EnvelopeIcon
                      width={25}
                      height={25}
                      className="text-[#0486ff]"
                    />
                  </div>
                  <div className="col-span-11 text-left flex items-center">
                    <p className="text-md text-black font-light text-[15px] lg:text-[20px]">
                      info@coderswire.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 my-2">
              <div className="py-3 pr-4 px-3">
                <h4 className="text-[24px] mb-4 md:text-[28px] lg:text-[26px] leading-[1.2em] text-[#252525] dark:text-white font-medium">
                  Our Locations
                </h4>
                <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-3">
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <FlagIcon
                      width={22}
                      height={22}
                      className="text-[#0486ff]"
                    />
                  </div>
                  <div className="col-span-11 text-left flex items-center">
                    <p className="text-md text-black font-light text-[16px] lg:text-[18px]">
                      107-536, Ivings Drive, Port Elgin, N0H2C1, Ontario, Canada
                    </p>
                  </div>
                </div>

                <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-3">
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <FlagIcon
                      width={22}
                      height={22}
                      className="text-[#0486ff]"
                    />
                  </div>
                  <div className="col-span-11 text-left flex items-center">
                    <p className="text-md text-black font-light text-[18px]">
                      Office 102 Garden Tower, 47 Babar Block, Garden Town
                      Lahore
                    </p>
                  </div>
                </div>

                <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-3">
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <FlagIcon
                      width={22}
                      height={22}
                      className="text-[#0486ff]"
                    />
                  </div>
                  <div className="col-span-11 text-left flex items-center">
                    <p className="text-md text-black font-light text-[18px]">
                      1110-Zion Z1, Sindhu Bhavan Marg, Bodakdev, Ahmedabad,
                      Gujarat 380054
                    </p>
                  </div>
                </div>

                <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-3">
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <FlagIcon
                      width={22}
                      height={22}
                      className="text-[#0486ff]"
                    />
                  </div>
                  <div className="col-span-11 text-left flex items-center">
                    <p className="text-md text-black font-light text-[18px]">
                      Thinkwik LLC, 1 Biscayne Way, Monroe NJ-08831, USA
                    </p>
                  </div>
                </div>

                <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-3">
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <FlagIcon
                      width={22}
                      height={22}
                      className="text-[#0486ff]"
                    />
                  </div>
                  <div className="col-span-11 text-left flex items-center">
                    <p className="text-md text-black font-light text-[18px]">
                      Berliner Str 38, 40880 Ratingen, Germany
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 my-2">
              <div className="py-3 pr-4 px-3">
                <h4 className="text-[24px] mb-4 md:text-[28px] lg:text-[26px] leading-[1.2em] text-[#252525] dark:text-white font-medium">
                  Follow Us
                </h4>

                <div className="lg:col-span-1">
                  <ul className="flex gap-2">
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
            </div>
          </div>

          <div className="col-span-2 flex flex-col justify-center">
            <h2 className="text-[24px] mb-2 md:text-[28px] lg:text-[32px] leading-[1.2em] text-[#252525] dark:text-white font-normal uppercase">
              Fill out the form below
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
