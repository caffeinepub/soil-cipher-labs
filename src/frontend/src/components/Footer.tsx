import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 md:px-12 border-t"
      style={{
        backgroundColor: "oklch(0.15 0.04 155)",
        borderColor: "oklch(0.22 0.065 155)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logo.jpeg"
              alt="Soil Cipher Labs"
              className="h-16 w-auto object-contain brightness-110"
            />
          </div>

          {/* Center: Copyright */}
          <p className="font-sans text-xs text-cream-400 text-center">
            © {year} Soil Cipher Labs. All rights reserved.
          </p>

          {/* Attribution */}
          <p className="font-sans text-xs text-cream-400 flex items-center gap-1.5">
            Built with{" "}
            <Heart
              className="w-3.5 h-3.5 fill-current"
              style={{ color: "oklch(0.72 0.12 65)" }}
            />{" "}
            using @ Skay web world
          </p>
        </div>

        {/* Bottom nav */}
        <div
          className="mt-8 pt-6 border-t flex flex-wrap items-center justify-center gap-6"
          style={{ borderColor: "oklch(0.22 0.065 155)" }}
        >
          {["#about", "#solution", "#services", "#impact", "#contact"].map(
            (href) => (
              <a
                key={href}
                href={href}
                className="font-sans text-xs text-cream-400 hover:text-cream-200 transition-colors capitalize"
              >
                {href.replace("#", "")}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
