import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { CapabilitiesSection } from "@/components/portfolio/CapabilitiesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Navigation } from "@/components/portfolio/Navigation";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { CertificationSection } from "@/components/portfolio/CertificationSection";

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "capabilities",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <CertificationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
