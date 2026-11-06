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
    "nav.home": "00. Overview",
    "nav.about": "01. Philosophy",
    "nav.experience": "02. Experience",
    "nav.projects": "03. Engineering",
    "nav.stack": "04. Capabilities",
    "nav.certifications": "05. Credentials",
    "nav.contact": "06. Connect",

    // Hero Section
    "hero.badge": "Full-Stack Software Engineer",
    "hero.headline_prefix": "Engineering scalable systems &amp; interfaces that",
    "hero.headline_highlight": "deliver measurable impact.",
    "hero.description": "Specializing in resilient full-stack architecture, high-performance web applications, and automated testing. 4+ years of hands-on engineering across production systems in Douala, Cameroon.",
    "hero.explore": "Inspect Projects",
    "hero.contact": "Initiate Contact",
    "hero.status": "OPEN FOR SELECT OPPORTUNITIES",
    "hero.resume": "Curriculum Vitae",
    "hero.resume_path": "/Resume_Gilchrist_Steve_Aurel_Veceto.pdf",
    "hero.resume_file": "Resume_Gilchrist_Steve_Aurel_Veceto.pdf",
    "hero.console_tab_system": "System Telemetry",
    "hero.console_tab_stack": "Active Runtime",
    "hero.console_tab_arch": "Architecture Model",
    "hero.console_status": "SYS.ONLINE",
    "hero.console_uptime": "99.98% UPTIME",
    "hero.console_loc": "DOUALA, CM",

    // About / Philosophy Section
    "about.title": "Engineering Philosophy.",
    "about.subtitle": "Software engineering is more than shipping code—it is managing complexity, ensuring reliability, and designing systems that outlast momentary trends.",
    "about.location": "DOUALA, CAMEROON",
    "about.experience": "4+ YEARS",
    "about.focus": "FULL-STACK ARCHITECTURE & QA",
    "about.education": "B.ENG COMPUTER SCIENCE",
    "about.foundation": "FOUNDATIONAL RIGOR",
    "about.foundation_desc": "Began with low-level algorithmic logic and structural computer engineering at Institut Universitaire de la Côte. Deep appreciation for data structures, memory constraints, and deterministic logic.",
    "about.engineering": "FULL-STACK PRAGMATISM",
    "about.engineering_desc": "Engineered production backends with Laravel, Symfony, Go, and Node.js paired with dynamic, type-safe frontends using React and Next.js. I prioritize predictable data flow and modular separation of concerns.",
    "about.quality": "VERIFICATION & QA EXCELLENCE",
    "about.quality_desc": "Software without rigorous verification is a liability. Extensive production exposure to automated regression testing with Cypress and Codeception, catching regressions before production deployments.",
    "about.currently": "PRODUCTION IMPACT",
    "about.currently_desc": "Delivering scalable software platforms for startups, enterprise clients, and freelance engagements with zero unnecessary dependencies, crisp interfaces, and verified uptime.",

    // Experience Section
    "experience.title": "Work Experience.",
    "experience.subtitle": "Chronological history of software engineering roles, technical responsibilities, and system contributions.",
    "experience.present": "Present",
    "experience.tech_used": "Core Technologies",
    "experience.responsibilities": "Key Engineering Responsibilities",

    // Projects / Case Studies Section
    "projects.title": "Engineering Case Studies.",
    "projects.subtitle": "Deep dives into architecture, technical challenges, automated testing, and production deployments.",
    "projects.filter_all": "All Work",
    "projects.filter_prod": "Production Systems",
    "projects.filter_fullstack": "Full-Stack",
    "projects.tab_overview": "Overview",
    "projects.tab_arch": "Architecture",
    "projects.tab_challenges": "Key Challenges",
    "projects.tab_testing": "Testing & QA",
    "projects.technology": "Technologies & Tools",
    "projects.source": "View Source",
    "projects.view_live": "Live Deployment",
    "projects.problem_statement": "The Problem",
    "projects.solution_arch": "Architectural Design",
    "projects.testing_approach": "Testing & Verification",
    "projects.challenges_solved": "Engineering Challenges Solved",

    // Capabilities Section
    "stack.title": "Technical Capabilities.",
    "stack.subtitle": "Categorized breakdown of technical capabilities, frameworks, database systems, and testing toolchains.",
    "stack.level_primary": "Core Daily",
    "stack.level_secondary": "Production Proficient",
    "stack.level_workflow": "Tooling & CI",

    // Certification Section
    "certifications.title": "Certifications & Credentials.",
    "certifications.subtitle": "Verified professional credentials and continuous technical specialization.",
    "certifications.credential": "VERIFIED CREDENTIAL",
    "certifications.view_credential": "View Official Credential",
    "certifications.issued_by": "Issued by",

    // Contact Section
    "contact.step": "06 / Contact",
    "contact.headline_1": "Have an engineering challenge",
    "contact.headline_2": "or a vision to build?",
    "contact.headline_3": "Let's engineer something exceptional.",
    "contact.contact_me": "Send Direct Email",
    "contact.copy_email": "Copy Email Address",
    "contact.copied": "Email copied!",
    "contact.copiedDesc": "steveceto@gmail.com copied to clipboard.",
    "phone.copied": "Phone number copied!",
    "phone.copiedDesc": "Phone copied to clipboard.",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built_with": "Built with React, TypeScript & Tailwind CSS.",
    "footer.previous_versions": "Archive:",
  },
  fr: {
    // Navigation
    "nav.home": "00. Aperçu",
    "nav.about": "01. Philosophie",
    "nav.experience": "02. Expérience",
    "nav.projects": "03. Ingénierie",
    "nav.stack": "04. Compétences",
    "nav.certifications": "05. Certifications",
    "nav.contact": "06. Contact",

    // Hero Section
    "hero.badge": "Ingénieur Logiciel Full-Stack",
    "hero.headline_prefix": "Concevoir des architectures &amp; interfaces qui",
    "hero.headline_highlight": "génèrent un impact réel.",
    "hero.description": "Spécialisé en architecture logicielle full-stack, applications web haute performance et tests automatisés. Plus de 4 ans de pratique sur des systèmes en production à Douala, Cameroun.",
    "hero.explore": "Examiner les Projets",
    "hero.contact": "Prendre Contact",
    "hero.status": "DISPONIBLE POUR NOUVELLES OPPORTUNITÉS",
    "hero.resume": "Curriculum Vitae",
    "hero.resume_path": "/CV_Gilchrist_Steve_Aurel_Veceto.pdf",
    "hero.resume_file": "CV_Gilchrist_Steve_Aurel_Veceto.pdf",
    "hero.console_tab_system": "Télémétrie Système",
    "hero.console_tab_stack": "Environnement Actif",
    "hero.console_tab_arch": "Modèle Architectural",
    "hero.console_status": "SYS.EN_LIGNE",
    "hero.console_uptime": "99.98% DISPONIBILITÉ",
    "hero.console_loc": "DOUALA, CM",

    // About / Philosophy Section
    "about.title": "Philosophie d'Ingénierie.",
    "about.subtitle": "Le génie logiciel va bien au-delà de la simple écriture de code : c'est maîtriser la complexité, assurer la résilience et bâtir des systèmes pérennes.",
    "about.location": "DOUALA, CAMEROUN",
    "about.experience": "4+ ANS",
    "about.focus": "ARCHITECTURE FULL-STACK & QA",
    "about.education": "B.ENG GÉNIE LOGICIEL",
    "about.foundation": "RIGUEUR FONDAMENTALE",
    "about.foundation_desc": "Initiation précoce à la logique algorithmique et au génie informatique à l'Institut Universitaire de la Côte. Appréciation approfondie des structures de données et des architectures modulaires.",
    "about.engineering": "PRAGMATISME FULL-STACK",
    "about.engineering_desc": "Conception de backends de production avec Laravel, Symfony, Go et Node.js, couplés à des frontends typés et réactifs en React et Next.js. Priorité à la maintenabilité et à la clarté.",
    "about.quality": "EXCELLENCE EN ASSURANCE QUALITÉ",
    "about.quality_desc": "Un logiciel sans vérification continue est une dette technique. Maîtrise approfondie des tests automatisés de régression avec Cypress et Codeception pour fiabiliser les déploiements.",
    "about.currently": "IMPACT EN PRODUCTION",
    "about.currently_desc": "Livraison de plateformes web pour des startups, des entreprises et des projets d'envergure, avec un souci constant de performance, d'accessibilité et de robustesse.",

    // Experience Section
    "experience.title": "Parcours Professionnel.",
    "experience.subtitle": "Chronologie des rôles d'ingénierie, responsabilités techniques et contributions architecturales.",
    "experience.present": "Présent",
    "experience.tech_used": "Technologies Utilisées",
    "experience.responsibilities": "Missions Clés d'Ingénierie",

    // Projects / Case Studies Section
    "projects.title": "Études de Cas & Projets.",
    "projects.subtitle": "Exploration approfondie des architectures, défis techniques, tests automatisés et déploiements.",
    "projects.filter_all": "Tous les Projets",
    "projects.filter_prod": "Plateformes en Production",
    "projects.filter_fullstack": "Full-Stack",
    "projects.tab_overview": "Aperçu",
    "projects.tab_arch": "Architecture",
    "projects.tab_challenges": "Défis Techniques",
    "projects.tab_testing": "Tests & QA",
    "projects.technology": "Technologies & Outils",
    "projects.source": "Code Source",
    "projects.view_live": "Voir en Ligne",
    "projects.problem_statement": "Problématique Métier",
    "projects.solution_arch": "Conception Architecturale",
    "projects.testing_approach": "Méthodologie de Tests",
    "projects.challenges_solved": "Défis d'Ingénierie Résolus",

    // Capabilities Section
    "stack.title": "Compétences Techniques.",
    "stack.subtitle": "Cartographie détaillée des expertises logicielles, frameworks, moteurs de bases de données et outillage de tests.",
    "stack.level_primary": "Pratique Quotidienne",
    "stack.level_secondary": "Maîtrise en Production",
    "stack.level_workflow": "Outillage & CI/CD",

    // Certification Section
    "certifications.title": "Certifications & Accréditations.",
    "certifications.subtitle": "Qualifications professionnelles reconnues et formation technique continue.",
    "certifications.credential": "CERTIFICAT VÉRIFIÉ",
    "certifications.view_credential": "Consulter l'Accréditation",
    "certifications.issued_by": "Délivré par",

    // Contact Section
    "contact.step": "06 / Contact",
    "contact.headline_1": "Vous avez un défi d'ingénierie",
    "contact.headline_2": "ou un projet ambitieux ?",
    "contact.headline_3": "Concevons ensemble une solution remarquable.",
    "contact.contact_me": "Envoyer un Email",
    "contact.copy_email": "Copier l'Email",
    "contact.copied": "Email copié !",
    "contact.copiedDesc": "steveceto@gmail.com a été copié dans le presse-papiers.",
    "phone.copied": "Téléphone copié !",
    "phone.copiedDesc": "Le numéro de téléphone a été copié.",

    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.built_with": "Conçu avec React, TypeScript & Tailwind CSS.",
    "footer.previous_versions": "Archives :",
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
