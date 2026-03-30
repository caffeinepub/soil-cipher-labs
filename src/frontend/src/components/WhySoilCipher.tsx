import { Cpu, Microscope, Network, Sprout, Users } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const usps = [
  {
    icon: Microscope,
    title: "Science-Backed Precision",
    desc: "Every recommendation is grounded in rigorous laboratory analysis and peer-reviewed agricultural science.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Insights",
    desc: "Advanced machine learning algorithms transform complex soil data into clear, actionable intelligence.",
  },
  {
    icon: Sprout,
    title: "Sustainable Approach",
    desc: "We prioritize long-term land health and environmental stewardship in every strategy we develop.",
  },
  {
    icon: Users,
    title: "Farmer-Centric Design",
    desc: "Our platform and services are designed with the farmer at the center — accessible, practical, and impactful.",
  },
  {
    icon: Network,
    title: "Scalable Agri-Intelligence Platform",
    desc: "From individual farms to large agribusinesses, our platform scales to meet every agricultural need.",
  },
];

export default function WhySoilCipher() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section
      id="why"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ backgroundColor: "#0d2610" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 animate-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <span
            className="font-mono text-xs font-semibold tracking-widest uppercase tech-bracket"
            style={{ color: "rgba(74,222,128,0.85)" }}
          >
            Why Choose Us
          </span>
          <span
            className="block w-16 h-1 rounded-full mx-auto my-5"
            style={{ background: "linear-gradient(90deg, #4ade80, #22c55e)" }}
          />
          <h2 className="section-heading mb-4">Why Soil Cipher Labs?</h2>
          <p className="body-text max-w-2xl mx-auto">
            We combine technology, agriculture, and strategy — building the
            future of soil intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {usps.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className={`animate-on-scroll flex flex-col gap-4 p-6 rounded-md border transition-all duration-300 h-full ${isVisible ? "visible" : ""}`}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(74,222,128,0.18)",
                  transitionDelay: `${idx * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(74,222,128,0.45)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 24px rgba(74,222,128,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(74,222,128,0.18)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(74,222,128,0.1)",
                    color: "#4ade80",
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className="font-serif font-bold text-lg leading-snug"
                  style={{ color: "#e8f5e9" }}
                >
                  {usp.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "rgba(232,245,233,0.65)" }}
                >
                  {usp.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div
          className={`text-center rounded-md p-8 border animate-on-scroll ${isVisible ? "visible" : ""}`}
          style={{
            backgroundColor: "rgba(74,222,128,0.06)",
            borderColor: "rgba(74,222,128,0.25)",
            transitionDelay: "0.5s",
          }}
        >
          <p
            className="font-serif italic text-xl md:text-2xl font-semibold"
            style={{ color: "#e8f5e9" }}
          >
            We combine technology, agriculture, and strategy — building the
            future of soil intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}
