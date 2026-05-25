import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Comparison } from "@/components/site/Comparison";
import { Engagement } from "@/components/site/Engagement";
import { Industries } from "@/components/site/Industries";
import { TechStack } from "@/components/site/TechStack";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CogneticAI — Scale Your Engineering. Without the Overhead." },
      {
        name: "description",
        content:
          "CogneticAI delivers managed developers, AI automation, and full-stack software delivery for startups and enterprises worldwide.",
      },
      { property: "og:title", content: "CogneticAI — Engineering, Delivered." },
      {
        property: "og:description",
        content:
          "Managed developers, AI automation, and full-stack software delivery. Zero overhead. Pure execution.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Comparison />
        <Engagement />
        <Industries />
        <TechStack />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
