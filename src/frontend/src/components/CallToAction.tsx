import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function CallToAction() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  return (
    <section
      id="cta"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative section-pad overflow-hidden"
      style={{ backgroundColor: "#0d2610" }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
        style={{ backgroundColor: "#4ade80", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"
        style={{ backgroundColor: "#22c55e", filter: "blur(40px)" }}
      />
      <div
        className={`relative z-10 max-w-4xl mx-auto text-center animate-on-scroll ${isVisible ? "visible" : ""}`}
      >
        <span
          className="font-mono text-xs font-semibold tracking-widest uppercase tech-bracket"
          style={{ color: "rgba(74,222,128,0.85)" }}
        >
          Take Action
        </span>
        <span
          className="block w-16 h-1 rounded-full mx-auto my-5"
          style={{ background: "linear-gradient(90deg, #4ade80, #22c55e)" }}
        />
        <h2 className="section-heading mb-8">
          Transform the Way We Nurture the Land —{" "}
          <span className="holo-text">One Insight at a Time.</span>
        </h2>
        <div className="space-y-2 mb-12">
          <p
            className="font-sans text-base"
            style={{ color: "rgba(232,245,233,0.7)" }}
          >
            The future of farming begins beneath your feet.
          </p>
          <p
            className="font-serif italic text-lg font-semibold"
            style={{ color: "#e8f5e9" }}
          >
            Let&apos;s decode your soil.
          </p>
          <p
            className="font-serif italic text-lg font-semibold"
            style={{ color: "#e8f5e9" }}
          >
            Let&apos;s optimize your fertilizers.
          </p>
          <p
            className="font-serif italic text-lg font-semibold"
            style={{ color: "#e8f5e9" }}
          >
            Let&apos;s build resilient agriculture.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="btn-shimmer text-sm px-8 py-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide transition-all duration-300"
            style={{ backgroundColor: "#4ade80", color: "#0a1a0a" }}
            data-ocid="cta.primary_button"
          >
            Request Soil Analysis
          </a>
          <a
            href="#contact"
            className="btn-shimmer text-sm px-8 py-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide transition-all duration-200 border-2"
            style={{
              borderColor: "rgba(74,222,128,0.45)",
              color: "#4ade80",
              background: "rgba(74,222,128,0.06)",
            }}
            data-ocid="cta.secondary_button"
          >
            Partner With Soil Cipher Labs
          </a>
          <a
            href="#contact"
            className="btn-shimmer text-sm px-8 py-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide transition-all duration-200 border-2"
            style={{
              borderColor: "rgba(74,222,128,0.3)",
              color: "rgba(232,245,233,0.8)",
              background: "transparent",
            }}
            data-ocid="cta.button"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
}
