import { useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal, Activity, Layers, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/useLanguage";

export function HeroSection() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"telemetry" | "stack" | "deployments">("telemetry");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const resumeHref = language === "fr" 
    ? "/CV_Gilchrist_Steve_Aurel_Veceto.pdf" 
    : "/Resume_Gilchrist_Steve_Aurel_Veceto.pdf";

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-background px-4 sm:px-6 pt-24 pb-16 lg:py-28"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 grid-bg opacity-40 dark:opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

      <div className="container mx-auto px-0 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Editorial Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Metadata Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 border border-border/80 bg-secondary/50 px-3 py-1 rounded-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
                  {t("hero.badge")}
                </span>
              </div>
              <span className="font-mono text-xs text-muted-foreground/60 hidden sm:inline-block">
                // DOUALA, CAMEROON
              </span>
            </motion.div>

            {/* Name & Primary Headline */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="space-y-3 mb-6"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Gilchrist Steve Aurel Veceto
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-foreground leading-[1.08]">
                Engineering software that <br />
                <span className="text-muted-foreground underline decoration-border decoration-2 underline-offset-8">
                  solves real problems.
                </span>
              </h1>
            </motion.div>

            {/* Editorial Description */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-10 font-sans leading-relaxed"
            >
              <p>
                {t("hero.description")}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group flex items-center justify-center gap-3 bg-foreground text-background px-7 h-12 text-xs font-mono font-semibold tracking-wider uppercase rounded-xs transition-all hover:opacity-90 active:scale-[0.98]"
              >
                <span>{t("hero.explore")}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={resumeHref}
                download
                className="flex items-center justify-center gap-3 border border-border bg-secondary/30 px-6 h-12 text-xs font-mono font-medium tracking-wider uppercase rounded-xs hover:bg-secondary/80 hover:text-foreground transition-colors"
              >
                <Download className="h-4 w-4 text-muted-foreground" />
                <span>{t("hero.resume")}</span>
              </a>
            </motion.div>

            {/* Social Links & Verification Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/80 w-full"
            >
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/stevecet/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-border/70 rounded-xs bg-secondary/20 hover:bg-secondary hover:text-foreground text-muted-foreground transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-border/70 rounded-xs bg-secondary/20 hover:bg-secondary hover:text-foreground text-muted-foreground transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:steveceto@gmail.com"
                  className="p-2 border border-border/70 rounded-xs bg-secondary/20 hover:bg-secondary hover:text-foreground text-muted-foreground transition-all"
                  aria-label="Send direct email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              <div className="h-4 w-[1px] bg-border hidden sm:block" />

              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t("hero.status")}</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Engineering System Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 w-full border border-border/90 bg-card/95 rounded-xs shadow-lg overflow-hidden relative"
          >
            {/* Top Chrome Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-secondary/40 border-b border-border">
              <div className="flex items-center gap-2 font-mono text-xs text-foreground">
                <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                <span className="font-semibold tracking-tight">ENGINEERING.CONSOLE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {t("hero.console_status")}
                </span>
              </div>
            </div>

            {/* Console Tab Switcher */}
            <div className="flex border-b border-border bg-secondary/20">
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`flex-1 py-2.5 px-3 font-mono text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 border-r border-border transition-colors ${
                  activeTab === "telemetry"
                    ? "bg-card text-foreground font-semibold border-b-2 border-b-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Activity className="w-3 h-3" />
                <span>{t("hero.console_tab_system")}</span>
              </button>
              <button
                onClick={() => setActiveTab("stack")}
                className={`flex-1 py-2.5 px-3 font-mono text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 border-r border-border transition-colors ${
                  activeTab === "stack"
                    ? "bg-card text-foreground font-semibold border-b-2 border-b-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>{t("hero.console_tab_stack")}</span>
              </button>
              <button
                onClick={() => setActiveTab("deployments")}
                className={`flex-1 py-2.5 px-3 font-mono text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors ${
                  activeTab === "deployments"
                    ? "bg-card text-foreground font-semibold border-b-2 border-b-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <CheckCircle2 className="w-3 h-3" />
                <span>Deployments</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="p-5 font-mono text-xs min-h-[290px]">
              <AnimatePresence mode="wait">
                {activeTab === "telemetry" && (
                  <motion.div
                    key="telemetry"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-3 pb-4 border-b border-border">
                      <div className="border border-border/80 bg-secondary/30 p-2.5 rounded-xs">
                        <span className="text-[10px] text-muted-foreground block mb-1">ARCHITECTURAL SPEC</span>
                        <span className="font-bold text-foreground text-xs flex items-center gap-1">
                          <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Decoupled REST
                        </span>
                      </div>
                      <div className="border border-border/80 bg-secondary/30 p-2.5 rounded-xs">
                        <span className="text-[10px] text-muted-foreground block mb-1">QA AUTOMATION</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> Cypress / PHPUnit
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between items-center py-1 border-b border-border/40">
                        <span>Runtime Layer:</span>
                        <span className="text-foreground">Node.js + Go + PHP 8.3</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-border/40">
                        <span>Database Reliability:</span>
                        <span className="text-foreground">PostgreSQL &amp; MySQL (ACID)</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-border/40">
                        <span>Frontend Performance:</span>
                        <span className="text-foreground">React 18 / Next.js SSR / Tailwind</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span>Testing Regimes:</span>
                        <span className="text-foreground">Regression + Functional E2E</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-muted-foreground/80 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        All integration tests passing
                      </span>
                      <span className="text-foreground font-semibold">100% GREEN</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "stack" && (
                  <motion.div
                    key="stack"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div className="space-y-1.5">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Client Interface Layer</div>
                      <div className="flex flex-wrap gap-1.5">
                        {["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"].map((tech) => (
                          <span key={tech} className="border border-border bg-secondary/50 px-2 py-0.5 rounded-xs text-foreground text-[11px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-border/60">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Backend &amp; Connectors Layer</div>
                      <div className="flex flex-wrap gap-1.5">
                        {["Laravel", "Symfony", "Go", "Node.js", "Express", "REST APIs"].map((tech) => (
                          <span key={tech} className="border border-border bg-secondary/50 px-2 py-0.5 rounded-xs text-foreground text-[11px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-border/60">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Data &amp; Quality Engineering</div>
                      <div className="flex flex-wrap gap-1.5">
                        {["PostgreSQL", "MySQL", "MongoDB", "Cypress", "Codeception", "Docker"].map((tech) => (
                          <span key={tech} className="border border-border bg-secondary/50 px-2 py-0.5 rounded-xs text-foreground text-[11px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "deployments" && (
                  <motion.div
                    key="deployments"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5"
                  >
                    {[
                      { name: "Esmartlearning Platform", status: "Production", type: "React + Laravel + MySQL", url: "https://esmartlearning.tech" },
                      { name: "Taskify Engine", status: "Live", type: "React + Express + MongoDB", url: "https://taskify-steveceto.vercel.app/" },
                      { name: "Eventory Discovery", status: "Live", type: "Next.js + Flask + PostgreSQL", url: "https://eventory-steveceto.vercel.app/" },
                      { name: "Reservo Booking", status: "Live", type: "Next.js + Node + MongoDB", url: "https://reservo-steveceto.vercel.app" },
                    ].map((dep) => (
                      <a
                        key={dep.name}
                        href={dep.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-2.5 border border-border/70 bg-secondary/20 hover:bg-secondary/60 rounded-xs transition-colors group"
                      >
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                            {dep.name}
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          </div>
                          <div className="text-[10px] text-muted-foreground">{dep.type}</div>
                        </div>
                        <span className="font-mono text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-xs">
                          {dep.status}
                        </span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Console Bottom Bar */}
            <div className="px-5 py-2.5 bg-secondary/30 border-t border-border flex items-center justify-between text-[10px] font-mono text-muted-foreground">
              <span>LOC // {t("hero.console_loc")}</span>
              <span>STACK // TYPESCRIPT_V5</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
