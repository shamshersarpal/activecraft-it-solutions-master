"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PortfolioDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    if (!slug) return;

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/get-portfolio-detail/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          const projectData = data.data;

          let images = [];
          if (Array.isArray(projectData.multiple_images)) {
            projectData.multiple_images.forEach((img) => {
              images.push({
                image: img,
                alt: projectData.title,
              });
            });
          }

          setProject(projectData);
          setSlides(images);
        }
      })
      .catch((err) => {
        console.error("Error fetching project data:", err);
      });
  }, [slug]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (slides.length > 0) {
      slideInterval.current = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(slideInterval.current);
    }
  }, [slides]);

  if (!project) {
    return (
      <div className="flex items-center justify-center p-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#FF9900]"></div>
      </div>
    );
  }

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
              {project.name}
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
              <div key={idx} className="min-w-full block">
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                  <Image
                    src={slide.image}
                    alt={slide.alt || project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto bg-[#FF9900] rounded-full p-2 shadow"
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
              onClick={nextSlide}
              className="pointer-events-auto bg-[#FF9900] rounded-full p-2 shadow"
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
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${
                  current === idx ? "bg-[#FF9900]" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
          <div className="pt-10">
            <div className="flex items-center justify-between gap-5 mb-8">
              <h2 className="font-bold text-[#404A5C] text-2xl">
                {project.title}
              </h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF9900] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ffaa00]"
              >
                View Live Project
              </a>
            </div>
            <p className="mb-5">{project.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
