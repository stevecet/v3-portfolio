import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "@/api/portfolio";
import { useLanguage } from "@/contexts/useLanguage";
import { Button } from "@/components/ui/button";

export function CertificationSection() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-24 sm:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-4 flex items-center">
              <Award className="mr-4 h-8 w-8 text-primary" />
              {t("certifications.title") || "Certifications"}
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card className="h-full border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-white/5 p-8 flex items-center justify-center">
                    {cert.image ? (
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-32 h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <Award className="h-16 w-16 text-muted-foreground/30" />
                    )}
                  </div>

                  <CardContent className="p-6 sm:p-8 flex-1 flex flex-col">
                    <div className="mb-4 flex justify-between items-start gap-4">
                      <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <Badge variant="outline" className="shrink-0">
                        {cert.year}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {cert.description}
                    </p>

                    <div className="space-y-6 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {cert.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-secondary/50 font-medium text-xs py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {cert.liveUrl && (
                        <div className="pt-4 border-t border-border">
                          <a href={cert.liveUrl} target="_blank" rel="noreferrer">
                            <Button
                              variant="outline"
                              className="w-full gap-2 group-hover:border-primary/50 transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                              View Credential
                            </Button>
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
