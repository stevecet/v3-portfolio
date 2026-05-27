import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { getProjectsData } from "@/api/portfolio";
import { useLanguage } from "@/contexts/useLanguage";

interface Project {
  _id: string;
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
    return (
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex items-center space-x-2">
          <div className="h-4 w-4 bg-primary rounded-full animate-bounce" />
          <div className="h-4 w-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="h-4 w-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
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
              {t("projects.title")}
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card className="h-full border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 flex flex-col">

                  <CardContent className="p-6 sm:p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      {project.featured && (
                        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
                          Featured Project
                        </span>
                      )}
                      <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 flex-1">
                      {language === "fr" && project.descriptionvf ? project.descriptionvf : project.description}
                    </p>

                    <div className="space-y-6 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-secondary/50 font-medium text-xs py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4 border-t border-border">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1">
                            <Button
                              variant="outline"
                              className="w-full gap-2 group-hover:border-primary/50 transition-colors"
                            >
                              <Github className="h-4 w-4" />
                              Code
                            </Button>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1">
                            <Button
                              className="w-full gap-2 transition-all"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </Button>
                          </a>
                        )}
                      </div>
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
