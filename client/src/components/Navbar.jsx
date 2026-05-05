"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "../../constant/icon";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <Image src={Icons.logo} alt="logo" width={50} height={50} />
          <h1 className="text-lg font-bold text-[#1f44db]">Digital ID</h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden gap-8 font-medium text-gray-600 md:flex">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/howitworks">How it Works</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/pricing">Pricing</Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/signup"
          className="hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-center text-sm text-white md:block"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 top-full flex w-full flex-col items-center gap-4 bg-white py-6 shadow-md md:hidden">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/features" onClick={closeMenu}>
            Features
          </Link>

          <Link href="/howitworks" onClick={closeMenu}>
            How it Works
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link href="/pricing" onClick={closeMenu}>
            Pricing
          </Link>

          <Link
            href="/signup"
            onClick={closeMenu}
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-center text-white"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}