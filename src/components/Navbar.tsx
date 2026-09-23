import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const SECTION_IDS = ["accueil", "methode", "apropos", "contact"];

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: SECTION_IDS[0], label: t.nav.home },
    { id: SECTION_IDS[1], label: t.nav.method },
    { id: SECTION_IDS[2], label: t.nav.about },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-lg bg-paper/75 shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <a href={`#${SECTION_IDS[0]}`} className="font-display text-lg tracking-tight text-ink">
          {t.nav.logo}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-ink/70 transition-colors duration-300 hover:text-indigo"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="rounded-full border border-ink/15 px-3 py-1.5 text-xs text-ink/70 transition-colors hover:border-indigo hover:text-indigo"
            aria-label="Changer de langue / تغيير اللغة"
          >
            {lang === "fr" ? "AR" : "FR"}
          </button>
          <a
            href={`#${SECTION_IDS[3]}`}
            className="hidden rounded-full bg-indigo px-5 py-2 text-sm text-white transition-transform duration-300 hover:scale-105 sm:inline-block"
          >
            {t.nav.cta}
          </a>
          <button
            className="text-ink md:hidden"
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-paper/95 px-6 py-4 backdrop-blur-lg md:hidden">
          {[...links, { id: SECTION_IDS[3], label: t.nav.contact }].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-lg px-2 py-2.5 text-sm text-ink/80 hover:bg-indigo-soft"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
