import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/useLanguage"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 border-border text-foreground hover:bg-secondary hover:text-foreground font-mono rounded-none"
    >
      <Languages className="h-4 w-4" />
      {language.toUpperCase()}
    </Button>
  )
}