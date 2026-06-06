export const getAboutData = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        description: [
          "Hello! I'm Steveceto, a software engineer based in Douala who enjoys building things that live on the internet. I develop websites and web apps that provide intuitive, user friendly interfaces with efficient and modern backends.",
          "I work on a wide variety of interesting and meaningful projects on a daily basis.",
          "Here are a few technologies I've been working with recently:",
        ],
        descriptionvf: [
          "Bonjour ! Je suis Steveceto, un ingénieur logiciel basé à Douala qui aime concevoir des solutions sur le web. Je développe des sites et des applications web qui offrent des interfaces utilisateur intuitives et conviviales, soutenues par des backends efficaces et modernes.",
          "Je travaille quotidiennement sur une grande variété de projets intéressants et significatifs.",
          "Voici quelques technologies avec lesquelles j'ai travaillé récemment :"
        ],
        skills: [
          "JavaScript",
          "TypeScript",
          "Python",
          "SQL",
          "React",
          "React Native",
          "Angular",
          "Next.js",
          "Tailwind",
          "Laravel",
          "Express.js",
          "Symfony",
          "MongoDB",
          "Cypress",
          "Appium",
          "Maestro",
          "Codeception",
        ],
        profileImage: "/profile.jpg",
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/about');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Get experience data
// Endpoint: GET /api/portfolio/experience
// Request: {}
// Response: { experiences: Array<{ _id: string, company: string, position: string, location: string, startDate: string, endDate: string, current: boolean, description: string[], technologies: string[], website?: string }> }
export const getExperienceData = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        experiences: [
          {
            _id: "1",
            company: "Maviance",
            position: "Software Engineer Intern",
            location: "Douala, Cameroon",
            startDate: "Oct 2025",
            endDate: "",
            current: true,
            description: [
              "QA & Automated Testing: Executed comprehensive functional, regression, and integration testing while implementing automated testing via Cypress/Codeception and tracking defects in JIRA.",
              "Backend Development: Built and optimized backend architectures and third-party API connectors using PHP and Go.",
              "Frontend Development: Developed responsive, seamless user interfaces for web and mobile applications using React and React Native.",
              "System Stability & Documentation: Ensured system stability by writing unit tests, debugging full-stack performance issues, and documenting APIs and UI components."
            ],
            descriptionvf: [
              "Assurance Qualité & Tests Automatisés : Exécution de tests fonctionnels, de régression et d'intégration complets, implémentation de tests automatisés via Cypress/Codeception et suivi des défauts dans JIRA.",
              "Développement Backend : Conception et optimisation d'architectures backend et de connecteurs d'API tiers en utilisant PHP et Go.",
              "Développement Frontend : Création d'interfaces utilisateur réactives et fluides pour des applications web et mobiles avec React et React Native.",
              "Stabilité du Système & Documentation : Garantie de la stabilité du système par l'écriture de tests unitaires, le débogage full-stack et la documentation des API et composants UI."
            ],
            technologies: [
              "React",
              "React Native",
              "PHP",
              "Go",
              "Cypress",
              "Codeception",
              "JIRA"
            ],
          },
          {
            _id: "2",
            company: "Esmartlearning",
            position: "Full stack developer and product designer",
            positionvf: "Développeur Full Stack et Product Designer",
            location: "Douala, Cameroon",
            startDate: "Dec 2024",
            endDate: "",
            current: true,
            description: [
              "Project planning, budgeting, and coordination of agile sprints",
              "UI/UX design with Figma",
              "Developed a REST API with Laravel for user and test management",
              "Integrated front-end with React.js and Material UI",
              "Deployed the platform on Vercel and handled maintenance",
            ],
            descriptionvf: [
              "Planification du projet, budgétisation et coordination des sprints agiles",
              "Conception UI/UX avec Figma",
              "Développement d'une API REST avec Laravel pour la gestion des utilisateurs et des tests",
              "Intégration du front-end avec React.js et Material UI",
              "Déploiement de la plateforme sur Vercel et gestion de la maintenance"
            ],
            technologies: [
              "React",
              "Material UI",
              "Recharts",
              "Axios",
              "Laravel",
              "MySQL",
            ],
            website: "https://esmartlearning.tech",
          },
          {
            _id: "3",
            company: "Interstation",
            position: "Frontend Developer",
            positionvf: "Développeur Frontend",
            location: "Douala, Cameroon",
            startDate: "August 2024",
            endDate: "Dec 2024",
            current: false,
            description: [
              "Developed UI with React.js and Material UI",
              "Implemented full UI based on provided designs",
              "Deployed the app on Vercel and ensured maintenance",
            ],
            descriptionvf: [
              "Développement de l'interface utilisateur avec React.js et Material UI",
              "Implémentation de l'intégralité de l'interface utilisateur basée sur les maquettes fournies",
              "Déploiement de l'application sur Vercel et maintenance de celle-ci"
            ],
            technologies: ["Figma", "React.js", "Material UI", "Axios"],
            // website: "https://upstatement.com",
          },
          {
            _id: "4",
            company: "UWACO",
            position: "Frontend Developer Intern",
            positionvf: "Stagiaire Développeur Frontend",
            location: "Douala, Cameroon",
            startDate: "Jul 2023",
            endDate: "Nov 2023",
            current: false,
            description: [
              "Designed and integrated Angular UI for a vehicle tracking application",
              "Optimized image and asset caching for better performance",
              "Implemented a video replay system based on live vehicle data",
            ],
            descriptionvf: [
              "Conception et intégration de l'interface utilisateur Angular pour une application de suivi de véhicules",
              "Optimisation de la mise en cache des images et des ressources pour de meilleures performances",
              "Implémentation d'un système de relecture vidéo basé sur les données de localisation en direct"
            ],
            technologies: ["Angular", "SCSS", "Material Angular", "Nexcloud"],
            // website: "https://apple.com",
          },
          {
            _id: "5",
            company: "Digital Investment",
            position: "Web designer",
            positionvf: "Web designer",
            location: "Douala, Cameroon",
            startDate: "Nov 2021",
            endDate: "Aug 2022",
            current: false,
            description: [
              "Designed and developed dynamic showcase websites with WordPress",
              "Created marketing visuals (banners, flyers) with Adobe Photoshop",
              "Impact: Modernized and improved UX for various client websites",
            ],
            descriptionvf: [
              "Conception et développement de sites vitrines dynamiques avec WordPress",
              "Création de visuels marketing (bannières, flyers) avec Adobe Photoshop",
              "Impact : Modernisation et amélioration de l'expérience utilisateur (UX) pour divers sites clients"
            ],
            technologies: ["Wordpress", "Elementor", "Photoshop", "Figma"],
            // website: "https://apple.com",
          },
        ],
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/experience');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Get projects data
// Endpoint: GET /api/portfolio/projects
// Request: {}
// Response: { projects: Array<{ _id: string, title: string, description: string, technologies: string[], category: string, image: string, liveUrl?: string, githubUrl?: string, featured: boolean }> }
export const getProjectsData = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        projects: [
          {
            id: 1,
            title: "Project Task Management platform",
            description:
              "Productivity-focused task management web app where users can create, organize, and track tasks across multiple projects. It includes features like deadlines, priorities, categories, task status (to-do, in progress, done), and collaborative user assignment.",
            descriptionvf:
              "Application web de gestion de tâches orientée productivité, permettant aux utilisateurs de créer, organiser et suivre des tâches réparties sur plusieurs projets. Elle propose des fonctionnalités comme la gestion des échéances, des priorités, des catégories, des statuts de tâches (à faire, en cours, terminé) et l’attribution de tâches à plusieurs utilisateurs.",
            image:
              "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=400&fit=crop",
            technologies: [
              "Reactjs",
              "Material UI",
              "Tailwind",
              "Express",
              "MongoDB",
              "Node",
            ],
            liveUrl: "https://taskify-steveceto.vercel.app/",
            githubUrl: "https://github.com/stevecet/taskify",
            featured: true,
            category: "Web App",
          },
          {
            id: 2,
            title: "Event Management System",
            description:
              "Platform for organizing and discovering events. Users can browse upcoming events by category or location, RSVP, and receive reminders. Admins can create events with descriptions, locations (map-based), and manage attendees.",
            descriptionvf:
              "Application de gestion et de découverte d'événements. Les utilisateurs peuvent parcourir les événements par catégorie ou par lieu, s’inscrire et recevoir des rappels. Les organisateurs peuvent créer des événements avec des descriptions, des dates, une carte de localisation et gérer les participants.",
            image:
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=400&fit=crop",
            technologies: [
              "Next",
              "Shadcn",
              "Tailwind",
              "lucide-react",
              "Flask",
              "PostgreSQL",
            ],
            liveUrl: "https://eventory-steveceto.vercel.app/",
            githubUrl: "https://github.com/stevecet/eventory",
            featured: true,
            category: "Web App",
          },
          {
            id: 3,
            title: "Forum / Discussion Board",
            description:
              "Modern discussion forum where users can create threads, reply to posts, and engage in structured debates. Includes moderation tools, role-based permissions (admin/mod/user), and nested commenting with markdown support.",
            descriptionvf:
              "Plateforme de forum de discussion moderne où les utilisateurs peuvent créer des sujets, répondre à des messages, et participer à des débats structurés. Le système inclut des outils de modération, une gestion des rôles (admin/modérateur/utilisateur), et des commentaires imbriqués avec support Markdown.",
            image: "https://unsplash.com/photos/people-talking-QBpZGqEMsKg",
            technologies: [
              "Next",
              "Material UI",
              "Tailwind",
              "JWT",
              "Express",
              "MongoDB",
            ],
            liveUrl: "https://talk-am.vercel.app/",
            githubUrl: "https://github.com/stevecet/talk-am",
            featured: false,
            category: "Web App",
          },
          {
            id: 4,
            title: "Booking System",
            name: "Bookify",
            description:
              "An appointment booking platform for services such as salons, consulting, or classes. Users can view availability, reserve slots, receive reminders, and manage bookings. Admins configure time slots and services.",
            descriptionvf:
              "Plateforme de réservation de rendez-vous adaptée aux services comme les salons de beauté, les consultations ou les cours. Les utilisateurs peuvent consulter les disponibilités, réserver des créneaux, recevoir des rappels et gérer leurs réservations. Les administrateurs peuvent configurer les horaires et les types de services.",
            image:
              "https://unsplash.com/photos/white-printer-paper-on-brown-wooden-table-DItYlc26zVI",
            technologies: ["Next", "MongoDB", "Express", "Node"],
            liveUrl: "https://reservo-steveceto.vercel.app",
            githubUrl: "https://github.com/stevecet/reservo",
            featured: false,
            category: "Web App",
          },
        ],
      });
    }, 500);
  });
};

