"use client";
import React from "react";
import Link from "next/link";
import "animate.css";

const Home = () => {
  return (
    <div className="font-serif tracking-wide">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="home1.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-[#2c3e50] text-2xl sm:text-4xl md:text-5xl lg:text-6xl ont-semibold italic">
            <p className="animate__animated animate__backInLeft animate__delay-1s">
              Where Every Problem Meets the
            </p>
            <p className="animate__animated animate__backInLeft animate__delay-2s">
              Right Solution
            </p>
          </h1>
        </div>
      </div>

      {/* Who We Are */}
      <div className="bg-[#2c3e50] text-white p-4">
        <div className="mx-auto my-16 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 rounded-tr-4xl rounded-bl-4xl bg-amber-400">
          <div className="p-4 flex justify-center items-center">
            <img
              src="consulting.png"
              alt="Home Image"
              className="w-full max-w-md object-cover rounded-4xl animate__animated animate__fadeInLeft animate__delay-2s hover:scale-105 transition duration-400"
            />
          </div>
          <div className="p-4 flex flex-col justify-center gap-4 text-[#2c3e50]">
            <p className="text-3xl sm:text-4xl font-serif">Who we are</p>
            <p>
              Shreeyam Consultancy is a multidisciplinary professional firm
              offering specialized consulting services in legal, business, and
              architectural domains.
            </p>
            <p>
              We believe in clarity, precision and innovation—whether it’s
              navigating legal complexities, unlocking business growth or
              designing purposeful spaces.
            </p>
            <p>
              Our services are led by dedicated professionals with deep domain
              expertise. Every client receives personalized, solution-driven
              guidance.
            </p>
            <p>
              Guided by our philosophy—“Where Every Problem Meets the Right
              Solution”—we strive to be your trusted partner in solving
              challenges.
            </p>

            <Link href="/about-us">
              <button className="bg-[#2c3e50] text-white py-2 px-4 rounded-tr-4xl rounded-bl-4xl hover:rounded hover:scale-105 transition-all duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Our Services */}

      <div className="bg-gray-100 text-white p-4">
        <div className="mx-auto my-16 p-10 w-full max-w-6xl bg-amber-400 rounded-bl-4xl rounded-tr-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side content */}
          <div className="p-6 flex flex-col justify-center gap-4 text-[#2c3e50]">
            <p className="text-3xl sm:text-4xl font-serif">Our Services</p>
            <p>
              We offer tailored services across legal consultancy, business
              analysis, and architectural consulting—delivering holistic
              solutions to every client.
            </p>
            <Link href="/services">
              <button className="bg-[#2c3e50] text-white py-2 px-4 rounded-tr-4xl rounded-bl-4xl hover:rounded hover:scale-105 transition-all duration-300">
                Explore Services
              </button>
            </Link>
          </div>

          {/* Right side cards */}
          <div className="p-4 flex flex-col items-center justify-center gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Legal Consultancy */}
              <Link href="/legal" className="group">
                <div className="w-48 h-48 bg-gray-300 text-[#2c3e50] hover:bg-[#2c3e50] hover:text-gray-300 hover:scale-105 transition-all duration-300 p-4 rounded-4xl text-center">
                  <p className="mb-2">Legal Consultancy</p>
                  <img
                    src="law.svg"
                    alt="Law"
                    className="mx-auto w-12 group-hover:invert"
                  />
                </div>
              </Link>

              {/* Business Analysis */}
              <Link href="/business" className="group">
                <div className="w-48 h-48  bg-gray-300 text-[#2c3e50] hover:bg-[#2c3e50] hover:scale-105 hover:text-gray-300 transition-all duration-300 p-4 rounded-4xl text-center cursor-pointer">
                  <p className="mb-2">Business Analysis</p>
                  <img
                    src="corporate.svg"
                    alt="Business"
                    className="mx-auto w-12 group-hover:invert"
                  />
                </div>
              </Link>
            </div>

            {/* Architectural Consulting */}
            <Link href="/arcitacure" className="group">
              <div className="w-60 h-48 bg-gray-300 text-[#2c3e50] hover:bg-[#2c3e50] hover:scale-105 hover:text-gray-300 transition-all duration-300 p-4 rounded-4xl text-center cursor-pointer">
                <p className="mb-2">Architectural Consulting</p>
                <img
                  src="architect.svg"
                  alt="Architecture"
                  className="mx-auto w-12 group-hover:invert"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Clients Use Us */}
      <div className="bg-[#2c3e50] text-white p-4">
        <div className="mx-auto my-16 w-full max-w-6xl bg-amber-400 rounded-tr-4xl rounded-bl-4xl p-6 md:p-10 flex flex-col items-center gap-8">
          <div className="flex items-center gap-4 text-center">
            <div className="w-1 h-16 bg-[#2c3e50] rounded"></div>
            <p className="text-3xl sm:text-4xl font-serif text-[#2c3e50]">
              Why Clients Use Our Service
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              [
                "Expertise",
                "Our team consists of industry experts with years of experience.",
              ],
              [
                "Tailored Solutions",
                "We provide customized solutions to meet your specific needs.",
              ],
              [
                "Proven Track Record",
                "Our success stories speak for themselves.",
              ],
              ["Client-Centric Approach", "Your satisfaction is our priority."],
            ].map(([title, desc], idx) => (
              <div
                key={idx}
                className="p-6 bg-[#2c3e50] hover:bg-white hover:text-[#2c3e50] hover:scale-105 text-white rounded-3xl transition-all duration-300"
              >
                <p className="font-semibold text-xl">{title}</p>
                <p className="mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Blogs */}
      <div className="bg-gray-100 text-white p-4">
        <div className="mx-auto my-16 w-full max-w-6xl bg-amber-400 rounded-tr-4xl rounded-bl-4xl p-6 md:p-10">
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="w-1 h-16 bg-[#2c3e50] rounded"></div>
            <p className="text-3xl sm:text-4xl font-serif text-[#2c3e50]">
              Latest News and Stories
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {[
              {
                title: "Why Legal Consultancy is Crucial for Every Business",
                img: "whylegal.jpg",
                content:
                  "Legal consultancy isn’t just for when things go wrong—it’s about making sure they don’t. From compliance to contracts, discover how legal expertise can safeguard your business.",
              },
              {
                title: "The Power of Business Analysis in Driving Growth",
                img: "businessPower.jpg",
                content:
                  "Business analysis is the backbone of strategic growth. Learn how data-driven insights and market analysis can propel your organization forward.",
              },
              {
                title:
                  "The Importance of Architectural Consulting in Modern Design",
                img: "architectureDesign.jpg",
                content:
                  "Architectural consulting is key to creating functional and inspiring spaces. Explore how experts shape the environments we live and work in.",
              },
            ].map(({ title, img, content }, index) => (
              <div
                key={index}
                className="bg-[#2c3e50] hover:bg-white hover:scale-105 text-white hover:text-[#2c3e50] rounded-bl-4xl rounded-tr-4xl p-6 transition-all duration-300"
              >
                <p className="font-semibold text-xl sm:text-2xl font-serif mb-4">
                  {title}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={img}
                    alt={title}
                    className="w-full sm:w-48 rounded-2xl object-cover"
                  />
                  <p>
                    {content}
                    <button className="text-red-500 hover:underline ml-2 hover:scale-105">
                      Read More..
                    </button>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/blogs">
              <button className="bg-[#2c3e50] text-white py-2 px-4 hover:scale-105 rounded-tr-4xl rounded-bl-4xl hover:rounded transition-all duration-300">
                More Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
// This is the Home component that serves as the landing page for the consultancy website.
