import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getExperienceData } from "@/api/portfolio"
import { useLanguage } from "@/contexts/useLanguage"

interface Experience {
  _id: string
  company: string
  position: string
  positionvf?: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string[]
  descriptionvf?: string[]
  technologies: string[]
  website?: string
}

export function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const data = await getExperienceData()
        const experienceData = data as { experiences: Experience[] }
        setExperiences(experienceData.experiences)
      } catch (error) {
        console.error("Error fetching experience data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchExperienceData()
  }, [])

  if (loading) {
    return <section id="experience" className="min-h-screen" />
  }

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-muted-foreground">02 /</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight">
              Experience.
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-2xl">
            A timeline of roles where I've contributed to engineering, scaled systems, and built products from the ground up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp._id} exp={exp} index={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ exp, index, language }: { exp: Experience, index: number, language: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const desc = language === "fr" && exp.descriptionvf ? exp.descriptionvf : exp.description;
  const pos = language === "fr" && exp.positionvf ? exp.positionvf : exp.position;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group flex flex-col md:flex-row gap-6 md:gap-12 relative border-t border-border pt-12 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:w-1/4 flex flex-col font-mono text-sm">
        <span className="text-foreground font-bold">{exp.startDate} - {exp.current ? "Present" : exp.endDate}</span>
        <span className="text-muted-foreground mt-2">{exp.location}</span>
        {exp.website && (
          <a href={exp.website} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground mt-4 inline-flex items-center gap-2 transition-colors">
            [Link]
          </a>
        )}
      </div>

      <div className="md:w-3/4">
        <h3 className="text-2xl font-sans font-bold mb-1">
          {pos}
        </h3>
        <h4 className="text-lg text-muted-foreground mb-6 font-mono">
          {exp.company}
        </h4>
        
        <div className="space-y-4 text-muted-foreground mb-8 text-sm md:text-base">
          {desc.map((item, i) => (
            <p key={i} className="leading-relaxed">{item}</p>
          ))}
        </div>

        <AnimatePresence>
          {isHovered && exp.technologies && exp.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border border-dashed">
                {exp.technologies.map(tech => (
                  <span key={tech} className="font-mono text-xs text-foreground bg-secondary px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isHovered && exp.technologies && (
           <div className="flex items-center gap-2 mt-4">
             <span className="font-mono text-[10px] text-muted-foreground opacity-50 uppercase tracking-widest">Hover to view tech stack</span>
           </div>
        )}
      </div>
    </motion.div>
  )
}