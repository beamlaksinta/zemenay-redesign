"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Products", href: "/product" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/190349408.png"
            alt="Zemenay Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-brand-600 font-extrabold text-2xl">Zemenay</span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-brand-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static bg-white w-full left-0 md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? "top-full opacity-100 shadow-md rounded-b-lg" : "top-[-500px] opacity-0 md:opacity-100"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-2 md:px-5 md:py-0 font-semibold transition-colors ${
                  pathname === link.href ? "text-brand-800" : "text-brand-600 hover:text-brand-800"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}