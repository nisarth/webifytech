import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";

export const metadata = {
  title: "Start Your Project | Contact WebifyTech",
  description: "Ready to scale? Contact our team of experts today for a free discovery call and see how we can transform your digital presence.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </>
  );
}


