"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Alene",
    text: "activecraft is extremely thorough team and pays attention to details. They are easy to work with and possessed strong technical knowledge. Excellent work - Always!!!",
  },
  {
    name: "Markos",
    text: "Honest and trustworthy to work with, they have been extremely patient with the project and highly recommend them for projects because they are there for long term business.",
  },
  {
    name: "Alene",
    text: "activecraft is extremely thorough team and pays attention to details. They are easy to work with and possessed strong technical knowledge. Excellent work - Always!!!",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Runs only on client
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Listen for resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleItems = () => {
    if (isDesktop) {
      return [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
      ];
    } else {
      return [testimonials[currentIndex]];
    }
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="testo-clients bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <p className="text-lg text-center font-semibold text-[#FF9900] uppercase">
          Happy clients
        </p>
        <h1 className="text-3xl font-bold text-center text-white  mb-10">
          Recent clients feedback
        </h1>
        <div className="flex justify-between items-center mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow border border-[#686868] text-center"
            >
              <div className="flex justify-center relative top-[-60px]">
                <div className="h-[60px] w-[60px] bg-white border border-[#686868]  flex items-center justify-center rounded-full">
                  <svg
                    width={28}
                    height={24}
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5714 10.3333H3.71429C3.25963 10.3333 2.82359 10.1577 2.5021 9.84518C2.18061 9.53262 2 9.10869 2 8.66667V3.66667C2 3.22464 2.18061 2.80072 2.5021 2.48816C2.82359 2.1756 3.25963 2 3.71429 2H8.85714C9.3118 2 9.74783 2.1756 10.0693 2.48816C10.3908 2.80072 10.5714 3.22464 10.5714 3.66667V13.6667C10.5714 18.1117 8.28629 20.8883 3.71429 22M26 10.3333H19.1429C18.6882 10.3333 18.2522 10.1577 17.9307 9.84518C17.6092 9.53262 17.4286 9.10869 17.4286 8.66667V3.66667C17.4286 3.22464 17.6092 2.80072 17.9307 2.48816C18.2522 2.1756 18.6882 2 19.1429 2H24.2857C24.7404 2 25.1764 2.1756 25.4979 2.48816C25.8194 2.80072 26 3.22464 26 3.66667V13.6667C26 18.1117 23.7149 20.8883 19.1429 22"
                      stroke="#FF9900"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">"{item.text}"</p>
              <h4 className="font-semibold text-[#FF9900]">{item.name}</h4>
            </div>
          ))}
        </div>
        <div className="flex gap-2 justify-center mt-5">
          <button
            onClick={prevSlide}
            className="p-2 bg-[#FF9900] text-white rounded-full shadow cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-[#FF9900] text-white rounded-full shadow cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
