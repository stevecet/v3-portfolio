import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAboutData } from "@/api/portfolio";
import { useLanguage } from "@/contexts/useLanguage";

export function AboutSection() {
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        await getAboutData();
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  if (loading) {
    return <section id="about" className="min-h-screen" />;
  }

  const narrative = [
    {
      step: "01",
      title: t("about.foundation"),
      text: t("about.foundation_desc")
    },
    {
      step: "02",
      title: t("about.engineering"),
      text: t("about.engineering_desc")
    },
    {
      step: "03",
      title: t("about.quality"),
      text: t("about.quality_desc")
    },
    {
      step: "04",
      title: t("about.currently"),
      text: t("about.currently_desc")
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-6" dangerouslySetInnerHTML={{ __html: t("about.title").replace(" ", " <br/>") }} />
              <div className="font-mono text-sm text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  {t("about.subtitle")}
                </p>
                <div className="mt-8 flex flex-col gap-2 border-l border-border pl-4">
                  <div className="text-foreground">LOCATION // <span className="text-muted-foreground">{t("about.location")}</span></div>
                  <div className="text-foreground">EXPERIENCE // <span className="text-muted-foreground">{t("about.experience")}</span></div>
                  <div className="text-foreground">FOCUS // <span className="text-muted-foreground">{t("about.focus")}</span></div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-2/3">
            <div className="grid gap-12">
              {narrative.map((item, index) => (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative border-l border-border pl-8 pb-12 last:pb-0"
                >
                  <div className="absolute w-3 h-3 bg-background border border-foreground -left-[6px] top-1 transition-colors group-hover:bg-foreground" />
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-xs text-muted-foreground">{item.step}</span>
                    <h3 className="font-mono font-bold tracking-widest text-sm uppercase">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 pt-12 border-t border-border"
            >
              <h3 className="font-mono text-xs font-bold tracking-widest uppercase mb-8">{t("about.core_tech")}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 font-mono text-sm">
                <div>
                  <div className="text-muted-foreground mb-3 text-xs">{t("about.frontend")}</div>
                  <ul className="space-y-2">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind</li>
                  </ul>
                </div>
                <div>
                  <div className="text-muted-foreground mb-3 text-xs">{t("about.backend")}</div>
                  <ul className="space-y-2">
                    <li>Laravel</li>
                    <li>Node.js</li>
                    <li>Symfony</li>
                    <li>Express</li>
                  </ul>
                </div>
                <div>
                  <div className="text-muted-foreground mb-3 text-xs">{t("about.database")}</div>
                  <ul className="space-y-2">
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div>
                  <div className="text-muted-foreground mb-3 text-xs">{t("about.qa")}</div>
                  <ul className="space-y-2">
                    <li>Cypress</li>
                    <li>Appium</li>
                    <li>Codeception</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
