import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import FloatingSymbols from "./scene/FloatingSymbols";
import TeacherPresence from "./scene/TeacherPresence";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="accueil" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <FloatingSymbols />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-6 sm:px-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-sm text-indigo">{t.hero.kicker}</p>
          <h1 className="font-display text-4xl leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-md text-base text-ink/70 sm:text-lg">{t.hero.subtitle}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#methode"
              className="rounded-full bg-indigo px-7 py-3.5 text-sm text-white shadow-soft transition-transform duration-300 hover:scale-105"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/20 px-7 py-3.5 text-sm text-ink transition-colors duration-300 hover:border-indigo hover:text-indigo"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <TeacherPresence />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-ink/40">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}
