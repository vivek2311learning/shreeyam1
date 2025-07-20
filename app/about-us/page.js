import AboutUs from '@/component/AboutUs';
import React from 'react';

export const metadata = {
  title: "About Us | Shreeyam Consultancy",
  description:
    "Discover Shreeyam Consultancy's multidisciplinary expertise in legal, business, and architectural consulting. Learn about our mission, vision, and core values.",
  keywords: [
    "Shreeyam Consultancy",
    "About Shreeyam",
    "Legal Consulting",
    "Business Analysis",
    "Architectural Services",
    "Consultancy Firm India",
    "Professional Consulting",
    "Mission and Vision"
  ],
  openGraph: {
    title: "About Us | Shreeyam Consultancy",
    description:
      "Learn more about Shreeyam Consultancy’s values, mission, and consulting services in law, business, and architecture.",
    url: "https://www.shreeyamconsultancy.com/about",
    type: "website",
    images: [
      {
        url: "https://www.shreeyamconsultancy.com/about-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Shreeyam Consultancy About Us",
      },
    ],
  },
};

const AboutUsRoute = () => {
  return <AboutUs />;
};

export default AboutUsRoute;
