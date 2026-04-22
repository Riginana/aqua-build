import { createFileRoute } from "@tanstack/react-router";
import { Check, Trophy } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { CtaForm, TrustBar } from "@/components/site/sections";
import { useI18n } from "@/lib/i18n";
import about from "@/assets/pool-3.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О компании — AQUA BRABUS KG" },
      { name: "description", content: "AQUA BRABUS KG — лидер в строительстве водных и банных комплексов 2025. 5+ лет опыта, 100+ объектов, бассейны, хамамы, сауны под ключ." },
      { property: "og:title", content: "О компании AQUA BRABUS KG" },
      { property: "og:description", content: "Лидер в строительстве водных и банных комплексов 2025. 5+ лет опыта, собственная бригада, гарантия 5 лет." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const values = ["about.v1", "about.v2", "about.v3", "about.v4", "about.v5"];
  return (
    <SiteLayout>
      <section className="bg-navy py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold backdrop-blur md:text-sm">
            <Trophy className="h-4 w-4" />
            <span>{t("badge.leader2025")}</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{t("about.title")}</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/85">{t("about.lead")}</p>
        </div>
      </section>

      <TrustBar />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-6">
          <div>
            <p className="text-base leading-relaxed text-navy/90">{t("about.p1")}</p>
            <p className="mt-5 text-base leading-relaxed text-navy/90">{t("about.p2")}</p>

            <h2 className="mt-10 text-2xl font-extrabold text-navy">{t("about.values")}</h2>
            <ul className="mt-5 space-y-3">
              {values.map((k) => (
                <li key={k} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-base font-semibold text-navy">{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img src={about} alt="AQUA BRABUS KG" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <CtaForm />
    </SiteLayout>
  );
}
