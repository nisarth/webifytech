import TestimonialsHero from "@/components/sections/TestimonialsHero";
import TestimonialsList from "@/components/sections/TestimonialsList";

export const metadata = {
  title: "Testimonials - WebifyTech",
  description: "Read what our clients say about working with WebifyTech.",
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsList />
    </>
  );
}

