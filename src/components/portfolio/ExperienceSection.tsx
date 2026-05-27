import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building2, ChevronRight } from "lucide-react"
import { getExperienceData } from "@/api/portfolio"
import { useLanguage } from "@/contexts/useLanguage"
import { cn } from "@/lib/utils"

interface Experience {
  _id: string
  company: string
  position: string
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
  const [activeTab, setActiveTab] = useState("")
  const { t, language } = useLanguage()

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const data = await getExperienceData()
        const experienceData = data as { experiences: Experience[] }
        setExperiences(experienceData.experiences)
        if (experienceData.experiences.length > 0) {
          setActiveTab(experienceData.experiences[0]._id)
        }
      } catch (error) {
        console.error("Error fetching experience data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchExperienceData()
  }, [])

  if (loading) {
    return (
      <section id="experience" className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex items-center space-x-2">
          <div className="h-4 w-4 bg-primary rounded-full animate-bounce" />
          <div className="h-4 w-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="h-4 w-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </section>
    )
  }

  const activeExperience = experiences.find(exp => exp._id === activeTab)

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-secondary/20">
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
              {t('experience.title')}
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {/* Sidebar Tabs */}
            <div className="md:w-1/3 lg:w-1/4 flex flex-row md:flex-col overflow-x-auto md:overflow-visible hide-scrollbar border-b md:border-b-0 md:border-l border-border relative">
              {experiences.map((exp) => (
                <button
                  key={exp._id}
                  onClick={() => setActiveTab(exp._id)}
                  className={cn(
                    "px-6 py-4 text-left whitespace-nowrap md:whitespace-normal transition-all duration-300 font-medium text-sm sm:text-base border-b-2 md:border-b-0 md:border-l-2 -ml-[2px]",
                    activeTab === exp._id
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  )}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="md:w-2/3 lg:w-3/4">
              <AnimatePresence mode="wait">
                {activeExperience && (
                  <motion.div
                    key={activeExperience._id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-none shadow-none bg-transparent">
                      <CardContent className="p-0">
                        <div className="mb-6">
                          <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                            {activeExperience.position}
                            <span className="text-primary"> @ {activeExperience.company}</span>
                          </h3>
                          
                          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-muted-foreground mt-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {activeExperience.startDate} - {activeExperience.current ? t('experience.present') : activeExperience.endDate}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {activeExperience.location}
                            </div>
                            {activeExperience.website && (
                              <div className="flex items-center gap-2 text-primary">
                                <Building2 className="h-4 w-4" />
                                <a href={activeExperience.website} target="_blank" rel="noreferrer" className="hover:underline">
                                  {activeExperience.website.replace('https://', '')}
                               </a>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div>
                            <ul className="space-y-4">
                              {(language === "fr" && activeExperience.descriptionvf ? activeExperience.descriptionvf : activeExperience.description).map((item, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-start gap-3"
                                >
                                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground text-base leading-relaxed">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {activeExperience.technologies && activeExperience.technologies.length > 0 && (
                            <div>
                              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
                                {t('experience.tech')}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {activeExperience.technologies.map((tech, index) => (
                                  <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                  >
                                    <Badge variant="secondary" className="px-3 py-1 font-medium bg-card border-border hover:bg-primary/10">
                                      {tech}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}