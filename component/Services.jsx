"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import "animate.css";

export default function Services() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const animateText = (inView, animation) =>
    inView ? `animate__animated ${animation}` : "opacity-0";

  const categories = [
    {
      title: "Business Consulting",
      description:
        "Strategies and solutions tailored to help your business grow, improve efficiency, and achieve long-term success.",
      image: "/business.webp",
      href: "/business",
    },
    {
      title: "Legal Services",
      description:
        "Expert legal advice and innovative solutions to help you navigate contracts, compliance, and disputes with confidence.",
      image: "/legalPage.jpg",
      href: "/legal",
    },
    {
      title: "Architecture",
      description:
        "Creative architectural design and planning services that balance innovation, sustainability, and functionality.",
      image: "/architecture.jpg",
      href: "/architecture",
    },
    {
      title: "Engineering",
      description:
        "Engineering solutions that combine technical expertise with practical insights to deliver robust and scalable projects.",
      image: "/engineering.jpg",
      href: "/engineering",
    },
  ];

  return (
    <div className="font-serif text-[#2c3e50] mt-20">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <img
          src="/services.png"
          alt="Services"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1
            className={`text-white text-3xl md:text-5xl font-bold text-center ${animateText(
              sectionInView,
              "animate__fadeInDown"
            )}`}
          >
            Our Services
          </h1>
        </div>
      </div>

      {/* Categories */}
      <section ref={sectionRef} className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {cat.title}
                </h2>
                <p className="text-white/90 text-sm sm:text-base mb-4">{cat.description}</p>
                <Link
                  href={cat.href}
                  className="bg-white text-[#2c3e50] px-6 py-2 rounded-full font-semibold hover:bg-[#2c3e50] hover:text-white transition-colors"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
