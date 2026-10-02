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
    { id: "hero", label: "00. Home", icon: Home },
    { id: "about", label: "01. About", icon: User },
    { id: "experience", label: "02. Experience", icon: Briefcase },
    { id: "projects", label: "03. Projects", icon: FolderOpen },
    { id: "certifications", label: "04. Certs", icon: BadgeCheck },
    { id: "contact", label: "05. Contact", icon: Mail },
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden lg:block border-b",
          scrolled ? "bg-background/95 backdrop-blur-sm border-border" : "bg-transparent border-transparent"
        )}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold tracking-tighter text-foreground text-lg">
            steve<span className="text-muted-foreground">_</span>veceto
          </div>
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-xs font-mono transition-all duration-200 uppercase tracking-widest",
                  activeSection === item.id
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeSection === item.id && <span className="text-foreground mr-1">&gt;</span>}
                {item.label.split('. ')[1]}
              </button>
            ))}
            <div className="pl-4 border-l border-border">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="fixed top-4 right-4 z-50 lg:hidden flex gap-2">
        <LanguageToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm border-border text-foreground rounded-none">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-68 bg-background border-l border-border">
            <div className="pt-12">
              <div className="font-mono font-bold tracking-tighter text-foreground text-lg mb-10 px-4">
                steve<span className="text-muted-foreground">_</span>veceto
              </div>
              <div className="flex flex-col space-y-4 px-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "text-left text-sm font-mono transition-all duration-200 uppercase tracking-widest",
                        isActive
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground"
                      )}
                    >
                      {isActive && <span className="text-foreground mr-2">&gt;</span>}
                      {item.label}
                    </button>
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