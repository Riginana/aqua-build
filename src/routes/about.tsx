import { createFileRoute } from "@tanstack/react-router";
import { Check, Trophy } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { CtaForm, TrustBar } from "@/components/site/sections";
import { useI18n } from "@/lib/i18n";
import about from "@/assets/pool-3.jpeg";
import award1 from "@/assets/award-diploma.png";
import award2 from "@/assets/award-statue.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О компании — AQUA BRABUS KG" },
      {
        name: "description",
        content:
          "AQUA BRABUS KG — лидер в строительстве водных и банных комплексов 2025. 5+ лет опыта, 100+ объектов, бассейны, хамамы, сауны под ключ.",
      },
      { property: "og:title", content: "О компании AQUA BRABUS KG" },
      {
        property: "og:description",
        content:
          "Лидер в строительстве водных и банных комплексов 2025. 5+ лет опыта, собственная бригада, гарантия 5 лет.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const values = ["about.v1", "about.v2", "about.v3", "about.v4", "about.v5"];

  return (
    <SiteLayout>
      {/* Hero */}
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

      {/* О компании */}
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

      {/* Признание на национальном уровне */}
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gold">
              🏆 The Great Awards of the Year
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Признание на национальном уровне
            </h2>
            <p className="max-w-2xl text-base text-white/75">
              В 2025 году AQUA BRABUS KG удостоена диплома и хрустального кубка за безупречное лидерство, высокий
              уровень качества и значимый вклад в развитие отрасли.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={award1}
                alt="Диплом Лидер в строительстве водных и банных комплексов 2025"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={award2}
                alt="Кубок The Great Awards of the Year — AQUA BRABUS KG, Kyrgyzstan 2025"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold text-white">
              🥇 Лидер в строительстве водных и банных комплексов
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold text-white">
              📍 Кыргызстан, 2025
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold text-white">
              🏢 ND Production
            </div>
          </div>
        </div>
      </section>

      <CtaForm />
    </SiteLayout>
  );
}
