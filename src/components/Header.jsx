"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="w-full bg-white sticky top-0 z-20">
        <div className="desktop-menu max-w-screen-xl m-auto px-4 ">
          <div className="flex items-center justify-between py-8">
            <div>
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blac text-white">
                <li>
                  <Link
                    href="/"
                    className={`block py-2 px-3 rounded-sm md:p-0  ${
                      activeItem === "home"
                        ? "md:bg-transparent md:text-[#ec8223]"
                        : "text-black hover:text-[#ec8223]  "
                    }`}
                    aria-current="page"
                    onClick={() => handleItemClick("myAccount")}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className={`block py-2 px-3 rounded-sm md:p-0 ${
                      activeItem === "aboutUs"
                        ? "md:bg-transparent md:text-[#ec8223]"
                        : "text-black hover:text-[#ec8223]"
                    }`}
                    onClick={() => handleItemClick("travelAgents")}
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-services"
                    className={`block py-2 px-3 rounded-sm md:p-0  ${
                      activeItem === "services"
                        ? "md:bg-transparent md:text-[#ec8223]"
                        : "text-black hover:text-[#ec8223]  "
                    }`}
                    onClick={() => handleItemClick("travelAgents")}
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <a
                href=""
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Image className="w-[210px]" src={logo} alt="" />
              </a>
            </div>
            <div>
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blac text-white">
                <li>
                  <Link
                    href="/portfolio"
                    className={`block py-2 px-3 rounded-sm md:p-0  ${
                      activeItem === "portfolio"
                        ? "md:bg-transparent md:text-[#ec8223]"
                        : "text-black hover:text-[#ec8223]  "
                    }`}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`block py-2 px-3 rounded-sm md:p-0  ${
                      activeItem === " blog"
                        ? "md:bg-transparent md:text-[#ec8223]"
                        : "text-black hover:text-[#ec8223]  "
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className={`block py-2 px-3 rounded-sm md:p-0  ${
                      activeItem === " blog"
                        ? "md:bg-transparent md:text-[#ec8223]"
                        : "text-black hover:text-[#ec8223]  "
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white fixed w-full z-20 top-0 start-0 mobile-menu">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image className="w-[210px]" src={logo} alt="" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href="/contact-us">
              <button
                type="button"
                className="  text-white bg-[#3E495B]  focus:ring-4 focus:outline-none focus:ring-blue-300  cursor-pointer font-medium rounded-full text-sm px-6 py-3 text-center leading-none "
              >
                Contact Us
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blac text-white">
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-sm md:p-0  ${
                    activeItem === "home"
                      ? "md:bg-transparent md:text-[#ec8223]"
                      : "text-black hover:text-[#ec8223]  "
                  }`}
                  aria-current="page"
                  onClick={() => handleItemClick("myAccount")}
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeItem === "aboutUs"
                      ? "md:bg-transparent md:text-[#ec8223]"
                      : "text-black hover:text-[#ec8223]"
                  }`}
                  onClick={() => handleItemClick("travelAgents")}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/our-services"
                  className={`block py-2 px-3 rounded-sm md:p-0  ${
                    activeItem === "services"
                      ? "md:bg-transparent md:text-[#ec8223]"
                      : "text-black hover:text-[#ec8223]  "
                  }`}
                  onClick={() => handleItemClick("travelAgents")}
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className={`block py-2 px-3 rounded-sm md:p-0  ${
                    activeItem === "portfolio"
                      ? "md:bg-transparent md:text-[#ec8223]"
                      : "text-black hover:text-[#ec8223]  "
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-sm md:p-0  ${
                    activeItem === " blog"
                      ? "md:bg-transparent md:text-[#ec8223]"
                      : "text-black hover:text-[#ec8223]  "
                  }`}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
