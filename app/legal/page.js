import Legal from '@/component/Legal'
import React from 'react'

export const metadata = {
  title: "Legal Services | Shreeyam Consultancy",
  description:
    "Explore our full range of legal services including tech-enabled legal research, dispute consultancy, document drafting, compliance, and more.",
  keywords: [
    "legal services",
    "Shreeyam Consultancy",
    "legal consultancy",
    "legal-tech",
    "legal dispute resolution",
    "contract management",
    "law firm India"
  ],
  openGraph: {
    title: "Legal Services | Shreeyam Consultancy",
    description:
      "Explore our full range of legal services including legal-tech solutions, dispute consultancy, document support, compliance, and more.",
    url: "https://www.shreeyamconsultancy.com/legal",
    type: "website",
    images: [
      {
        url: "https://www.shreeyamconsultancy.com/images/legal-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Legal Services by Shreeyam Consultancy",
      },
    ],
  },
};

const legalRoute = () => {
  return (
    <Legal />
  )
}

export default legalRoute

