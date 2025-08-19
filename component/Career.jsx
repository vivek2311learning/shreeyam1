"use client";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";

function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle resume upload
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files?.[0] || null }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      toast.error("Please upload your resume before submitting.");
      return;
    }

    setIsSubmitting(true);

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);
    form.append("resume", formData.resume);

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Application submitted successfully ✅");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          resume: null,
        });
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        toast.error(data.message || "Failed to submit application ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full font-serif mt-20">
      {/* Hero Section */}
      
       <div className="relative overflow-hidden">
        <img
          src="career.jpg"
          alt="Career"
          className="relative w-full h-[70vh] md:h-[80vh] object-cover animate__animated animate__zoomIn"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-2xl md:text-4xl font-semibold italic font-serif animate__animated animate__fadeInDown animate__delay-1s">
          Build Your Future with Shreeyam
        </div>
      </div>

      {/* Career Form Section */}
      <div className="mt-16 px-4 max-w-7xl mx-auto mb-16">
        <div className="text-center mb-8 animate__animated animate__fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2c3e50]">
            Start your journey with us
          </h2>
          <p className="text-[#34495e] max-w-2xl mx-auto">
            We’re always looking for passionate individuals to join our team.
            Submit your resume and we’ll be in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start animate__animated animate__fadeInUp animate__delay-1s">
          {/* Left Image */}
          <img
            src="/contact.jpg"
            alt="Career Contact"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />

          {/* Right Form */}
          <div className="bg-[#2c3e50] text-white shadow-lg rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Send us your resume
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Resume */}
              <div>
                <label className="block text-sm font-medium">Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-white text-black cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-amber-400 text-white py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-white hover:text-black hover:border hover:border-amber-400"
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
