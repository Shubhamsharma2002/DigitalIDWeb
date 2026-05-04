"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "../../constant/icon";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-4 bg-white/70 backdrop-blur-md sticky top-0 z-50">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src={Icons.logo} alt="logo" width={50} height={50} />
        <h1 className="font-bold text-lg text-[#1f44db]">Digital ID</h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-gray-600 font-medium">
        <Link href="#">Home</Link>
        <Link href="#">Features</Link>
        <Link href="#">How it Works</Link>
        <Link href="#">Pricing</Link>
      </div>

      {/* CTA (desktop) */}
      <button className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full text-sm">
        Get Started
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4 md:hidden">
          <Link href="#">Home</Link>
          <Link href="#">Features</Link>
          <Link href="#">How it Works</Link>
          <Link href="#">Pricing</Link>

          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}