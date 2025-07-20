"use client";

import React from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";

const Architecture = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animateText = (inView, animation) =>
    inView ? `animate__animated ${animation}` : "opacity-0";

  return (
    <div className="font-serif text-[#2c3e50]">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh]" ref={heroRef}>
        <img
          src="/architectureDesign.jpg"
          alt="Architectural Design"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 bg-black/40">
          <p
            className={`text-white text-center font-serif italic font-semibold text-lg sm:text-2xl md:text-3xl px-4 py-2 rounded-lg ${animateText(
              heroInView,
              "animate__fadeInDown"
            )}`}
          >
            Innovative Designs. Sustainable Solutions.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section
        ref={sectionRef}
        className="bg-amber-400 px-6 py-20 sm:px-10 lg:px-20 text-[#2c3e50]"
      >
        <div
          className={`text-center mb-16 ${animateText(
            sectionInView,
            "animate__fadeIn"
          )}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Our Architectural Services
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Transforming spaces through thoughtful planning, sustainable
            materials, and modern aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
          {architectureServices.map((service, index) => (
            <div
              key={index}
              className={`bg-white text-[#2c3e50] p-6 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 group animate__animated ${
                sectionInView ? "animate__fadeInLeft" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <h3 className="font-semibold text-xl mb-4 group-hover:text-amber-500 transition-colors duration-300">
                {service.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const architectureServices = [
  {
    title: "Residential Architecture",
    points: [
      "Custom Home Design",
      "Renovations & Additions",
      "Sustainable Housing Plans",
      "Interior-Exterior Integration",
      "Landscape Architecture",
    ],
  },
  {
    title: "Commercial Architecture",
    points: [
      "Retail Space Planning",
      "Office Design & Layout",
      "Hospitality & Restaurant Design",
      "Industrial Architecture",
      "Mixed-Use Development",
    ],
  },
  {
    title: "Urban Planning",
    points: [
      "Cityscape Design",
      "Community Development Plans",
      "Transit-Oriented Planning",
      "Zoning & Land Use Analysis",
      "Smart City Concepts",
    ],
  },
  {
    title: "Interior Architecture",
    points: [
      "Space Optimization",
      "Custom Furniture Layout",
      "Lighting & Acoustics Planning",
      "Material & Color Consultation",
      "Smart Home Integration",
    ],
  },
  {
    title: "Sustainable Design",
    points: [
      "Energy-Efficient Structures",
      "LEED Certification Consulting",
      "Green Material Selection",
      "Passive Solar Design",
      "Rainwater Harvesting Systems",
    ],
  },
  {
    title: "3D Visualization & BIM",
    points: [
      "Photorealistic Renderings",
      "Virtual Walkthroughs",
      "Building Information Modeling (BIM)",
      "Concept to Construction Animations",
      "Clash Detection & Analysis",
    ],
  },
  {
    title: "Heritage & Conservation",
    points: [
      "Historic Building Restoration",
      "Adaptive Reuse Projects",
      "Cultural Landscape Preservation",
      "Material Matching Techniques",
      "Regulatory Compliance Guidance",
    ],
  },
  {
    title: "Construction Documentation",
    points: [
      "Detailed Drawings & Blueprints",
      "Site Planning & Surveys",
      "Permit-Ready Documentation",
      "Specification Writing",
      "On-Site Construction Guidance",
    ],
  },
  {
    title: "Architectural Consulting",
    points: [
      "Feasibility Studies",
      "Design Review & Evaluation",
      "Cost Estimation & Budgeting",
      "Material Selection Support",
      "Project Coordination",
    ],
  },
];

export default Architecture;
