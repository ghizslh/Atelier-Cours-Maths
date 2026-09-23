import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Symbol {
  glyph: string;
  x: number; // % across container
  y: number; // % down container
  depth: number; // 0 (far) to 1 (near) — controls parallax strength & size
  size: number; // px
  color: "indigo" | "gold" | "sage" | "ink";
}

const DEFAULT_SYMBOLS: Symbol[] = [
  { glyph: "√", x: 12, y: 20, depth: 0.9, size: 46, color: "indigo" },
  { glyph: "π", x: 82, y: 16, depth: 0.6, size: 38, color: "gold" },
  { glyph: "x²", x: 78, y: 62, depth: 0.8, size: 34, color: "sage" },
  { glyph: "Σ", x: 8, y: 68, depth: 0.5, size: 40, color: "ink" },
  { glyph: "∞", x: 50, y: 8, depth: 0.4, size: 28, color: "indigo" },
  { glyph: "θ", x: 90, y: 42, depth: 0.7, size: 30, color: "gold" },
  { glyph: "%", x: 20, y: 85, depth: 0.3, size: 24, color: "sage" },
];

const COLOR_MAP: Record<Symbol["color"], string> = {
  indigo: "text-indigo",
  gold: "text-gold",
  sage: "text-sage",
  ink: "text-ink/70",
};

export default function FloatingSymbols({
  symbols = DEFAULT_SYMBOLS,
  className = "",
}: {
  symbols?: Symbol[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const el = containerRef.current;
    if (!el) return;

    function handleMove(e: PointerEvent) {
      const rect = el!.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      setPointer({ x: relX, y: relY });
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reduceMotion]);

  return (
    <div
      ref={containerRef}
      className={`perspective-scene pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="preserve-3d relative h-full w-full">
        {symbols.map((s, i) => (
          <motion.div
            key={i}
            className={`font-display absolute select-none ${COLOR_MAP[s.color]}`}
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              fontSize: s.size,
              transform: reduceMotion
                ? undefined
                : `translate3d(${pointer.x * s.depth * 26}px, ${pointer.y * s.depth * 26}px, ${s.depth * 40}px)`,
              transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.06 }}
          >
            {s.glyph}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
