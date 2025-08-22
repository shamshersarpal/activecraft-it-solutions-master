"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Portfolio() {
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    fetch(`https://ciseb.com/activecraft/public/api/get-sub-category`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status && Array.isArray(data.data)) {
          setPortfolioData(data.data);

          // collect unique categories (split by comma & trim spaces)
          const categoryNames = new Set();

          data.data.forEach((item) => {
            if (item.category_name) {
              const cats = item.category_name
                .split(",") // split comma separated values
                .map((c) => c.trim()); // remove spaces

              cats.forEach((cat) => categoryNames.add(cat));
            }
          });

          setCategories(["All", ...Array.from(categoryNames)]);

          // Save id/slug to localStorage
          const idSlugArray = data.data.map(({ id, slug }) => ({ id, slug }));
          localStorage.setItem(
            "subCategoryIdSlug",
            JSON.stringify(idSlugArray)
          );
        }
      })
      .catch((err) => {
        console.error("Error fetching portfolio data:", err);
      });
  }, []);

  // Filtering portfolio items
  const filteredPortfolio =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => {
          if (!item.category_name) return false;
          const cats = item.category_name.split(",").map((c) => c.trim()); // split multi categories
          return cats.includes(activeCategory);
        });

  return (
    <>
      <Header />
      <section className="bg-no-repeat bg-cover relative -z-10 active">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 hero">
          <div className="lg:px-20 px-10">
            <h1 className="lg:text-[62px] md:text-[35px] text-[28px] mt-5 text-white font-bold leading-none">
              Portfolio
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4 py-20">
        {/* category filter buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:text-orange-500 border border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* portfolio cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredPortfolio.map((item, index) => (
            <Link
              href={`/portfolio/${item.slug}`}
              key={index}
              rel="noopener noreferrer"
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
                <div className="p-4 bg-[#3e495b75]">
                  {item.single_image ? (
                    <Image
                      src={item.single_image}
                      alt={item.name || item.title}
                      width={300}
                      height={200}
                      className="mx-auto mb-4 rounded-md"
                    />
                  ) : (
                    <div
                      className="mx-auto mb-4 rounded-md bg-gray-200 flex items-center justify-center"
                      style={{ width: 300, height: 200 }}
                    >
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white text-center p-4">
                  <div className="flex justify-center mb-2">
                    <div className="bg-[#FF9900] w-15 flex items-center justify-center h-15 rounded-full text-white">
                      <svg
                        className="w-8 h-8"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-semibold text-xl">{item.name}</p>
                  <p className="text-sm text-gray-300">{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
