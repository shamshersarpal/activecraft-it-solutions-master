"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import dynamic from "next/dynamic";
import $ from "jquery";

if (typeof window !== "undefined") {
  window.$ = window.jQuery = $;
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function PortfolioDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (!slug) return;

    fetch(
      `https://ciseb.com/activecraft/public/api/get-portfolio-detail/${slug}`
    )
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

  if (!project) {
    return (
      <div className="flex items-center justify-center p-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#FF9900]"></div>
      </div>
    );
  }

  const carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      `<div style="background:#FF9900; border-radius:50%; padding:10px; display:flex; align-items:center; justify-content:center;">
      <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='none'
        stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
        <polyline points='15 18 9 12 15 6'></polyline>
      </svg>
    </div>`,
      `<div style="background:#FF9900; border-radius:50%; padding:10px; display:flex; align-items:center; justify-content:center;">
      <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='none'
        stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
        <polyline points='9 18 15 12 9 6'></polyline>
      </svg>
    </div>`,
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 },
    },
  };

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
        <div className="max-w-[800px] mx-auto relative rounded-3xl">
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {slides.map((slide, idx) => (
              <a key={idx} href={slide.link} className="block">
                <div className="w-full p-4 bg-gray-200 rounded-3xl">
                  <Image
                    src={slide.image}
                    alt={slide.alt || project.title}
                    width={1200} // use actual image width
                    height={800} // use actual image height
                    className="w-full rounded-3xl object-cover"
                  />
                </div>
              </a>
            ))}
          </OwlCarousel>

          <div className="pt-10">
            <div className="flex items-center justify-between gap-5 mb-8">
              <div>
                <h2 className="font-bold text-[#404A5C] text-2xl">
                  {project.title}
                </h2>
              </div>
              <div>
                {" "}
                <a
                  className="bg-[#FF9900] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ffaa00] transition duration-300 cursor-pointer"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view live project
                </a>
              </div>
            </div>
            <p className="mb-5">{project.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
