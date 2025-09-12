"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RecentWork() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  // Fetch API data on component mount
  useEffect(() => {
    fetch("https://ciseb.com/activecraft/public/api/recent-projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.data) {
          setSlides(data.data);
        }
      })
      .catch((err) => {
        console.error("Failed to load recent projects", err);
      });
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (slides.length === 0) {
    return (
      <section className="py-20 text-center">
        <p className="text-lg text-gray-500">Loading recent projects...</p>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1050px]">
        <div className="relative">
          <p className="text-lg text-center font-semibold text-[#A6A6A6] uppercase">
            recent projects
          </p>
          <h1 className="text-3xl font-bold text-center text-[#404A5C] mb-10">
            What we have delivered
          </h1>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className="bg-[#F1F1F1] p-15 rounded-2xl max-w-[1000px] mx-auto min-w-full"
                >
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
                    <div>
                      <Image
                        className="w-full rounded-2xl"
                        src={slide.single_image}
                        alt={slide.title}
                        width={600}
                        height={400}
                        unoptimized
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-5">
                        <h2 className="text-2xl text-[#404A5C] font-semibold">
                          {slide.name}
                        </h2>

                        {/* Link to Portfolio */}
                        <Link
                          href={`/portfolio/${slide.slug}`}
                          className="flex items-center gap-3 text-xl text-[#FF9900]"
                        >
                          View Project
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 13L13 1M13 1L2.2 1M13 1L13 11.8"
                              stroke="#FF9900"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                      <p
                        className="text-[#272727] pt-5"
                        dangerouslySetInnerHTML={{ __html: slide.description }}
                      ></p>

                      <div className="flex items-center gap-5 mt-10 flex-wrap">
                        {slide.category_name.split(",").map((cat, i) => (
                          <div key={i} className="flex gap-2 items-center">
                            <div className="h-[10px] w-[10px] bg-[#FF9900] rounded-full"></div>
                            {cat.trim()}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider controls */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <button
              className="bg-[#FF9900] rounded-full p-2 shadow hover:bg-[#ff9900c0] cursor-pointer"
              aria-label="Previous"
              onClick={prevSlide}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="bg-[#FF9900] rounded-full p-2 shadow hover:bg-[#ff9900c0] cursor-pointer"
              aria-label="Next"
              onClick={nextSlide}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
