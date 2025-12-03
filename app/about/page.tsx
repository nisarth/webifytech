import AboutHero from "@/components/sections/AboutHero";
import Team from "@/components/sections/Team";
import Values from "@/components/sections/Values";
import Stats from "@/components/sections/Stats";

export const metadata = {
  title: "About Us - WebifyTech",
  description: "Learn about WebifyTech's mission, team, and values. We're passionate about creating exceptional digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Values />
      <Team />
      <Stats />
    </>
  );
}

