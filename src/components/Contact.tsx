import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { teacherInfo } from "../data/content";
import FloatingSymbols from "./scene/FloatingSymbols";
import TeacherPresence from "./scene/TeacherPresence";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden bg-indigo-deep py-28 text-paper sm:py-36">
      <FloatingSymbols
        symbols={[
          { glyph: "√", x: 6, y: 20, depth: 0.5, size: 40, color: "gold" },
          { glyph: "π", x: 92, y: 30, depth: 0.6, size: 34, color: "gold" },
          { glyph: "∑", x: 88, y: 75, depth: 0.4, size: 30, color: "gold" },
        ]}
      />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-6 sm:px-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl leading-tight sm:text-4xl md:text-5xl">{t.contact.heading}</h2>
          <p className="mt-5 max-w-md text-paper/70">{t.contact.subheading}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${teacherInfo.whatsapp.replace(/\D/g, "")}`}
              className="rounded-full bg-sage px-6 py-3.5 text-sm text-white transition-transform duration-300 hover:scale-105"
            >
              {t.contact.whatsapp}
            </a>
            <a
              href={`tel:${teacherInfo.phone}`}
              className="rounded-full border border-paper/30 px-6 py-3.5 text-sm text-paper transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              {t.contact.call}
            </a>
            <a
              href={teacherInfo.instagramUrl}
              className="rounded-full border border-paper/30 px-6 py-3.5 text-sm text-paper transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              {t.contact.instagram} · {teacherInfo.instagramHandle}
            </a>
          </div>

          <p className="mt-8 text-xs text-paper/40">{teacherInfo.city} · {teacherInfo.neighborhood}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="[&_.text-indigo-deep]:text-gold"
        >
          <TeacherPresence />
        </motion.div>
      </div>
    </section>
  );
}
