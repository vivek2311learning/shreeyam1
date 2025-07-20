// "use client";

// import React from "react";
// import "animate.css";
// import { useInView } from "react-intersection-observer";

// const Legal = () => {
//   const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
//   const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

//   const animateText = (inView, animation) =>
//     inView ? `animate__animated ${animation}` : "opacity-0";

//   return (
//     <div className="relative font-serif">
//       {/* Hero Image */}
//       <div className="relative w-full h-[70vh] md:h-[80vh]" ref={heroRef}>
//         <img
//           src="/legalPage.jpg"
//           alt="Legal Services"
//           className="w-full h-full object-cover object-center"
//         />
//         <div className="absolute inset-0 flex items-center justify-center px-4">
//           <p className={`text-white text-center italic font-semibold text-lg sm:text-2xl md:text-3xl bg-opacity-40 px-4 py-2 rounded-lg ${animateText(heroInView, "animate__fadeInDown")}`}>
//             Our Expertise. Know more about what we do
//           </p>
//         </div>
//       </div>

//       {/* Legal Services Section */}
//       <section className="bg-amber-400 text-[#2c3e50] px-4 py-16" ref={sectionRef}>
//         <div className={`flex items-center gap-2 mx-auto mb-8 w-fit ${animateText(sectionInView, "animate__fadeInLeft")}`}>
//           <div className="w-1 h-10 bg-[#2c3e50]"></div>
//           <h2 className="text-2xl sm:text-3xl font-bold">Our Legal Services</h2>
//         </div>

