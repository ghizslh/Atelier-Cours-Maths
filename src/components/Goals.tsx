import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Goals() {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl text-ink sm:text-4xl"
        >
          {t.goals.heading}
        </motion.h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.goals.items.map((goal, i) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-ink/10 bg-white/60 p-6 text-lg text-ink/85"
            >
              {goal.title}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
