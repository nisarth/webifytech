import TestimonialsHero from "@/components/sections/TestimonialsHero";
import TestimonialsList from "@/components/sections/TestimonialsList";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Client Stories & Reviews | WebifyTech",
  description: "Proof of performance. Read how our clients have transformed their businesses with WebifyTech's custom digital solutions.",
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsList />
      <CTA />
    </>
  );
}


