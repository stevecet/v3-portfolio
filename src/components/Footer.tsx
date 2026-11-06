import { useLanguage } from "@/contexts/useLanguage";
import { ArrowUp, Terminal } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Steve Veceto. {t("footer.rights")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-mono text-xs uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground/60">{t("footer.previous_versions")}</span>
              <a
                href="https://v1.steveceto.dev"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground"
              >
                v1
              </a>
              <span className="text-muted-foreground/30">/</span>
              <a
                href="https://v2.steveceto.dev"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground"
              >
                v2
              </a>
            </div>

            <span className="text-muted-foreground/30 hidden sm:inline-block">|</span>

            <a
              href="https://github.com/stevecet/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>

            <span className="text-muted-foreground/30 hidden sm:inline-block">|</span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
