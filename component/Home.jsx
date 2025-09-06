"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  // explicit inline transition styles to guarantee smooth hover animations
  const smoothAll = {
    transition:
      "transform 0.5s ease-in-out, background-color 0.5s ease-in-out, color 0.5s ease-in-out, filter 0.5s ease-in-out, border-radius 0.5s ease-in-out",
  };

  const smoothTransformFilter = {
    transition: "transform 0.5s ease-in-out, filter 0.5s ease-in-out",
  };

  const smoothTransformOnly = { transition: "transform 0.5s ease-in-out" };

  return (
    <main className="font-serif tracking-wide mt-20">
      {/* Hero Section (Swiper Slider) */}
      <section className="relative w-full h-[90vh] sm:h-screen overflow-hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          {[
            {
              src: "hero1.jpg",
              text1: "Where Every Problem",
              text2: "Meets the Right Solution",
            },
            {
              src: "hero2.jpg",
              text1: "Clarity. Precision.",
              text2: "Innovation at Every Step",
            },
            {
              src: "hero3.jpg",
              text1: "Consultation That",
              text2: "Drives Growth",
            },
            {
              src: "hero4.jpg",
              text1: "Strength in Advocacy",
              text2: "Trust in Service",
            },
          ].map(({ src, text1, text2 }, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[90vh] sm:h-screen">
                <img
                  src={src}
                  alt={`Hero ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/40">
                  <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold italic leading-tight">
                    <p data-aos="fade-right" data-aos-delay="300">
                      {text1}
                    </p>
                    <p data-aos="fade-right" data-aos-delay="1000">
                      {text2}
                    </p>
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Who We Are */}
      <section className="bg-[#2c3e50] text-white py-16 px-4">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-amber-400 rounded-tr-3xl rounded-bl-3xl overflow-hidden">
          <div className="flex justify-center items-center p-4">
            <img
              src="legal.jpg"
              alt="Consulting illustration"
              className="w-full max-w-md object-contain rounded-3xl  "
              data-aos="fade-right"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 text-[#2c3e50] p-4">
            <h2 className="text-3xl sm:text-4xl font-bold" data-aos="fade-up">
              Who We Are
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              At <span className="font-semibold">Shreeyam Consultancy</span>, we
              are a multidisciplinary team of professionals providing end-to-end
              solutions in{" "}
              <strong>
                Business, Legal, Architecture, and Engineering consulting
              </strong>
              .
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              Our approach combines{" "}
              <strong>
                strategic insights, technical expertise, and creative innovation
              </strong>
              to help clients overcome challenges, seize opportunities, and
              achieve sustainable growth.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              Whether it’s{" "}
              <em>
                navigating legal complexities, accelerating business
                performance, designing purposeful spaces, or delivering
                innovative engineering solutions
              </em>
              — we provide customized guidance that drives lasting results.
            </p>
            <p data-aos="fade-up" data-aos-delay="400">
              Guided by our philosophy{" "}
              <q>Where Every Problem Meets the Right Solution</q>, we aim to be
              a trusted partner in every step of your journey.
            </p>
            <Link href="/about-us">
              <button
                className="bg-[#2c3e50] text-white py-2 px-4 w-max rounded-tr-3xl rounded-bl-3xl hover:scale-105 hover:rounded"
                style={{ ...smoothAll }}
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
        <div className="mx-auto max-w-6xl bg-amber-400 rounded-tr-3xl rounded-bl-3xl grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
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
                className="bg-[#2c3e50] text-white py-2 px-4 w-max rounded-tr-3xl rounded-bl-3xl hover:scale-105 hover:rounded"
                style={{ ...smoothAll }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Explore Services
              </button>
            </Link>
          </div>

          <div
            className="p-4 flex flex-col items-center gap-4"
            data-aos="fade-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/legal", label: "Legal Consultancy", img: "law.svg" },
                {
                  href: "/business",
                  label: "Business Analysis",
                  img: "corporate.svg",
                },
                {
                  href: "/arcitacure",
                  label: "Architectural Consulting",
                  img: "architect.svg",
                },
                {
                  href: "/engineering",
                  label: "Engineering Consulting",
                  img: "engineering.svg",
                },
              ].map(({ href, label, img }) => (
                <Link key={label} href={href} className="group">
                  <div
                    className="w-48 h-48 bg-gray-300 text-[#2c3e50] hover:bg-[#2c3e50] hover:text-gray-300 hover:scale-105 p-4 rounded-3xl text-center"
                    style={{ ...smoothAll }}
                  >
                    <p className="mb-2">{label}</p>
                    <img
                      src={img}
                      alt={label}
                      className="mx-auto w-12 group-hover:invert"
                      style={{ ...smoothTransformFilter }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Use Us */}
      <section className="bg-[#2c3e50] text-white py-16 px-4">
        <div className="mx-auto max-w-6xl bg-amber-400 rounded-tr-3xl rounded-bl-3xl p-6 md:p-10 flex flex-col items-center gap-8 overflow-hidden">
          <div className="flex items-center gap-4 text-center">
            <div className="w-1 h-16 bg-[#2c3e50] rounded" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c3e50]">
              Why Clients Use Our Service
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              [
                "Expertise",
                "Our team consists of industry experts with years of experience.",
              ],
              [
                "Customised Solutions",
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
                className="p-6 bg-[#2c3e50] hover:bg-white hover:text-[#2c3e50] hover:scale-105 rounded-3xl"
                style={{ ...smoothAll }}
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
        <div className="mx-auto max-w-6xl bg-amber-400 rounded-tr-3xl rounded-bl-3xl p-6 md:p-10">
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="w-1 h-16 bg-[#2c3e50] rounded" />
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
                title:
                  "The Importance of Architectural Consulting in Modern Design",
                img: "architectureDesign.jpg",
                content:
                  "Architectural consulting is key to creating functional and inspiring spaces. Explore how experts shape the environments we live and work in.",
              },
            ].map(({ title, img, content }, index) => (
              <article
                key={index}
                className="bg-[#2c3e50] hover:bg-white hover:scale-105 text-white hover:text-[#2c3e50] rounded-bl-3xl rounded-tr-3xl p-6"
                style={{ ...smoothAll }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="font-semibold text-xl sm:text-2xl font-serif mb-4">
                  {title}
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={img}
                    alt={title}
                    className="w-full sm:w-48 rounded-2xl object-cover"
                    loading="lazy"
                    style={{ ...smoothTransformFilter }}
                  />
                  <p>
                    {content}
                    <Link href="/blogs">
                      <button
                        className="text-red-500 hover:underline ml-2"
                        style={{ transition: "color 0.3s ease-in-out" }}
                      >
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
              <button
                className="bg-[#2c3e50] text-white py-2 px-4 hover:scale-105 rounded-tr-3xl hover:rounded rounded-bl-3xl"
                style={{ ...smoothAll }}
              >
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
