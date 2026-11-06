import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers, ShieldCheck, AlertCircle, Cpu, CheckCircle2 } from "lucide-react";
import { getProjectsData, ProjectItem } from "@/api/portfolio";
import { useLanguage } from "@/contexts/useLanguage";

export function ProjectsSection() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [filter, setFilter] = useState<"all" | "production" | "fullstack">("all");
  const { t, language } = useLanguage();

  useEffect(() => {
    getProjectsData().then((data) => {
      setProjects(data.projects);
    });
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (filter === "production") return project.featured && project.category.toLowerCase().includes("production");
    if (filter === "fullstack") return project.technologies.includes("Node.js") || project.technologies.includes("Laravel") || project.technologies.includes("Flask");
    return true;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                03 / {language === "fr" ? "PROJETS" : "CASE STUDIES"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-foreground">
              {t("projects.title")}
            </h2>
            <p className="font-sans text-base text-muted-foreground max-w-2xl mt-3 leading-relaxed">
              {t("projects.subtitle")}
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-xs border transition-colors ${
                filter === "all"
                  ? "bg-foreground text-background border-foreground font-semibold"
                  : "bg-secondary/40 text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {t("projects.filter_all")} ({projects.length})
            </button>
            <button
              onClick={() => setFilter("production")}
              className={`px-3 py-1.5 rounded-xs border transition-colors ${
                filter === "production"
                  ? "bg-foreground text-background border-foreground font-semibold"
                  : "bg-secondary/40 text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {t("projects.filter_prod")}
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`px-3 py-1.5 rounded-xs border transition-colors ${
                filter === "fullstack"
                  ? "bg-foreground text-background border-foreground font-semibold"
                  : "bg-secondary/40 text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {t("projects.filter_fullstack")}
            </button>
          </div>
        </div>

        {/* Project Case Studies List */}
        <div className="space-y-16 sm:space-y-24">
          {filteredProjects.map((project, index) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              index={index}
              language={language}
              t={t}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function CaseStudyCard({
  project,
  index,
  language,
  t,
}: {
  project: ProjectItem;
  index: number;
  language: string;
  t: (key: string) => string;
}) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "challenges" | "testing">("overview");

  const title = project.title;
  const subtitle = language === "fr" && project.subtitlevf ? project.subtitlevf : project.subtitle;
  const desc = language === "fr" && project.descriptionvf ? project.descriptionvf : project.description;
  const problem = language === "fr" && project.problemvf ? project.problemvf : project.problem;
  const architecture = language === "fr" && project.architecturevf ? project.architecturevf : project.architecture;
  const challenges = language === "fr" && project.challengesvf ? project.challengesvf : project.challenges;
  const testing = language === "fr" && project.testingvf ? project.testingvf : project.testing;
  const category = language === "fr" && project.categoryvf ? project.categoryvf : project.category;

  return (
    <article
      className="border border-border/90 bg-card rounded-xs shadow-md overflow-hidden relative group transition-all duration-300 hover:border-foreground/30"
    >
      {/* Top Banner / Category header */}
      <div className="px-6 py-4 bg-secondary/40 border-b border-border flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-muted-foreground">
            {String(index + 1).padStart(2, "0")} //
          </span>
          <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-0.5 bg-background border border-border text-foreground font-semibold rounded-xs">
            {category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              FLAGSHIP
            </span>
          )}
        </div>

        {/* Live / Code Links Header */}
        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>{t("projects.source")}</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground font-semibold hover:opacity-80 transition-opacity bg-secondary/80 border border-border px-3 py-1 rounded-xs"
            >
              <span>{t("projects.view_live")}</span>
              <ExternalLink className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            </a>
          )}
        </div>
      </div>

      {/* Main Grid: Info + Case Study Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
        
        {/* Left Column: Project Identity & Specs */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-sans font-bold text-foreground mb-2">
              {title}
            </h3>
            <p className="font-mono text-xs text-muted-foreground mb-6 uppercase tracking-wider">
              {subtitle}
            </p>

            <div className="border border-border/80 bg-secondary/20 p-4 rounded-xs mb-6 text-sm text-muted-foreground leading-relaxed">
              {desc}
            </div>

            {/* Key Metrics Chips if available */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-2 mb-6 font-mono">
                {project.metrics.map((m) => (
                  <div key={m.label} className="border border-border/70 bg-secondary/40 p-2 rounded-xs text-center">
                    <span className="text-[10px] text-muted-foreground block truncate">{m.label}</span>
                    <span className="text-xs font-semibold text-foreground truncate block">{m.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Technology Badges */}
          <div className="pt-6 border-t border-border/60">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              {t("projects.technology")}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
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

        {/* Right Column: Deep-Dive Technical Case Study Tabs */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Tab Navigation */}
          <div className="flex border-b border-border bg-secondary/20 overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-3 px-4 font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 border-r border-border shrink-0 transition-colors ${
                activeTab === "overview"
                  ? "bg-card text-foreground font-semibold border-b-2 border-b-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{t("projects.tab_overview")}</span>
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`py-3 px-4 font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 border-r border-border shrink-0 transition-colors ${
                activeTab === "architecture"
                  ? "bg-card text-foreground font-semibold border-b-2 border-b-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t("projects.tab_arch")}</span>
            </button>
            <button
              onClick={() => setActiveTab("challenges")}
              className={`py-3 px-4 font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 border-r border-border shrink-0 transition-colors ${
                activeTab === "challenges"
                  ? "bg-card text-foreground font-semibold border-b-2 border-b-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>{t("projects.tab_challenges")}</span>
            </button>
            <button
              onClick={() => setActiveTab("testing")}
              className={`py-3 px-4 font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 shrink-0 transition-colors ${
                activeTab === "testing"
                  ? "bg-card text-foreground font-semibold border-b-2 border-b-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{t("projects.tab_testing")}</span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {t("projects.problem_statement")}
                    </h4>
                    <p className="text-sm text-foreground/90 leading-relaxed font-sans bg-secondary/20 p-4 border border-border/70 rounded-xs">
                      {problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Engineering Outcome
                    </h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Production-ready deployment with seamless user state handling.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Strict type safety and standardized RESTful data contracts.</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "architecture" && (
                <motion.div
                  key="architecture"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      {t("projects.solution_arch")}
                    </h4>
                    <p className="text-sm text-foreground/90 leading-relaxed font-sans bg-secondary/20 p-4 border border-border/70 rounded-xs">
                      {architecture}
                    </p>
                  </div>

                  {/* Architecture Flow Diagram */}
                  <div className="border border-border/80 bg-secondary/30 p-4 rounded-xs font-mono text-xs">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">SYSTEM DATA PIPELINE</div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-foreground font-semibold">
                      <div className="w-full sm:w-auto p-2 bg-card border border-border rounded-xs">Client (SPA / SSR)</div>
                      <span className="text-muted-foreground font-normal">&rarr;</span>
                      <div className="w-full sm:w-auto p-2 bg-card border border-border rounded-xs">API Gateway / JWT</div>
                      <span className="text-muted-foreground font-normal">&rarr;</span>
                      <div className="w-full sm:w-auto p-2 bg-card border border-border rounded-xs">Data Layer (SQL / NoSQL)</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "challenges" && (
                <motion.div
                  key="challenges"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {t("projects.challenges_solved")}
                    </h4>
                    <p className="text-sm text-foreground/90 leading-relaxed font-sans bg-secondary/20 p-4 border border-border/70 rounded-xs">
                      {challenges}
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "testing" && (
                <motion.div
                  key="testing"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {t("projects.testing_approach")}
                    </h4>
                    <p className="text-sm text-foreground/90 leading-relaxed font-sans bg-secondary/20 p-4 border border-border/70 rounded-xs">
                      {testing}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Automated assertions executed against critical path user journeys.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Telemetry Stamp */}
            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span>DEPLOYED VIA VERCEL CI/CD</span>
              <span className="text-emerald-500 font-semibold">ALL SYSTEMS NOMINAL</span>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}
