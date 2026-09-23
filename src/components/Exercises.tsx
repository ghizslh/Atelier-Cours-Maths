import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

function TiltCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: reduceMotion ? 0 : rotateX, rotateY: reduceMotion ? 0 : rotateY, transformPerspective: 800 }}
      className="group relative rounded-3xl bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      <h3 className="font-display text-xl text-ink">{title}</h3>
      <p className="mt-2 max-h-0 overflow-hidden text-sm text-ink/60 opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-20 group-hover:opacity-100">
        {description}
      </p>
    </motion.div>
  );
}

export default function Exercises() {
  const { t } = useLanguage();

  return (
    <section id="exercices" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl text-ink sm:text-4xl"
          >
            {t.exercises.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-ink/60"
          >
            {t.exercises.subheading}
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.exercises.categories.map((cat, i) => (
            <TiltCard key={cat.title} title={cat.title} description={cat.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
