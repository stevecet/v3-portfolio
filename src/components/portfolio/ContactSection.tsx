import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/useToast";
import { Github, Linkedin, Mail, MapPin, Phone, Copy, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/useLanguage";

export function ContactSection() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("steveceto@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
    toast({
      title: t("contact.copied"),
      description: t("contact.copiedDesc"),
    });
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+237659461748");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
    toast({
      title: t("phone.copied"),
      description: t("phone.copiedDesc"),
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-background border-t border-border overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase border border-border px-3 py-1 bg-secondary/60 rounded-xs">
              {t("contact.step")}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-foreground mb-6"
          >
            {t("contact.headline_1")} <br className="hidden sm:inline" />
            <span className="text-muted-foreground">{t("contact.headline_2")}</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-lg sm:text-xl text-foreground font-mono mb-12 max-w-2xl leading-relaxed"
          >
            {t("contact.headline_3")}
          </motion.p>

          {/* Direct CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto"
          >
            <a
              href="mailto:steveceto@gmail.com"
              className="bg-foreground text-background px-8 h-12 flex items-center justify-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider rounded-xs hover:opacity-90 active:scale-[0.98] transition-all w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              <span>{t("contact.contact_me")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={copyEmail}
              className="border border-border bg-secondary/40 px-6 h-12 flex items-center justify-center gap-2 font-mono text-xs font-medium uppercase tracking-wider rounded-xs hover:bg-secondary transition-colors w-full sm:w-auto"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
              <span>{copiedEmail ? t("contact.copied") : t("contact.copy_email")}</span>
            </button>
          </motion.div>

          {/* Verified Technical Telemetry Coordinates */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs w-full border-t border-border pt-12 text-left"
          >
            <div className="border border-border/70 bg-card p-4 rounded-xs">
              <span className="text-muted-foreground text-[10px] tracking-widest uppercase block mb-1">Direct Email</span>
              <a href="mailto:steveceto@gmail.com" className="text-foreground font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">
                steveceto@gmail.com
              </a>
            </div>

            <div className="border border-border/70 bg-card p-4 rounded-xs">
              <span className="text-muted-foreground text-[10px] tracking-widest uppercase block mb-1">Direct Phone</span>
              <button onClick={copyPhone} className="text-foreground font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5">
                {copiedPhone ? <Check className="w-3 h-3 text-emerald-500" /> : <Phone className="w-3 h-3 text-muted-foreground" />}
                <span>+237 659 46 17 48</span>
              </button>
            </div>

            <div className="border border-border/70 bg-card p-4 rounded-xs">
              <span className="text-muted-foreground text-[10px] tracking-widest uppercase block mb-1">Headquarters</span>
              <span className="text-foreground font-semibold flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-muted-foreground" />
                Douala, Cameroon
              </span>
            </div>

            <div className="border border-border/70 bg-card p-4 rounded-xs">
              <span className="text-muted-foreground text-[10px] tracking-widest uppercase block mb-1">Networks</span>
              <div className="flex items-center gap-3">
                <a href="https://github.com/stevecet/" target="_blank" rel="noreferrer" className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                  <Github className="w-3 h-3" /> GitHub
                </a>
                <span className="text-border">/</span>
                <a href="https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/" target="_blank" rel="noreferrer" className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
