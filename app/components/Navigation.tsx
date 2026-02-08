"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Approach", href: "#approach" },
    // { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name - Removed */}
          <div className="w-8"></div>

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
