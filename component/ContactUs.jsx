"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoMail } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Message sent successfully");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full bg-cover bg-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div
        className="relative z-10 flex flex-col items-center justify-center w-full"
        style={{ backgroundImage: "url(/contact.jpg)" }}
      >
        <div className="mt-24 w-full text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2c3e50] font-serif">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-[#2c3e50]">
            Drop us a line! We’ll set up a time to chat over the phone or
            in-person to know more about your business needs.
          </p>
          <p className="text-lg text-[#2c3e50] mt-2">
            All primary conferences are free of charge.
          </p>
        </div>

        <div className="relative mt-10 w-full max-w-7xl flex flex-col lg:flex-row gap-6">
          {/* Left Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="md:w-8/12 mx-auto bg-white/80 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-6 text-[#2c3e50] hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Get in Touch
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-center hover:text-blue-600 transition-colors">
                  <IoMail className="w-5 h-5 mr-2" />
                  <p>shreeyamconsultancy@gmail.com</p>
                </div>
                <div className="flex items-center hover:text-blue-600 transition-colors">
                  <BsTelephoneFill className="w-5 h-5 mr-2" />
                  <p>+91 9638007798</p>
                </div>
                <div className="flex items-center hover:text-blue-600 transition-colors">
                  <FaLocationDot className="w-6 h-6 mr-2" />
                  <p>
                    82, Suruchi society, next to subhasnagar hall, Ghod-dod
                    Road, Surat, Gujarat, 395001
                  </p>
                </div>
                <p className="hover:underline cursor-pointer">
                  We are here to help you!
                </p>
                <p className="hover:underline cursor-pointer">
                  Have a great day!
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#2c3e50]/90 text-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Contact Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 rounded px-3 py-2 text-black focus:outline-none focus:ring focus:ring-blue-500 hover:ring-2 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Contact No
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 rounded px-3 py-2 text-black focus:outline-none focus:ring focus:ring-blue-500 hover:ring-2 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 rounded px-3 py-2 text-black focus:outline-none focus:ring focus:ring-blue-500 hover:ring-2 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-gray-100 rounded px-3 py-2 text-black focus:outline-none focus:ring focus:ring-blue-500 hover:ring-2 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-amber-400 text-white py-2 rounded font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-white hover:text-black hover:border hover:border-amber-400"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-10 w-full max-w-7xl z-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.510691337802!2d72.80867077958737!3d21.171862430268888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e0da976193f%3A0x253e29d6046c86d0!2sSuruchi%20Society!5e0!3m2!1sen!2sin!4v1752170979482!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
