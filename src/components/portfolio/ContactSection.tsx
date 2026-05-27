import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/useToast";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Copy,
  MessageCircle,
} from "lucide-react";
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

  const copyPhone = () => {
    navigator.clipboard.writeText("237659461748");
    toast({
      title: t("phone.copied") || "Copied to clipboard",
      description: t("phone.copiedDesc") || "Phone number copied to clipboard.",
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-4">
              {t("contact.title")}
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border bg-card hover:bg-secondary/20 transition-colors">
                <CardContent className="p-6 sm:p-8 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-1">{t("contact.email")}</h3>
                    <p className="text-muted-foreground mb-3">steveceto@gmail.com</p>
                    <Button variant="outline" size="sm" onClick={copyEmail} className="gap-2 rounded-full">
                      <Copy className="h-4 w-4" />
                      Copy Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border bg-card hover:bg-secondary/20 transition-colors">
                <CardContent className="p-6 sm:p-8 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-1">{t("contact.phone")}</h3>
                    <p className="text-muted-foreground mb-3">+237 659 461 748</p>
                    <Button variant="outline" size="sm" onClick={copyPhone} className="gap-2 rounded-full">
                      <Copy className="h-4 w-4" />
                      Copy Phone
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="sm:col-span-2"
            >
              <Card className="border-border bg-card hover:bg-secondary/20 transition-colors">
                <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">{t("contact.location")}</h3>
                      <p className="text-muted-foreground">{t("contact.localisation")}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a href="https://github.com/stevecet/" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary">
                        <Github className="h-5 w-5" />
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </a>
                    <a href="https://wa.me/237659461748" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary">
                        <MessageCircle className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
