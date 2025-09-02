"use client";

import React from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";

const BusinessConsulting = () => {
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
          src="/business.jpg"
          alt="Business Consulting"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 bg-black/40">
          <p
            className={`text-white text-center font-serif italic font-semibold text-lg sm:text-2xl md:text-3xl px-4 py-2 rounded-lg ${animateText(
              heroInView,
              "animate__fadeInDown"
            )}`}
          >
            Strategy. Growth. Business Transformation.
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
            Our Business Consulting Services
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Empowering businesses with insights, strategies, and solutions for sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
          {consultingServices.map((service, index) => (
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

const consultingServices = [
  {
    title: "Strategy Consulting",
    points: [
      "Corporate Strategy Development",
      "Business Transformation Plans",
      "Growth & Expansion Strategies",
      "Competitive Market Analysis",
      "Innovation Roadmaps",
    ],
  },
  {
    title: "Management Consulting",
    points: [
      "Organizational Restructuring",
      "Change Management",
      "Leadership Development",
      "Operational Efficiency",
      "Performance Monitoring",
    ],
  },
  {
    title: "Financial Advisory",
    points: [
      "Budgeting & Forecasting",
      "Mergers & Acquisitions Support",
      "Capital Structure Planning",
      "Risk & Compliance Advisory",
      "Cost Optimization",
    ],
  },
  {
    title: "Marketing & Sales Consulting",
    points: [
      "Market Research & Analysis",
      "Brand Positioning Strategies",
      "Sales Process Optimization",
      "Digital Marketing Strategy",
      "Customer Engagement Solutions",
    ],
  },
  {
    title: "Human Resources Consulting",
    points: [
      "Talent Acquisition Strategy",
      "Employee Retention Plans",
      "Training & Development Programs",
      "Compensation & Benefits Design",
      "HR Policy Development",
    ],
  },
  {
    title: "Technology Consulting",
    points: [
      "Digital Transformation",
      "IT Infrastructure Planning",
      "ERP & CRM Implementation",
      "Cybersecurity Advisory",
      "Automation & AI Solutions",
    ],
  },
  {
    title: "Operations Consulting",
    points: [
      "Supply Chain Optimization",
      "Lean Process Design",
      "Logistics & Distribution Planning",
      "Quality Management Systems",
      "Inventory Control Strategies",
    ],
  },
  {
    title: "Risk & Compliance Consulting",
    points: [
      "Regulatory Compliance",
      "Corporate Governance",
      "Internal Audit & Controls",
      "Fraud Risk Management",
      "Crisis Management",
    ],
  },
  {
    title: "Sustainability Consulting",
    points: [
      "Sustainable Business Models",
      "Green Supply Chain Planning",
      "CSR Strategy Development",
      "ESG Reporting & Compliance",
      "Energy Efficiency Solutions",
    ],
  },
];

export default BusinessConsulting;
