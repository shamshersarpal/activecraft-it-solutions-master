import Image from "next/image";
import webDev from "../images/web-development-svgrepo-com.svg";
import mobDev from "../images/smartphone-app-svgrepo-com.svg";
import seo from "../images/seo-graphic-thin-outline-in-a-circle-svgrepo-com.svg";
import webDesign from "../images/web-design-svgrepo-com.svg";
import serArrow from "../images/arrow.svg";

export default function Services() {
  return (
    <>
    <section className=" py-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4 ">
  <div className="">
    <div className="flex items-center justify-between">
      <div>
         <p className="text-lg  font-semibold text-[#A6A6A6] uppercase">
             our services
            </p>
            <h1 className="text-3xl font-bold text-[#404A5C]  mb-10">
              Our Best Web & App  <br></br>
Development Services

            </h1>
      </div>

      <div>
         <button className="mt-4 px-5 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-full hover:bg-gray-100 cursor-pointer">
      view all services
    </button>
      </div>

    </div> 
   
  </div>
  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
    {/* Website Development */}
    <div className="">
      <div className="mb-4 text-orange-500 text-4xl">
        <svg
  width={49}
  height={43}
  viewBox="0 0 49 43"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M24.5 29.5294H4.36842C3.74028 29.5294 3.13786 29.2877 2.69369 28.8575C2.24953 28.4272 2 27.8437 2 27.2353V4.29412C2 3.68568 2.24953 3.10216 2.69369 2.67193C3.13786 2.2417 3.74028 2 4.36842 2H42.2632C42.8913 2 43.4937 2.2417 43.9379 2.67193C44.3821 3.10216 44.6316 3.68568 44.6316 4.29412V22.6471M11.4737 38.7059H20.9474M16.2105 29.5294V38.7059M42.2632 41L47 36.4118L42.2632 31.8235M35.1579 31.8235L30.4211 36.4118L35.1579 41"
    stroke="#FF9900"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

      </div>
      <h3 className="text-lg font-semibold text-[#404A5C] mb-2">
        Website Development
      </h3>
      <p className="text-gray-600 text-sm">
        Activecraft offers interactive, holistic, and complete web design and
        development services with core proficiency in E-Learning software, web
        application development, e-commerce website, CMS and customized website
        development.
      </p>
    </div>
    {/* App Development */}
    <div className="">
      <div className="mb-4 text-orange-500 text-4xl">
        <svg
  width={39}
  height={42}
  viewBox="0 0 39 42"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.0312 40H6.375C5.21468 40 4.10188 39.5552 3.28141 38.7633C2.46094 37.9715 2 36.8976 2 35.7778V6.22222C2 5.10242 2.46094 4.02848 3.28141 3.23666C4.10188 2.44484 5.21468 2 6.375 2H23.875C25.0353 2 26.1481 2.44484 26.9686 3.23666C27.7891 4.02848 28.25 5.10242 28.25 6.22222V23.1111M32.625 40L37 35.7778L32.625 31.5556M26.0625 31.5556L21.6875 35.7778L26.0625 40M12.9375 4.11111H17.3125M15.125 31.5556V31.5767"
    stroke="#FF9900"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

      </div>
      <h3 className="text-lg font-semibold text-[#404A5C] mb-2">
        App Development
      </h3>
      <p className="text-gray-600 text-sm">
        Activecraft provides mobile applications development services. Pick us
        for Android application development, iOS application development,
        Facebook apps development services correspond with your clients through
        customized mobile devices.
      </p>
    </div>
    {/* Internet Marketing */}
    <div className="">
      <div className="mb-4 text-orange-500 text-4xl"><svg
  width={44}
  height={42}
  viewBox="0 0 44 42"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 2V40H42M39.7778 33.6667V40M30.8889 29.4444V40M22 23.1111V40M13.1111 29.4444V40M2 18.8889C15.3333 18.8889 13.1111 8.33333 22 8.33333C30.8889 8.33333 28.6667 18.8889 42 18.8889"
    stroke="#FF9F10"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</div>
      <h3 className="text-lg font-semibold text-[#404A5C] mb-2">
        Internet Marketing
      </h3>
      <p className="text-gray-600 text-sm">
        Activecraft provides expert SEO services to design or revamp your
        website by interactive features, custom-made for the online business for
        increasing traffic of your website, and engaging visitors. Get the
        expert SEO services with optimum ROI.
      </p>
    </div>
  </div>
</section>

    </>
  );
}
