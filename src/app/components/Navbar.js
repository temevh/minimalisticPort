"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((open) => !open);
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="bg-background px-3 lg:mb-12 mt-4 lg:mt-10 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-gray-500 text-xl font-bold hover:text-accentOrange"
        >
          Teemu Hämäläinen
        </Link>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Open menu"
            aria-expanded={isOpen}
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

        <div className="hidden lg:flex items-center space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-bold hover:text-accentOrange ${
                isActive(link.href) ? "text-accentOrange" : "text-graytext"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div
        aria-hidden={!isOpen}
        className={`lg:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-95 transition-all transform ${
          isOpen ? "translate-x-0 visible" : "translate-x-full invisible"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-white"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center mt-32 h-full space-y-6">
          <Link href="/" className="text-white text-xl" onClick={toggleMenu}>
            Home
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xl ${
                isActive(link.href) ? "text-accentOrange" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
