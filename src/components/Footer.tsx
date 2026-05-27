export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Steve Veceto. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Previous versions:</span>
              <a href="https://v1.steveceto.dev" target="_blank" rel="noreferrer" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                v1
              </a>
              <span className="text-sm text-muted-foreground/40">•</span>
              <a href="https://v2.steveceto.dev" target="_blank" rel="noreferrer" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                v2
              </a>
            </div>
            <span className="text-sm text-muted-foreground/30 hidden sm:inline-block">|</span>
            <a href="https://github.com/stevecet/" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
