import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/generated/hero-bg.dim_1920x1080.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.15 0.04 155 / 0.88) 0%, oklch(0.12 0.03 60 / 0.82) 60%, oklch(0.18 0.05 50 / 0.75) 100%)",
        }}
      />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Hero Brand Image */}
        <div className="flex justify-center mb-8">
          <img
            src="/assets/uploads/Make_a_video_stating_with_logo_and_pic_with_headin_delpmaspu-1.png"
            alt="Soil Cipher Labs - Unlocking the hidden language of soil & fertilizers"
            className="w-full max-w-2xl rounded-2xl shadow-2xl"
            style={{ boxShadow: "0 8px 48px oklch(0.15 0.04 155 / 0.5)" }}
          />
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cream-400/30 bg-cream-200/10 backdrop-blur-sm mb-8">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: "oklch(0.72 0.12 65)" }}
          />
          <span className="font-sans text-xs font-medium tracking-widest uppercase text-cream-300">
            Soil Intelligence Platform
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream-200 leading-tight mb-6">
          Soil Isn't Dirt.{" "}
          <span className="italic" style={{ color: "oklch(0.83 0.1 65)" }}>
            It's Intelligence
          </span>{" "}
          Waiting to Be Decoded.
        </h1>

        {/* Tagline */}
        <p
          className="font-serif italic text-lg md:text-xl lg:text-2xl mb-6 font-light"
          style={{ color: "oklch(0.83 0.1 65)" }}
        >
          Rooting for Success: Decoding the Secret Language of Soil and
          Fertilizers
        </p>

        {/* Description */}
        <p className="font-sans text-base md:text-lg text-cream-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          At Soil Cipher Labs, we transform soil data into actionable
          intelligence — empowering farmers, agribusinesses, and agricultural
          leaders to make precise, profitable, and sustainable decisions.
        </p>

        <p
          className="font-serif italic text-sm md:text-base mb-10"
          style={{ color: "oklch(0.75 0.08 155)" }}
        >
          When you understand the roots, you empower the future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#solution"
            className="btn-primary text-sm px-8 py-4 w-full sm:w-auto"
          >
            Explore Soil Intelligence
          </a>
          <a
            href="#contact"
            className="btn-secondary text-sm px-8 py-4 w-full sm:w-auto"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-400/60 hover:text-cream-300 transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-sans text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
