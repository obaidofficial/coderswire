import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <div className="pb-2 pt-2">
      <div className="mx-auto">
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto pt-2">
            <div className="lg:col-span-2 flex flex-col justify-center">
              {/* <p className="text-[24px] mb-4 md:mb-3 md:text-[28px] lg:text-[20px] leading-[1.2em] text-[#252525] dark:text-white font-normal">
              Name
            </p> */}
              <input
                type="text"
                className="border border-[#00000020] bg-white py-2.5 px-3 rounded-sm"
                placeholder="First Name*"
                required
              />
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center">
              <input
                type="text"
                className="border border-[#00000020] bg-white py-2.5 px-3 rounded-sm"
                placeholder="Last Name"
              />
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center">
              <input
                type="tel"
                className="border border-[#00000020] bg-white py-2.5 px-3 rounded-sm"
                placeholder="Phone*"
                required
              />
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center">
              <input
                type="email"
                className="border border-[#00000020] bg-white py-2.5 px-3 rounded-sm"
                placeholder="Email*"
                required
              />
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center">
              <input
                type="text"
                className="border border-[#00000020] bg-white py-2.5 px-3 rounded-sm"
                placeholder="Company Nmae"
              />
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center">
              <input
                type="text"
                className="border border-[#00000020] bg-white py-2.5 px-3 rounded-sm"
                placeholder="Please Select"
              />
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center">
              <textarea
                className="border border-[#00000020] bg-white py-2.5 px-3 rounded-sm h-[220px] resize-none"
                placeholder="Message"
              />
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="border border-[#00000020] bg-white py-2.5 px-3 rounded-sm"
                  required
                />
                I agree to receive emails from CodersWire and to the Privacy
                Policy.
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center">
              <input
                type="submit"
                className="px-3.5 py-2 text-white text-base transition-all duration-200 rounded-lg cursor-pointer border-2 border-[#0486ff] bg-[#0486ff]"
                value="SUBMIT"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
