"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PawPrint } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pricing", label: "Preços" },
  { href: "/blog", label: "Blog" },
  { href: "/professional", label: "Profissional" },
  { href: "/legal", label: "Aviso Legal" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:bg-emerald-400 transition-colors">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Pet<span className="text-emerald-500">Diet</span> Pro
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-emerald-500 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium px-4 py-2"
            >
              Entrar
            </Link>
            <Link
              href="/pricing"
              className="btn-primary text-white text-sm font-semibold px-5 py-2 rounded-lg"
            >
              Começar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-emerald-500 transition-colors py-2 text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
              <Link
                href="/login"
                className="text-center text-gray-600 hover:text-gray-900 py-2 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link
                href="/pricing"
                className="btn-primary text-center text-white text-sm font-semibold px-5 py-2 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                Começar Agora
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
