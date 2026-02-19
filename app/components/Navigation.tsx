"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "/#about" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Services", href: "/#services" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Approach", href: "/#approach" },
    // { label: "Blog", href: "#blog" },
    { label: "Contact", href: "/#contact" }
  ];

  return (
    <nav className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Go to homepage"
          >
            <Image
              src="/logo.png"
              alt="Mercurion Consulting Enterprise Angular Consulting Logo"
              width={40}
              height={40}
              priority
              className="transition-transform group-hover:scale-105"
            />

            {/* Hide text on very small mobile */}
            <span className="font-semibold text-[#1E293B] text-lg tracking-tight">
              Mercurion Consulting
            </span>
          </Link>          

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#475569] hover:text-[#2563EB] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#1E293B]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#E5E7EB]">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#475569] hover:text-[#2563EB] transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
