
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <main className="font-serif tracking-wide">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] sm:h-screen overflow-hidden">
        <video
          src="home1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/30">
          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold italic leading-tight">
            <p data-aos="fade-right" data-aos-delay="300">
              Where Every Problem Meets the
            </p>
            <p data-aos="fade-right" data-aos-delay="600">
              Right Solution
            </p>
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-[#2c3e50] text-white py-16 px-4">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-amber-400 rounded-tr-4xl rounded-bl-4xl overflow-hidden">
          <div className="flex justify-center items-center p-4">
            <img
              src="consulting.png"
              alt="Consulting illustration"
              className="w-full max-w-md object-contain rounded-4xl hover:scale-105 transition-transform duration-400"
              data-aos="fade-right"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 text-[#2c3e50] p-4">
            <h2 className="text-3xl sm:text-4xl font-bold" data-aos="fade-up">
              Who we are
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Shreeyam Consultancy is a multidisciplinary professional firm
              offering specialized consulting services in legal, business, and
              architectural domains.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              We believe in clarity, precision and innovation—whether it’s
              navigating legal complexities, unlocking business growth or
              designing purposeful spaces.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              Our services are led by dedicated professionals with deep domain
              expertise. Every client receives personalized, solution-driven
              guidance.
            </p>
            <p data-aos="fade-up" data-aos-delay="400">
              Guided by our philosophy—“Where Every Problem Meets the Right
              Solution”—we strive to be your trusted partner in solving
              challenges.
            </p>
            <Link href="/about-us">
              <button
                className="bg-[#2c3e50] text-white py-2 px-4 w-max rounded-tr-4xl rounded-bl-4xl hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gray-100 text-white py-16 px-4">
        <div className="mx-auto max-w-6xl bg-amber-400 rounded-tr-4xl rounded-bl-4xl grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
          <div className="p-6 flex flex-col justify-center gap-4 text-[#2c3e50]">
            <h2 className="text-3xl sm:text-4xl font-bold" data-aos="fade-up">
              Our Services
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              We offer tailored services across legal consultancy, business
              analysis, and architectural consulting—delivering holistic
              solutions to every client.
            </p>
            <Link href="/services">
              <button
                className="bg-[#2c3e50] text-white py-2 px-4 w-max rounded-tr-4xl rounded-bl-4xl hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Explore Services
              </button>
            </Link>
          </div>

          <div className="p-4 flex flex-col items-center gap-4" data-aos="fade-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/legal", label: "Legal Consultancy", img: "law.svg" },
                {
                  href: "/business",
                  label: "Business Analysis",
                  img: "corporate.svg",
                },
              ].map(({ href, label, img }) => (
                <Link key={label} href={href} className="group">
                  <div className="w-48 h-48 bg-gray-300 text-[#2c3e50] hover:bg-[#2c3e50] hover:text-gray-300 hover:scale-105 transition-all duration-300 p-4 rounded-4xl text-center">
                    <p className="mb-2">{label}</p>
                    <img
                      src={img}
                      alt={label}
                      className="mx-auto w-12 group-hover:invert"
                    />
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/arcitacure" className="group">
              <div className="w-60 h-48 bg-gray-300 text-[#2c3e50] hover:bg-[#2c3e50] hover:scale-105 hover:text-gray-300 transition-all duration-300 p-4 rounded-4xl text-center">
                <p className="mb-2">Architectural Consulting</p>
                <img
                  src="architect.svg"
                  alt="Architectural"
                  className="mx-auto w-12 group-hover:invert"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Clients Use Us */}
      <section className="bg-[#2c3e50] text-white py-16 px-4">
        <div className="mx-auto max-w-6xl bg-amber-400 rounded-tr-4xl rounded-bl-4xl p-6 md:p-10 flex flex-col items-center gap-8 overflow-hidden">
          <div className="flex items-center gap-4 text-center">
            <div className="w-1 h-16 bg-[#2c3e50] rounded"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c3e50]">
              Why Clients Use Our Service
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              ["Expertise", "Our team consists of industry experts with years of experience."],
              ["Tailored Solutions", "We provide customized solutions to meet your specific needs."],
              ["Proven Track Record", "Our success stories speak for themselves."],
              ["Client-Centric Approach", "Your satisfaction is our priority."],
            ].map(([title, desc], idx) => (
              <div
                key={idx}
                className="p-6 bg-[#2c3e50] hover:bg-white hover:text-[#2c3e50] hover:scale-105 rounded-3xl transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <h3 className="font-semibold text-xl">{title}</h3>
                <p className="mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="bg-gray-100 text-white py-16 px-4">
        <div className="mx-auto max-w-6xl bg-amber-400 rounded-tr-4xl rounded-bl-4xl p-6 md:p-10">
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="w-1 h-16 bg-[#2c3e50] rounded"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c3e50]">
              Latest News and Stories
            </h2>
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
                title: "The Importance of Architectural Consulting in Modern Design",
                img: "architectureDesign.jpg",
                content:
                  "Architectural consulting is key to creating functional and inspiring spaces. Explore how experts shape the environments we live and work in.",
              },
            ].map(({ title, img, content }, index) => (
              <article
                key={index}
                className="bg-[#2c3e50] hover:bg-white hover:scale-105 text-white hover:text-[#2c3e50] rounded-bl-4xl rounded-tr-4xl p-6 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="font-semibold text-xl sm:text-2xl font-serif mb-4">{title}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={img}
                    alt={title}
                    className="w-full sm:w-48 rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <p>
                    {content}
                    <Link href="/blogs">
                      <button className="text-red-500 hover:underline ml-2">
                        Read More..
                      </button>
                    </Link>
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/blogs">
              <button className="bg-[#2c3e50] text-white py-2 px-4 hover:scale-105 rounded-tr-4xl rounded-bl-4xl transition-all duration-300">
                More Blogs
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

