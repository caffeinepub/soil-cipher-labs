import { Heart, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 md:px-12"
      style={{
        backgroundColor: "#060f06",
        borderTop: "1px solid rgba(74,222,128,0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src="/assets/logo.jpeg"
              alt="Soil Cipher Labs"
              className="h-14 w-auto object-contain mb-5"
            />
            <p
              className="font-sans text-sm leading-relaxed mb-4"
              style={{ color: "rgba(232,245,233,0.65)" }}
            >
              Bridging traditional agricultural wisdom with AI-powered analytics
              for a smarter, sustainable future.
            </p>
            <div className="flex items-center gap-3">
              {[
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                },
                {
                  icon: Twitter,
                  label: "Twitter / X",
                  href: "https://twitter.com",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  href: "https://instagram.com",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: "rgba(74,222,128,0.1)",
                    color: "#4ade80",
                    border: "1px solid rgba(74,222,128,0.25)",
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="font-mono text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "rgba(74,222,128,0.9)" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Comprehensive Soil Testing",
                "AI Fertilizer Optimization",
                "Soil Health Monitoring",
                "Agri-Business Advisory",
                "Sustainability Consulting",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="font-sans text-sm transition-colors"
                    style={{ color: "rgba(232,245,233,0.6)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#4ade80";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(232,245,233,0.6)";
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-mono text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "rgba(74,222,128,0.9)" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Mission", href: "#vision" },
                { label: "Executive Insights", href: "#founder" },
                { label: "Impact & Results", href: "#impact" },
                { label: "Why Soil Cipher", href: "#why" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-sans text-sm transition-colors"
                    style={{ color: "rgba(232,245,233,0.6)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#4ade80";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(232,245,233,0.6)";
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-mono text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "rgba(74,222,128,0.9)" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@soilcipherlabs.com"
                  className="font-sans text-sm transition-colors break-all"
                  style={{ color: "rgba(232,245,233,0.6)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#4ade80";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(232,245,233,0.6)";
                  }}
                >
                  info@soilcipherlabs.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919522261547"
                  className="font-sans text-sm transition-colors"
                  style={{ color: "rgba(232,245,233,0.6)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#4ade80";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(232,245,233,0.6)";
                  }}
                >
                  +91-9522261547
                </a>
              </li>
              <li>
                <span
                  className="font-sans text-sm"
                  style={{ color: "rgba(232,245,233,0.6)" }}
                >
                  India
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <h4
                className="font-mono text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "rgba(74,222,128,0.9)" }}
              >
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["#SoilCipherLabs", "#SoilIntelligence"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(74,222,128,0.1)",
                      color: "#4ade80",
                      border: "1px solid rgba(74,222,128,0.25)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(74,222,128,0.1)" }}
      >
        <p
          className="font-mono text-xs text-center"
          style={{ color: "rgba(232,245,233,0.45)" }}
        >
          © {year} Soil Cipher Labs. All rights reserved.
        </p>
        <p
          className="font-mono text-xs flex items-center gap-1.5"
          style={{ color: "rgba(232,245,233,0.45)" }}
        >
          Built with{" "}
          <Heart
            className="w-3.5 h-3.5 fill-current"
            style={{ color: "#4ade80" }}
          />{" "}
          using @ Skay web world
        </p>
      </div>
    </footer>
  );
}
