import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { SiteLayout } from "@/components/site/Layout";
import { CtaForm } from "@/components/site/sections";
import { projects, type Category } from "@/components/site/projects-data";
import { useI18n } from "@/lib/i18n";
import { MapPin, Clock, X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Проекты — портфолио бассейнов и хамамов | AQUA BRABUS KG" },
      { name: "description", content: "Галерея реализованных проектов: бассейны, хамамы, сауны и фонтаны по всему Кыргызстану. Более 100 объектов под ключ." },
      { property: "og:title", content: "Проекты AQUA BRABUS KG" },
      { property: "og:description", content: "Реальные работы — бассейны, хамам, сауны, фонтаны." },
    ],
  }),
  component: ProjectsPage,
});

const FILTERS: { key: "all" | Category; labelKey: string }[] = [
  { key: "all", labelKey: "projects.filter.all" },
  { key: "pools", labelKey: "projects.filter.pools" },
  { key: "hammam", labelKey: "projects.filter.hammam" },
  { key: "sauna", labelKey: "projects.filter.sauna" },
  { key: "fountain", labelKey: "projects.filter.fountain" },
];

const WHATSAPP_NUMBER = "996707148555";

function ProjectsPage() {
  const { t, lang } = useI18n();
  const [active, setActive] = React.useState<"all" | Category>("all");
  const [lightboxIdx, setLightboxIdx] = React.useState<number | null>(null);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  // Закрытие по Escape, навигация стрелками
  React.useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight") setLightboxIdx((i) => i !== null ? Math.min(i + 1, filtered.length - 1) : null);
      if (e.key === "ArrowLeft") setLightboxIdx((i) => i !== null ? Math.max(i - 1, 0) : null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, filtered.length]);

  // Блокировка скролла при открытом лайтбоксе
  React.useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  const current = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  return (
    <SiteLayout>
      <section className="bg-navy py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{t("projects.title")}</h1>
          <p className="mt-4 text-lg text-white/80">Реализованные объекты по всему Кыргызстану</p>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">

          {/* Фильтры */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(f.key)}
                className={`min-h-[44px] rounded-full px-5 text-sm font-bold transition-colors ${
                  active === f.key
                    ? "bg-cyan text-white shadow-[var(--shadow-glow)]"
                    : "border border-border bg-white text-navy hover:border-cyan hover:text-cyan"
                }`}
              >
                {t(f.labelKey)}
              </button>
            ))}
          </div>

          {/* Сетка карточек */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                  onClick={() => setLightboxIdx(i)}
                >
                  {/* Фото */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.src}
                      alt={lang === "ru" ? p.titleRu : p.titleKg}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    {/* Год */}
                    <span className="absolute right-3 top-3 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                      {p.year}
                    </span>
                  </div>

                  {/* Контент */}
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="text-lg font-extrabold text-navy">
                      {lang === "ru" ? p.titleRu : p.titleKg}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {lang === "ru" ? p.descRu : p.descKg}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-3 border-t border-border pt-3">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 text-cyan" />
                        {lang === "ru" ? p.locationRu : p.locationKg}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-cyan" />
                        {p.term}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Лайтбокс */}
      <AnimatePresence>
        {current && lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/90 p-4 backdrop-blur-sm"
            onClick={() => setLightboxIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Фото */}
              <div className="relative md:w-1/2">
                <img
                  src={current.src}
                  alt={lang === "ru" ? current.titleRu : current.titleKg}
                  className="h-64 w-full object-cover md:h-full"
                />
                {/* Навигация */}
                {lightboxIdx > 0 && (
                  <button
                    onClick={() => setLightboxIdx(lightboxIdx - 1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/40"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                )}
                {lightboxIdx < filtered.length - 1 && (
                  <button
                    onClick={() => setLightboxIdx(lightboxIdx + 1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/40"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Детали */}
              <div className="flex flex-1 flex-col gap-4 p-7 md:p-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan">
                    {current.year}
                  </span>
                  <h2 className="mt-1 text-2xl font-extrabold text-navy md:text-3xl">
                    {lang === "ru" ? current.titleRu : current.titleKg}
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {lang === "ru" ? current.descRu : current.descKg}
                </p>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-navy/80">
                    <MapPin className="h-4 w-4 shrink-0 text-cyan" />
                    {lang === "ru" ? current.locationRu : current.locationKg}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy/80">
                    <Clock className="h-4 w-4 shrink-0 text-cyan" />
                    Срок: {current.term}
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Здравствуйте! Хочу узнать подробнее о проекте:\n*${lang === "ru" ? current.titleRu : current.titleKg}*\n(${lang === "ru" ? current.locationRu : current.locationKg})\n\nМоё имя:\nМой телефон:`
                    )}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow transition-all hover:opacity-90"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Хочу такой же проект
                  </a>
                </div>
              </div>

              {/* Кнопка закрытия */}
              <button
                onClick={() => setLightboxIdx(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/40 md:text-navy md:bg-black/10"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CtaForm />
    </SiteLayout>
  );
}