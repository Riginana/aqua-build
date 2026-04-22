import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Services, CtaForm } from "@/components/site/sections";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Услуги — Бассейны, хамам, сауна, фонтаны | AQUA BRABUS KG" },
      { name: "description", content: "Полный спектр услуг: строительство бассейнов, турецких хамамов, финских саун, русских бань, фонтанов и систем водоочистки под ключ." },
      { property: "og:title", content: "Услуги AQUA BRABUS KG" },
      { property: "og:description", content: "6 направлений: бассейны, хамам, русская баня, финская сауна, фонтаны, очистные сооружения." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <section className="bg-navy py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan">{t("services.kicker")}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">{t("services.title")}</h1>
        </div>
      </section>
      <Services withCta={false} />
      <CtaForm />
    </SiteLayout>
  );
}
