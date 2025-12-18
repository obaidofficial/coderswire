"use client"; // This directive ensures the component runs on the client side

import { useState, useEffect } from "react";

const Clock: React.FC<{ timeZone: string; locationName: string }> = ({
  timeZone,
  locationName,
}) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Use Intl.DateTimeFormat to format the time for the specific timeZone in 12-hour format
      const formattedTime = new Intl.DateTimeFormat("en-CA", {
        hour: "2-digit", // Use 12-hour format with AM/PM
        minute: "2-digit",
        // second: "2-digit",
        hour12: true, // Explicitly request 12-hour clock
        timeZone: timeZone, // Specify the time zone
      })
        .format(now)
        .replace(/A\.M\./i, "AM")
        .replace(/P\.M\./i, "PM");

      setCurrentTime(formattedTime);
    };

    // Update the clock every second
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeZone]); // Re-run effect if timeZone prop changes

  return (
    <div className="pb-2">
      <p className="text-[#0486ff] font-semibold text-md">{locationName}</p>
      <p className="text-xl lg:text-2xl font-bold uppercase">{currentTime}</p>
    </div>
  );
};

export default Clock;
