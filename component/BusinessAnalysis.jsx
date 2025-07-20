"use client";
import React from "react";

const BusinessAnalysis = () => {
  return (
    <div className="relative w-full font-serif">
      <div className="relative overflow-hidden">
        <img
          src="/businessPower.jpg"
          alt="Business Banner"
          className="w-full h-[70vh] md:h-[80vh] object-cover animate__animated animate__zoomIn"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-2xl md:text-4xl font-semibold italic font-serif animate__animated animate__fadeInDown animate__delay-1s">
          Business Consulting Excellence
        </div>
      </div>

      <div className="mt-16 px-4 max-w-7xl mx-auto mb-16">
        <div className="text-center mb-8 animate__animated animate__fadeInUp">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#2c3e50] font-serif">
            Empowering Your Business Vision
          </h2>
          <p className="text-[#34495e] font-serif">
            Our business consultants bring clarity, strategy, and innovation to
            help you navigate complexity and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate__animated animate__fadeInLeft animate__delay-1s">
          <img
            src="/legal.webp"
            alt="Business Insight"
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
          <div className="flex flex-col gap-6">
            {/* Section 1: Our Business Consulting Edge */}
            <div className="bg-[#2c3e50] text-white shadow-md rounded-md p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                What Sets Our Business Consulting Apart
              </h3>
              <ul className="list-disc list-inside space-y-3">
                <li>Customized business strategies tailored to your goals</li>
                <li>In-depth market research and competitive benchmarking</li>
                <li>Strategic planning for sustainable business growth</li>
                <li>
                  Expertise in both local and international market dynamics
                </li>
                <li>Data-driven solutions for improved decision-making</li>
              </ul>
            </div>

            {/* Section 2: Benefits of Partnering with Us */}
            <div className="bg-[#2c3e50] text-white shadow-md rounded-md p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Benefits of Partnering with Us
              </h3>
              <ul className="list-disc list-inside space-y-3">
                <li>Access to experienced consultants across industries</li>
                <li>
                  Actionable insights to drive profitability and efficiency
                </li>
                <li>Comprehensive financial modeling and risk mitigation</li>
                <li>Agile support from strategy to execution</li>
                <li>Collaborative approach that aligns with your vision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAnalysis;
