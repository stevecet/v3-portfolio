export interface ProjectItem {
  id: string | number;
  slug: string;
  title: string;
  subtitle: string;
  subtitlevf?: string;
  description: string;
  descriptionvf?: string;
  problem: string;
  problemvf?: string;
  architecture: string;
  architecturevf?: string;
  challenges: string;
  challengesvf?: string;
  testing: string;
  testingvf?: string;
  technologies: string[];
  category: string;
  categoryvf?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  _id: string;
  company: string;
  position: string;
  positionvf?: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  type: string;
  description: string[];
  descriptionvf?: string[];
  highlights?: string[];
  technologies: string[];
  website?: string;
}

export interface CertificationItem {
  id: number;
  title: string;
  titlevf?: string;
  issuer: string;
  year: string;
  description: string;
  descriptionvf?: string;
  technologies: string[];
  liveUrl?: string;
}

export const getAboutData = () => {
  return Promise.resolve({
    name: "Gilchrist Steve Aurel Veceto",
    shortName: "Steve Veceto",
    role: "Software Engineer & Full-Stack Developer",
    location: "Douala, Cameroon",
    experienceYears: "4+",
    description: [
      "I am a software engineer focused on building robust full-stack architectures, high-performance web applications, and reliable automated testing systems.",
      "My engineering philosophy centers on architectural clarity, resilient error boundaries, and pragmatic tooling. I combine modern frontend design systems (React, Next.js, TypeScript) with robust backend engines (Laravel, Symfony, Go, Node.js) and rigorous QA automation (Cypress, Codeception).",
      "Whether engineering skills-assessment platforms in production or building mission-critical API connectors, I deliver software that is measurable, maintainable, and engineered to scale."
    ],
    descriptionvf: [
      "Je suis un ingénieur logiciel dédié à la conception d'architectures full-stack robustes, d'applications web haute performance et de systèmes de tests automatisés fiables.",
      "Ma philosophie d'ingénierie repose sur la clarté architecturale, la résilience et des outils pragmatiques. J'associe des front-ends modernes (React, Next.js, TypeScript) à des back-ends robustes (Laravel, Symfony, Go, Node.js) et à une assurance qualité rigoureuse (Cypress, Codeception).",
      "Qu'il s'agisse de concevoir des plateformes d'évaluation des compétences en production ou des connecteurs d'API critiques, je conçois des logiciels mesurables, maintenables et bâtis pour durer."
    ],
    skills: [
      "TypeScript", "JavaScript", "React", "Next.js", "React Native", "Tailwind CSS",
      "Laravel", "PHP", "Symfony", "Go", "Node.js", "Express.js",
      "PostgreSQL", "MySQL", "MongoDB",
      "Cypress", "Codeception", "Appium", "Docker", "Git / GitHub Actions", "REST APIs"
    ]
  });
};

