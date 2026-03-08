import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solution", href: "#solution" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-200/95 backdrop-blur-md shadow-soil border-b border-forest-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center group">
          <img
            src="/assets/logo.jpeg"
            alt="Soil Cipher Labs"
            className={`h-12 md:h-14 w-auto object-contain transition-all duration-300 ${
              scrolled ? "brightness-100" : "brightness-110 drop-shadow-lg"
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium tracking-wide transition-colors hover:text-forest-400 ${
                scrolled ? "text-forest-700" : "text-cream-300"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-xs px-5 py-2.5">
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={`md:hidden p-2 rounded-sm transition-colors ${
            scrolled ? "text-forest-700" : "text-cream-200"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream-200/98 backdrop-blur-md border-t border-forest-100 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-forest-700 hover:text-forest-500 transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="btn-primary text-xs px-5 py-2.5 self-start mt-2"
            onClick={() => {
              setMenuOpen(false);
              window.location.hash = "#contact";
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
