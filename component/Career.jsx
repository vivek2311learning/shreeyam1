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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files?.[0] || null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        toast.success(data.message || "Application submitted successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          resume: null,
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        toast.error(data.message || "Failed to submit application");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full font-serif">
      {/* ... (banner and other parts unchanged) */}

      <div className="mt-16 px-4 max-w-7xl mx-auto mb-16">
        {/* ... (heading and image part) */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start ">
          <img
            src="/contact.jpg"
            alt="Career Contact"
            className="w-full h-auto object-cover rounded-md shadow-md"
          />

          <div className="bg-[#2c3e50] text-white shadow-md rounded-md p-6 md:p-8 mt-16">
            <h3 className="text-2xl font-bold mb-4 text-center">Send us your resume</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Inputs ... */}
              <div>
                <label className="block text-sm font-medium">Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message || ""}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-gray-100 rounded px-3 py-2 text-black focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-amber-400 text-white py-2 rounded font-semibold mt-4 transition-all duration-300 ${
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
  );
}

export default Career;
