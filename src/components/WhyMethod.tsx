import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import FloatingSymbols from "./scene/FloatingSymbols";

export default function WhyMethod() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <FloatingSymbols
        symbols={[
          { glyph: "√", x: 8, y: 30, depth: 0.6, size: 42, color: "indigo" },
          { glyph: "π", x: 88, y: 20, depth: 0.5, size: 36, color: "gold" },
          { glyph: "x²", x: 85, y: 70, depth: 0.7, size: 32, color: "sage" },
          { glyph: "△", x: 14, y: 74, depth: 0.4, size: 30, color: "ink" },
        ]}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl leading-snug text-ink sm:text-4xl md:text-5xl"
        >
          {t.why.line1}
          <br />
          <span className="text-indigo">{t.why.line2}</span>
        </motion.p>
      </div>
    </section>
  );
}
