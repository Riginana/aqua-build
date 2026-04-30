import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Award, Users, ShieldCheck, MessageSquare, Quote, Star, MapPin, Trophy } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ServiceIcon } from "./ServiceIcon";
import { WaveDivider } from "./WaveDivider";
import { projects } from "./projects-data";
import { LeadForm } from "./LeadForm";
import heroBg from "@/assets/hero-pool.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
      {/* ripple bubbles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className="absolute block rounded-full border border-white/30"
            style={{
              left: `${10 + i * 18}%`,
              bottom: `-${20 + i * 5}px`,
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
            }}
            animate={{ y: [0, -120 - i * 20, 0], opacity: [0.0, 0.5, 0.0] }}
            transition={{ duration: 8 + i, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-20 md:px-6 md:pb-40 md:pt-32">
        <motion.div
          initial="hidden" animate="show" variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold backdrop-blur md:text-sm"
        >
          <Trophy className="h-4 w-4" />
          <span>{t("badge.leader2025")}</span>
        </motion.div>
        <motion.h1
          initial="hidden" animate="show" variants={fadeUp}
          className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          initial="hidden" animate="show" variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay: 0.1 } } }}
          className="mt-5 max-w-2xl text-base text-white/90 md:text-lg whitespace-pre-line"
        >
          {t("hero.sub")}
        </motion.p>
        <motion.div
          initial="hidden" animate="show" variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay: 0.2 } } }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link to="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-cyan px-7 text-sm font-bold text-white shadow-lg transition-all hover:shadow-[var(--shadow-glow)]">
            {t("cta.consult")}
          </Link>
          <Link to="/projects" className="inline-flex min-h-[48px] items-center px-2 text-sm font-semibold text-white/80 transition-colors hover:text-white hover:underline underline-offset-4">
            {t("cta.projects")} →
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fill="var(--background)" />
      </div>
    </section>
  );
}

export function TrustBar() {
  const { t } = useI18n();
  const items = [
    { icon: Award, label: t("trust.experience") },
    { icon: Trophy, label: t("trust.objects") },
    { icon: MapPin, label: t("trust.geo") },
    { icon: ShieldCheck, label: t("trust.warranty") },
    { icon: Trophy, label: t("trust.leader") },
  ];
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-5 md:px-6">
        {items.map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex items-center gap-3">
            <Icon className="h-6 w-6 shrink-0 text-cyan" />
            <span className="text-sm font-semibold md:text-base">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const SERVICES = [
  { key: "pool", icon: "pool" },
  { key: "hammam", icon: "hammam" },
  { key: "banya", icon: "banya" },
  { key: "sauna", icon: "sauna" },
  { key: "fountain", icon: "fountain" },
  { key: "water", icon: "water" },
] as const;

export function Services({ withCta = true }: { withCta?: boolean }) {
  const { t } = useI18n();
  return (
    <section className="bg-background py-12 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan">{t("services.kicker")}</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy md:text-5xl">{t("services.title")}</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 md:mt-12 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-4 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] md:p-7"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan to-teal" />
              <div className="text-cyan">
                <ServiceIcon name={s.icon} className="h-9 w-9 md:h-12 md:w-12" />
              </div>
              <h3 className="mt-3 text-base font-bold text-navy md:mt-5 md:text-xl">{t(`services.${s.key}.title`)}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:mt-2 md:text-sm">{t(`services.${s.key}.desc`)}</p>
              {withCta && (
                <Link to="/services" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-teal hover:text-cyan md:mt-5 md:text-sm">
                  {t("cta.more")} →
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const { t } = useI18n();
  const items = [
    { icon: Award, k: "1" },
    { icon: Users, k: "2" },
    { icon: ShieldCheck, k: "3" },
    { icon: MessageSquare, k: "4" },
  ];
  return (
    <section className="bg-light-gray py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy md:text-5xl">{t("why.title")}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, k }, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{t(`why.${k}.title`)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t(`why.${k}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowWeWork() {
  const { t } = useI18n();
  const steps = [t("how.1"), t("how.2"), t("how.3"), t("how.4")];
  return (
    <section className="relative bg-navy py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">{t("how.title")}</h2>
        <div className="relative mt-14 grid gap-10 md:grid-cols-4">
          <div className="absolute left-8 right-8 top-7 hidden border-t-2 border-dashed border-cyan/40 md:block" aria-hidden />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-cyan text-xl font-extrabold text-white shadow-[var(--shadow-glow)]">
                {i + 1}
              </div>
              <p className="mt-4 max-w-[16rem] text-sm font-semibold text-white/90 md:text-base">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsPreview() {
  const { t, lang } = useI18n();
  const list = projects.slice(0, 6);
  return (
    <section className="bg-background py-12 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy md:text-5xl">{t("projects.title")}</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:mt-12 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-light-gray shadow-[var(--shadow-card)]"
            >
              <img src={p.src} alt={lang === "ru" ? p.titleRu : p.titleKg} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 md:p-5">
                <p className="text-xs font-bold text-white md:text-lg">{lang === "ru" ? p.titleRu : p.titleKg}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/projects" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-navy px-8 text-sm font-bold text-white transition-colors hover:bg-navy-deep">
            {t("cta.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { t } = useI18n();
  const items = [1, 2, 3] as const;
  return (
    <section className="bg-light-gray py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy md:text-5xl">{t("reviews.title")}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((i, idx) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="relative rounded-2xl bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-cyan/20" />
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy/90">«{t(`reviews.${i}.text`)}»</p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-bold text-navy">{t(`reviews.${i}.name`)}</p>
                <p className="text-xs text-muted-foreground">{t(`reviews.${i}.role`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaForm() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--gradient-cta)" }}>
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <svg viewBox="0 0 1200 600" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0,300 C300,400 600,200 900,300 C1100,360 1200,280 1200,280 L1200,600 L0,600 Z" fill="white" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">{t("ctaSection.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg">{t("ctaSection.sub")}</p>
        </div>
        <div className="mt-10 rounded-3xl bg-white/5 p-6 backdrop-blur md:p-10">
          <LeadForm variant="dark" />
        </div>
      </div>
    </section>
  );
}
