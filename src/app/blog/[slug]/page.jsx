"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ArtificialIntelligence() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(
        `https://ciseb.com/activecraft/public/api/get-blog-with-slug/${slug}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            setBlog(data.data);
          }
        })
        .catch((err) => console.error("Error fetching blog:", err));
    }
  }, [slug]);

  if (!blog) {
    return (
      <>
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section>
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero / Header */}
          <header className="mb-12">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={`http://127.0.0.1:8000/uploads/blog_images/${blog.image}`}
                alt={blog.name}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="flex items-center text-sm mb-2 text-gray-300">
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
                      {new Date(blog.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                    {blog.name}
                  </h1>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content + Sidebar TOC */}
          <div className="md:flex md:space-x-10">
            {/* Article */}
            <article
              className="prose prose-lg max-w-none flex-1"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            ></article>

            {/* Sticky Table of Contents (optional, auto?) */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <div className="text-sm font-semibold uppercase text-gray-500 mb-2">
                  On this page
                </div>
                <nav className="space-y-2 text-sm">
                  {/* TODO: headings parse from blog.description if needed */}
                  <a
                    href="#introduction"
                    className="block text-[#FF9900] hover:underline"
                  >
                    Introduction
                  </a>
                  <a
                    href="#what-is-ai"
                    className="block text-[#FF9900] hover:underline"
                  >
                    What Is AI?
                  </a>
                </nav>
              </div>
            </aside>
          </div>

          {/* Meta info */}
          <div className="mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between border-t pt-6 text-sm text-gray-500">
            <div>
              Published on{" "}
              <time dateTime={blog.created_at}>
                {new Date(blog.created_at).getDate()}{" "}
                {new Date(blog.created_at).toLocaleString("en-US", {
                  month: "long",
                })}
              </time>
            </div>

            <div className="mt-2 sm:mt-0">
              <span>
                Written by <span className="font-medium">Activecraft</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
