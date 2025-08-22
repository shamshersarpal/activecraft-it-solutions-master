"use client";

import { useState } from "react";
import Image from "next/image";
import recentOne from "../images/portel.webp";
import recentTwo from "../images/boma.webp";
import recentThree from "../images/hat.webp";

const slides = [
    {
        image: recentOne,
        title: "Portal Project",
        description: "A single platform for booking an appointment. (Hotel, Restaurant, Air ticket, Automobiles, Pharmacy, Super Market and Delivery app).",
        link: "https://portal.example.com"
    },
    {
        image: recentTwo,
        title: "Boma Project",
        description: "Boma is a modern web solution for business management and analytics.",
        link: "https://boma.example.com"
    },
    {
        image: recentThree,
        title: "Hat Project",
        description: "Hat Project offers creative solutions for online shopping and e-commerce.",
        link: "https://hat.example.com"
    },
];

export default function RecentWork() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-20">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1050px]">
                <div className="relative">

                     <p className="text-lg text-center font-semibold text-[#A6A6A6] uppercase">
              recent projects
            </p>
            <h1 className="text-3xl font-bold text-center text-[#404A5C]  mb-10">
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
                                                src={slide.image}
                                                alt={slide.title}
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between gap-5">
                                                <div>
                                                    <h2 className="text-2xl text-[#404A5C] font-semibold">
                                                        {slide.title}
                                                    </h2>
                                                </div>
                                                <div>
                                                    <a
                                                        className="flex items-center gap-3 text-xl text-[#FF9900]"
                                                        href=""
                                                    >
                                                        view details{" "}
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
                                                    </a>
                                                </div>
                                            </div>
                                            <p className="text-[#272727] pt-5">
                                                {/* You can customize the description per slide if needed */}
                                                A single platform for booking an appointment. (Hotel,
                                                Restaurant, Air ticket, Automobiles, Pharmacy, Super Market
                                                and Delivery app).
                                            </p>
                                            <div className="flex items-center gap-5 mt-10">
                                                <div className="flex gap-2 items-center">
                                                    <div className="h-[10px] w-[10px] bg-[#FF9900] rounded-full"></div>{" "}
                                                    UIUX Design
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div className="h-[10px] w-[10px] bg-[#FF9900] rounded-full"></div>{" "}
                                                    Web Development
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div className="h-[10px] w-[10px] bg-[#FF9900] rounded-full"></div>{" "}
                                                    SEO
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Slider controls */}
                    <div className="flex items-center justify-center gap-2 mt-3">
                        <div className="flex items-center">
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
                    </div>
                    <div className="">
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
            </div>
        </section>
    );
}
