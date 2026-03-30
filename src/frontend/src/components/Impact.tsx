import { TrendingUp } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const impacts = [
  {
    stat: "20",
    suffix: "%",
    label: "Higher Yield Efficiency",
    desc: "Up to 20% improvement in crop yield through precision soil management.",
    isNumeric: true,
    progressValue: 20,
  },
  {
    stat: "30",
    suffix: "%",
    label: "Reduction in Fertilizer Waste",
    desc: "Up to 30% less fertilizer waste with AI-optimized nutrient strategies.",
    isNumeric: true,
    progressValue: 30,
  },
  {
    stat: "✓",
    suffix: "",
    label: "Improved Soil Organic Health",
    desc: "Measurable improvements in soil organic matter and microbial activity.",
    isNumeric: false,
    progressValue: 0,
  },
  {
    stat: "✓",
    suffix: "",
    label: "Long-Term Land Productivity",
    desc: "Sustained productivity through regenerative soil intelligence practices.",
    isNumeric: false,
    progressValue: 0,
  },
  {
    stat: "✓",
    suffix: "",
    label: "Climate-Smart Agriculture Practices",
    desc: "Environmentally responsible farming aligned with climate resilience goals.",
    isNumeric: false,
    progressValue: 0,
  },
];

function ImpactCard({
  item,
  trigger,
}: { item: (typeof impacts)[0]; trigger: boolean }) {
  const count = useCountUp(
    item.isNumeric ? Number(item.stat) : 0,
    1500,
    trigger,
  );
  return (
    <div
      className="flex flex-col gap-3 h-full rounded-md border p-6 transition-all duration-300"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        borderColor: "rgba(74,222,128,0.18)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(74,222,128,0.45)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(74,222,128,0.18)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold"
          style={{ background: "rgba(74,222,128,0.12)", color: "#4ade80" }}
        >
          {!item.isNumeric ? (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-label="Checkmark"
              role="img"
            >
              <title>Checkmark</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <span className="text-xs font-bold">✓</span>
          )}
        </div>
        {item.isNumeric && (
          <span
            className="font-mono font-bold text-3xl"
            style={{ color: "#4ade80" }}
          >
            {count}
            {item.suffix}
          </span>
        )}
      </div>
      {item.isNumeric && (
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: "rgba(74,222,128,0.12)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              backgroundColor: "#4ade80",
              width: trigger ? `${item.progressValue * 3}%` : "0%",
              transition: "width 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
      )}
      <h3
        className="font-serif font-bold text-lg leading-snug"
        style={{ color: "#e8f5e9" }}
      >
        {item.label}
      </h3>
      <p
        className="font-sans text-sm leading-relaxed"
        style={{ color: "rgba(232,245,233,0.65)" }}
      >
        {item.desc}
      </p>
    </div>
  );
}

export default function Impact() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  return (
    <section
      id="impact"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ backgroundColor: "#0a1a0a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 animate-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <TrendingUp className="w-5 h-5" style={{ color: "#4ade80" }} />
            <span
              className="font-mono text-xs font-semibold tracking-widest uppercase tech-bracket"
              style={{ color: "rgba(74,222,128,0.85)" }}
            >
              Impact &amp; Results
            </span>
          </div>
          <span
            className="block w-16 h-1 mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, #4ade80, #22c55e)" }}
          />
          <h2 className="section-heading mb-4">
            When We Listen to the Soil, We Cultivate the Future.
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            With intelligent soil decoding, farmers achieve measurable, lasting
            results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {impacts.map((item, idx) => (
            <div
              key={item.label}
              className={`animate-on-scroll ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <ImpactCard item={item} trigger={isVisible} />
            </div>
          ))}
        </div>
        <div
          className={`rounded-md p-8 text-center border animate-on-scroll ${isVisible ? "visible" : ""}`}
          style={{
            backgroundColor: "rgba(74,222,128,0.05)",
            borderColor: "rgba(74,222,128,0.25)",
            transitionDelay: "0.5s",
          }}
        >
          <p
            className="font-serif text-xl md:text-2xl font-semibold"
            style={{ color: "#e8f5e9" }}
          >
            Understanding soil reduces cost, improves resilience, and increases
            profitability.
          </p>
        </div>
      </div>
    </section>
  );
}
