"use client";

import React from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";

const Engineering = () => {
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
    <div className="font-serif text-[#2c3e50] mt-20">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh]" ref={heroRef}>
        <img
          src="/engineering.jpg"
          alt="Engineering Design"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 bg-black/40">
          <p
            className={`text-white text-center font-serif italic font-semibold text-lg sm:text-2xl md:text-3xl px-4 py-2 rounded-lg ${animateText(
              heroInView,
              "animate__fadeInDown"
            )}`}
          >
            Precision. Innovation. Engineering Excellence.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section
        ref={sectionRef}
        className="bg-[#c5c7bf] px-6 py-20 sm:px-10 lg:px-20 text-[#2c3e50]"
      >
        <div
          className={`text-center mb-16 ${animateText(
            sectionInView,
            "animate__fadeIn"
          )}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Our Engineering Services
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Delivering reliable, efficient, and sustainable engineering solutions for diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
          {engineeringServices.map((service, index) => (
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
              <h3 className="font-semibold text-xl mb-4 group-hover:text-[#c5c7bf] transition-colors duration-300">
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

const engineeringServices = [
  {
    title: "Civil Engineering",
    points: [
      "Structural Design & Analysis",
      "Site Development & Planning",
      "Bridge & Highway Engineering",
      "Geotechnical Studies",
      "Water Resource Management",
    ],
  },
  {
    title: "Mechanical Engineering",
    points: [
      "Product Design & Prototyping",
      "HVAC & Thermal Systems",
      "Manufacturing Process Design",
      "Robotics & Automation",
      "Maintenance Engineering",
    ],
  },
  {
    title: "Electrical Engineering",
    points: [
      "Power Systems Design",
      "Renewable Energy Solutions",
      "Electrical Circuit Design",
      "Lighting & Wiring Layouts",
      "Control Systems Engineering",
    ],
  },
  {
    title: "Structural Engineering",
    points: [
      "Load-Bearing Analysis",
      "Seismic & Wind Resistance Design",
      "Steel & Concrete Structures",
      "Retrofitting & Strengthening",
      "Construction Supervision",
    ],
  },
  {
    title: "Environmental Engineering",
    points: [
      "Wastewater Treatment Systems",
      "Air Pollution Control",
      "Solid Waste Management",
      "Environmental Impact Assessment",
      "Sustainable Development Planning",
    ],
  },
  {
    title: "Industrial Engineering",
    points: [
      "Process Optimization",
      "Production Planning",
      "Lean Manufacturing",
      "Quality Assurance Systems",
      "Supply Chain Optimization",
    ],
  },
  {
    title: "Project Management",
    points: [
      "Feasibility Studies",
      "Cost Estimation & Budgeting",
      "Resource Allocation",
      "Risk Management",
      "Project Scheduling",
    ],
  },
  {
    title: "Construction Engineering",
    points: [
      "Construction Planning & Scheduling",
      "On-site Supervision",
      "Material Testing & Quality Control",
      "Safety Management",
      "Contract Administration",
    ],
  },
  {
    title: "Consulting Services",
    points: [
      "Technical Advisory",
      "Design Review & Validation",
      "Value Engineering",
      "Compliance & Regulatory Guidance",
      "Innovation Consulting",
    ],
  },
];

export default Engineering;
