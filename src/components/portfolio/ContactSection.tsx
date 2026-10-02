import { motion } from "framer-motion";
import { useToast } from "@/hooks/useToast";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/useLanguage";

export function ContactSection() {
  const { toast } = useToast();
  const { t } = useLanguage();

  const copyEmail = () => {
    navigator.clipboard.writeText("steveceto@gmail.com");
    toast({
      title: t("contact.copied"),
      description: t("contact.copiedDesc"),
    });
  };

  return (
    <section id="contact" className="py-32 relative bg-background border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="font-mono text-sm tracking-widest text-muted-foreground uppercase border border-border px-4 py-2 bg-card">
              {t("contact.step")}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tighter mb-6 uppercase"
          >
            {t("contact.headline_1")} <br/>
            <span className="text-muted-foreground">{t("contact.headline_2")}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-foreground font-mono mb-16 max-w-2xl"
          >
            {t("contact.headline_3")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-6 mb-24"
          >
            <a 
              href="mailto:steveceto@gmail.com"
              className="bg-foreground text-background px-8 h-14 flex items-center justify-center font-mono text-sm font-medium transition-transform hover:-translate-y-1 w-full sm:w-auto"
            >
              {t("contact.contact_me")}
            </a>
            <button 
              onClick={copyEmail}
              className="border border-border bg-transparent px-8 h-14 flex items-center justify-center font-mono text-sm font-medium hover:bg-secondary transition-colors w-full sm:w-auto"
            >
              {t("contact.copy_email")}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 font-mono text-sm w-full max-w-4xl border-t border-border pt-12"
          >
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <span className="text-muted-foreground text-xs tracking-widest uppercase">Email</span>
              <a href="mailto:steveceto@gmail.com" className="hover:text-muted-foreground transition-colors break-all">steveceto@gmail.com</a>
            </div>
            
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <span className="text-muted-foreground text-xs tracking-widest uppercase">Location</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> Douala, Cameroon</span>
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <span className="text-muted-foreground text-xs tracking-widest uppercase">GitHub</span>
              <a href="https://github.com/stevecet/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-muted-foreground transition-colors">
                <Github className="w-3 h-3"/> @stevecet
              </a>
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <span className="text-muted-foreground text-xs tracking-widest uppercase">LinkedIn</span>
              <a href="https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-muted-foreground transition-colors">
                <Linkedin className="w-3 h-3"/> View Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
