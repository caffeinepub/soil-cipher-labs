import { Activity, BarChart3, Brain, FlaskConical, Leaf } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  {
    icon: FlaskConical,
    title: "Comprehensive Soil Testing",
    desc: "NPK, micronutrients, organic carbon, pH, EC, and microbial indicators.",
  },
  {
    icon: Brain,
    title: "AI Fertilizer Optimization Plans",
    desc: "Crop-specific nutrient recommendations powered by advanced AI algorithms.",
  },
  {
    icon: Activity,
    title: "Soil Health Monitoring Programs",
    desc: "Long-term soil vitality tracking for sustained agricultural performance.",
  },
  {
    icon: BarChart3,
    title: "Agri-Business Advisory",
    desc: "Data-driven fertilizer procurement and efficiency strategies for agribusinesses.",
  },
  {
    icon: Leaf,
    title: "Sustainability Consulting",
    desc: "Climate-smart and regenerative agriculture models for long-term land health.",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ backgroundColor: "#081508" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 animate-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <FlaskConical className="w-5 h-5" style={{ color: "#4ade80" }} />
            <span
              className="font-mono text-xs font-semibold tracking-widest uppercase tech-bracket"
              style={{ color: "rgba(74,222,128,0.85)" }}
            >
              Services
            </span>
          </div>
          <span
            className="block w-16 h-1 mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, #4ade80, #22c55e)" }}
          />
          <h2 className="section-heading mb-4">Soil Intelligence Services</h2>
          <p className="body-text max-w-2xl mx-auto">
            A complete suite of data-driven services designed to decode your
            soil and optimize your agricultural outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`animate-on-scroll rounded-md p-6 flex flex-col gap-4 h-full border transition-all duration-300 ${isVisible ? "visible" : ""}`}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(74,222,128,0.18)",
                  transitionDelay: `${idx * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(74,222,128,0.45)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(74,222,128,0.18)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
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
                <div>
                  <h3
                    className="font-serif font-bold text-lg mb-2 leading-snug"
                    style={{ color: "#e8f5e9" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "rgba(232,245,233,0.65)" }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
