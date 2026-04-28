import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { CtaForm } from "@/components/site/sections";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { useI18n } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";

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

const WHATSAPP_NUMBER = "996707148555";

function buildServiceWhatsAppUrl(serviceTitle: string): string {
  const text = `Здравствуйте! Хочу получить расчёт стоимости услуги:\n*${serviceTitle}*\n\nМоё имя:\nМой телефон:`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const SERVICES_DETAIL = [
  {
    key: "pool" as const,
    icon: "pool" as const,
    stages: ["Замер и проектирование", "Земляные работы и опалубка", "Монтаж чаши и гидроизоляция", "Система фильтрации и оборудование", "Отделка плиткой или мозаикой", "Пусконаладка и сдача"],
    details: ["Частные и коммерческие бассейны", "Внутренние и наружные", "Любая форма и размер", "Оборудование Hayward, Kripsol, Pahlen", "Гарантия 5 лет"],
    term: "от 30 дней",
  },
  {
    key: "hammam" as const,
    icon: "hammam" as const,
    stages: ["Проектирование паровой комнаты", "Теплоизоляция и пароизоляция", "Укладка мозаики и мрамора", "Монтаж парогенератора", "Подсветка и сантехника", "Тестирование и сдача"],
    details: ["Классическая турецкая техника", "Мозаика ручной укладки", "Парогенераторы Harvia, Tylo", "Подогрев пола и лежаков", "Ароматерапия и хромотерапия"],
    term: "от 20 дней",
  },
  {
    key: "banya" as const,
    icon: "banya" as const,
    stages: ["Проект и выбор материалов", "Фундамент и сруб", "Кровля и утепление", "Печь, дымоход, вентиляция", "Внутренняя отделка деревом", "Запуск и сдача"],
    details: ["Сруб из сосны, ели, кедра", "Дровяные и электропечи", "Традиционная парная", "Комната отдыха", "Купель или бассейн — опционально"],
    term: "от 25 дней",
  },
  {
    key: "sauna" as const,
    icon: "sauna" as const,
    stages: ["Обмер помещения", "Каркас и теплоизоляция", "Обшивка вагонкой", "Монтаж электропечи", "Подсветка и стеклянная дверь", "Сдача объекта"],
    details: ["Осина, липа, термодерево", "Печи Harvia, Helo, Tylo", "Температура до 100 °C", "Встроенная вентиляция", "Компактные решения для квартир"],
    term: "от 7 дней",
  },
  {
    key: "fountain" as const,
    icon: "fountain" as const,
    stages: ["Дизайн-проект фонтана", "Устройство чаши и основания", "Монтаж насосов и трубопровода", "Подсветка и автоматика", "Отделка и декор", "Запуск и обслуживание"],
    details: ["Декоративные и архитектурные", "Питьевые и каскадные", "Подсветка RGB LED", "Автоматическое управление", "Сезонная консервация"],
    term: "от 14 дней",
  },
  {
    key: "water" as const,
    icon: "water" as const,
    stages: ["Анализ воды и подбор системы", "Проектирование схемы очистки", "Монтаж оборудования", "Прокладка трубопроводов", "Пусконаладка и настройка", "Обслуживание и сервис"],
    details: ["Песочные и картриджные фильтры", "УФ-стерилизация", "Системы хлорирования и озонирования", "Автоматический дозатор химии", "Обслуживание по договору"],
    term: "от 5 дней",
  },
] as const;

function ServicesPage() {
  const { t } = useI18n();

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-navy py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan">
            {t("services.kicker")}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
            {t("services.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Полный цикл строительства — от проекта до сдачи объекта. Собственная бригада, гарантия 5 лет.
          </p>
        </div>
      </section>

      {/* Services detailed */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-12 px-4 md:px-6">
          {SERVICES_DETAIL.map((s, idx) => {
            const serviceTitle = t(`services.${s.key}.title`);
            const whatsappUrl = buildServiceWhatsAppUrl(serviceTitle);

            return (
              <div
                key={s.key}
                className={`flex flex-col gap-8 rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-card)] md:flex-row md:items-start md:gap-12 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon + Meta */}
                <div className="flex shrink-0 flex-col items-start gap-5 md:w-56">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                    <ServiceIcon name={s.icon} className="h-10 w-10" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-navy md:text-3xl">
                    {serviceTitle}
                  </h2>
                  <div className="flex w-full flex-col gap-2 rounded-2xl bg-light-gray p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-muted-foreground">Срок</span>
                      <span className="font-bold text-navy">{s.term}</span>
                    </div>
                  </div>
                  
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow transition-all hover:opacity-90"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Получить расчёт
                  </a>
                </div>

                {/* Description + Stages + Features */}
                <div className="flex-1">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {t(`services.${s.key}.desc`)}
                  </p>
                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    {/* Stages */}
                    <div>
                      <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan">
                        Этапы работ
                      </h3>
                      <ol className="space-y-2">
                        {s.stages.map((stage, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-navy/80">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-xs font-bold text-cyan">
                              {i + 1}
                            </span>
                            {stage}
                          </li>
                        ))}
                      </ol>
                    </div>
                    {/* Features */}
                    <div>
                      <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan">
                        Что входит
                      </h3>
                      <ul className="space-y-2">
                        {s.details.map((d, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-navy/80">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaForm />
    </SiteLayout>
  );
}