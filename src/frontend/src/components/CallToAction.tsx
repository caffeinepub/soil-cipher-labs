export default function CallToAction() {
  return (
    <section
      id="cta"
      className="relative section-pad overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.15 0.04 155) 0%, oklch(0.22 0.065 155) 40%, oklch(0.28 0.07 50) 100%)",
      }}
    >
      {/* Decorative background circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
        style={{ backgroundColor: "oklch(0.72 0.12 65)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"
        style={{ backgroundColor: "oklch(0.55 0.11 155)" }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <span
          className="font-sans text-xs font-semibold tracking-widest uppercase"
          style={{ color: "oklch(0.83 0.1 65)" }}
        >
          Take Action
        </span>
        <span
          className="block w-16 h-1 rounded-full mx-auto my-5"
          style={{ backgroundColor: "oklch(0.72 0.12 65)" }}
        />

        {/* Heading */}
        <h2 className="section-heading text-cream-200 mb-8">
          Transform the Way We Nurture the Land — One Insight at a Time.
        </h2>

        {/* Lead Lines */}
        <div className="space-y-2 mb-12">
          <p className="font-sans text-base text-cream-400">
            The future of farming begins beneath your feet.
          </p>
          <p
            className="font-serif italic text-lg font-semibold"
            style={{ color: "oklch(0.75 0.08 155)" }}
          >
            Let's decode your soil.
          </p>
          <p
            className="font-serif italic text-lg font-semibold"
            style={{ color: "oklch(0.75 0.08 155)" }}
          >
            Let's optimize your fertilizers.
          </p>
          <p
            className="font-serif italic text-lg font-semibold"
            style={{ color: "oklch(0.75 0.08 155)" }}
          >
            Let's build resilient agriculture.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="btn-primary text-sm px-8 py-4 w-full sm:w-auto"
            style={{
              backgroundColor: "oklch(0.72 0.12 65)",
              color: "oklch(0.12 0.02 50)",
            }}
          >
            Request Soil Analysis
          </a>
          <a
            href="#contact"
            className="btn-secondary text-sm px-8 py-4 w-full sm:w-auto"
          >
            Partner With Soil Cipher Labs
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-semibold text-sm tracking-wide transition-all duration-200 border-2 w-full sm:w-auto"
            style={{
              borderColor: "oklch(0.75 0.08 155)",
              color: "oklch(0.75 0.08 155)",
              background: "transparent",
            }}
          >
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
}
