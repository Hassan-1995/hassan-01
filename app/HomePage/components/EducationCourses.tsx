"use client"; // For client-side rendering in Next.js

import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface CoursesProps {
  items: { title: string; description: string }[];
}

const EducationCourses = ({ items }: CoursesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Carousel Content */}
      <div className="overflow-hidden rounded-lg border shadow-md">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full px-6 py-8">
              <h3 className="text-3xl text-cyan-200 font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-50">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Icons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-cyan-200 p-2 rounded-full shadow hover:bg-cyan-200 hover:text-gray-950"
      >
        <AiOutlineLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-cyan-200 p-2 rounded-full shadow hover:bg-cyan-200 hover:text-gray-950"
      >
        <AiOutlineRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-cyan-800" : "bg-cyan-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default EducationCourses;
