import ShadowButton from "@/components/Helper/ShadowButton";
import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <div className="pb-16 pt-16 bg-white">
      <div className="w-[92%] lg:w-[88%] mx-auto">
        {/* Text Content */}
        <div>
          <h2 className="text-[24px] mb-4 md:mb-3 md:text-[28px] text-center lg:text-[40px] leading-[1.2em] text-[#252525] dark:text-white font-normal uppercase">
            Hire Offshore Developers or Dedicated Teams
          </h2>
          <p className="text-[14px] mx-auto text-center w-[700px] mb-4 md:mb-6 md:text-[16px] lg:text-[20px] leading-[1.4em] tracking-[0.2px] text-[#252525] font-light">
            Swiftly onboard junior to senior offshore developers and dedicated
            teams, perfectly suited to elevate your project
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-[1000px] mx-auto">
          <div className="col-span-2 border-2 border-[#292929]/20 rounded-lg py-6 px-8 bg-white hover:shadow-xl hover:border-[#0486ff]">
            <p className="text-[14px]  mb-2 md:text-[16px] lg:text-[24px] leading-[1.2em] text-[#373737] font-bold">
              Basic
            </p>
            <h4 className="text-[14px] md:text-[16px] lg:text-[44px] leading-[1.2em] text-black font-extrabold">
              $ 1K ~ 1.5K
              <span className="text-[18px] text-[#505050] font-normal">
                {" "}
                /month
              </span>
            </h4>
            <p className="text-[15px] text-[#505050] font-normal">
              Empower your projects with innovative, cost-effective solutions
              from our skilled developers.
            </p>
            <div className="mt-3">
              <Link href="#">
                <ShadowButton>GET STARTED NOW!</ShadowButton>
              </Link>
            </div>
            <hr className="my-4 text-black/20" />
            <ul className="list-(--check-marker) pl-5 leading-[1.7em] mb-2 marker:text-[#0486ff] marker:text-[18px]">
              <li className="pl-2">1 Junior Developer from any tech stack.</li>
              <li className="pl-2">1 - 3 years of hands-on experience.</li>
              <li className="pl-2">
                Basic level experience with project management tool.
              </li>
              <li className="pl-2">Good communication skills.</li>
            </ul>
          </div>

          <div className="col-span-2 border-2 border-[#292929]/20 rounded-lg py-6 px-8 bg-white hover:shadow-xl hover:border-[#0486ff]">
            <p className="text-[14px]  mb-2 md:text-[16px] lg:text-[24px] leading-[1.2em] text-[#373737] font-bold">
              Standard
            </p>
            <h4 className="text-[14px] md:text-[16px] lg:text-[44px] leading-[1.2em]  text-black font-extrabold">
              $ 2.5K ~ 3.5K
              <span className="text-[18px] text-[#505050] font-normal">
                {" "}
                /month
              </span>
            </h4>
            <p className="text-[15px] text-[#505050] font-normal">
              Access experienced mid-senior developers for enhanced project
              flexibility and expertise.
            </p>
            <div className="mt-3">
              <Link href="#">
                <ShadowButton>GET STARTED NOW!</ShadowButton>
              </Link>
            </div>
            <hr className="my-4 text-black/20" />
            <ul className="list-(--check-marker) pl-5 leading-[1.7em] mb-2 marker:text-[#0486ff] marker:text-[18px]">
              <li className="pl-2">
                1 Mid Senior Developer from any tech stack.
              </li>
              <li className="pl-2">4 - 6 years of hands-on experience.</li>
              <li className="pl-2">
                Strong knowledge of project management tool.
              </li>
              <li className="pl-2">
                Ideal for general level projects and mid level complex projects.
              </li>
            </ul>
          </div>

          <div className="col-span-2 border-2 border-[#292929]/20 rounded-lg py-6 px-8 bg-white hover:shadow-xl hover:border-[#0486ff]">
            <p className="text-[14px]  mb-2 md:text-[16px] lg:text-[24px] leading-[1.2em]  text-[#373737] font-bold">
              Premium
            </p>
            <h4 className="text-[14px] md:text-[16px] lg:text-[44px] leading-[1.2em] text-black font-extrabold">
              $ 3.5K ~ 4.5K
              <span className="text-[18px] text-[#505050] font-normal">
                {" "}
                /month
              </span>
            </h4>
            <p className="text-[15px] text-[#505050] font-normal">
              Utilize our senior developers' extensive experience for leadership
              and critical projects.
            </p>
            <div className="mt-3">
              <Link href="#">
                <ShadowButton>GET STARTED NOW!</ShadowButton>
              </Link>
            </div>
            <hr className="my-4 text-black/20" />
            <ul className="list-(--check-marker) pl-5 leading-[1.7em] mb-2 marker:text-[#0486ff] marker:text-[18px]">
              <li className="pl-2">1 Senior Developer from any tech stack.</li>
              <li className="pl-2">6 - 10 years of hands-on experience.</li>
              <li className="pl-2">Technical project management Skills.</li>
              <li className="pl-2">Ideal for advanced and complex projects.</li>
            </ul>
          </div>

          <div className="col-span-2 border-2 border-[#292929]/20 rounded-lg py-6 px-8 bg-white hover:shadow-xl hover:border-[#0486ff]">
            <p className="text-[14px]  mb-2 md:text-[16px] lg:text-[24px] leading-[1.2em]  text-[#373737] font-bold">
              Business
            </p>
            <h4 className="text-[14px] md:text-[16px] lg:text-[44px] leading-[1.2em] text-black font-extrabold">
              $ 25K ~ 40K
              <span className="text-[18px] text-[#505050] font-normal">
                {" "}
                /month
              </span>
            </h4>
            <p className="text-[15px] text-[#505050] font-normal">
              Integrate a dedicated team into your projects for strategic
              development and consistent output.
            </p>
            <div className="mt-3">
              <Link href="#">
                <ShadowButton>GET STARTED NOW!</ShadowButton>
              </Link>
            </div>
            <hr className="my-4 text-black/20" />
            <ul className="list-(--check-marker) pl-5 leading-[1.7em] mb-2 marker:text-[#0486ff] marker:text-[18px]">
              <li className="pl-2">
                Hire a dedicated team from any tech stack.
              </li>
              <li className="pl-2">
                Get 4 - 10 years of experienced developers as per your
                requirements.
              </li>
              <li className="pl-2">
                Quick and effective hiring and integration procedures.
              </li>
              <li className="pl-2">
                Working full time 8 hours/day and 160 hours/month.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
