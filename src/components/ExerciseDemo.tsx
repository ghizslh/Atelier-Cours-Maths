import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ExerciseDemo() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);

  function close() {
    setOpen(false);
    setShowCorrection(false);
  }

  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl text-ink sm:text-4xl"
            >
              {t.demo.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 max-w-md text-ink/60"
            >
              {t.demo.subheading}
            </motion.p>
            <p className="mt-6 text-xs italic text-ink/40">{t.demo.note}</p>
          </div>

          <motion.div
          >
            <p className="text-xs uppercase tracking-wide text-ink/40">{t.demo.cardTitle}</p>
            <h3 className="mt-2 font-display text-2xl text-ink">{t.demo.cardCategory}</h3>
            <p className="mt-1 text-sm text-gold">{t.demo.cardLevel}</p>
            <button
              onClick={() => setOpen(true)}
              className="mt-6 w-full rounded-full bg-indigo py-3 text-sm text-white transition-transform duration-300 hover:scale-105"
            >
              {t.demo.viewButton}
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 px-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl bg-white p-8 shadow-card"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink/40">{t.demo.cardTitle}</p>
                  <h3 className="font-display text-xl text-ink">{t.demo.cardCategory}</h3>
                </div>
                <button onClick={close} aria-label="close" className="text-ink/40 hover:text-ink">
                  ✕
                </button>
              </div>

              <p className="mt-6 text-xs font-medium text-ink/50">{t.demo.statementLabel}</p>
              <p className="mt-2 rounded-xl bg-paper p-4 text-sm text-ink/60">{t.demo.statementPlaceholder}</p>

              {!showCorrection ? (
                <button
                  onClick={() => setShowCorrection(true)}
                  className="mt-6 w-full rounded-full border border-indigo px-5 py-3 text-sm text-indigo transition-colors duration-300 hover:bg-indigo hover:text-white"
                >
                  {t.demo.showCorrection}
                </button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 overflow-hidden"
                >
                  <p className="text-xs font-medium text-sage">{t.demo.correctionLabel}</p>
                  <p className="mt-2 rounded-xl bg-sage-soft p-4 text-sm text-ink/70">{t.demo.correctionPlaceholder}</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
