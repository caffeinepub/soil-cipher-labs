import { Leaf } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AboutUs() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ backgroundColor: "#0a1a0a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`animate-on-scroll-left ${isVisible ? "visible" : ""}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <Leaf className="w-5 h-5" style={{ color: "#4ade80" }} />
              <span
                className="font-sans text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(74,222,128,0.85)" }}
              >
                About Us
              </span>
            </div>
            <span className="accent-line" />
            <h2 className="section-heading mb-6">
              Where Agriculture Meets Insight, Innovation &amp; Intelligence
            </h2>
            <div className="space-y-4 body-text">
              <p>
                Soil isn&apos;t just dirt.
                <br />
                It&apos;s a living, breathing ecosystem speaking a hidden
                language of minerals, nutrients, moisture, and microbial life.
              </p>
              <p>
                For decades, farming decisions have relied on approximation. But
                beneath every thriving crop lies untapped intelligence — waiting
                to be decoded.
              </p>
              <p>
                At{" "}
                <strong className="font-semibold" style={{ color: "#4ade80" }}>
                  Soil Cipher Labs
                </strong>
                , we bridge traditional agricultural wisdom with modern science
                and AI-powered analytics. We analyze soil health, nutrient
                balance, and fertilizer efficiency to deliver clarity,
                precision, and measurable results.
              </p>
            </div>
            <p
              className="mt-8 font-serif italic text-xl font-semibold"
              style={{ color: "#4ade80" }}
            >
              Because when soil speaks — we listen.
            </p>
          </div>

          <div
            className={`relative animate-on-scroll-right ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <div
              className="rounded-md overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(74,222,128,0.3) 0%, rgba(34,197,94,0.15) 100%)",
                padding: "2px",
              }}
            >
              <div
                className="rounded-md p-10 md:p-12"
                style={{ backgroundColor: "#0d2610" }}
              >
                <div className="space-y-6">
                  {[
                    {
                      icon: "🌱",
                      label: "Living Ecosystem",
                      desc: "Minerals, nutrients, moisture & microbial life",
                    },
                    {
                      icon: "🔬",
                      label: "Scientific Analysis",
                      desc: "Laboratory-grade soil testing & profiling",
                    },
                    {
                      icon: "🤖",
                      label: "AI-Powered Insights",
                      desc: "Advanced algorithms decode raw soil data",
                    },
                    {
                      icon: "📈",
                      label: "Measurable Results",
                      desc: "Clarity, precision & profitable outcomes",
                    },
                  ].map((item, idx) => (
                    <div
                      key={item.label}
                      className={`flex items-start gap-4 animate-on-scroll ${isVisible ? "visible" : ""}`}
                      style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
                    >
                      <span className="text-2xl flex-shrink-0">
                        {item.icon}
                      </span>
                      <div>
                        <p
                          className="font-sans font-semibold text-sm"
                          style={{ color: "#e8f5e9" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="font-sans text-sm"
                          style={{ color: "rgba(232,245,233,0.6)" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, #4ade80, transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
