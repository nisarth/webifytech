import ServicesHero from "@/components/sections/ServicesHero";
import ServiceList from "@/components/sections/ServiceList";
import Process from "@/components/sections/Process";

export const metadata = {
  title: "Services - WebifyTech",
  description:
    "Comprehensive digital and e-commerce services including web design, development, SEO, and digital marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceList />
      <Process />
    </>
  );
}
