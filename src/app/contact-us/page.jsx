"use client";
import { useState, useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    user_message: "",
    recaptcha: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (!formData.recaptcha) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please verify reCAPTCHA before submitting.",
      });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        `https://ciseb.com/activecraft/public/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: data.message || "Message sent successfully!",
          confirmButtonColor: "#3085d6",
        });

        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          user_message: "",
          recaptcha: "",
        });

        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message || "Failed to send message.",
          confirmButtonColor: "#d33",
        });

        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#d33",
      });

      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } finally {
      setLoading(false);
    }
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
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4 py-20">
        <>
          {/* Contact Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
            {/* Email Card */}
            <div className="bg-purple-500 text-white rounded-lg shadow-md p-6 flex items-center justify-center w-72">
              <div className="flex flex-col items-center">
                <svg
                  className="w-10 h-10 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-lg font-semibold">info@activecraft.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-lg shadow-md p-6 flex items-center justify-center w-72">
              <div className="flex flex-col items-center">
                <svg
                  className="w-10 h-10 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.97825 3.99999c-.3729 0-.74128.08169-1.07926.23934-.32394.15109-.61243.36845-.84696.63786-1.81892 1.82189-2.35302 3.87423-1.89899 5.93671.43916 1.9949 1.77747 3.8929 3.45642 5.572 1.67897 1.6791 3.57614 3.0176 5.57034 3.4591 2.0612.4563 4.1141-.0726 5.9396-1.8853.2705-.2348.4888-.524.6405-.8489.1581-.3387.2401-.7081.2401-1.0819 0-.3739-.082-.7432-.2401-1.0819-.1516-.3247-.3696-.6137-.6398-.8483l-1.2098-1.2106c-.5043-.5041-1.1879-.7872-1.9007-.7872-.7128 0-1.3968.2835-1.9011.7876l-.6178.6181c-.1512.1513-.3563.2363-.5701.2363-.2138 0-.4189-.085-.5701-.2363l-1.85336-1.8545c-.15117-.1513-.23609-.3565-.23609-.5704 0-.214.08493-.4192.23613-.5705l.61812-.61851c.5037-.50461.7867-1.18868.7867-1.90191s-.2833-1.39767-.7871-1.90228L8.90499 4.8778c-.23462-.26969-.5233-.48727-.84749-.63847-.33798-.15765-.70636-.23934-1.07925-.23934Z" />
                  <path
                    fillRule="evenodd"
                    d="M18.0299 8.98132c0 .55229-.4477 1-1 .99999l-3.03-.00002c-.5522 0-1-.44772-1-1V5.99995c0-.55229.4478-1 1-1 .5523 0 1 .44771 1 1v.58112l3.3184-3.29111c.3921-.38892 1.0253-.38631 1.4142.00582.3889.39213.3863 1.02529-.0058 1.4142l-3.2984 3.27133h.6016c.5523.00001 1 .44773 1 1.00001Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-lg font-semibold">+91-98148-08323</p>
              </div>
            </div>

            {/* Skype Card */}
            <div className="bg-cyan-600 text-white rounded-lg shadow-md p-6 flex items-center justify-center w-72">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  className="bi bi-microsoft-teams h-10 w-10"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0m-2.238 9.488-.12-.002a5.2 5.2 0 0 0 .381-2.07V6.306a1.7 1.7 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.6 2.6 0 0 1-2.598 2.598z" />
                  <path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.68.68 0 0 1-.682.682H.682A.68.68 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945z" />
                </svg>
                <p className="text-lg font-semibold">activecraft@hotmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full mx-auto mt-20 max-w-[840px] ">
            <form className="space-y-4 mx-auto" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    First name*
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Last name*
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Phone* (0123456789)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="user_message"
                  value={formData.user_message}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={(token) =>
                  setFormData({ ...formData, recaptcha: token })
                }
                ref={recaptchaRef}
              />

              <button
                type="submit"
                disabled={loading}
                className="text-white bg-[#FF9900] font-medium rounded-full text-sm px-8 py-4 text-center mt-5 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </>
      </section>
      <Footer />
    </>
  );
}
