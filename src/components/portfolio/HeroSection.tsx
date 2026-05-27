import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/useLanguage";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[100px]" />

      <div className="container mx-auto px-0 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 px-4 py-1.5 rounded-full border border-border bg-secondary/30 backdrop-blur-sm text-sm font-medium text-muted-foreground flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            {t("hero.whoami")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl font-heading font-extrabold tracking-tight mb-6"
          >
            Steve <span className="gradient-text">VECETO</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-medium leading-relaxed text-balance"
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="w-full sm:w-auto px-8 h-14 rounded-full text-base font-semibold group transition-all"
            >
              {t("hero.explore")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const link = document.createElement("a");
                link.href = `${t("hero.resume_path")}`;
                link.download = `${t("hero.resume_file")}`;
                link.click();
              }}
              className="w-full sm:w-auto px-8 h-14 rounded-full text-base font-semibold hover:bg-secondary border-border"
            >
              <Download className="mr-2 h-4 w-4" />
              {t("hero.resume")}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/stevecet/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:steveceto@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}