import React from 'react'
import ContactUs from '@/component/ContactUs'

export const metadata = {
  title: "Contact Us - Shreeyam Consultancy",
  description: "Reach out to Shreeyam Consultancy for expert legal, business, and architectural consultancy. We're here to help you with your inquiries and support needs.",
  keywords: ["Contact Shreeyam", "Business Consultancy", "Legal Support", "Architectural Advice"],
  openGraph: {
    title: "Contact Us - Shreeyam Consultancy",
    description: "Connect with Shreeyam Consultancy for professional legal, business, and architectural services.",
    type: "website",
    url: "https://www.shreeyamconsultancy.com/contact",
    images: [
      {
        url: "https://www.shreeyamconsultancy.com/contact-banner.jpg", // Replace with actual image path
        alt: "Contact Shreeyam Consultancy",
      },
    ],
  },
}

const ContactUsRoute = () => {
  return (
    <main className="min-h-screen bg-white text-[#2c3e50]" role="main">
      <ContactUs />
    </main>
  )
}

export default ContactUsRoute
