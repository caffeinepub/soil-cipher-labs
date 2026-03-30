import { Quote } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Founder() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section
      id="founder"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ backgroundColor: "#081508" }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`flex items-center gap-3 mb-12 justify-center animate-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <span
            className="font-mono text-xs font-semibold tracking-widest uppercase tech-bracket"
            style={{ color: "rgba(74,222,128,0.85)" }}
          >
            Executive Insights
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait */}
          <div
            className={`flex justify-center md:justify-start animate-on-scroll-left ${isVisible ? "visible" : ""}`}
          >
            <div className="relative flex items-center justify-center">
              {[1, 2, 3].map((ring) => (
                <div
                  key={ring}
                  className="absolute rounded-full"
                  style={{
                    width: `${160 + ring * 32}px`,
                    height: `${160 + ring * 32}px`,
                    border: `1px solid rgba(74,222,128,${0.22 - ring * 0.06})`,
                    animation: `pulse-soft ${5 + ring}s ease-in-out infinite`,
                    animationDelay: `${ring * 0.4}s`,
                  }}
                />
              ))}
              <div
                className="relative w-40 h-40 rounded-full overflow-hidden"
                style={{
                  border: "3px solid rgba(74,222,128,0.4)",
                  boxShadow: "0 0 32px rgba(74,222,128,0.15)",
                }}
              >
                <img
                  src="/assets/founder.jpeg"
                  alt="Vardhamana Indori"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`animate-on-scroll-right ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="flex items-start gap-3 mb-6">
              <Quote
                className="w-8 h-8 flex-shrink-0 mt-1"
                style={{ color: "rgba(74,222,128,0.4)" }}
              />
              <blockquote
                className="font-serif italic text-xl md:text-2xl font-semibold leading-relaxed"
                style={{ color: "#e8f5e9" }}
              >
                &ldquo;Soil is not a medium. It is a message. And at Soil Cipher
                Labs, we are learning to read it.&rdquo;
              </blockquote>
            </div>
            <div
              className="space-y-4 body-text"
              style={{ color: "rgba(232,245,233,0.75)" }}
            >
              <p>
                Vardhamana Indori brings deep expertise in agricultural science
                and a passion for transforming how India’s farming communities
                relate to their soil.
              </p>
              <p>
                With a vision rooted in data, sustainability, and farmer
                empowerment, Soil Cipher Labs was founded to bridge the gap
                between raw soil science and practical, profitable farming
                decisions.
              </p>
            </div>
            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(74,222,128,0.2)" }}
            >
              <p
                className="font-serif font-bold text-lg"
                style={{ color: "#e8f5e9" }}
              >
                Vardhamana Indori
              </p>
              <p
                className="font-sans text-sm"
                style={{ color: "rgba(74,222,128,0.8)" }}
              >
                Founder &amp; Chief Soil Intelligence Officer, Soil Cipher Labs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
