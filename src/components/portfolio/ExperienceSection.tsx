import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getExperienceData, ExperienceItem as ExperienceType } from "@/api/portfolio";
import { useLanguage } from "@/contexts/useLanguage";
import { ExternalLink, Calendar, MapPin, Briefcase } from "lucide-react";

export function ExperienceSection() {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const { t, language } = useLanguage();

  useEffect(() => {
    getExperienceData().then((data) => {
      setExperiences(data.experiences);
    });
  }, []);

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              02 / {language === "fr" ? "PARCOURS" : "CAREER"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-foreground">
            {t("experience.title")}
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl leading-relaxed">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        {/* Experience Timeline Stream */}
        <div className="relative border-l border-border/80 ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-14 sm:space-y-16">
          {experiences.map((exp, index) => {
            const desc = language === "fr" && exp.descriptionvf ? exp.descriptionvf : exp.description;
            const pos = language === "fr" && exp.positionvf ? exp.positionvf : exp.position;

            return (
              <article
                key={exp._id}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-border group-hover:border-foreground group-hover:bg-foreground transition-all duration-300" />

                <div className="border border-border/80 bg-card/60 hover:bg-card/90 transition-colors p-6 sm:p-8 rounded-xs shadow-xs">
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-secondary text-foreground rounded-xs border border-border flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-muted-foreground" />
                        {exp.startDate} – {exp.current ? t("experience.present") : exp.endDate}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-border/70 text-muted-foreground rounded-xs">
                      {exp.type}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-sans font-bold text-foreground">
                        {pos}
                      </h3>
                      <div className="text-sm font-mono text-muted-foreground font-medium mt-1 flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-muted-foreground/70" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-0.5"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-2.5 mb-6 text-sm text-muted-foreground leading-relaxed">
                    {desc.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="text-foreground/60 select-none mt-1 text-xs">&gt;</span>
                        <span className="flex-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Visible Tech Stack Badges */}
                  <div className="pt-4 border-t border-border/60">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/80 mb-2.5">
                      {t("experience.tech_used")}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] bg-secondary/50 text-foreground border border-border px-2 py-0.5 rounded-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
