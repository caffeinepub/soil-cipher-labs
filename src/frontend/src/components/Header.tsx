import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solution", href: "#solution" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Vision", href: "#vision" },
  { label: "Executive Insights", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [
      "hero",
      "about",
      "solution",
      "services",
      "impact",
      "vision",
      "founder",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(10,26,10,0.97)"
          : "rgba(10,26,10,0.85)",
        borderBottom: scrolled
          ? "1px solid rgba(74,222,128,0.2)"
          : "1px solid transparent",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a
          href=".scl/homepage"
          className="flex items-center gap-3 flex-shrink-0"
          data-ocid="header.logo_link"
        >
          <img
            src="/assets/logo.jpeg"
            alt="Soil Cipher Labs"
            className="h-9 w-auto object-contain"
          />
          <span
            className="font-serif font-bold text-base hidden sm:block"
            style={{ color: "#e8f5e9" }}
          >
            Soil Cipher Labs
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => {
            const sectionId = href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={label}
                href={href}
                className={`font-sans text-sm font-medium transition-colors ${
                  isActive
                    ? scrolled
                      ? "nav-scrolled-active"
                      : "nav-link-active"
                    : ""
                }`}
                style={{
                  color: isActive ? "#4ade80" : "rgba(232,245,233,0.75)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#4ade80";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isActive
                    ? "#4ade80"
                    : "rgba(232,245,233,0.75)";
                }}
              >
                {label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="btn-primary btn-shimmer text-xs px-5 py-2.5"
            data-ocid="header.cta_button"
          >
            Get Started
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-sm border transition-colors"
          style={{
            borderColor: "rgba(74,222,128,0.4)",
            color: "#4ade80",
            backgroundColor: "rgba(74,222,128,0.08)",
          }}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      <div
        className={`mobile-menu-enter md:hidden px-6 pb-4 ${mobileOpen ? "open" : ""}`}
        style={{
          backgroundColor: "rgba(10,26,10,0.97)",
          borderTop: "1px solid rgba(74,222,128,0.15)",
        }}
      >
        <nav className="flex flex-col gap-3 pt-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-sm font-medium py-2 border-b transition-colors"
              style={{
                color: "rgba(232,245,233,0.85)",
                borderColor: "rgba(74,222,128,0.15)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            className="btn-primary btn-shimmer text-xs px-5 py-2.5 mt-2 text-center w-full"
            onClick={() => {
              setMobileOpen(false);
              window.location.hash = "contact";
            }}
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}
