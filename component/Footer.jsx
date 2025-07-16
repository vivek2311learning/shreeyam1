"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Call-to-action section */}
      <div className="bg-[#2c3e50] text-gray-100 px-4 py-12 text-center">
        <p className="text-lg font-serif italic mb-4">
          For any queries or feedback, please
        </p>
        <Link href="/contact-us">
          <button className="bg-gray-100 text-[#2c3e50] font-medium text-lg py-2 px-6 rounded-bl-4xl rounded-tr-4xl hover:rounded transition-all duration-300">
            Connect with us
          </button>
        </Link>
      </div>
      <hr className="border-gray-400" />

      {/* Main Footer */}
      <footer className="bg-[#2c3e50] text-white px-4 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="text-center md:text-left">
            <div className="flex flex-col gap-1">
              <p className="text-3xl font-serif italic font-bold">Shreeyam</p>
              <p className="font-serif italic text-xs">Consultancy</p>
            </div>
            <p className="text-sm mt-2">
              Your trusted partner in legal, business, and architectural
              solutions.
            </p>
            <Link href="/contact-us" className="block mt-4">
              <button className="mt-4 bg-amber-400 text-white py-2 px-4 rounded hover:bg-amber-500 transition">
                Get in Touch
              </button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-xl font-serif italic">Quick Links</p>
            <ul className="space-y-2 mt-4">
              <li>
                <Link href="/about-us" className="hover:underline font-serif">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:underline font-serif">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline font-serif">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center">
            <p className="text-xl font-serif italic">Services</p>
            <ul className="space-y-2 mt-4">
              <li>
                <Link href="/legal" className="hover:underline font-serif">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/arcitacure" className="hover:underline font-serif">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:underline font-serif">
                  Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="text-center">
            <p className="text-xl font-serif italic mb-4">Follow Us</p>
            <div className="flex justify-center gap-4 mb-4">
              <Link href="/facebook">
                <FaFacebookSquare className="w-6 h-6 hover:text-blue-400" />
              </Link>
              <Link href="/twitter">
                <FaTwitter className="w-6 h-6 hover:text-blue-400" />
              </Link>
              <Link href="/linkedin">
                <FaLinkedin className="w-6 h-6 hover:text-blue-400" />
              </Link>
            </div>

            <p className="text-xl font-serif italic">Contact Us</p>
            <p className="text-sm mt-1">+91 9638007798</p>
            <p className="text-sm">shreeyamconsultancy@gmail.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="mt-10 border-gray-400" />
        <p className="text-center mt-4 text-sm">
          &copy; {new Date().getFullYear()} Shreeyam. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
