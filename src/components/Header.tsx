"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Leadership", href: "/about/leadership" },
      { label: "History", href: "/about/history" },
      { label: "Global Presence", href: "/about/global-presence" },
    ],
  },
  {
    label: "Divisions",
    href: "/divisions",
    children: [
      { label: "Investment Banking", href: "/divisions/investment-banking" },
      { label: "Global Markets", href: "/divisions/global-markets" },
      { label: "Asset Management", href: "/divisions/asset-management" },
      { label: "Wealth Management", href: "/divisions/wealth-management" },
      { label: "Risk & Technology", href: "/divisions/risk-technology" },
    ],
  },
  {
    label: "Sustainability",
    href: "/sustainability",
  },
  {
    label: "Investors",
    href: "/investors",
    children: [
      { label: "Overview", href: "/investors/overview" },
      { label: "Presentations", href: "/investors/presentations" },
    ],
  },
  {
    label: "Newsroom",
    href: "/newsroom",
  },
  {
    label: "Careers",
    href: "/careers/openings",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 bg-accent-red rounded-sm flex items-center justify-center font-bold text-sm">
              H
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-sm lg:text-base tracking-wide">HAYASHIDA GROUP</div>
              <div className="text-[10px] lg:text-xs text-navy-300 tracking-widest">林田グループ</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy-200 hover:text-white transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-navy-800 border border-navy-700 rounded-md shadow-xl min-w-[220px] py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-navy-200 hover:text-white hover:bg-navy-700 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2 bg-accent-red hover:bg-accent-red-dark text-white text-sm font-medium rounded transition-colors"
          >
            Contact Us
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-navy-200 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-800 border-t border-navy-700">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-medium text-navy-200 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-navy-300 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2.5 text-sm font-medium text-accent-red"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
