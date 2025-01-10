"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background p-2 lg:mb-12 mt-4 lg:mt-10 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-gray-500 text-xl  font-bold hover:text-accentOrange"
        >
          Teemu Hämäläinen
        </a>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex space-x-4 text-white">
          <a
            href="/about"
            className="hover:text-accentOrange text-graytext font-bold"
          >
            About
          </a>
          <a
            href="/projects"
            className="hover:text-accentOrange text-graytext font-bold"
          >
            Projects
          </a>

          <a
            href="/skills"
            className="hover:text-accentOrange text-graytext font-bold"
          >
            Skills
          </a>
          {/* 
          <a
            href="/contact"
            className="hover:text-accentOrange text-graytext font-bold"
          >
            Contact
          </a>
          */}
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-90 transition-all transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center mt-48 h-full space-y-4">
          <a href="/about" className="text-white text-xl" onClick={toggleMenu}>
            About
          </a>
          <a
            href="/projects"
            className="text-white text-xl"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a href="/skills" className="text-white text-xl" onClick={toggleMenu}>
            Skills
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
