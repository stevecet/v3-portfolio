import { useLanguage } from "@/contexts/useLanguage"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Steve Veceto. {t("footer.rights")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-4 md:mt-0 font-mono text-xs uppercase tracking-widest">
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground/60">{t("footer.previous_versions")}</span>
              <a href="https://v1.steveceto.dev" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                v1
              </a>
              <span className="text-muted-foreground/30">/</span>
              <a href="https://v2.steveceto.dev" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                v2
              </a>
            </div>
            <span className="text-muted-foreground/30 hidden sm:inline-block">|</span>
            <a href="https://github.com/stevecet/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
