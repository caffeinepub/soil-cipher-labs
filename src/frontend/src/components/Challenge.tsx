import {
  AlertTriangle,
  Dices,
  DollarSign,
  FlaskConical,
  Sunset,
  TrendingDown,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const painPoints = [
  { text: "Overuse and misuse of fertilizers", Icon: FlaskConical },
  { text: "Declining soil organic matter", Icon: TrendingDown },
  { text: "Rising input costs", Icon: DollarSign },
  { text: "Yield unpredictability", Icon: Dices },
  { text: "Long-term land degradation", Icon: Sunset },
];

export default function Challenge() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="challenge"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ backgroundColor: "#081508" }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 animate-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <AlertTriangle className="w-5 h-5" style={{ color: "#4ade80" }} />
            <span
              className="font-mono text-xs font-semibold tracking-widest uppercase tech-bracket"
              style={{ color: "rgba(74,222,128,0.85)" }}
            >
              The Challenge
            </span>
          </div>
          <span
            className="block w-16 h-1 rounded-full mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, #4ade80, #22c55e)" }}
          />
          <h2 className="section-heading mb-4">
            Traditional Farming Shouldn&apos;t Be Guesswork.
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Across agricultural ecosystems, we see persistent challenges that
            cost farmers their livelihoods and the land its vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {painPoints.map(({ text, Icon }, idx) => (
            <div
              key={text}
              className={`animate-on-scroll flex items-start gap-4 p-5 rounded-md border transition-all duration-300 ${isVisible ? "visible" : ""}`}
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
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(74,222,128,0.1)",
                  border: "1px solid rgba(74,222,128,0.3)",
                }}
              >
                <Icon className="w-5 h-5" style={{ color: "#4ade80" }} />
              </div>
              <p
                className="font-sans font-medium text-sm leading-snug pt-2"
                style={{ color: "rgba(232,245,233,0.85)" }}
              >
                {text}
              </p>
            </div>
          ))}
          <div
            className={`animate-on-scroll flex items-center p-5 rounded-md border sm:col-span-2 lg:col-span-1 ${isVisible ? "visible" : ""}`}
            style={{
              backgroundColor: "rgba(74,222,128,0.06)",
              borderColor: "rgba(74,222,128,0.35)",
              transitionDelay: "0.5s",
            }}
          >
            <p
              className="font-serif italic text-base font-semibold leading-snug"
              style={{ color: "rgba(232,245,233,0.9)" }}
            >
              Without accurate soil intelligence, farmers are forced to make
              costly assumptions.
            </p>
          </div>
        </div>

        <div
          className={`text-center animate-on-scroll ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <p className="font-serif text-xl md:text-2xl font-bold holo-text">
            And assumptions reduce profitability.
          </p>
        </div>
      </div>
    </section>
  );
}
