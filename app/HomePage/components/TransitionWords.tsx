"use client";
import { Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

const TransitionWords = () => {
  const words = [
    "Web Designer",
    "Consultant and Mentor",
    "Programmer",
    "IoT and Automation Expert",
    "App Developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="items-center justify-center text-cyan-200 text-xl font-bold">
      <Text>{words[currentIndex]} |</Text>
    </div>
  );
};

export default TransitionWords;
