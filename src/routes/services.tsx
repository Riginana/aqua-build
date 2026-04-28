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

const SERVICES_DETAIL = [
  {
    key: "pool" as const,
    icon: "pool" as const,
    stages: ["Замер и проектирование", "Земляные работы и опалубка", "Монтаж чаши и гидроизоляция", "Система фильтрации и оборудование", "Отделка плиткой или мозаикой", "Пусконаладка и сдача"],
    details: ["Частные и коммерческие бассейны", "Внутренние и наружные", "Любая форма и размер", "Оборудование Hayward, Kripsol, Pahlen", "Гарантия 5 лет"],
    price: "от 800 000 сом",
    term: "от 30 дней",
  },
  {
    key: "hammam" as const,
    icon: "hammam" as const,
    stages: ["Проектирование паровой комнаты", "Теплоизоляция и пароизоляция", "Укладка мозаики и мрамора", "Монтаж парогенератора", "Подсветка и сантехника", "Тестирование и сдача"],
    details: ["Классическая турецкая техника", "Мозаика ручной укладки", "Парогенераторы Harvia, Tylo", "Подогрев пола и лежаков", "Ароматерапия и хромотерапия"],
    price: "от 400 000 сом",
    term: "от 20 дней",
  },
  {
    key: "banya" as const,
    icon: "banya" as const,
    stages: ["Проект и выбор материалов", "Фундамент и сруб", "Кровля и утепление", "Печь, дымоход, вентиляция", "Внутренняя отделка деревом", "Запуск и сдача"],
    details: ["Сруб из сосны, ели, кедра", "Дровяные и электропечи", "Традиционная парная", "Комната отдыха", "Купель или бассейн — опционально"],
    price: "от 300 000 сом",
    term: "от 25 дней",
  },
  {
    key: "sauna" as const,
    icon: "sauna" as const,
    stages: ["Обмер помещения", "Каркас и теплоизоляция", "Обшивка вагонкой", "Монтаж электропечи", "Подсветка и стеклянная дверь", "Сдача объекта"],
    details: ["Осина, липа, термодерево", "Печи Harvia, Helo, Tylo", "Температура до 100 °C", "Встроенная вентиляция", "Компактные решения для квартир"],
    price: "от 150 000 сом",
    term: "от 7 дней",
  },
  {
    key: "fountain" as const,
    icon: "fountain" as const,
    stages: ["Дизайн-проект фонтана", "Устройство чаши и основания", "Монтаж насосов и трубопровода", "Подсветка и автоматика", "Отделка и декор", "Запуск и обслуживание"],
    details: ["Декоративные и архитектурные", "Питьевые и каскадные", "Подсветка RGB LED", "Автоматическое управление", "Сезонная консервация"],
    price: "от 200 000 сом",
    term: "от 14 дней",
  },
  {
    key: "water" as const,
    icon: "water" as const,
    stages: ["Анализ воды и подбор системы", "Проектирование схемы очистки", "Монтаж оборудования", "Прокладка трубопроводов", "Пусконаладка и настройка", "Обслуживание и сервис"],
    details: ["Песочные и картриджные фильтры", "УФ-стерилизация", "Системы хлорирования и озонирования", "Автоматический дозатор химии", "Обслуживание по договору"],
    price: "от 100 000 сом",
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
          {SERVICES_DETAIL.map((s, idx) => (
            <div
              key={s.key}
              className={`flex flex-col gap-8 rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-card)] md:flex-row md:items-start md:gap-12 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon + Meta */}
              <div className="flex shrink-0 flex-col items-start gap-5 md:w-64">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                  <ServiceIcon name={s.icon} className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-extrabold text-navy md:text-3xl">
                  {t(`services.${s.key}.title`)}
                </h2>
                <div className="flex w-full flex-col gap-2 rounded-2xl bg-light-gray p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-muted-foreground">Стоимость</span>
                    <span className="font-bold text-navy">{s.price}</span>
                  </div>
                  <div className="border-t border-border" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-muted-foreground">Срок</span>
                    <span className="font-bold text-navy">{s.term}</span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-cyan px-6 text-sm font-bold text-white shadow transition-all hover:shadow-[var(--shadow-glow)]"
                >
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
          ))}
        </div>
      </section>

      <CtaForm />
    </SiteLayout>
  );
}
