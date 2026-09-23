import { useLanguage } from "../context/LanguageContext";
import { teacherInfo } from "../data/content";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-ink/10 bg-paper py-12">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-6 text-center sm:px-10 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg text-ink">{teacherInfo.firstName}</p>
          <p className="mt-1 text-xs text-ink/45">{t.footer.tagline}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-5">
          {t.footer.links.map((link) => (
            <span key={link} className="text-xs text-ink/50">
              {link}
            </span>
          ))}
        </nav>

        <div className="flex gap-4 text-xs text-ink/50">
          <span>{teacherInfo.instagramHandle}</span>
        </div>
      </div>
    </footer>
  );
}
