import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Hero, TrustBar, Services, WhyUs, HowWeWork, ProjectsPreview, Testimonials, CtaForm } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AQUA BRABUS KG — Лидер в строительстве водных и банных комплексов 2025" },
      { name: "description", content: "Лидер в строительстве водных и банных комплексов 2025. Бассейны, хамам, сауна, фонтаны и очистные сооружения под ключ. 5+ лет опыта, 100+ объектов по Кыргызстану." },
      { property: "og:title", content: "AQUA BRABUS KG — Лидер 2025 в строительстве бассейнов и банных комплексов" },
      { property: "og:description", content: "Лидер 2025. Бассейны, хамам, финская сауна, русская баня, фонтаны и очистные сооружения. Под ключ. Гарантия 5 лет." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <HowWeWork />
      <ProjectsPreview />
      <Testimonials />
      <CtaForm />
    </SiteLayout>
  );
}
