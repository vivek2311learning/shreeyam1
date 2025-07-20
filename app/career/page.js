import Career from '@/component/Career';
import React from 'react';

export const metadata = {
  title: "Career Opportunities at Shreeyam Consultancy",
  description:
    "Discover exciting career opportunities at Shreeyam Consultancy. Submit your resume and become a part of our growing team of professionals.",
  keywords: [
    "career at Shreeyam",
    "Shreeyam jobs",
    "consultancy career",
    "job openings",
    "resume submission",
    "join our team",
  ],
  openGraph: {
    title: "Career at Shreeyam Consultancy",
    description: "Join our team of passionate professionals. Apply now!",
    url: "https://www.shreeyamconsultancy.com/career",
    type: "website",
    images: [
      {
        url: "/career.jpg",
        width: 800,
        height: 600,
        alt: "Career at Shreeyam Consultancy",
      },
    ],
  },
};

const CareerRoute = () => {
  return <Career />;
};

export default CareerRoute;
