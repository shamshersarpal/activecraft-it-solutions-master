import Image from "next/image";
import aboutimage from "../images/123484.jpg";
export default function AboutCompany() {
  return (
    <>
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
              Located at Mohali (India) Activecraft is the most experienced, professional and best web development company. Success in web Development Company depends on client’s satisfaction. Activecraft builds relationship with our clients based on trust and mutual understanding. Our dedicated, experienced, web development team dedicated for you to provide affordable, quality, value added services, reliable and affordable website development to focus on your business needs. We offer website designing, web applications development, IT services, Software development and SEO services.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white border border-[#404a5c51] p-3 mt-3 rounded-lg">
                <h3 className="text-xl font-semibold text-[#404A5C] ">Our Mission</h3>
                <p className="text-[#545454]">
                  Our Mission is to completely delight and satisfy our clients
                  with our creative Design and Development services.
                </p>
              </div>

              <div className="bg-white border border-[#404a5c51] p-3 mt-3 rounded-lg">
                <h3 className="text-xl font-semibold text-[#404A5C]">Our Vision</h3>
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
      </div>
    </>
  );
}
