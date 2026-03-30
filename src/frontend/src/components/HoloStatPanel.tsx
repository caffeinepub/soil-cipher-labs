interface HoloStatPanelProps {
  value: string;
  label: string;
  subtext?: string;
  accentColor?: string;
  className?: string;
}

export default function HoloStatPanel({
  value,
  label,
  subtext,
  accentColor = "#000000",
  className = "",
}: HoloStatPanelProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center px-6 py-4 rounded-sm min-w-[140px] ${className}`}
      style={{
        background: "rgba(255,255,255,0.40)",
        border: "1px solid rgba(0,0,0,0.35)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Top accent bar */}
      <span
        className="absolute top-0 left-4 right-4 h-0.5"
        style={{ backgroundColor: accentColor, opacity: 0.7 }}
      />
      <span
        className="font-mono text-2xl font-bold mb-1"
        style={{ color: accentColor }}
      >
        {value}
      </span>
      <span
        className="font-mono text-xs tracking-widest uppercase text-center"
        style={{ color: "rgba(0,0,0,0.7)" }}
      >
        {label}
      </span>
      {subtext && (
        <span
          className="font-mono text-xs mt-1"
          style={{ color: "rgba(0,0,0,0.55)" }}
        >
          {subtext}
        </span>
      )}
    </div>
  );
}
