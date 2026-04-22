import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/Layout";
import { CtaForm } from "@/components/site/sections";
import { projects, type Category } from "@/components/site/projects-data";
import { useI18n } from "@/lib/i18n";

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

function ProjectsPage() {
  const { t, lang } = useI18n();
  const [active, setActive] = React.useState<"all" | Category>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <SiteLayout>
      <section className="bg-navy py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{t("projects.title")}</h1>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(f.key)}
                className={`min-h-[44px] rounded-full px-5 text-sm font-bold transition-colors ${
                  active === f.key ? "bg-cyan text-white shadow-[var(--shadow-glow)]" : "border border-border bg-white text-navy hover:border-cyan hover:text-cyan"
                }`}
              >
                {t(f.labelKey)}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-light-gray shadow-[var(--shadow-card)]"
              >
                <img src={p.src} alt={lang === "ru" ? p.titleRu : p.titleKg} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-lg font-bold text-white">{lang === "ru" ? p.titleRu : p.titleKg}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaForm />
    </SiteLayout>
  );
}
