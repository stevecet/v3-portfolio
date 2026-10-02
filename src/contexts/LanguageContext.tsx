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
    "nav.home": "00. Home",
    "nav.about": "01. About",
    "nav.experience": "02. Experience",
    "nav.projects": "03. Projects",
    "nav.certifications": "04. Certs",
    "nav.contact": "05. Contact",

    // Hero Section
    "hero.whoami": "Software Engineer &middot; Full Stack",
    "hero.headline_1": "I build software that",
    "hero.headline_2": "solves real problems.",
    "hero.description": "Focusing on robust architecture, clean code, and scalable systems. 4+ years experience in building production-ready platforms.",
    "hero.explore": "View projects",
    "hero.contact": "Contact me",
    "hero.status": "AVAILABLE FOR WORK",
    "hero.resume": "Download CV",
    "hero.resume_path": "/Resume_Gilchrist_Steve_Aurel_Veceto.pdf",
    "hero.resume_file": "Resume_Gilchrist_Steve_Aurel_Veceto.pdf",

    // About Section
    "about.title": "Engineering Identity.",
    "about.subtitle": "My approach to software is pragmatic: prioritize performance, maintainability, and user experience over temporary trends.",
    "about.location": "DOUALA, CAMEROON",
    "about.experience": "4+ YEARS",
    "about.focus": "FULL STACK",
    "about.core_tech": "Core Technologies",
    "about.foundation": "FOUNDATION",
    "about.foundation_desc": "Started my journey exploring how systems work under the hood. Early exposure to low-level logic and algorithms laid the groundwork for my problem-solving approach today.",
    "about.engineering": "ENGINEERING",
    "about.engineering_desc": "Moved into full-stack development, focusing on robust architecture and clean code. I specialize in building maintainable backends with Laravel and Node, paired with dynamic React and Next.js frontends.",
    "about.quality": "QUALITY & TESTING",
    "about.quality_desc": "Recognized that good software requires rigorous verification. Gained extensive experience in QA, implementing end-to-end testing with Cypress, Appium, and Codeception to ensure reliability.",
    "about.currently": "CURRENTLY",
    "about.currently_desc": "Based in Douala, Cameroon, building production-ready platforms. Focused on delivering scalable systems that solve real business problems without unnecessary complexity.",
    "about.frontend": "FRONTEND",
    "about.backend": "BACKEND",
    "about.database": "DATABASE",
    "about.qa": "QA & DEVOPS",

    // Experience Section
    "experience.title": "Experience.",
    "experience.subtitle": "A timeline of roles where I've contributed to engineering, scaled systems, and built products from the ground up.",
    "experience.present": "Present",
    "experience.hover_tech": "Hover to view tech stack",

    // Projects Section
    "projects.title": "Selected Work.",
    "projects.subtitle": "Some of the key projects I've built.",
    "projects.technology": "Technology",
    "projects.source": "Source",
    "projects.view_live": "View Live",

    // Certification Section
    "certifications.title": "Certifications.",
    "certifications.subtitle": "Formal training and credentials.",
    "certifications.credential": "CREDENTIAL",
    "certifications.view_credential": "View Credential",

    // Contact Section
    "contact.step": "05 / Next Steps",
    "contact.headline_1": "Have a problem",
    "contact.headline_2": "worth solving?",
    "contact.headline_3": "Let's build it.",
    "contact.contact_me": "Contact Me",
    "contact.copy_email": "Copy Email",
    "contact.copied": "Email copied!",
    "contact.copiedDesc": "Email address copied to clipboard.",
    "phone.copied": "Phone copied!",
    "phone.copiedDesc": "Phone number copied to clipboard.",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.previous_versions": "Previous versions:",
  },
  fr: {
    // Navigation
    "nav.home": "00. Accueil",
    "nav.about": "01. À propos",
    "nav.experience": "02. Expérience",
    "nav.projects": "03. Projets",
    "nav.certifications": "04. Certifications",
    "nav.contact": "05. Contact",

    // Hero Section
    "hero.whoami": "Ingénieur Logiciel &middot; Full Stack",
    "hero.headline_1": "Je crée des logiciels qui",
    "hero.headline_2": "résolvent de vrais problèmes.",
    "hero.description": "Concentré sur une architecture robuste, un code propre et des systèmes évolutifs. Plus de 4 ans d'expérience dans la création de plateformes de production.",
    "hero.explore": "Voir les projets",
    "hero.contact": "Me contacter",
    "hero.status": "DISPONIBLE",
    "hero.resume": "Télécharger CV",
    "hero.resume_path": "/CV_Gilchrist_Steve_Aurel_Veceto.pdf",
    "hero.resume_file": "CV_Gilchrist_Steve_Aurel_Veceto.pdf",

    // About Section
    "about.title": "Identité d'Ingénieur.",
    "about.subtitle": "Mon approche du développement est pragmatique : prioriser la performance, la maintenabilité et l'expérience utilisateur avant les tendances.",
    "about.location": "DOUALA, CAMEROUN",
    "about.experience": "4+ ANS",
    "about.focus": "FULL STACK",
    "about.core_tech": "Technologies de base",
    "about.foundation": "FONDATION",
    "about.foundation_desc": "J'ai commencé mon parcours en explorant le fonctionnement des systèmes de bas niveau. Cette exposition précoce à la logique et aux algorithmes a jeté les bases de mon approche actuelle de résolution de problèmes.",
    "about.engineering": "INGÉNIERIE",
    "about.engineering_desc": "Je suis passé au développement full-stack, en me concentrant sur l'architecture et le code propre. Je me spécialise dans la création de backends avec Laravel et Node, associés à des frontends dynamiques en React et Next.js.",
    "about.quality": "QUALITÉ & TESTS",
    "about.quality_desc": "J'ai réalisé qu'un bon logiciel nécessite une vérification rigoureuse. J'ai acquis une solide expérience en QA, en implémentant des tests bout en bout avec Cypress, Appium et Codeception.",
    "about.currently": "ACTUELLEMENT",
    "about.currently_desc": "Basé à Douala, Cameroun. Je me concentre sur la livraison de systèmes évolutifs qui résolvent de réels problèmes métier sans complexité inutile.",
    "about.frontend": "FRONTEND",
    "about.backend": "BACKEND",
    "about.database": "BASE DE DONNÉES",
    "about.qa": "QA & DEVOPS",

    // Experience Section
    "experience.title": "Expérience.",
    "experience.subtitle": "Une chronologie des rôles où j'ai contribué à l'ingénierie et construit des produits de A à Z.",
    "experience.present": "Présent",
    "experience.hover_tech": "Survolez pour voir la stack technique",

    // Projects Section
    "projects.title": "Projets Sélectionnés.",
    "projects.subtitle": "Quelques projets clés que j'ai construits.",
    "projects.technology": "Technologie",
    "projects.source": "Code Source",
    "projects.view_live": "Voir en direct",

    // Certification Section
    "certifications.title": "Certifications.",
    "certifications.subtitle": "Formation et certifications officielles.",
    "certifications.credential": "ACCRÉDITATION",
    "certifications.view_credential": "Voir l'accréditation",

    // Contact Section
    "contact.step": "05 / Prochaines Étapes",
    "contact.headline_1": "Vous avez un problème",
    "contact.headline_2": "qui vaut la peine d'être résolu ?",
    "contact.headline_3": "Construisons-le.",
    "contact.contact_me": "Contactez-moi",
    "contact.copy_email": "Copier l'email",
    "contact.copied": "Email copié !",
    "contact.copiedDesc": "L'adresse email a été copiée dans le presse-papiers.",
    "phone.copied": "Téléphone copié !",
    "phone.copiedDesc": "Le numéro a été copié dans le presse-papiers.",

    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.previous_versions": "Versions précédentes :",
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
