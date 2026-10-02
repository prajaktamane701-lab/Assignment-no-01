import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/conejo/Header";
import { Footer } from "@/components/conejo/Footer";
import Hero from "@/components/conejo/Hero";
import Story from "@/components/conejo/Story";
import WhoWeHelp from "@/components/conejo/WhoWeHelp";
import Promise from "@/components/conejo/Promise";
import Specialties from "@/components/conejo/Specialties";
import HowWeWork from "@/components/conejo/HowWeWork";
import Appointment from "@/components/conejo/Appointment";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Conejo Valley Family Counseling | Therapy in Newbury Park & California" },
    { name: "description", content: "Compassionate counseling for adults, couples, children and teens in Newbury Park and across California." },
    { property: "og:title", content: "Conejo Valley Family Counseling" },
    { property: "og:description", content: "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <WhoWeHelp />
        <Promise />
        <Specialties />
        <HowWeWork />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
