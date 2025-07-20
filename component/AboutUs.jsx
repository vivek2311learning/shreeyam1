"use client";
import React from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [welcomeRef, welcomeInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [visionRef, visionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [whyUsRef, whyUsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animateText = (inView, animation) =>
    inView ? `animate__animated ${animation}` : "opacity-0";

  return (
    <div className="font-serif">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh]" ref={heroRef}>
        <img
          src="/about.webp"
          alt="About Us Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p
            className={`text-white text-center font-serif italic font-semibold text-lg sm:text-2xl md:text-3xl bg-opacity-40 px-4 py-2 rounded-lg ${animateText(
              heroInView,
              "animate__fadeInDown"
            )}`}
          >
            Our Expertise. Know more about what we do
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="px-4 py-12 bg-[#2c3e50]" ref={welcomeRef}>
        <div
          className={`bg-amber-400 p-6 rounded-lg shadow-lg max-w-5xl mx-auto font-serif text-white transition duration-400 hover:scale-105 ${animateText(
            welcomeInView,
            "animate__fadeInLeft"
          )}`}
        >
          <div
            className={`flex flex-col gap-4 text-[#2c3e50] group ${animateText(
              welcomeInView,
              "animate__fadeInUp"
            )}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Welcome to Our Company
            </h2>
            <p>
              We are committed to delivering the best products and services to
              our customers. Our team is dedicated to excellence and innovation.
            </p>
            <p>
              Shreeyam Consultancy is a multidisciplinary professional firm
              offering specialized consulting services in three distinct
              domains: Legal Consultancy, Business Analysis and Architectural
              Consulting.
            </p>
            <p>
              We believe that success is built on the pillars of clarity,
              precision and innovation—whether it's navigating legal
              complexities, unlocking business growth or designing purposeful
              spaces.
            </p>
            <p>
              Each of our service verticals is led by dedicated professionals
              with deep domain expertise. We ensure every client receives
              personalized attention and solution-driven guidance.
            </p>
            <p>
              Guided by our philosophy—“Where Every Problem Meets the Right
              Solution”—we strive to be trusted problem-solvers.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <div className="px-4 py-8 bg-gray-100 text-[#2c3e50]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto font-serif">
          <div
            ref={visionRef}
            className={`bg-amber-400 rounded-tl-3xl shadow-lg p-6 hover:text-gray-200 hover:scale-105 hover:bg-[#2c3e50] transition duration-300 ease-in-out ${
              visionInView
                ? "animate__animated animate__fadeInLeft"
                : "opacity-0"
            }`}
          >
            <h3 className="text-4xl font-bold mb-2 text-center">Our Vision</h3>
            <p>
              To be a trusted partner that empowers clients to overcome
              challenges, make informed decisions, ensure compliance, drive
              growth, and shape purposeful spaces—through clarity, expertise,
              and solutions.
            </p>
          </div>
          <div
            ref={missionRef}
            className={`bg-amber-400 rounded-tl-3xl shadow-lg p-6 hover:text-gray-200 hover:scale-105 hover:bg-[#2c3e50] transition duration-300 ease-in-out ${
              missionInView
                ? "animate__animated animate__fadeInRight"
                : "opacity-0"
            }`}
          >
            <h3 className="text-4xl font-bold mb-2 text-center">Our Mission</h3>
            <p>
              To deliver high-quality, client-focused consulting services by
              integrating legal insight, strategic business analysis, and
              creative architectural thinking—ensuring every problem is met with
              the right solution.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-[#2c3e50] px-4 py-8 text-white" ref={valuesRef}>
        <div
          className={`mx-auto my-16 w-full max-w-6xl bg-amber-400 rounded-tr-4xl rounded-bl-4xl p-6 md:p-10 flex flex-col items-center gap-8 ${
            valuesInView ? "animate__animated animate__fadeInUp" : "opacity-0"
          }`}
        >
          <p className="sm:text-3xl text-center mb-6 font-serif text-[#2c3e50] font-semibold md:text-4xl">
            Our Core Values
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "🔹 Integrity",
                desc: "We uphold honesty, confidentiality, and ethical responsibility in every engagement.",
              },
              {
                title: "🔹 Excellence",
                desc: "We are committed to delivering precise, high-quality, and timely solutions.",
              },
              {
                title: "🔹 Innovation",
                desc: "We embrace evolving technologies and creative thinking to offer forward-looking solutions.",
              },
              {
                title: "🔹 Client Commitment",
                desc: "We place clients at the heart of our work—listening, responding, and aligning with their goals.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="p-6 bg-[#2c3e50] hover:bg-white hover:text-[#2c3e50] hover:scale-105 text-white rounded-3xl transition-all duration-300"
              >
                <p className="text-lg font-semibold mb-2">{val.title}</p>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="px-4 py-8 bg-gray-100" ref={whyUsRef}>
        <div
          className={`max-w-5xl mx-auto font-serif ${
            whyUsInView ? "animate__animated animate__fadeInUp" : "opacity-0"
          }`}
        >
          <div className="bg-[#2c3e50] text-white p-6 rounded-xl shadow-lg mb-6">
            <p className="text-2xl sm:text-3xl text-center mb-4">
              Why Choose Shreeyam Consultancy?
            </p>
            <p className="text-base sm:text-lg">
              At Shreeyam Consultancy, we don’t offer one-size-fits-all
              solutions—we solve the right problems with the right expertise.
              Here’s why clients trust us:
            </p>
          </div>

          <div className="bg-[#2c3e50] text-white p-6 rounded-xl shadow-lg">
            <p className="text-2xl sm:text-3xl text-center mb-8">
              Reasons Why You Should Choose Our Service
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "✅ Client-Centric Philosophy",
                "✅ Personalized Service Experience",
                "✅ Commitment to Empowerment",
                "✅ Multidisciplinary Expertise",
                "✅ Solution-Oriented Approach",
                "✅ Professional Integrity",
                "✅ Innovation & Technology Integration",
              ].map((title, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-amber-400 rounded-xl text-[#2c3e50] hover:bg-gray-200 transition duration-300 hover:scale-105"
                >
                  <p className="text-lg font-semibold mb-2">{title}</p>
                  <p>
                    {
                      [
                        "We begin by understanding your challenges—your goals shape our solutions.",
                        "Each client is unique. We provide customized strategies tailored to your needs.",
                        "We invest in legal literacy, workshops and knowledge-building for empowerment.",
                        "Each domain is led by experts. We provide deep specialization in every vertical.",
                        "We don’t just advise—we solve real-world problems with measurable outcomes.",
                        "We uphold transparency, confidentiality, and ethical practice in all services.",
                        "We leverage legal-tech and modern tools to enhance delivery and access.",
                      ][idx]
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