export const getExperienceData = (): Promise<{ experiences: ExperienceItem[] }> => {
  return Promise.resolve({
    experiences: [
      {
        _id: "maviance",
        company: "Maviance",
        position: "Software Engineer",
        positionvf: "Ingénieur Logiciel",
        location: "Douala, Cameroon",
        startDate: "Oct 2025",
        endDate: "",
        current: true,
        type: "Engineering & QA",
        description: [
          "QA & Automated Testing: Orchestrated end-to-end regression and integration testing using Cypress and Codeception; streamlined defect lifecycles and tracking within JIRA.",
          "Backend & Connectors: Architected and optimized resilient backend services and third-party financial/payment API connectors utilizing Symfony (PHP) and Go.",
          "Frontend & Cross-Platform: Built responsive, high-performance interfaces for web and mobile platforms with React and React Native.",
          "System Reliability: Authored unit tests, profiled bottleneck latency across full-stack services, and created comprehensive OpenAPI documentation."
        ],
        descriptionvf: [
          "Assurance Qualité & Tests : Conduite de suites de tests de régression et d'intégration de bout en bout avec Cypress et Codeception ; gestion rigoureuse des anomalies sur JIRA.",
          "Développement Backend : Conception et optimisation de services backend et connecteurs d'API tiers avec Symfony (PHP) et Go.",
          "Frontend & Mobile : Développement d'interfaces utilisateur réactives et fluides pour applications web et mobiles via React et React Native.",
          "Fiabilité du Système : Écriture de tests unitaires, analyse des goulots d'étranglement et documentation complète des APIs et composants."
        ],
        technologies: [
          "React", "React Native", "Symfony", "Go", "Cypress", "Codeception", "REST APIs", "JIRA", "Git"
        ],
        website: "https://maviance.com"
      },
      {
        _id: "esmartlearning",
        company: "Esmartlearning",
        position: "Full Stack Developer & Product Designer",
        positionvf: "Développeur Full Stack & Product Designer",
        location: "Douala, Cameroon",
        startDate: "Dec 2024",
        endDate: "",
        current: true,
        type: "Production Platform",
        description: [
          "End-to-End Product Engineering: Planned sprint architectures, budgetary constraints, and delivered the skills-assessment and test management platform.",
          "Backend Engine: Engineered a modular Laravel REST API governing multi-tenant authentication, automated timed assessments, and grade calculation.",
          "Frontend Architecture: Developed a responsive React SPA with Material UI and real-time candidate analytics visualizers using Recharts.",
          "Operations & Maintenance: Established continuous deployment pipelines on Vercel with automated build checks and performance monitoring."
        ],
        descriptionvf: [
          "Ingénierie Produit de Bout en Bout : Planification des sprints agiles, cadrage budgétaire et livraison de la plateforme d'évaluation des compétences.",
          "Moteur Backend : Développement d'une API REST modulaire avec Laravel pour l'authentification multi-utilisateurs et la gestion automatisée des tests chronométrés.",
          "Interface & Visualisation : Intégration front-end avec React, Material UI et tableaux de bord analytiques interactifs propulsés par Recharts.",
          "Déploiement & Maintenance : Déploiement continu sur Vercel avec vérification des builds et haute disponibilité opérationnelle."
        ],
        technologies: [
          "React", "Laravel", "MySQL", "Material UI", "Recharts", "Axios", "Vercel", "Figma"
        ],
        website: "https://esmartlearning.tech"
      },
      {
        _id: "online-africa",
        company: "Online Africa",
        position: "Network & IT Support Engineer",
        positionvf: "Ingénieur Réseau & Support IT",
        location: "Douala, Cameroon",
        startDate: "Jan 2024",
        endDate: "Oct 2025",
        current: false,
        type: "Infrastructure",
        description: [
          "Enterprise Infrastructure: Proactively monitored and maintained business-critical IT systems and internal network topologies to minimize operational downtime.",
          "Rapid Troubleshooting: Resolved complex hardware, networking, and application disruptions with rapid incident mitigation protocols.",
          "Root-Cause Documentation: Authored incident post-mortems, preventive maintenance protocols, and infrastructure topologies."
        ],
        descriptionvf: [
          "Infrastructure d'Entreprise : Supervision proactive et maintenance des systèmes IT et infrastructures réseaux pour assurer une disponibilité maximale.",
          "Résolution d'Incidents : Diagnostic rapide et résolution des pannes matérielles, logicielles et perturbations réseaux complexes.",
          "Documentation Technique : Rédaction de rapports d'analyse de causes profondes (post-mortems) et guides de maintenance préventive."
        ],
        technologies: [
          "Linux Shell", "Enterprise Networks", "Diagnostics", "Incident Logging", "Security Protocols"
        ]
      },
      {
        _id: "interstation",
        company: "Interstation Connect",
        position: "Frontend Developer",
        positionvf: "Développeur Frontend",
        location: "Douala, Cameroon",
        startDate: "Aug 2024",
        endDate: "Dec 2024",
        current: false,
        type: "Frontend Engineering",
        description: [
          "High-Fidelity Implementation: Transformed complex Figma UI specifications into pixel-perfect, accessible React components.",
          "API Integration & State: Implemented asynchronous state orchestration with Axios and custom React hooks.",
          "Deployment Workflow: Configured Vercel production deployment and caching strategies."
        ],
        descriptionvf: [
          "Intégration Haute-Fidélité : Transformation des maquettes Figma en composants React accessibles et fidèles au pixel près.",
          "Consommation d'APIs : Gestion des flux asynchrones avec Axios et des hooks personnalisés.",
          "Cycle de Livraison : Configuration du déploiement Vercel et optimisation des temps de chargement."
        ],
        technologies: [
          "React", "JavaScript", "Material UI", "Axios", "Vercel", "Figma"
        ]
      },
      {
        _id: "uwaco",
        company: "UWACO",
        position: "Frontend Developer Intern",
        positionvf: "Stagiaire Développeur Frontend",
        location: "Douala, Cameroon",
        startDate: "Jul 2023",
        endDate: "Nov 2023",
        current: false,
        type: "Frontend Engineering",
        description: [
          "Fleet Tracking UI: Designed and integrated Angular components for a live vehicle telematics and tracking application.",
          "Asset Optimization: Structured client-side asset caching and data parsing to accelerate map rendering speeds.",
          "Video Playback Engine: Implemented historical telemetry route playback based on live GPS tracking coordinate streams."
        ],
        descriptionvf: [
          "Suivi Télématique : Conception et intégration de l'interface Angular pour le suivi et la géolocalisation de véhicules en temps réel.",
          "Optimisation des Ressources : Mise en cache et traitement des données pour accélérer l'affichage cartographique.",
          "Rejeu de Trajets : Intégration d'un système de relecture vidéo des parcours basé sur les flux de coordonnées GPS."
        ],
        technologies: [
          "Angular", "SCSS", "Material Angular", "REST APIs", "Nextcloud"
        ]
      },
      {
        _id: "digital-investment",
        company: "Digital Investment",
        position: "Web Designer & Developer",
        positionvf: "Web Designer & Développeur",
        location: "Douala, Cameroon",
        startDate: "Nov 2021",
        endDate: "Aug 2022",
        current: false,
        type: "Design & CMS",
        description: [
          "Custom CMS Solutions: Designed and deployed dynamic WordPress web portals for diverse commercial clients.",
          "Brand & Visual Identity: Created digital assets, marketing banners, and user flow wireframes in Photoshop and Figma."
        ],
        descriptionvf: [
          "Solutions CMS sur Mesure : Conception et déploiement de sites vitrines dynamiques sous WordPress pour divers clients.",
          "Identité Visuelle : Création de chartes graphiques, bannières et maquettes ergonomiques sous Photoshop et Figma."
        ],
        technologies: [
          "WordPress", "Elementor", "Photoshop", "Figma", "CSS3"
        ]
      }
    ]
  });
};

