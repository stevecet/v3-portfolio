import React, { createContext, useState, useEffect } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.certifications": "Certifications",

    // Hero Section
    "hero.whoami": "Software Engineer",
    "hero.name": "STEVECETO",
    "hero.tagline": "I build exceptional digital experiences",
    "hero.description":
      "Full Stack Developer with 3+ years of experience building scalable, performant applications. Proven track record of delivering production-ready platforms for startups and freelance clients.",
    "hero.explore": "Explore Profile",
    "hero.resume": "Download Resume",
    "hero.resume_path": "/CV_Gilchrist_Steve_Aurel_Veceto.pdf",
    "hero.resume_file": "CV_Gilchrist_Steve_Aurel_Veceto.pdf",

    // About Section
    "about.title": "ABOUT ME",
    "about.download": "Download CV",
    "about.profile": "USER PROFILE",
    "about.skills": "SKILLS & TECHNOLOGIES",

    // Experience Section
    "experience.title": "WORK HISTORY",
    "experience.tasks": "Responsibilities",
    "experience.tech": "Technologies",
    "experience.present": "PRESENT",

    // Projects Section
    "projects.title": "MY PROJECTS",
    "projects.all": "All",
    "projects.description": "Description:",
    "projects.tech": "Tech Stack:",
    "projects.code": "CODE",
    "projects.demo": "DEMO",

    // Certification Section
    "certifications.title": "CERTIFICATIONS",

    // Contact Section
    "contact.title": "CONTACT ME",
    "contact.status": "Available for opportunities",
    "contact.description":
      "Currently open to new challenges and collaborations. Feel free to reach out for projects, questions, or just to say hello!",
    "contact.info": "Contact Information",
    "contact.form": "Send a Message",
    "contact.email": "Email Address:",
    "contact.location": "Location:",
    "contact.localisation": "Douala, Cameroon",
    "contact.phone": "Phone Number:",
    "contact.social": "Social Links:",
    "contact.name": "Your Name:",
    "contact.message": "Message:",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent!",
    "contact.successDesc":
      "Thank you for your message. I'll get back to you soon.",
    "contact.error": "Error",
    "contact.errorDesc": "Failed to send message. Please try again.",
    "contact.copied": "Email copied!",
    "phone.copied": "Phone copied!",
    "contact.copiedDesc": "Email address copied to clipboard.",
    "phone.copiedDesc": "Phone number copied to clipboard.",

    // Form placeholders
    "form.name": "Enter your name...",
    "form.email": "your.email@domain.com",
    "form.message": "Type your message here...",
    "form.required": "is required",
    "form.invalidEmail": "Invalid email format",

    // Common
    "common.loading": "Loading...",
    "common.error": "ERROR:",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",

    // Hero Section
    "hero.whoami": "Ingénieur Logiciel",
    "hero.name": "STEVECETO",
    "hero.tagline": "Je crée des expériences numériques exceptionnelles",
    "hero.description":
      "Développeur Full Stack avec 3+ années d’expériences dans le développement d’applications performantes et évolutives avec. Solide expérience dans la livraison de plateformes prêtes pour la production pour des startups et des clients en freelance.",
    "hero.explore": "Explorer le profil",
    "hero.resume": "Télécharger CV",
    "hero.resume_path": "/Resume_Gilchrist_Steve_Aurel_Veceto.pdf",
    "hero.resume_file": "Resume_Gilchrist_Steve_Aurel_Veceto.pdf",

    // About Section
    "about.title": "À PROPOS DE MOI",
    "about.download": "Télécharger CV",
    "about.profile": "PROFIL",
    "about.skills": "COMPÉTENCES ET TECHNOLOGIES",

    // Experience Section
    "experience.title": "EXPÉRIENCE PRO",
    "experience.tasks": "Responsabilités",
    "experience.tech": "Technologies",
    "experience.present": "PRÉSENT",

    // Projects Section
    "projects.title": "MES PROJETS",
    "projects.all": "Tous",
    "projects.description": "Description :",
    "projects.tech": "Technologies :",
    "projects.code": "CODE",
    "projects.demo": "DÉMO",

    // Certification Section
    "certifications.title": "CERTIFICATIONS",

    // Contact Section
    "contact.title": "CONTACTEZ MOI",
    "contact.status": "Disponible pour des opportunités",
    "contact.description":
      "Actuellement ouverts aux nouveaux défis et collaborations. N'hésitez pas à me contacter pour des projets, des questions, ou juste pour dire bonjour!",
    "contact.info": "Informations de Contact",
    "contact.form": "Envoyer un message",
    "contact.email": "Adresse Email :",
    "contact.location": "Localisation :",
    "contact.localisation": "Douala, Cameroun",
    "contact.phone": "Numéro de téléphone :",
    "contact.social": "Liens sociaux :",
    "contact.name": "Votre Nom :",
    "contact.message": "Message :",
    "contact.send": "Envoyer le message",
    "contact.sending": "Envoi en cours...",
    "contact.success": "Message envoyé!",
    "contact.successDesc":
      "Merci pour votre message. Je vous répondrai bientôt.",
    "contact.error": "Erreur",
    "contact.errorDesc": "Échec de l'envoi du message. Veuillez réessayer.",
    "contact.copied": "Email copié!",
    "phone.copied": "Telephone copié!",
    "contact.copiedDesc": "Adresse email copiée dans le presse-papiers.",
    "phone.copiedDesc": "Numero de téléphone copié dans le presse-papiers.",

    // Form placeholders
    "form.name": "Entrez votre nom...",
    "form.email": "votre.email@domaine.com",
    "form.message": "Tapez votre message ici...",
    "form.required": "est requis",
    "form.invalidEmail": "Format d'email invalide",

    // Common
    "common.loading": "Chargement...",
    "common.error": "ERREUR :",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: string | undefined = (
      translations[language as keyof typeof translations] as Record<
        string,
        string
      >
    )[key];

    // If direct key lookup fails, try nested lookup (for future extensibility)
    if (value === undefined && keys.length > 1) {
      let nested: unknown = translations[language as keyof typeof translations];
      for (const k of keys) {
        if (typeof nested === "object" && nested !== null && k in nested) {
          nested = (nested as Record<string, unknown>)[k];
        } else {
          nested = undefined;
          break;
        }
      }
      if (typeof nested === "string") {
        value = nested;
      }
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
