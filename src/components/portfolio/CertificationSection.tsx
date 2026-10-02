import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "@/api/portfolio";
import { useLanguage } from "@/contexts/useLanguage";

export function CertificationSection() {
  const { t, language } = useLanguage();

  return (
    <section id="certifications" className="py-24 sm:py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-muted-foreground">{t("nav.certifications").split('.')[0]} /</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight flex items-center">
              {t("certifications.title")}
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-2xl">
            {t("certifications.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row border border-border bg-card overflow-hidden"
            >
              {/* Logo / Image side */}
              <div className="w-full sm:w-1/3 bg-secondary/50 p-8 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-border">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-24 h-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                ) : (
                  <Award className="h-12 w-12 text-muted-foreground" />
                )}
              </div>

              {/* Content side */}
              <div className="w-full sm:w-2/3 p-8 flex flex-col">
                <div className="font-mono text-xs text-muted-foreground mb-4 flex justify-between items-center">
                  <span>{cert.year || t("certifications.credential")}</span>
                </div>
                
                <h3 className="text-xl font-sans font-bold mb-4 leading-tight">
                  {language === "fr" && cert.titlevf ? cert.titlevf : cert.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                  {language === "fr" && cert.descriptionvf ? cert.descriptionvf : cert.description}
                </p>

                {cert.liveUrl && (
                  <a 
                    href={cert.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {t("certifications.view_credential") || "View Credential"} <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
