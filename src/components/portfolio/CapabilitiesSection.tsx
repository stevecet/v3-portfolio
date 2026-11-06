import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { technicalCapabilities } from "@/api/portfolio";
import { useLanguage } from "@/contexts/useLanguage";
import { Terminal, ShieldCheck, Database, Server, Monitor, Wrench } from "lucide-react";

export function CapabilitiesSection() {
  const { t, language } = useLanguage();
  const [selectedDomain, setSelectedDomain] = useState<number>(0);

  const domainIcons = [Monitor, Server, Database, ShieldCheck, Wrench];

  const currentCapability = technicalCapabilities[selectedDomain];
  const domainTitle = language === "fr" && currentCapability.domainvf ? currentCapability.domainvf : currentCapability.domain;
  const domainDesc = language === "fr" && currentCapability.descriptionvf ? currentCapability.descriptionvf : currentCapability.description;

  return (
    <section id="capabilities" className="py-24 sm:py-32 relative bg-background border-t border-border">
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
              04 / {language === "fr" ? "COMPÉTENCES" : "CAPABILITIES"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-foreground">
            {t("stack.title")}
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl mt-3 leading-relaxed">
            {t("stack.subtitle")}
          </p>
        </motion.div>

        {/* Interactive Capabilities Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Domain Sidebar Switcher */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {technicalCapabilities.map((domain, index) => {
              const Icon = domainIcons[index % domainIcons.length];
              const isSelected = selectedDomain === index;
              const title = language === "fr" && domain.domainvf ? domain.domainvf : domain.domain;

              return (
                <button
                  key={domain.domain}
                  onClick={() => setSelectedDomain(index)}
                  className={`flex items-center justify-between p-4 text-left border rounded-xs transition-all ${
                    isSelected
                      ? "bg-secondary text-foreground font-semibold border-foreground/60 shadow-xs"
                      : "bg-card text-muted-foreground border-border/80 hover:bg-secondary/40 hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isSelected ? "text-emerald-500" : "text-muted-foreground"}`} />
                    <span className="font-mono text-xs tracking-wide uppercase">{title}</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Domain Detailed Inspector Panel */}
          <div className="lg:col-span-8 border border-border/90 bg-card rounded-xs shadow-md p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDomain}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Domain Header */}
                <div className="pb-6 border-b border-border">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-sans font-bold text-foreground">
                      {domainTitle}
                    </h3>
                    <span className="font-mono text-[11px] px-2.5 py-0.5 bg-secondary text-foreground border border-border rounded-xs">
                      {currentCapability.technologies.length} TECHNOLOGIES
                    </span>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {domainDesc}
                  </p>
                </div>

                {/* Technologies List with Real Context */}
                <div className="space-y-3">
                  {currentCapability.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-3.5 border border-border/70 bg-secondary/20 hover:bg-secondary/50 rounded-xs transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-3">
                        <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span className="font-mono text-sm font-semibold text-foreground">
                          {tech.name}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs">
                        <span className="text-muted-foreground font-sans">
                          {tech.context}
                        </span>
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded-xs border self-start sm:self-auto uppercase tracking-wider ${
                            tech.level === "Primary"
                              ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 font-medium"
                              : tech.level === "Secondary"
                              ? "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30 font-medium"
                              : "bg-secondary text-muted-foreground border-border"
                          }`}
                        >
                          {tech.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Verification Notice */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Verified across production repositories &amp; client deliveries
                  </span>
                  <span>STATUS: ACTIVE</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