export const getProjectsData = (): Promise<{ projects: ProjectItem[] }> => {
  return Promise.resolve({
    projects: [
      {
        id: "esmartlearning",
        slug: "esmartlearning",
        title: "Esmartlearning Platform",
        subtitle: "Production Skills-Assessment & Test Management Engine",
        subtitlevf: "Moteur de Gestion et d'Évaluation des Compétences en Production",
        description:
          "Production assessment platform allowing educators and organizations to create, schedule, and grade technical evaluations with real-time test timing, automated scoring, and performance analytics.",
        descriptionvf:
          "Plateforme d'évaluation en production permettant aux formateurs et organisations de concevoir, planifier et noter des tests techniques avec chronométrage temps réel, notation automatique et analyses de performance.",
        problem:
          "Educational institutes and remote hiring teams struggled with fragmented assessment tools, lack of strict anti-cheating timers, and high manual grading overhead for bulk cohorts.",
        problemvf:
          "Les instituts de formation et recruteurs peinaient avec des outils d'évaluation fragmentés, l'absence de minuteurs fiables et une charge colossale de correction manuelle.",
        architecture:
          "Engineered with a decoupled architecture: a Laravel REST API with MySQL relational schema, JWT auth tokens, and automated cron workers, paired with a React SPA utilizing Material UI and Recharts dashboards.",
        architecturevf:
          "Architecture découplée : API REST Laravel avec schéma relationnel MySQL, jetons JWT et workers automatisés, couplée à un front-end React avec tableaux de bord Recharts.",
        challenges:
          "Ensured atomic test submissions during unstable network connections with local session fallbacks, and optimized heavy analytical queries for student grade distribution graphs.",
        challengesvf:
          "Garantie de soumission atomique des réponses en cas de coupure réseau via persistance locale, et optimisation des requêtes analytiques sur les cohortes d'étudiants.",
        testing:
          "API endpoint verification via PHPUnit feature tests; critical student test-taking and grading flows validated with Cypress end-to-end automation.",
        testingvf:
          "Validation des routes d'API par tests de fonctionnalités PHPUnit ; parcours critique de passation d'examens automatisé de bout en bout avec Cypress.",
        technologies: [
          "React",
          "Laravel",
          "MySQL",
          "Material UI",
          "Recharts",
          "Axios",
          "Vercel",
          "PHP"
        ],
        category: "Production Platform",
        categoryvf: "Plateforme en Production",
        liveUrl: "https://esmartlearning.tech",
        featured: true,
        metrics: [
          { label: "Deployment", value: "Production" },
          { label: "Architecture", value: "Decoupled REST" },
          { label: "Testing", value: "PHPUnit + Cypress" }
        ]
      },
      {
        id: "taskify",
        slug: "taskify",
        title: "Taskify",
        subtitle: "Multi-Project Task Management & Collaboration Platform",
        subtitlevf: "Plateforme de Gestion de Tâches & Collaboration Multi-Projets",
        description:
          "High-productivity task management web app enabling users to organize multi-project backlogs, configure priorities, set deadline alerts, and track collaborative sprints from to-do to completion.",
        descriptionvf:
          "Application web de productivité permettant d'organiser des backlogs multi-projets, de configurer les priorités, de programmer des alertes d'échéances et de suivre l'avancement des sprints.",
        problem:
          "Teams needed an agile task tracker that wasn't bloated with enterprise complexity, focusing on instant status transitions, responsive layout, and zero learning curve.",
        problemvf:
          "Les équipes recherchaient un gestionnaire de tâches agile, fluide, sans la lourdeur des outils d'entreprise, offrant des changements de statuts instantanés et une prise en main immédiate.",
        architecture:
          "MERN stack implementation. Express.js REST API with MongoDB aggregation pipelines for task categorizations and deadline querying. Responsive frontend using React, Tailwind CSS, and Material UI components.",
        architecturevf:
          "Stack MERN. API REST Express.js avec pipelines d'agrégation MongoDB pour la catégorisation et les requêtes d'échéances. Front-end réactif combinant React, Tailwind CSS et Material UI.",
        challenges:
          "Optimistic UI updates for drag/drop status alterations, ensuring client state syncs seamlessly with database state while handling potential network dropouts.",
        challengesvf:
          "Mises à jour optimistes de l'UI lors des changements de statut pour éliminer les temps de latence ressentis, avec synchronisation résiliente côté base de données.",
        testing:
          "End-to-end workflow validation using Cypress for project creation, task assignment, and state changes.",
        testingvf:
          "Validation des parcours complets avec Cypress pour la création de projets, l'attribution des tâches et les transitions d'état.",
        technologies: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
          "Material UI",
          "Cypress"
        ],
        category: "Web Application",
        categoryvf: "Application Web",
        liveUrl: "https://taskify-steveceto.vercel.app/",
        githubUrl: "https://github.com/stevecet/taskify",
        featured: true,
        metrics: [
          { label: "Stack", value: "MERN" },
          { label: "E2E Tests", value: "Cypress" },
          { label: "Deploy", value: "Vercel" }
        ]
      },
      {
        id: "eventory",
        slug: "eventory",
        title: "Eventory",
        subtitle: "Event Discovery, Spatial Mapping & RSVP Engine",
        subtitlevf: "Moteur de Découverte d'Événements, Cartographie & RSVP",
        description:
          "Comprehensive event discovery and management system. Attendees browse events by geo-location, category, and schedule, with instant RSVP ticketing and automated calendar reminder integrations.",
        descriptionvf:
          "Système complet de découverte et gestion d'événements. Les participants explorent les événements par géolocalisation, catégorie et date, avec réservation RSVP immédiate et rappels d'agenda.",
        problem:
          "Event hosts struggled to balance RSVP capacity limits, interactive map discovery, and attendee communications across disparate channels.",
        problemvf:
          "Les organisateurs rencontraient des difficultés pour gérer les quotas d'inscriptions, la localisation cartographique interactive et la communication avec les participants.",
        architecture:
          "Modern full-stack hybrid: Next.js with Shadcn/Tailwind UI on the frontend, interfacing with a Python Flask REST backend backed by PostgreSQL relational database storage for relational ACID transactions.",
        architecturevf:
          "Hybride moderne : Next.js avec Shadcn/Tailwind côté front-end, interfacé avec un back-end Python Flask et une base de données relationnelle PostgreSQL garantissant les transactions ACID.",
        challenges:
          "Preventing race-condition overbooking during high-traffic registration windows using PostgreSQL row-level locks and transactional isolation.",
        challengesvf:
          "Prévention des surréservations lors des pics d'inscriptions via des verrous de lignes PostgreSQL et l'isolation des transactions.",
        testing:
          "Postman collection contract tests combined with Next.js component unit tests and registration simulation scripts.",
        testingvf:
          "Tests de contrats d'API via Postman et tests unitaires des composants Next.js pour valider le flux de réservation.",
        technologies: [
          "Next.js",
          "Python / Flask",
          "PostgreSQL",
          "Shadcn UI",
          "Tailwind CSS",
          "Lucide Icons"
        ],
        category: "Full-Stack System",
        categoryvf: "Système Full-Stack",
        liveUrl: "https://eventory-steveceto.vercel.app/",
        githubUrl: "https://github.com/stevecet/eventory",
        featured: true,
        metrics: [
          { label: "Frontend", value: "Next.js" },
          { label: "Backend", value: "Flask + Postgres" },
          { label: "Integrity", value: "ACID Transactions" }
        ]
      },
      {
        id: "reservo",
        slug: "reservo",
        title: "Reservo (Bookify)",
        subtitle: "Appointment & Service Booking Scheduling Engine",
        subtitlevf: "Moteur de Prise de Rendez-vous et Réservation de Services",
        description:
          "Time-slot booking engine tailored for service professionals (consultancies, salons, studios). Clients inspect real-time availability, lock slots, and receive appointment confirmations.",
        descriptionvf:
          "Moteur de prise de rendez-vous sur mesure pour prestataires et cabinets. Les clients consultent les disponibilités en direct, réservent leurs créneaux et reçoivent leurs confirmations.",
        problem:
          "Manual booking leads to double-bookings, timezone confusion, and awkward schedule adjustments.",
        problemvf:
          "La gestion manuelle des réservations génère des doublons de créneaux, des erreurs de fuseaux horaires et des frictions opérationnelles.",
        architecture:
          "Next.js frontend coupled with Node.js/Express backend and MongoDB. Dedicated slot permutation engine calculating working hours, custom break buffers, and existing appointments.",
        architecturevf:
          "Front-end Next.js couplé à un back-end Node.js/Express et MongoDB. Moteur de calcul des créneaux déduisant les horaires de travail, marges d'intervalles et rendez-vous existants.",
        challenges:
          "Handling dynamic duration services and multi-timezone client calendars while enforcing slot collision prevention.",
        challengesvf:
          "Gestion des durées de services variables et des fuseaux horaires avec verrouillage automatique anti-collision de créneaux.",
        testing:
          "Automated unit testing for scheduling math, slot availability calculation, and edge cases around overlapping appointments.",
        testingvf:
          "Tests unitaires automatisés pour les algorithmes de calcul de plages horaires et la détection de chevauchements.",
        technologies: [
          "Next.js",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS"
        ],
        category: "Web Application",
        categoryvf: "Application Web",
        liveUrl: "https://reservo-steveceto.vercel.app",
        githubUrl: "https://github.com/stevecet/reservo",
        featured: true,
        metrics: [
          { label: "Availability Engine", value: "Real-time" },
          { label: "Stack", value: "Next + Node" },
          { label: "Deploy", value: "Vercel" }
        ]
      },
      {
        id: "talk-am",
        slug: "talk-am",
        title: "Talk-Am Forum",
        subtitle: "Modern Threaded Discussion Platform with RBAC & Markdown",
        subtitlevf: "Forum de Discussion Moderne avec Markdown & Gestion des Rôles",
        description:
          "Structured discussion board featuring nested replies, markdown formatting, role-based access control (Admin, Moderator, Member), and real-time thread interactions.",
        descriptionvf:
          "Plateforme de discussion structurée avec réponses imbriquées, formatage Markdown, contrôle d'accès basé sur les rôles (Admin, Modérateur, Membre) et interactions en direct.",
        problem:
          "Community groups needed a structured discussion space that avoids chaotic group chat noise while providing markdown syntax highlighting and moderation controls.",
        problemvf:
          "Les communautés avaient besoin d'un espace structuré évitant le désordre des messageries instantanées, avec support Markdown et modération proactive.",
        architecture:
          "Next.js interface with Express API, MongoDB recursive comment trees, and cryptographic JWT authorization tokens.",
        architecturevf:
          "Interface Next.js avec API Express, arbres de commentaires récursifs dans MongoDB et autorisations cryptographiques par JWT.",
        challenges:
          "Rendering deep recursive comment threads without re-render performance degradation, paired with strict XSS sanitization for user-submitted markdown.",
        challengesvf:
          "Rendu performant des fils de commentaires imbriqués profonds et assainissement rigoureux contre les failles XSS sur le Markdown saisi.",
        testing:
          "Security testing for role escalation loopholes and XSS sanitization validation.",
        testingvf:
          "Tests de sécurité sur le cloisonnement des rôles et validation des filtres sanitaires XSS.",
        technologies: [
          "Next.js",
          "Express",
          "MongoDB",
          "JWT",
          "Tailwind CSS",
          "Material UI"
        ],
        category: "Community Platform",
        categoryvf: "Plateforme Communautaire",
        liveUrl: "https://talk-am.vercel.app/",
        githubUrl: "https://github.com/stevecet/talk-am",
        featured: false,
        metrics: [
          { label: "Security", value: "RBAC + JWT" },
          { label: "Rendering", value: "Markdown Safe" },
          { label: "Deploy", value: "Vercel" }
        ]
      }
    ]
  });
};

