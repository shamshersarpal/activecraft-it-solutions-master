"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from Laravel API
  useEffect(() => {
    fetch("https://ciseb.com/activecraft/public/api/get-blog")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setBlogs(data.data);
        }
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

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
              Blog
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200"
              >
                {/* Blog Image */}
                <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={`http://127.0.0.1:8000/uploads/blog_images/${blog.image}`}
                    alt={blog.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-2xl font-medium text-gray-900 mb-2">
                    {blog.name}
                  </h2>
                  <p
                    className="text-gray-700 flex-1 mb-4 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: blog.description.substring(0, 200) + "...",
                    }}
                  ></p>

                  <Link href={`/blog/${blog.slug}`} passHref>
                    <span className="text-[#FF9900] hover:underline">
                      read more
                    </span>
                  </Link>

                  <div className="mt-2 flex items-center text-sm text-[#FF9900]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>
                      {new Date(blog.created_at).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                      })}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
