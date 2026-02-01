import AboutHero from "@/components/sections/AboutHero";
import Team from "@/components/sections/Team";
import Values from "@/components/sections/Values";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import BlogPreview from "@/components/sections/BlogPreview";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "About WebifyTech | The Team Behind Your Digital Growth",
  description: "Meet the WebifyTech team — experienced web developers, designers, and strategists who build digital solutions that actually convert and grow your business.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Stats />
      <Process />
      <Values />
      <Team />
      <BlogPreview />
      <CTA />
    </>
  );
}


