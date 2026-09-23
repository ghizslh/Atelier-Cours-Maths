import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ORBIT_ITEMS = [
  { icon: "📘", label: "cahier", angle: 0, radius: 150 },
  { icon: "🧮", label: "calculatrice", angle: 120, radius: 130 },
  { icon: "📈", label: "graphique", angle: 240, radius: 160 },
];

export default function TeacherPresence({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);

  return (
    <div ref={ref} className={`perspective-scene relative flex items-center justify-center ${className}`}>
      <motion.div className="preserve-3d relative h-[320px] w-[320px] sm:h-[380px] sm:w-[380px]" style={{ rotate, scale }}>
        {/* concentric rings — evoke a chalkboard compass / geometry motif */}
        <div className="absolute inset-0 rounded-full border border-indigo/25" />
        <div className="absolute inset-[14%] rounded-full border border-gold/35" />
        <div className="absolute inset-[28%] rounded-full bg-gradient-to-br from-indigo-soft via-white to-sage-soft shadow-card" />

        {/* central glyph — chalkboard-style equal sign, quietly evokes "teaching / explaining" */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl text-indigo-deep sm:text-7xl">∑</span>
        </div>

        {/* orbiting elements representing tools of a math lesson */}
        {ORBIT_ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            className="absolute left-1/2 top-1/2 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-soft"
            style={{
              x: Math.cos((item.angle * Math.PI) / 180) * item.radius - 28,
              y: Math.sin((item.angle * Math.PI) / 180) * item.radius - 28,
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
