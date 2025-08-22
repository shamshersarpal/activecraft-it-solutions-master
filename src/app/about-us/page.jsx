import Image from "next/image";
import aboutimage from "@/images/123484.jpg";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutUsPage() {
  return (
    <>
      <Header />

       <section
        id="home"
        className="  bg-no-repeat bg-cover relative -z-10 active "
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 hero">
          <div className="lg:px-20 px-10">
            <h1 className="lg:text-[62px] md:text-[35px] text-[28px] mt-5  text-white font-bold leading-none">
            About <span className="text-[#FF9900]">Us</span>
          </h1>  
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4 py-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-40 gap-10">
          <div>
            <p className="text-lg font-semibold text-[#A6A6A6] uppercase">
              About Company
            </p>
            <h1 className="text-3xl font-bold text-[#404A5C]  mb-3">
              18 Years Experience in <br></br> IT SOLUTIONS
            </h1>
            <p className="text-[#545454]">
              Located at Mohali (India) Activecraft is the most experienced,
              professional and best web development company. Success in web
              Development Company depends on client’s satisfaction. Activecraft
              builds relationship with our clients based on trust and mutual
              understanding. Our dedicated, experienced, web development team
              dedicated for you to provide affordable, quality, value added
              services, reliable and affordable website development to focus on
              your business needs. We offer website designing, web applications
              development, IT services, Software development and SEO services.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white border border-[#404a5c51] p-3 mt-3 rounded-lg">
                <h3 className="text-xl font-semibold text-[#404A5C] ">
                  Our Mission
                </h3>
                <p className="text-[#545454]">
                  Our Mission is to completely delight and satisfy our clients
                  with our creative Design and Development services.
                </p>
              </div>

              <div className="bg-white border border-[#404a5c51] p-3 mt-3 rounded-lg">
                <h3 className="text-xl font-semibold text-[#404A5C]">
                  Our Vision
                </h3>
                <p className="text-[#545454]">
                  Our vision is to provide the best service to our clients so
                  that they always get the result as they want and trust on us.
                </p>
              </div>
            </div>
          </div>

          <div className="m-auto">
            <Image
              src={aboutimage}
              alt="about us"
              className="w-full rounded-2xl"
            />
          </div>
        </div>

        <div className="p-15 px-20 rounded-3xl bg-[#26272E] text-white my-16 text-center">
          <p className="text-[18px]">
            Working with Activecraft was an absolute{" "}
            <span className="text-[#FF9900]">
              game-changer for our business
            </span>{" "}
            . Their flexible approach and attention to detail helped us
            streamline our processes and deliver results faster than we
            anticipated.
          </p>

          <button
            type="submit"
            className="bg-[#FF9900] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ffaa00] transition duration-300 cursor-pointer mt-5"
          >
            Contact Us
          </button>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="p-5 rounded-lg bg-[#F5F7FB]">
            <h3 className="text-xl font-semibold text-[#404A5C] ">Precision</h3>
            <p className="text-[#545454]">
              Precision is the primary thing that you will see in us. We
              concentrate on our strong aspects and not try to become jack for
              all the trades. We only focus on the solutions that we can
              provide.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#F5F7FB]">
            <h3 className="text-xl font-semibold text-[#404A5C] ">
              Transparency
            </h3>
            <p className="text-[#545454]">
              We are making efforts to earn money not only for us but for you
              also! We are running our business and you are also making
              investments in your website from which you can earn some money
              also.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#F5F7FB]">
            <h3 className="text-xl font-semibold text-[#404A5C] ">
              Flexibility
            </h3>
            <p className="text-[#545454]">
              Flexibility and compliance are very important for any business. We
              know that we must deliver, and for that we must be flexible also.
              Our sources are trained from the very first day for it.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
