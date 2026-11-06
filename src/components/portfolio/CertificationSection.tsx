import { motion } from "framer-motion";
import { ExternalLink, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { certifications } from "@/api/portfolio";
import { useLanguage } from "@/contexts/useLanguage";

export function CertificationSection() {
  const { t, language } = useLanguage();

  return (
    <section id="certifications" className="py-24 sm:py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.35 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              05 / {language === "fr" ? "ACCRÉDITATIONS" : "CREDENTIALS"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-foreground">
            {t("certifications.title")}
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl mt-3 leading-relaxed">
            {t("certifications.subtitle")}
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {certifications.map((cert, index) => {
            const title = language === "fr" && cert.titlevf ? cert.titlevf : cert.title;
            const desc = language === "fr" && cert.descriptionvf ? cert.descriptionvf : cert.description;

            return (
              <article
                key={cert.id}
                className="lg:col-span-12 border border-border/90 bg-card rounded-xs shadow-md overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-border">
                  
                  {/* Left Column: Credential Visual / Status */}
                  <div className="md:col-span-4 p-8 bg-secondary/30 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-xs flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {t("certifications.credential")}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {cert.year}
                        </span>
                      </div>

                      <div className="p-4 border border-border bg-card rounded-xs flex items-center gap-4 mb-4">
                        <div className="p-3 bg-secondary rounded-xs">
                          <Award className="w-8 h-8 text-foreground" />
                        </div>
                        <div>
                          <div className="font-mono text-xs text-muted-foreground uppercase">{t("certifications.issued_by")}</div>
                          <div className="font-mono text-sm font-bold text-foreground">{cert.issuer}</div>
                        </div>
                      </div>
                    </div>

                    {cert.liveUrl && (
                      <a
                        href={cert.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 flex items-center justify-center gap-2 bg-foreground text-background py-3 px-4 text-xs font-mono font-semibold uppercase tracking-wider rounded-xs hover:opacity-90 transition-opacity"
                      >
                        <span>{t("certifications.view_credential")}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Right Column: Detailed Curriculum & Topics */}
                  <div className="md:col-span-8 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-sans font-bold text-foreground mb-4">
                        {title}
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                        {desc}
                      </p>

                      <div>
                        <div className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold mb-3 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" />
                          Curriculum Competencies Verified
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cert.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-xs bg-secondary/50 border border-border px-2.5 py-1 text-muted-foreground rounded-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>VERIFIED VIA COURSERA VAULT</span>
                      <span>STATUS: AUTHENTICATED</span>
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
