import React from "react";
import ContactBanner from "./components/banner/ContactBanner";
import ContactFormSection from "./components/contactFormSection/ContactFormSection";

const page = () => {
  return (
    <div className="overflow-hidden">
      <ContactBanner />
      <ContactFormSection />
    </div>
  );
};

export default page;
