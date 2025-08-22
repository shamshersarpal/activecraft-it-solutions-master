"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import recentOne from "@/images/portel.webp";
import recentTwo from "@/images/boma.webp";
import recentThree from "@/images/hat.webp";

const slides = [
  {
    image: recentOne,
    alt: "Portal Project",
    link: "https://portal.example.com",
  },
  {
    image: recentTwo,
    alt: "Boma Project",
    link: "https://boma.example.com",
  },
  {
    image: recentThree,
    alt: "Hat Project",
    link: "https://hat.example.com",
  },
];

export default function Vewbie() {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // auto-advance
    slideInterval.current = window.setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (slideInterval.current !== null) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <section
        id="home"
        className="bg-no-repeat bg-cover relative -z-10 active"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 hero">
          <div className="lg:px-20 px-10">
            <h1 className="lg:text-[62px] md:text-[35px] text-[28px] mt-5 text-white font-bold leading-none">
              Project Details
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[800px] mx-auto relative overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <a
                key={idx}
                href={slide.link}
                className="min-w-full block"
                aria-label={`Slide ${idx + 1}: ${slide.alt}`}
              >
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
            <button
              aria-label="Previous slide"
              onClick={prevSlide}
              className="pointer-events-auto bg-[#FF9900] rounded-full p-2 shadow hover:bg-[#ff9900c0] focus:outline-none"
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
              aria-label="Next slide"
              onClick={nextSlide}
              className="pointer-events-auto bg-[#FF9900] rounded-full p-2 shadow hover:bg-[#ff9900c0] focus:outline-none"
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

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-3 h-3 rounded-full ${
                  current === idx ? "bg-[#FF9900]" : "bg-[#D1D5DB]"
                }`}
              ></button>
            ))}
          </div>

          <div className="pt-10">
            <div className="flex items-center justify-between gap-5 mb-8">
              <div>
                <h2 className="font-bold text-[#404A5C] text-2xl">Vewbie</h2>
              </div>
              <div>
                {" "}
                <a
                  className="bg-[#FF9900] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ffaa00] transition duration-300 cursor-pointer"
                  href=""
                >
                  view live project <span></span>{" "}
                </a>{" "}
              </div>
            </div>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
