import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Github, Linkedin, Mail, ArrowUpRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/useLanguage";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "experience", label: t("nav.experience") },
    { id: "projects", label: t("nav.projects") },
    { id: "capabilities", label: t("nav.stack") },
    { id: "certifications", label: t("nav.certifications") },
    { id: "contact", label: t("nav.contact") },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden lg:block border-b",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-border/80 shadow-sm"
            : "bg-background/40 backdrop-blur-xs border-border/30"
        )}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
          {/* Brand Moniker */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-2 h-2 rounded-xs bg-emerald-500 animate-pulse" />
            <span className="font-mono text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground">
              steve<span className="text-muted-foreground">_</span>veceto
            </span>
            <span className="font-mono text-[10px] text-muted-foreground/70 uppercase tracking-widest border border-border/60 px-1.5 py-0.5 rounded-xs ml-1">
              v3.2
            </span>
          </button>

          {/* Nav Items */}
          <nav className="flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const title = item.label.includes(". ") ? item.label.split(". ")[1] : item.label;
              const index = item.label.includes(". ") ? item.label.split(". ")[0] : "";

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative px-3 py-1.5 text-xs font-mono transition-all duration-200 tracking-wider uppercase rounded-xs",
                    isActive
                      ? "text-foreground font-semibold bg-secondary/70 border border-border/80"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                  )}
                >
                  <span className="text-muted-foreground/60 mr-1 text-[10px]">{index}</span>
                  {title}
                </button>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-3 pl-4 border-l border-border/60">
            <ThemeToggle />
            <LanguageToggle />
            <a
              href="https://github.com/stevecet/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.header>

      {/* Mobile Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center justify-between px-4 h-16 bg-background/90 backdrop-blur-md border-b border-border/80">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-xs bg-emerald-500 animate-pulse" />
          <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
            steve_veceto
          </span>
        </button>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 px-2.5 bg-background border-border text-foreground rounded-xs"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px] bg-background border-l border-border p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
                  <div className="font-mono font-bold text-foreground flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-500" />
                    <span>steve_veceto</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground border border-border px-1.5 py-0.5 rounded-xs">
                    SYS.READY
                  </span>
                </div>

                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "flex items-center justify-between px-3 py-2.5 text-xs font-mono tracking-wider uppercase text-left rounded-xs transition-colors",
                          isActive
                            ? "bg-secondary text-foreground font-semibold border border-border"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                        )}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="text-emerald-500 font-bold">&gt;</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="pt-6 border-t border-border space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Douala, Cameroon</span>
                </div>
                <div className="flex items-center justify-between font-mono text-xs text-muted-foreground pt-2">
                  <a
                    href="https://github.com/stevecet/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-foreground"
                  >
                    <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-foreground"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href="mailto:steveceto@gmail.com"
                    className="flex items-center gap-1 hover:text-foreground"
                  >
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
