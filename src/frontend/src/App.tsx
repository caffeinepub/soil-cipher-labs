import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import AboutUs from "./components/AboutUs";
import CallToAction from "./components/CallToAction";
import Challenge from "./components/Challenge";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Services from "./components/Services";
import Solution from "./components/Solution";
import VisionMission from "./components/VisionMission";
import WhySoilCipher from "./components/WhySoilCipher";

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0a1a0a", color: "#e8f5e9" }}
    >
      <Toaster richColors position="top-right" />
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Challenge />
        <Solution />
        <Impact />

        {/* Brand name image */}
        <div
          className="flex justify-center items-center py-12 px-4"
          style={{ backgroundColor: "#0a1a0a" }}
        >
          <img
            src="/assets/name.png"
            alt="Soil Cipher Labs — Unlocking the hidden language of soil & fertilizers. By Vardhamana Indori"
            className="max-w-2xl w-full h-auto object-contain"
          />
        </div>

        <VisionMission />
        <Founder />
        <Services />
        <WhySoilCipher />
        <CallToAction />
        <Contact />
      </main>
      <Footer />

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        data-ocid="app.button"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 neon-border"
        style={{
          backgroundColor: "rgba(10,26,10,0.9)",
          color: "#4ade80",
          backdropFilter: "blur(8px)",
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "auto" : "none",
          transform: showTop
            ? "translateY(0) scale(1)"
            : "translateY(16px) scale(0.85)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
}