export const certifications: CertificationItem[] = [
  {
    id: 1,
    title: "IBM Full Stack Software Developer Professional Certificate",
    titlevf: "Certificat Professionnel Développeur Logiciel Full Stack IBM",
    issuer: "IBM via Coursera",
    year: "2025",
    description:
      "Comprehensive multi-course engineering credential covering end-to-end cloud development, microservices, containerization with Docker, CI/CD pipelines, DevOps workflows, Git/GitHub version control, Python data analysis, and full-stack software architecture.",
    descriptionvf:
      "Accréditation d'ingénierie approfondie couvrant le développement cloud, les microservices, la conteneurisation Docker, les pipelines CI/CD, les pratiques DevOps, le versionnage Git/GitHub, l'analyse Python et l'architecture logicielle full-stack.",
    technologies: [
      "Full-Stack Architecture",
      "Docker & Containers",
      "CI/CD Pipelines",
      "DevOps",
      "Cloud Deployment",
      "Python",
      "Microservices",
      "Git"
    ],
    liveUrl: "https://drive.google.com/drive/folders/1HoyhcCCafW1UhpKp37nTAlgFrvkjMz8v?usp=sharing"
  }
];

export const technicalCapabilities = [
  {
    domain: "Frontend Architecture",
    domainvf: "Architecture Frontend",
    description: "Designing resilient, accessible component systems with deliberate state management and fluid performance.",
    descriptionvf: "Conception de systèmes de composants accessibles et performants avec gestion d'état maîtrisée.",
    technologies: [
      { name: "React", level: "Primary", context: "Production SPAs, hooks, custom state engines" },
      { name: "Next.js", level: "Primary", context: "App Router, SSR, API routes, edge rendering" },
      { name: "TypeScript", level: "Primary", context: "Strict typing, generics, schema validation" },
      { name: "Tailwind CSS", level: "Primary", context: "Design systems, custom utility architectures" },
      { name: "React Native", level: "Secondary", context: "Cross-platform mobile applications" },
      { name: "Angular", level: "Secondary", context: "Enterprise telematics and tracking UIs" }
    ]
  },
  {
    domain: "Backend & Systems",
    domainvf: "Backend & Systèmes",
    description: "Engineering scalable APIs, connector microservices, and reliable server-side business logic.",
    descriptionvf: "Développement d'APIs évolutives, connecteurs microservices et logique métier serveur robuste.",
    technologies: [
      { name: "Laravel (PHP)", level: "Primary", context: "REST APIs, Eloquent ORM, queued jobs, authentication" },
      { name: "Symfony (PHP)", level: "Primary", context: "Enterprise backend architectures, API connectors" },
      { name: "Go (Golang)", level: "Secondary", context: "High-concurrency microservices, network connectors" },
      { name: "Node.js & Express", level: "Primary", context: "Microservices, async workers, REST endpoints" },
      { name: "Python / Flask", level: "Secondary", context: "Data ingestion, utility APIs, spatial querying" }
    ]
  },
  {
    domain: "Databases & Storage",
    domainvf: "Bases de Données & Stockage",
    description: "Structuring transactional relational schemas and document stores with indexing discipline.",
    descriptionvf: "Structuration de schémas relationnels et documentaires avec optimisation des index.",
    technologies: [
      { name: "PostgreSQL", level: "Primary", context: "Relational integrity, ACID transactions, complex joins" },
      { name: "MySQL", level: "Primary", context: "High-read platforms, indexing, migration schemas" },
      { name: "MongoDB", level: "Primary", context: "Document aggregation pipelines, nested structures" }
    ]
  },
  {
    domain: "QA, Testing & Verification",
    domainvf: "Assurance Qualité & Tests",
    description: "Guaranteeing platform stability through automated regression test suites and defect tracking.",
    descriptionvf: "Garantie de stabilité via suites de tests de régression automatisés et suivi des anomalies.",
    technologies: [
      { name: "Cypress", level: "Primary", context: "End-to-end browser regression automation" },
      { name: "Codeception", level: "Primary", context: "Acceptance and functional testing pipelines" },
      { name: "PHPUnit", level: "Primary", context: "Backend API contract and unit verification" },
      { name: "Appium / Maestro", level: "Secondary", context: "Mobile automated regression flows" },
      { name: "JIRA", level: "Workflow", context: "Agile issue tracking and defect triage" }
    ]
  },
  {
    domain: "DevOps & Tooling",
    domainvf: "DevOps & Outils",
    description: "Automating delivery pipelines, reproducible container environments, and infrastructure.",
    descriptionvf: "Automatisation des pipelines de livraison, conteneurs reproductibles et infrastructure.",
    technologies: [
      { name: "Docker", level: "Workflow", context: "Local containerized environments, microservice setup" },
      { name: "Git & GitHub Actions", level: "Workflow", context: "Trunk-based branches, CI verification" },
      { name: "Vercel", level: "Production", context: "Zero-downtime deployment, serverless edge" },
      { name: "Linux / Shell", level: "Workflow", context: "Scripting, server diagnostics, SSH environments" }
    ]
  }
];
