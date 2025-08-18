// pages/business/page.tsx

import BusinessConsulting from '@/component/BusinessConsulting';
import React from 'react';

export const metadata = { 
  title: "Business Consulting Services | Shreeyam Consultancy",
  description:
    "Accelerate your business growth with tailored consulting services, strategic planning, market research, and financial analysis from industry experts.",
  keywords: [
    "business consulting",
    "market research",
    "business strategy",
    "financial analysis",
    "growth consulting",
    "risk management",
    "Shreeyam Consultancy"
  ],
  openGraph: {
    title: "Business Consulting Services | Shreeyam Consultancy",
    description:
      "Unlock the full potential of your business with our expert-driven strategies and insights.",
    url: "https://www.shreeyamconsultancy.com/business",
    images: [
      {
        url: "/businessPage.jpg",
        width: 800,
        height: 600,
        alt: "Business consulting presentation",
      },
    ],
    type: "website",
  },
};

const BusinessPage = () => {
  return <BusinessConsulting />;
};

export default BusinessPage;
