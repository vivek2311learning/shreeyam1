
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
    image: "businessPower.jpg",
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

const BlogCard = ({ post }) => (
  <div className="p-6 md:p-12 bg-amber-400 hover:bg-gray-100 rounded-bl-4xl rounded-tr-4xl w-full space-y-4 text-gray-100 hover:text-[#2c3e50] transition-all duration-300">
    <h3 className="font-semibold text-2xl font-serif">{post.title}</h3>
    <div className="flex flex-col md:flex-row gap-4">
      <img
        src={post.image}
        alt={post.title}
        className="w-full md:w-48 object-cover rounded-3xl"
      />
      <p className="text-lg md:text-xl">{post.excerpt}</p>
    </div>
    <button className="text-red-500 hover:underline text-left">
      Read More..
    </button>
  </div>
);

const Blogs = () => {
  return (
    <div className="relative">
      <div className="relative">
        <img src="blog.jpg" alt="Blog" className="w-full h-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-2xl md:text-4xl font-semibold italic font-serif animate__animated animate__fadeInDown animate__delay-1s">
          The Thinking Space of Shreeyam
        </div>
      </div>

      <div className="px-4 py-8 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-[#2c3e50] font-serif">
          Latest news and inspirational stories
        </h2>
        <p className="text-center text-[#34495e] font-serif">
          Check out our latest blog posts, articles and essential announcements.
        </p>
      </div>

      <div className="px-4 py-8 bg-gray-200">
        <div className="grid gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
