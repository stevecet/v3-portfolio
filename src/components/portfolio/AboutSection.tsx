import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/useLanguage";
import { GraduationCap, MapPin, Award, Layers, Terminal } from "lucide-react";

export function AboutSection() {
  const { t, language } = useLanguage();

  const tenets = [
    {
      step: "01",
      title: t("about.foundation"),
      text: t("about.foundation_desc"),
      icon: Terminal,
    },
    {
      step: "02",
      title: t("about.engineering"),
      text: t("about.engineering_desc"),
      icon: Layers,
    },
    {
      step: "03",
      title: t("about.quality"),
      text: t("about.quality_desc"),
      icon: Award,
    },
    {
      step: "04",
      title: t("about.currently"),
      text: t("about.currently_desc"),
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          
          {/* Left Column: Editorial Summary & Credentials Card */}
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              className="lg:sticky lg:top-28 space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    01 / {language === "fr" ? "PHILOSOPHIE" : "PHILOSOPHY"}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-foreground mb-4">
                  {t("about.title")}
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  {t("about.subtitle")}
                </p>
              </div>

              {/* Engineering Profile Telemetry Card */}
              <div className="border border-border/90 bg-card p-6 rounded-xs space-y-4 font-mono text-xs shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-border/80">
                  <span className="text-muted-foreground">ENGINEER SPECIFICATION</span>
                  <span className="text-emerald-500 font-semibold">VERIFIED</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">LOCATION</span>
                    <span className="text-foreground flex items-center gap-1 font-semibold">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      {t("about.location")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">EXPERIENCE</span>
                    <span className="text-foreground font-semibold">{t("about.experience")}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">FOCUS</span>
                    <span className="text-foreground font-semibold">{t("about.focus")}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/60">
                    <span className="text-muted-foreground">EDUCATION</span>
                    <span className="text-foreground font-semibold text-right">
                      {t("about.education")}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/60 text-[11px] text-muted-foreground">
                  Institut Universitaire de la Côte (2020 – 2024)
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Tenets */}
          <div className="lg:w-7/12">
            <div className="space-y-8">
              {tenets.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="border border-border/80 bg-card/60 hover:bg-card p-6 sm:p-8 rounded-xs transition-colors group"
                  >
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 border border-border bg-secondary/50 rounded-xs text-foreground group-hover:border-foreground/50 transition-colors">
                          <Icon className="w-4 h-4 text-emerald-500" />
                        </div>
                        <h3 className="font-mono text-sm sm:text-base font-bold text-foreground tracking-wide uppercase">
                          {item.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {item.step}
                      </span>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
