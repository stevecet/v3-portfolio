import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleToggle}
      className="h-8 px-2.5 font-mono text-xs border-border bg-secondary/50 hover:bg-secondary text-foreground rounded-xs flex items-center gap-1.5 transition-colors"
      aria-label="Toggle visual theme"
      title={isDark ? "Switch to Editorial Light mode" : "Switch to Slate Dark mode"}
    >
      {isDark ? (
        <>
          <Sun className="h-3.5 w-3.5 text-amber-400" />
          <span className="text-[10px] uppercase tracking-wider font-semibold">Light</span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5 text-slate-700" />
          <span className="text-[10px] uppercase tracking-wider font-semibold">Dark</span>
        </>
      )}
    </Button>
  );
}
