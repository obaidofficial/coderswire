import ShadowButton from "@/components/Helper/ShadowButton";
import Link from "next/link";
import React from "react";

const HourlyPricing = () => {
  return (
    <div className="pb-16 pt-16 bg-white">
      <div className="w-[92%] lg:w-[88%] mx-auto">
        {/* Text Content */}
        <div>
          <h2 className="text-[24px] mb-4 md:mb-3 md:text-[28px] text-center lg:text-[40px] leading-[1.2em] text-[#252525] dark:text-white font-normal uppercase">
            Our Pricing Models
          </h2>
          <p className="text-[14px] mx-auto text-center w-[700px] mb-4 md:mb-6 md:text-[16px] lg:text-[20px] leading-[1.4em] tracking-[0.2px] text-[#252525] font-light">
            Discover our competitive developer engagement rates, designed to
            match your project's scope and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mx-auto w-[1340px]">
          <div className="col-span-2 border-2 border-[#292929]/20 rounded-lg py-6 px-8 bg-white hover:shadow-xl hover:border-[#0486ff]">
            <p className="text-[14px]  mb-2 md:text-[16px] lg:text-[24px] leading-[1.2em] text-[#373737] font-bold">
              Basic
            </p>
            <h4 className="text-[14px] md:text-[16px] lg:text-[44px] leading-[1.2em] text-black font-extrabold">
              $ 20 ~ 80
              <span className="text-[18px] text-[#505050] font-normal">
                {" "}
                /hour
              </span>
            </h4>
            <p className="text-[15px] text-[#505050] font-normal">
              Hire developers on projects with well-defined scopes and
              predictable budgeting.
            </p>
            <div className="mt-3">
              <Link href="#">
                <ShadowButton>GET STARTED NOW!</ShadowButton>
              </Link>
            </div>
            <hr className="my-4 text-black/20" />
            <ul className="list-(--check-marker) pl-5 leading-[1.7em] mb-2 marker:text-[#0486ff] marker:text-[18px]">
              <li className="pl-2">
                Hire a dedicated team or individual developers.
              </li>
              <li className="pl-2">For full-time 160 hours/month.</li>
              <li className="pl-2">For part-time 80 hours/month.</li>
              <li className="pl-2">No hidden charges.</li>
              <li className="pl-2">
                Ideal for you if your requirements are crystal clear.
              </li>
              <li className="pl-2">
                Pricing is based on our developers offshore/remote locations and
                expertise-level.
              </li>
            </ul>
          </div>

          <div className="col-span-2 border-2 border-[#292929]/20 rounded-lg py-6 px-8 bg-white hover:shadow-xl hover:border-[#0486ff]">
            <p className="text-[14px]  mb-2 md:text-[16px] lg:text-[24px] leading-[1.2em]  text-[#373737] font-bold">
              Business
            </p>
            <h4 className="text-[14px] md:text-[16px] lg:text-[44px] leading-[1.2em] text-black font-extrabold">
              $ 25 ~ 1K
            </h4>
            <p className="text-[15px] text-[#505050] font-normal">
              Pay per issue resolved, providing suitable ongoing support with
              manageable, incremental costs.
            </p>
            <div className="mt-3">
              <Link href="#">
                <ShadowButton>GET STARTED NOW!</ShadowButton>
              </Link>
            </div>
            <hr className="my-4 text-black/20" />
            <ul className="list-(--check-marker) pl-5 leading-[1.7em] mb-2 marker:text-[#0486ff] marker:text-[18px]">
              <li className="pl-2">
                Pricing can be varied according to the ticket workload.
              </li>
              <li className="pl-2">
                Only pay for the pre-defined and specific tasks.
              </li>
              <li className="pl-2">
                Provides transparency into the progress of the project.
              </li>
              <li className="pl-2">Get granular control over project costs.</li>
            </ul>
          </div>

          <div className="col-span-2 border-2 border-[#292929]/20 rounded-lg py-6 px-8 bg-white hover:shadow-xl hover:border-[#0486ff]">
            <p className="text-[14px]  mb-2 md:text-[16px] lg:text-[24px] leading-[1.2em]  text-[#373737] font-bold">
              Premium
            </p>
            <h4 className="text-[14px] md:text-[16px] lg:text-[44px] leading-[1.2em] text-black font-extrabold">
              $ 1K ~ 5K
            </h4>
            <p className="text-[15px] text-[#505050] font-normal">
              Offers flexibility for projects with variable scopes; pay based on
              the actual time and materials used.
            </p>
            <div className="mt-3">
              <Link href="#">
                <ShadowButton>GET STARTED NOW!</ShadowButton>
              </Link>
            </div>
            <hr className="my-4 text-black/20" />
            <ul className="list-(--check-marker) pl-5 leading-[1.7em] mb-2 marker:text-[#0486ff] marker:text-[18px]">
              <li className="pl-2">
                Hire developers for a few days to complete your project
                deadlines.
              </li>
              <li className="pl-2">
                Quickly scale up or scale down as per your project requirements.
              </li>
              <li className="pl-2">
                Suitable if you are looking to hire developers for part-time.
              </li>
              <li className="pl-2">
                Pricing is based on our developer's tech stack, remote/offshore
                locations and tier level.
              </li>
              <li className="pl-2">
                Hire remote/offshore developers from region like USA, LATAM,
                Pakistan.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyPricing;
