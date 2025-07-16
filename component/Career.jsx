
"use client";
import React, { useState } from "react";

function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      resume: null,
    });
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <img src="career.jpg" alt="Career Banner" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white italic font-serif text-center px-4">
            Career with Us
          </h2>
        </div>
      </div>

      <div className="mt-16 px-4 max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2c3e50] font-serif mb-4">
          Career with Us
        </h2>
        <p className="text-center text-lg text-[#2c3e50] mb-10">
          Join and groove with us! We are always looking for talented individuals to join our team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <img
            src="/contact.jpg"
            alt="Career Contact"
            className="w-full h-auto object-cover rounded-md shadow-md"
          />

          <div className="bg-[#2c3e50] text-white shadow-md rounded-md p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Send us your resume</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 rounded px-3 py-2 text-black focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Contact No</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 rounded px-3 py-2 text-black focus:outline-none focus:ring focus:ring-blue-500"
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
                  className="w-full bg-gray-100 rounded px-3 py-2 text-black focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
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
                  className="w-full bg-gray-100 rounded px-3 py-2 text-black focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 text-white py-2 rounded hover:bg-white hover:text-black transition-all duration-300 font-semibold mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
