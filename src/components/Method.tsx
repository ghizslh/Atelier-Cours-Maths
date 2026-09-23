import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Method() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.35"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="methode" className="relative py-28 sm:py-36" ref={ref}>
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl text-ink sm:text-4xl"
          >
            {t.method.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-ink/60"
          >
            {t.method.subheading}
          </motion.p>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting path, hidden on small screens for clarity */}
          <svg
            className="pointer-events-none absolute -top-2 left-0 hidden w-full lg:block"
            height="4"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.line
              x1="6"
              y1="0.5"
              x2="94"
              y2="0.5"
              stroke="#3B5BA8"
              strokeOpacity="0.35"
              strokeWidth="1.5"
              style={{ pathLength }}
            />
          </svg>

          {t.method.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl bg-white p-7 shadow-soft"
            >
              <span className="font-display text-3xl text-gold">{step.number}</span>
              <h3 className="mt-4 font-display text-xl text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
