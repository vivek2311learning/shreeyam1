"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SlArrowDown } from "react-icons/sl";
import { HiMenu, HiX } from "react-icons/hi";
import React, { useState, useEffect } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setIsOpen(false);
  };

  const isActive = (path) => pathname === path ? "underline font-bold" : "";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-[#2c3e50] text-white shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col items-center tracking-widest">
          <img
            src="/logo.jpg"
            alt="Shreeyam Consultancy Logo"
            className="h-12 w-auto object-contain"
          />
          <p className="font-serif text-xl">CONSULTANCY</p>
        </div>



        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>

        <ul className="hidden md:flex space-x-8 items-center font-serif">
          <li><Link href="/" className={`hover:underline ${isActive("/")}`}>Home</Link></li>
          <li><Link href="/about-us" className={`hover:underline ${isActive("/about-us")}`}>About Us</Link></li>
          <li
            className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 hover:underline transition-colors duration-300"
            >
              <Link href="/services">Services</Link>
              <SlArrowDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            <div
              className={`absolute top-full right-0 mt-3 bg-white/20 backdrop-blur-md text-black border border-white/30 p-4 rounded-xl shadow-lg transform transition-all duration-300 origin-top-right ${
                isOpen ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"
              }`}
            >
              <ul className="space-y-2 ">
                <li><Link href="/legal" className={`block px-2 py-1 rounded hover:bg-blue-100 transition-all ${isActive("/legal")}`}>Legal</Link></li>
                <li><Link href="/arcitacure" className={`block px-2 py-1 rounded hover:bg-blue-100 transition-all ${isActive("/arcitacure")}`}>Architecture</Link></li>
                <li><Link href="/business" className={`block px-2 py-1 rounded hover:bg-blue-100 transition-all ${isActive("/business")}`}>Business</Link></li>
                <li><Link href="/engineering" className={`block px-2 py-1 rounded hover:bg-blue-100 transition-all ${isActive("/engineering")}`}>Engineering</Link></li>
              </ul>
            </div>
          </li>
          <li><Link href="/career" className={`hover:underline ${isActive("/career")}`}>Career</Link></li>
          <li><Link href="/blogs" className={`hover:underline ${isActive("/blogs")}`}>Blogs</Link></li>
          <li><Link href="/contact-us" className={`hover:underline ${isActive("/contact-us")}`}>Contact Us</Link></li>
        </ul>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#2c3e50] px-6 pb-6 font-serif space-y-4">
          <Link href="/" onClick={toggleMenu} className={`block ${isActive("/")}`}>Home</Link>
          <Link href="/about-us" onClick={toggleMenu} className={`block ${isActive("/about-us")}`}>About Us</Link>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-full"
            >
              <span>Services</span>
              <SlArrowDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            {isOpen && (
              <ul className="mt-2 ml-4 space-y-2 text-sm text-gray-200">
                <li><Link href="/legal" onClick={toggleMenu} className={`block px-2 py-1 rounded hover:bg-blue-100 transition-all ${isActive("/legal")}`}>Legal</Link></li>
                <li><Link href="/arcitacure" onClick={toggleMenu} className={`block px-2 py-1 rounded hover:bg-blue-100 transition-all ${isActive("/arcitacure")}`}>Architecture</Link></li>
                <li><Link href="/business" onClick={toggleMenu} className={`block px-2 py-1 rounded hover:bg-blue-100 transition-all ${isActive("/business")}`}>Business</Link></li>
                <li><Link href="/engineering" onClick={toggleMenu} className={`block px-2 py-1 rounded hover:bg-blue-100 transition-all ${isActive("/engineering")}`}>Engineering</Link></li>

                
              </ul> 
            )}
          </div>
          <Link href="/career" onClick={toggleMenu} className={`block ${isActive("/career")}`}>Career</Link>
          <Link href="/blogs" onClick={toggleMenu} className={`block ${isActive("/blogs")}`}>Blogs</Link>
          <Link href="/contact-us" onClick={toggleMenu} className={`block ${isActive("/contact-us")}`}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;





