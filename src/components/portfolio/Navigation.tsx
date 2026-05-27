import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, User, Briefcase, BadgeCheck, FolderOpen, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/useLanguage"
import { LanguageToggle } from "@/components/LanguageToggle"
import { motion } from "framer-motion"

interface NavigationProps {
  activeSection: string
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "hero", label: t('nav.home'), icon: Home },
    { id: "about", label: t('nav.about'), icon: User },
    { id: "experience", label: t('nav.experience'), icon: Briefcase },
    { id: "projects", label: t('nav.projects'), icon: FolderOpen },
    { id: "certifications", label: t('nav.certifications'), icon: BadgeCheck },
    { id: "contact", label: t('nav.contact'), icon: Mail },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden lg:block",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
            <div className="text-xl font-heading font-bold gradient-text">
              SV
            </div>
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-sm font-medium rounded-full px-4 transition-all duration-300",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <LanguageToggle />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="fixed top-4 right-4 z-50 lg:hidden flex gap-2">
        <LanguageToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="glass-nav border-border text-foreground">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-68 bg-background border-l border-border">
            <div className="pt-12">
              <div className="text-xl font-heading font-bold gradient-text mb-8 px-4">
                SV
              </div>
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "justify-start gap-3 h-12 rounded-lg",
                        activeSection === item.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Button>
                  )
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}