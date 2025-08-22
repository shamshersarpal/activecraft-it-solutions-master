"use client";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
  return (
    <main>
      <section
        id="home"
        className="  bg-no-repeat bg-cover relative -z-10 active "
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 hero">
          <div className="lg:px-20 px-10">
            <h1 className="lg:text-[62px] md:text-[35px] text-[28px] mt-5  text-white font-bold leading-none">
            We Provide the
          </h1>
          <h1 className="lg:text-[62px] md:text-[35px] text-[28px]  text-white font-bold leading-none pt-1">
            Best <span className="text-[#FF9900]">Development Services</span>
          </h1>
          <h3 className="lg:text-[20px] md:text-[18px] text-[14px]   text-white font-bold leading-none pt-5">
            18 Years Experience in IT SOLUTIONS
          </h3>
          <p className="text-white lg:text-[17px] text-sm mt-5 max-w-3xl">
            For Activecraft client satisfaction is most important. Activecraft
            always try to provide designs to the client as per their
            requirements and ideas in their minds
          </p>

          <div className="flex gap-2 mt-4 items-center ">
            <button
              type="button"
              className="  text-white bg-[#FF9900]  focus:ring-4 focus:outline-none focus:ring-blue-300  cursor-pointer font-medium rounded-full text-sm px-8 py-4 text-center leading-none  "
            >
              Contact Us
            </button>

            <button
              type="button"
              className="  text-[#3E495B] bg-white  focus:ring-4 focus:outline-none focus:ring-blue-300  cursor-pointer font-medium rounded-full text-sm px-8 py-4 text-center leading-none "
            >
              View work
            </button>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
