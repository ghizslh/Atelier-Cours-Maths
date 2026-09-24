import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { teacherInfo } from "../data/content";

export default function Teacher() {
  const { t } = useLanguage();

  const facts = [
    { label: t.teacher.labels.specialty, value: t.teacher.specialtyValue },
    { label: t.teacher.labels.level, value: t.teacher.levelValue },
    { label: t.teacher.labels.approach, value: t.teacher.approachValue },
    { label: t.teacher.labels.support, value: t.teacher.supportValue },
  ];

  return (
    <section id="apropos" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-content items-start gap-16 px-6 sm:px-10 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:sticky md:top-28"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] bg-gradient-to-br from-indigo-soft to-sage-soft shadow-card">
            <div className="prof-image">
              <img
                src={`${import.meta.env.BASE_URL}prof.png`}
                alt="Professeure de mathématiques"
              />
            </div>
          </div>

          <p className="mt-4 font-display text-xl text-ink">
            {teacherInfo.firstName}
          </p>

          <p className="text-sm text-ink/50">
            {teacherInfo.city}
          </p>
        </motion.div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl leading-tight text-ink sm:text-4xl"
          >
            {t.teacher.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-xl text-base text-ink/70"
          >
            {t.teacher.intro}
          </motion.p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border-t border-ink/10 pt-3"
              >
                <dt className="text-xs text-ink/45">{fact.label}</dt>
                <dd className="mt-1 text-sm text-ink/85">{fact.value}</dd>
              </motion.div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            {t.teacher.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-full bg-white px-4 py-2 text-xs text-ink/70 shadow-soft"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
