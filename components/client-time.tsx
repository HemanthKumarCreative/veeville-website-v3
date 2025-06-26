"use client";

import { useEffect, useState } from "react";

export default function ClientTime() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      const date = new Date();
      setCurrentTime(
        date.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="text-xl font-semibold text-gray-700 mt-2">
      {currentTime}
    </div>
  );
}
