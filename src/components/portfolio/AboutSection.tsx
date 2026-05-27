import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, User, Code2 } from "lucide-react";
import { getAboutData } from "@/api/portfolio";
import { useLanguage } from "@/contexts/useLanguage";

interface AboutData {
  description: string[];
  skills: string[];
  profileImage: string;
}

export function AboutSection() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await getAboutData();
        setAboutData(data as AboutData);
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex items-center space-x-2">
          <div className="h-4 w-4 bg-primary rounded-full animate-bounce" />
          <div className="h-4 w-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="h-4 w-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-4">
              {t("about.title")}
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              {aboutData?.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 h-12"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = `${t("hero.resume_path")}`;
                    link.download = `${t("hero.resume_file")}`;
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("about.download")}
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <Card className="border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/5">
                <CardContent className="p-8">
                  {/* <div className="aspect-square rounded-2xl overflow-hidden mb-8 bg-secondary flex items-center justify-center">
                    <User className="h-32 w-32 text-muted-foreground/50" />
                  </div> */}

                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-6 flex items-center">
                      <Code2 className="mr-2 h-5 w-5 text-primary" />
                      {t("about.skills")}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {aboutData?.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
