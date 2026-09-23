import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const ICONS = ["📖", "💬", "✏️", "🧑‍🎓", "✅"];

export default function CourseProcess() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-indigo-deep py-28 text-paper sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl sm:text-4xl"
          >
            {t.process.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-paper/65"
          >
            {t.process.subheading}
          </motion.p>
        </div>

        <div className="mt-16 space-y-6">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-6 rounded-2xl border border-paper/10 bg-paper/5 p-6 sm:gap-8 sm:p-8"
            >
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-paper/10 text-2xl">
                {ICONS[i % ICONS.length]}
              </span>
              <div>
                <h3 className="font-display text-lg sm:text-xl">{step.title}</h3>
                <p className="mt-1 text-sm text-paper/60 sm:text-base">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
