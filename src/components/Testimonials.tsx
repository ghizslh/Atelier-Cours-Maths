import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
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
          {t.testimonials.heading}
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl bg-white p-7 shadow-soft"
            >
              <p className="text-gold">★★★★★</p>
              <blockquote className="mt-3 text-sm leading-relaxed text-ink/75">“{item.quote}”</blockquote>
              <figcaption className="mt-4 text-xs text-ink/40">{item.author}</figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="mt-6 text-xs italic text-ink/40">{t.testimonials.editNote}</p>
      </div>
    </section>
  );
}
