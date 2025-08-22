import Image from "next/image";
import webDev from "../images/web-development-svgrepo-com.svg";
import mobDev from "../images/smartphone-app-svgrepo-com.svg";
import seo from "../images/seo-graphic-thin-outline-in-a-circle-svgrepo-com.svg";
import webDesign from "../images/web-design-svgrepo-com.svg";
import serArrow from "../images/arrow.svg";

export default function Feedback() {
    return(
        <>
         <section className="services bg-[#0a0a0a] py-20">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-[66px] xl:grid-cols-[minmax(0,_0.6fr)_1fr]">
                    <div>
                        <div className="sticky top-5 z-10">
                            <div className="tagSection">Happy clients</div>
        
                      <h2 className="text-4xl font-bold text-white">
                       Recent clients feedback
                      </h2>
                      <div className="mt-20 lg:block hidden opacity-10 ">
                        <Image
                          src={serArrow}
                          alt="Arrow"
                          width={250}
                          height={250}
                          className="mt-4 mb-6"
                        />
                      </div>
                        </div>
                      
                    </div>
        
                    <div className="grid h-[calc(100%-1px)] grid-cols-1 gap-x-24 overflow-hidden bg-colorGreyDark px-10 md:grid-cols-2 md:px-14 jos shadow-2xl">
                      <div className="border-b border-white/[12%] py-10 md:py-14 jos">
                        <Image
                          src={webDev}
                          alt="Web Development"
                          width={100}
                          height={100}
                          className="w-16 h-16 mb-4"
                        />
                        <h3 className="text-xl font-semibold text-white">
                          WEBSITE DEVELOPMENT
                        </h3>
                        <p className="text-white/70 pt-2">
                          Activecraft offers interactive, holistic, and complete web
                          design and development services with core proficiency in
                          E-Learning software, web application development, e-commerce
                          website, CMS and customized website development.
                        </p>
                      </div>
        
                      <div className="border-b border-white/[12%] py-10 md:py-14 jos">
                        <Image
                          src={mobDev}
                          alt="Web Development"
                          width={100}
                          height={100}
                          className="w-16 h-16 mb-4"
                        />
                        <h3 className="text-xl font-semibold text-white">
                          MOBILE APP DEVELOPMENT
                        </h3>
                        <p className="text-white/70 pt-2">
                          Activecraft provides mobile applications development services.
                          Pick us for Android application development, iOS application
                          development, Facebook apps development services correspond
                          with your clients through customized mobile devices.
                        </p>
                      </div>
        
                      <div className="border-b border-white/[12%] py-10 md:py-14 jos">
                        <Image
                          src={seo}
                          alt="Web Development"
                          width={100}
                          height={100}
                          className="w-16 h-16 mb-4"
                        />
                        <h3 className="text-xl font-semibold text-white">
                          INTERNET MARKETING
                        </h3>
                        <p className="text-white/70 pt-2">
                          Activecraft provides expert SEO services to design or revamp
                          your website by interactive features, custom-made for the
                          online business for increasing traffic of your website, and
                          engaging visitors. Get the expert SEO services with optimum
                          ROI.
                        </p>
                      </div>
        
                      <div className="border-b border-white/[12%] py-10 md:py-14 jos">
                        <Image
                          src={webDesign}
                          alt="Web Development"
                          width={100}
                          height={100}
                          className="w-16 h-16 mb-4"
                        />
                        <h3 className="text-xl font-semibold text-white">
                          WEBSITE DESIGN
                        </h3>
                        <p className="text-white/70 pt-2">
                          Activecraft works for both the usability and appearance to
                          achieve your business goals while designing the website.
                          Hi-end Landing Page Design, Graphic Design, Banner Design, and
                          website design will accomplish your online requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        </>
    )
}