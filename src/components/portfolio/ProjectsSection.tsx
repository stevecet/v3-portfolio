import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { getProjectsData } from "@/api/portfolio";
import { useLanguage } from "@/contexts/useLanguage";

interface Project {
  _id: string;
  id?: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  descriptionvf?: string;
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const data = await getProjectsData();
        const projectsData = data as { projects: Project[] };
        setProjects(projectsData.projects);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectsData();
  }, []);

  if (loading) {
    return <section id="projects" className="min-h-screen" />;
  }

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-muted-foreground">{t("nav.projects").split('.')[0]} /</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight">
              {t("projects.title")}
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-2xl">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCaseStudy key={project._id || project.id || index} project={project} index={index} language={language} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCaseStudy({ project, index, language, t }: { project: Project; index: number; language: string; t: any }) {
  const desc = language === "fr" && project.descriptionvf ? project.descriptionvf : project.description;
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
    >
      {/* Project Info */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="font-mono text-xs text-muted-foreground mb-4">
          {String(index + 1).padStart(2, '0')} — {project.category?.toUpperCase() || 'WEB APP'}
        </div>
        
        <h3 className="text-3xl md:text-4xl font-sans font-bold mb-6">
          {project.title}
        </h3>
        
        <div className="bg-secondary/30 border border-border p-6 mb-8 font-mono text-sm leading-relaxed text-muted-foreground">
          {desc}
        </div>

        <div className="mb-8">
          <h4 className="font-mono text-xs font-bold tracking-widest uppercase mb-4 text-foreground">{t("projects.technology")}</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="font-mono text-xs border border-border px-2 py-1 text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 mt-auto">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors group">
              <Github className="w-4 h-4" />
              <span className="group-hover:underline">{t("projects.source")}</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm text-foreground hover:opacity-80 transition-opacity group border-b border-foreground pb-0.5">
              <span>{t("projects.view_live")}</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>

      {/* Project Image */}
      <div className="w-full lg:w-1/2 group relative">
        <div className="absolute inset-0 bg-primary/5 translate-x-4 translate-y-4 border border-border transition-transform group-hover:translate-x-2 group-hover:translate-y-2 -z-10" />
        <div className="border border-border bg-card overflow-hidden relative aspect-video transition-all group-hover:-translate-y-1 group-hover:-translate-x-1">
          <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply group-hover:opacity-0 transition-opacity z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  )
}