export const certifications = [
  {
    id: 1,
    title: "IBM Full Stack Software Developer Professional Certificate",
    titlevf: "Certificat Professionnel de Développeur Logiciel Full Stack IBM",
    description:
      "A comprehensive, hands-on program that equips with the skills to build, deploy, and manage full-stack applications, covering essential concepts in DevOps, containerization with Docker, version control with Git/GitHub, and cloud deployment using IBM Cloud and CI/CD pipelines.",
    descriptionvf:
      "Un programme complet et pratique qui fournit les compétences nécessaires pour concevoir, déployer et gérer des applications full-stack, couvrant les concepts essentiels de DevOps, la conteneurisation avec Docker, la gestion de versions avec Git/GitHub et le déploiement cloud avec IBM Cloud et les pipelines CI/CD.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/960px-IBM_logo.svg.png?20250604110737",
    technologies: [
      "Full-Stack Development",
      "Cloud Computing",
      "Software Architecture",
      "Generative AI",
      "Python and Data analysis",
      "Contenerization",
      "Microservices and Serveless",
      "Git(Version Control System)",
    ],
    liveUrl: "https://drive.google.com/drive/folders/1HoyhcCCafW1UhpKp37nTAlgFrvkjMz8v?usp=sharing",
    githubUrl: "https://github.com/username/ai-dashboard",
    featured: true,
    year: "2025",
  },
];
