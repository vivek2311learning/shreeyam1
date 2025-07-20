import Home from "@/component/Home";
import React from "react";

// app/page.tsx or app/home/page.tsx
export const metadata = {
  title: "Shreeyam Consultancy | Legal, Business, Architecture Consulting",
  description:
    "Shreeyam Consultancy offers expert legal, business, and architectural consulting solutions tailored to your needs.",
  keywords: [
    "Legal Consultancy",
    "Business Analysis",
    "Architecture Consulting",
    "Shreeyam Consultancy",
    "Professional Services India",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Shreeyam Consultancy",
    description:
      "Expert consulting in law, business, and architecture. Discover our multidomain services.",
    url: "https://www.shreeyamconsultancy.com",
    siteName: "Shreeyam Consultancy",
    images: [
      {
        url: "/og-image.jpg", // add a suitable OG image in /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};


const Homepage = () => {
  return <Home />;
};

export default Homepage;
