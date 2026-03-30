import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const FULL_HEADLINE =
  "Soil Isn't Dirt. It's Intelligence Waiting to Be Decoded.";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < FULL_HEADLINE.length) {
        setTyped(FULL_HEADLINE.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  const isDone = typed.length >= FULL_HEADLINE.length;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #071507 0%, #0d2610 40%, #0a1f0a 100%)",
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(74,222,128,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        className="relative max-w-5xl mx-auto px-6 md:px-12 text-center"
        style={{ zIndex: 2 }}
      >
        <div
          className="hero-content-enter inline-flex items-center gap-2 mb-8"
          style={{ animationDelay: "0.1s" }}
        >
          <span
            className="font-mono text-xs"
            style={{ color: "rgba(74,222,128,0.6)" }}
          >
            ┌
          </span>
          <div
            className="flex items-center gap-2 px-4 py-1.5 border"
            style={{
              borderColor: "rgba(74,222,128,0.3)",
              backgroundColor: "rgba(74,222,128,0.06)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
              style={{ backgroundColor: "#4ade80" }}
            />
            <span
              className="font-mono text-xs font-medium tracking-widest uppercase"
              style={{ color: "#4ade80" }}
            >
              Soil Intelligence Platform
            </span>
          </div>
          <span
            className="font-mono text-xs"
            style={{ color: "rgba(74,222,128,0.6)" }}
          >
            ┐
          </span>
        </div>

        <h1
          className="hero-content-enter font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{
            animationDelay: "0.2s",
            minHeight: "4rem",
            color: "#e8f5e9",
          }}
        >
          {(() => {
            const italicStart = typed.indexOf("It's Intelligence");
            if (italicStart === -1) {
              return (
                <>
                  <span>{typed}</span>
                  <span
                    className="inline-block w-0.5 h-[1em] ml-1"
                    style={{
                      backgroundColor: "#4ade80",
                      opacity: showCursor ? 1 : 0,
                      verticalAlign: "middle",
                    }}
                  />
                </>
              );
            }
            const before = typed.slice(0, italicStart);
            const italicPart = typed.slice(
              italicStart,
              italicStart + "It's Intelligence".length,
            );
            const after = typed.slice(italicStart + "It's Intelligence".length);
            return (
              <>
                <span>{before}</span>
                <span className="italic" style={{ color: "#4ade80" }}>
                  {italicPart}
                </span>
                <span>{after}</span>
                {!isDone && (
                  <span
                    className="inline-block w-0.5 h-[1em] ml-1"
                    style={{
                      backgroundColor: "#4ade80",
                      opacity: showCursor ? 1 : 0,
                      verticalAlign: "middle",
                    }}
                  />
                )}
              </>
            );
          })()}
        </h1>

        <p
          className="hero-content-enter font-serif italic text-lg md:text-xl lg:text-2xl mb-6 font-light"
          style={{ color: "rgba(232,245,233,0.75)", animationDelay: "0.4s" }}
        >
          Rooting for Success: Decoding the Secret Language of Soil and
          Fertilizers
        </p>

        <p
          className="hero-content-enter font-sans text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(232,245,233,0.7)", animationDelay: "0.6s" }}
        >
          At Soil Cipher Labs, we transform soil data into actionable
          intelligence — empowering farmers, agribusinesses, and agricultural
          leaders to make precise, profitable, and sustainable decisions.
        </p>

        <p
          className="hero-content-enter font-serif italic text-sm md:text-base mb-10"
          style={{ color: "rgba(74,222,128,0.85)", animationDelay: "0.7s" }}
        >
          When you understand the roots, you empower the future.
        </p>

        <div
          className="hero-content-enter flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#solution"
            className="btn-shimmer text-sm px-8 py-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide transition-all duration-200"
            style={{ backgroundColor: "#4ade80", color: "#0a1a0a" }}
            data-ocid="hero.primary_button"
          >
            Explore Soil Intelligence
          </a>
          <a
            href="#contact"
            className="btn-shimmer text-sm px-8 py-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide transition-all duration-200 border-2"
            style={{
              borderColor: "rgba(74,222,128,0.5)",
              color: "#4ade80",
              background: "rgba(74,222,128,0.06)",
              backdropFilter: "blur(8px)",
            }}
            data-ocid="hero.secondary_button"
          >
            Partner With Us
          </a>
        </div>

        {/* Stats */}
        <div
          className="hero-content-enter flex flex-col sm:flex-row items-center justify-center gap-6"
          style={{ animationDelay: "1s" }}
        >
          {[
            { value: "98.5%", label: "Soil Analysis Accuracy" },
            { value: "2,400+", label: "Farms Optimized" },
            { value: "30%↓", label: "Fertilizer Waste Reduced" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center px-6 py-4 rounded-md border"
              style={{
                borderColor: "rgba(74,222,128,0.2)",
                backgroundColor: "rgba(74,222,128,0.05)",
              }}
            >
              <div
                className="font-mono font-bold text-2xl mb-1"
                style={{ color: "#4ade80" }}
              >
                {stat.value}
              </div>
              <div
                className="font-sans text-xs tracking-widest uppercase"
                style={{ color: "rgba(232,245,233,0.6)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors"
        style={{ zIndex: 3, color: "rgba(74,222,128,0.7)" }}
        aria-label="Scroll down"
        data-ocid="hero.link"
      >
        <span className="font-mono text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