//         {/* Responsive Grid */}
//         <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto transition duration-500 ${animateText(sectionInView, "animate__fadeInUp")}`}>
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-gray-200 text-[#2c3e50] p-6 rounded-lg shadow-lg hover:bg-[#2c3e50] hover:text-white hover:scale-105 transition duration-400"
//             >
//               <h3 className="font-semibold text-lg mb-4">{service.title}</h3>
//               <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
//                 {service.points.map((point, idx) => (
//                   <li key={idx}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// const services = [
//   {
//     title: "Legal-Tech Solutions",
//     points: [
//       "AI-Powered Legal Research",
//       "Smart Contract Development",
//       "Legal Analytics Tools",
//       "e-Discovery Solutions",
//       "Case Management Software",
//     ],
//   },
//   {
//     title: "Legal Dispute Consultancy",
//     points: ["Family Dispute Resolution"],
//   },
//   {
//     title: "Digital Legal Consultancy",
//     points: [
//       "Virtual Legal Consultations",
//       "AI-Driven Legal Advice",
//       "Remote Notarization Services",
//       "Legal Document Review",
//       "Compliance Audits",
//     ],
//   },
//   {
//     title: "Document Drafting & Legal Support",
//     points: [
//       "Contract Drafting & Review",
//       "Legal Document Automation",
//       "Intellectual Property Filings",
//       "Litigation Support Services",
//       "Regulatory Compliance Assistance",
//     ],
//   },
//   {
//     title: "Compliance & Contract Management",
//     points: [
//       "Contract Lifecycle Management",
//       "Regulatory Compliance Tracking",
//       "Policy Management Solutions",
//       "Risk Assessment Tools",
//       "Audit Management Systems",
//     ],
//   },
//   {
//     title: "Legal Research Automation",
//     points: [
//       "AI-Powered Legal Research Tools",
//       "Case Law Analysis Software",
//       "Statutory Research Platforms",
//       "Legal Citation Management",
//       "Research Workflow Automation",
//     ],
//   },
//   {
//     title: "Verified Lawyers & Legal Experts",
//     points: [
//       "Lawyer Directory Services",
//       "Expert Witness Listings",
//       "Legal Consultant Profiles",
//       "Client Reviews & Ratings",
//       "Background Checks & Verification",
//     ],
//   },
//   {
//     title: "Online Dispute Resolution (ODR)",
//     points: [
//       "Virtual Mediation Services",
//       "Arbitration Platforms",
//       "Negotiation Support Tools",
//       "Conflict Resolution Resources",
//       "Case Management Integration",
//     ],
//   },
//   {
//     title: "Practice Management Tools",
//     points: [
//       "Time Tracking Software",
//       "Billing & Invoicing Solutions",
//       "Client Relationship Management (CRM)",
//       "Document Management Systems",
//       "Task & Project Management Tools",
//     ],
//   },
//   {
//     title: "Legal Awareness & Training",
//     points: [
//       "Workshops & Webinars",
//       "Legal Literacy Programs",
//       "Online Legal Courses",
//       "Certification Programs",
//       "Legal Blogging & Content Creation",
//     ],
//   },
//   {
//     title: "Blogs, Courses & Newsletters",
//     points: [
//       "Legal Blogs & Articles",
//       "Online Legal Courses",
//       "Newsletters & Updates",
//       "Legal Podcasts & Videos",
//       "Community Engagement Initiatives",
//     ],
//   },
//   {
//     title: "Intellectual Property & Licensing",
//     points: [
//       "Patent Management Solutions",
//       "Trademark Registration Services",
//       "Copyright Protection Tools",
//       "Licensing Agreement Templates",
//       "IP Litigation Support",
//     ],
//   },
//   {
//     title: "Partnerships & Collaborations",
//     points: [
//       "Law Firm Alliances",
//       "Legal Tech Partnerships",
//       "Academic Collaborations",
//       "Non-Profit Initiatives",
//       "Community Outreach Programs",
//     ],
//   },
//   {
//     title: "Data Privacy & Confidentiality",
//     points: [
//       "Data Protection Compliance Tools",
//       "Confidentiality Agreement Templates",
//       "Privacy Impact Assessment Resources",
//       "Data Breach Response Plans",
//       "Employee Training on Data Privacy",
//     ],
//   },
//   {
//     title: "AI & Legal Analytics",
//     points: [
//       "Predictive Legal Analytics Tools",
//       "AI-Powered Legal Research Platforms",
//       "Contract Analytics Solutions",
//       "Litigation Outcome Prediction Tools",
//       "Legal Data Visualization Tools",
//     ],
//   },
//   {
//     title: "Affordable Legal Access & Inclusion",
//     points: [
//       "Pro Bono Legal Services",
//       "Sliding Scale Fee Structures",
//       "Legal Aid Resources",
//       "Community Legal Clinics",
//       "Online Dispute Resolution Platforms",
//     ],
//   },
// ];

// export default Legal;
"use client";

import React from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";

const Legal = () => {
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
          src="/legalPage.jpg"
          alt="Legal Services"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 bg-black/40">
          <p
            className={`text-white text-center font-serif italic font-semibold text-lg sm:text-2xl md:text-3xl px-4 py-2 rounded-lg ${animateText(
              heroInView,
              "animate__fadeInDown"
            )}`}
          >
            Our Expertise. Know more about what we do
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
            Our Legal Services
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Innovative and personalized legal solutions designed to help you
            navigate complexity with clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
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

const services = [
  {
    title: "Legal-Tech Solutions",
    points: [
      "AI-Powered Legal Research",
      "Smart Contract Development",
      "Legal Analytics Tools",
      "e-Discovery Solutions",
      "Case Management Software",
    ],
  },
  {
    title: "Legal Dispute Consultancy",
    points: [
      "Family Dispute Resolution",
      "Civil & Commercial Litigation Support",
      "Pre-Litigation Counseling",
      "Alternative Dispute Resolution (ADR)",
      "Mediation and Arbitration Services",
      "Consumer Dispute Handling",
      "Property & Tenancy Disputes",
      "Employment and Labor Conflict Advice",
    ],
  },
  {
    title: "Digital Legal Consultancy",
    points: [
      "Virtual Legal Consultations",
      "AI-Driven Legal Advice",
      "Remote Notarization Services",
      "Legal Document Review",
      "Compliance Audits",
    ],
  },
  {
    title: "Document Drafting & Legal Support",
    points: [
      "Contract Drafting & Review",
      "Legal Document Automation",
      "Intellectual Property Filings",
      "Litigation Support Services",
      "Regulatory Compliance Assistance",
    ],
  },
  {
    title: "Compliance & Contract Management",
    points: [
      "Contract Lifecycle Management",
      "Regulatory Compliance Tracking",
      "Policy Management Solutions",
      "Risk Assessment Tools",
      "Audit Management Systems",
    ],
  },
  {
    title: "Legal Research Automation",
    points: [
      "AI-Powered Legal Research Tools",
      "Case Law Analysis Software",
      "Statutory Research Platforms",
      "Legal Citation Management",
      "Research Workflow Automation",
    ],
  },
  {
    title: "Verified Lawyers & Legal Experts",
    points: [
      "Lawyer Directory Services",
      "Expert Witness Listings",
      "Legal Consultant Profiles",
      "Client Reviews & Ratings",
      "Background Checks & Verification",
    ],
  },
  {
    title: "Online Dispute Resolution (ODR)",
    points: [
      "Virtual Mediation Services",
      "Arbitration Platforms",
      "Negotiation Support Tools",
      "Conflict Resolution Resources",
      "Case Management Integration",
    ],
  },
  {
    title: "Practice Management Tools",
    points: [
      "Time Tracking Software",
      "Billing & Invoicing Solutions",
      "Client Relationship Management (CRM)",
      "Document Management Systems",
      "Task & Project Management Tools",
    ],
  },
  {
    title: "Legal Awareness & Training",
    points: [
      "Workshops & Webinars",
      "Legal Literacy Programs",
      "Online Legal Courses",
      "Certification Programs",
      "Legal Blogging & Content Creation",
    ],
  },
  {
    title: "Blogs, Courses & Newsletters",
    points: [
      "Legal Blogs & Articles",
      "Online Legal Courses",
      "Newsletters & Updates",
      "Legal Podcasts & Videos",
      "Community Engagement Initiatives",
    ],
  },
  {
    title: "Intellectual Property & Licensing",
    points: [
      "Patent Management Solutions",
      "Trademark Registration Services",
      "Copyright Protection Tools",
      "Licensing Agreement Templates",
      "IP Litigation Support",
    ],
  },
  {
    title: "Partnerships & Collaborations",
    points: [
      "Law Firm Alliances",
      "Legal Tech Partnerships",
      "Academic Collaborations",
      "Non-Profit Initiatives",
      "Community Outreach Programs",
    ],
  },
  {
    title: "Data Privacy & Confidentiality",
    points: [
      "Data Protection Compliance Tools",
      "Confidentiality Agreement Templates",
      "Privacy Impact Assessment Resources",
      "Data Breach Response Plans",
      "Employee Training on Data Privacy",
    ],
  },
  {
    title: "AI & Legal Analytics",
    points: [
      "Predictive Legal Analytics Tools",
      "AI-Powered Legal Research Platforms",
      "Contract Analytics Solutions",
      "Litigation Outcome Prediction Tools",
      "Legal Data Visualization Tools",
    ],
  },
  {
    title: "Affordable Legal Access & Inclusion",
    points: [
      "Pro Bono Legal Services",
      "Sliding Scale Fee Structures",
      "Legal Aid Resources",
      "Community Legal Clinics",
      "Online Dispute Resolution Platforms",
    ],
  },
];

export default Legal;
