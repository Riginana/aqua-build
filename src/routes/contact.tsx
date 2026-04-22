import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { LeadForm } from "@/components/site/LeadForm";
import { useI18n } from "@/lib/i18n";

const PHONE_DISPLAY = "+996 707 148 555";
const PHONE_TEL = "+996707148555";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Контакты — AQUA BRABUS KG | Бишкек, Кыргызстан" },
      { name: "description", content: "Свяжитесь с AQUA BRABUS KG: телефон +996 707 148 555, WhatsApp, Instagram. Бесплатная консультация и выезд на объект." },
      { property: "og:title", content: "Контакты AQUA BRABUS KG" },
      { property: "og:description", content: "Звоните, пишите в WhatsApp или Instagram — ответим в течение дня." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const items = [
    { icon: Phone, label: t("contact.phone"), value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { icon: MessageCircle, label: t("contact.whatsapp"), value: PHONE_DISPLAY, href: `https://wa.me/${PHONE_TEL.replace("+", "")}` },
    { icon: Instagram, label: t("contact.instagram"), value: "@aqua_brabus_kg", href: "https://instagram.com/aqua_brabus_kg" },
    { icon: MapPin, label: t("contact.address"), value: t("footer.address"), href: null },
  ];
  return (
    <SiteLayout>
      <section className="bg-navy py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{t("contact.title")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{t("contact.sub")}</p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-5 md:px-6">
          <div className="md:col-span-2">
            <ul className="space-y-4">
              {items.map(({ icon: Icon, label, value, href }, i) => {
                const inner = (
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-card)] transition-colors hover:border-cyan">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
                      <p className="mt-0.5 text-base font-bold text-navy">{value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={i}>
                    {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer noopener">{inner}</a> : inner}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-3xl border border-border bg-light-gray p-6 md:p-10">
              <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{t("ctaSection.title")}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t("ctaSection.sub")}</p>
              <div className="mt-6">
                <LeadForm variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
