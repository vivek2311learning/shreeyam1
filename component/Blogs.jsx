"use client";
import React from "react";
import "animate.css";

const blogPosts = [
  {
    title: "Why Legal Consultancy is Crucial for Every Business",
    image: "whylegal.jpg",
    excerpt:
      "Legal consultancy isn’t just for when things go wrong—it’s about making sure they don’t. From compliance to contracts, discover how legal expertise can safeguard your business.",
  },
  {
    title: "The Power of Business Analysis in Driving Growth",
    image: "businessPower.webp",
    excerpt:
      "Business analysis is the backbone of strategic growth. Learn how data-driven insights and market analysis can propel your organization forward.",
  },
  {
    title: "The Importance of Architectural Consulting in Modern Design",
    image: "architectureDesign.jpg",
    excerpt:
      "Architectural consulting is key to creating spaces that are not only functional but also inspiring. Explore the role of architectural experts in shaping our built environment.",
  },
];

const BlogCard = ({ post, delay }) => (
  <div
    className={`bg-[#2c3e50] hover:bg-white hover:scale-[1.02] text-white hover:text-[#2c3e50] rounded-bl-4xl rounded-tr-4xl p-6 transition-all duration-500 ease-in-out shadow-lg animate__animated animate__fadeInLeft ${delay}`}
  >
    <h3 className="font-semibold text-2xl font-serif mb-4">{post.title}</h3>
    <div className="flex flex-col md:flex-row gap-4">
      <img
        src={post.image}
        alt={post.title}
        className="w-full md:w-60 h-40 object-cover rounded-3xl"
      />
      <p className="text-lg font-serif">{post.excerpt}</p>
    </div>
    <button className="text-red-500 hover:underline text-left mt-4 font-serif">
      Read More..
    </button>
  </div>
);

const Blogs = () => {
  return (
    <div className="relative font-serif mt-20">
      <div className="relative overflow-hidden">
        <img
          src="blog.jpg"
          alt="Blog"
          className="relative w-full h-[70vh] md:h-[80vh] object-cover animate__animated animate__zoomIn"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-2xl md:text-4xl font-semibold italic font-serif animate__animated animate__fadeInDown animate__delay-1s">
          The Thinking Space of Shreeyam
        </div>
      </div>

      <div className="px-4 py-8 text-center animate__animated animate__fadeInUp">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#2c3e50] font-serif">
          Latest news and inspirational stories
        </h2>
        <p className="text-[#34495e] font-serif">
          Check out our latest blog posts, articles and essential announcements.
        </p>
      </div>

      <div className="px-4 py-8 bg-amber-400">
        <div className="grid gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, idx) => (
            <BlogCard key={idx} post={post} delay={`animate__delay-${idx + 1}s`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
