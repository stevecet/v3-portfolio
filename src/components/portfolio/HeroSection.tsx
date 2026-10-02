import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/useLanguage";
import { Typewriter } from "@/components/Typewriter";

export function HeroSection() {
  const { t, language } = useLanguage();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-background px-4 sm:px-6 pt-20"
    >
      <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-0 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center justify-center lg:justify-start gap-3 w-full"
            >
              <div className="h-[1px] w-8 bg-foreground hidden sm:block"></div>
              <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase" dangerouslySetInnerHTML={{ __html: t("hero.whoami") }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-8 leading-[1.1] min-h-[140px] md:min-h-[160px]"
            >
              {t("hero.headline_1")} <br className="hidden md:block" />
              <span className="text-muted-foreground">
                <Typewriter
                  strings={[
                    t("hero.headline_2"),
                    language === 'fr' ? "offre de la valeur." : "delivers value.",
                    language === 'fr' ? "évolue avec grâce." : "scales gracefully.",
                    language === 'fr' ? "est performant." : "is highly performant."
                  ]}
                  typeSpeed={40}
                  backSpeed={30}
                  backDelay={1500}
                  loop={true}
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mb-12 font-mono leading-relaxed"
            >
              <p>
                {t("hero.description")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group flex items-center justify-center gap-3 bg-foreground text-background px-8 h-12 text-sm font-mono font-medium transition-transform hover:-translate-y-1 w-full sm:w-auto"
              >
                {t("hero.explore")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={t("hero.resume_path")}
                download={t("hero.resume_file")}
                className="flex items-center justify-center gap-3 border border-border bg-transparent px-8 h-12 text-sm font-mono font-medium hover:bg-secondary transition-colors w-full sm:w-auto"
              >
                <Download className="h-4 w-4" />
                {t("hero.resume") || "Download CV"}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <a href="https://github.com/stevecet/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:steveceto@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <div className="hidden sm:block h-4 w-[1px] bg-border mx-2"></div>
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground w-full sm:w-auto mt-2 sm:mt-0">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                {t("hero.status")}
              </div>
            </motion.div>
          </div>

          {/* Technical Visual/Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 hidden lg:flex flex-col border border-border bg-card p-6 relative"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-foreground -translate-x-[1px] -translate-y-[1px]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-foreground translate-x-[1px] -translate-y-[1px]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-foreground -translate-x-[1px] translate-y-[1px]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-foreground translate-x-[1px] translate-y-[1px]" />

            <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
              <span className="font-mono text-xs text-muted-foreground">01 / ENGINEERING</span>
              <span className="font-mono text-xs text-muted-foreground">SYS.OP</span>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-4 items-start">
                <span className="text-muted-foreground w-8">01</span>
                <div className="text-foreground">
                  <span className="text-blue-500">import</span> {`{ React }`} <span className="text-blue-500">from</span> 'frontend'
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-muted-foreground w-8">02</span>
                <div className="text-foreground">
                  <span className="text-blue-500">import</span> {`{ Laravel, Node }`} <span className="text-blue-500">from</span> 'backend'
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-muted-foreground w-8">03</span>
                <div className="text-foreground">
                  <span className="text-blue-500">import</span> {`{ MySQL, Postgres }`} <span className="text-blue-500">from</span> 'database'
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-muted-foreground w-8">04</span>
                <div className="text-foreground">
                  <span className="text-blue-500">import</span> {`{ TypeScript }`} <span className="text-blue-500">from</span> 'core'
                </div>
              </div>
              <div className="h-4"></div>
              <div className="flex gap-4 items-start">
                <span className="text-muted-foreground w-8">05</span>
                <div className="text-foreground">
                  <span className="text-purple-500">const</span> buildSystem = () =&gt; {`{`}
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-muted-foreground w-8">06</span>
                <div className="text-foreground pl-4">
                  return <span className="text-green-500">"Scalable & Maintainable"</span>;
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-muted-foreground w-8">07</span>
                <div className="text-foreground">
                  {`}`}
                </div>
              </div>
              <div className="flex gap-4 items-start mt-4">
                <span className="text-muted-foreground w-8">&gt;_</span>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="w-2 h-4 bg-foreground"
                />
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-2">
              {['REACT', 'LARAVEL', 'TYPESCRIPT', 'NODE.JS', 'MYSQL'].map((tech) => (
                <span key={tech} className="text-[10px] font-mono border border-border px-2 py-1 text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}