import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function ParentSection() {
  const { t } = useLanguage();

  // static, illustrative curve — not real data
  const points = "0,60 20,52 40,54 60,36 80,28 100,12";

  return (
    <section className="relative bg-sage-soft py-28 sm:py-36">
      <div className="mx-auto grid max-w-content items-center gap-14 px-6 sm:px-10 md:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl text-ink sm:text-4xl"
          >
            {t.parents.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-ink/60"
          >
            {t.parents.subheading}
          </motion.p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.parents.points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex items-center gap-2 text-sm text-ink/80"
              >
                <span className="text-sage">✓</span>
                {point}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-white p-7 shadow-card"
        >
          <p className="text-xs uppercase tracking-wide text-ink/40">{t.parents.dashboardLabel}</p>
          <h3 className="mt-1 font-display text-xl text-ink">{t.parents.dashboardTitle}</h3>

          <svg viewBox="0 0 100 70" className="mt-6 w-full" aria-hidden="true">
            <motion.polyline
              points={points}
              fill="none"
              stroke="#7FA98C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>

          <p className="mt-4 text-xs text-ink/40">{t.parents.disclaimer}</p>
        </motion.div>
      </div>
    </section>
  );
}
