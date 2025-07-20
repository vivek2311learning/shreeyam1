// pages/architecture/page.tsx

import Architectural from '@/component/Architectural';
import React from 'react';

export const metadata = {
  title: "Architecture Services | Shreeyam Consultancy",
  description: "Explore our innovative and sustainable architectural services for residential, commercial, and urban projects.",
  keywords: ["architecture", "design", "urban planning", "sustainable architecture", "interior design", "Shreeyam"],
  openGraph: {
    title: "Architecture Services | Shreeyam Consultancy",
    description: "Designing future-ready spaces with precision and creativity.",
    url: "https://www.shreeyamconsultancy.com/architecture",
    images: [
      {
        url: "/architecturePage.jpg",
        width: 800,
        height: 600,
        alt: "Modern architectural design",
      },
    ],
    type: "website",
  },
};

const ArchitecturePage = () => {
  return <Architectural />;
};

export default ArchitecturePage;
