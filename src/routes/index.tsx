import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Hero, TrustBar, Services, WhyUs, HowWeWork, ProjectsPreview, Testimonials, CtaForm } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AQUA BRABUS KG — Бассейны, хамам, сауна, фонтаны под ключ в Кыргызстане" },
      { name: "description", content: "Профессиональное строительство бассейнов, хамамов, саун, фонтанов и очистных сооружений под ключ. 5+ лет опыта, 100+ объектов по всему Кыргызстану." },
      { property: "og:title", content: "AQUA BRABUS KG — строительство бассейнов под ключ" },
      { property: "og:description", content: "Бассейны, хамам, финская сауна, русская баня, фонтаны и очистные сооружения. Под ключ. Гарантия 5 лет." },
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
