import type { Lang, PortfolioData } from "./types";

const skillCategories: PortfolioData["about"]["skills"]["categories"] = [
  {
    title: "Langages",
    icon: "lucide:code",
    description:
      "Langages que j'utilise au quotidien pour le développement web, mobile et logiciel.",
    tools: [
      { name: "Python" },
      { name: "JavaScript / TypeScript" },
      { name: "PHP" },
      { name: "SQL" },
      { name: "HTML / CSS" },
      { name: "WLangage" },
    ],
  },
  {
    title: "Frameworks",
    icon: "lucide:layers",
    description:
      "Frameworks front-end, back-end et mobile pour des applications robustes et scalables.",
    tools: [
      { name: "NestJS" },
      { name: "Next.js" },
      { name: "React" },
      { name: "Vue.js" },
      { name: "FastAPI" },
      { name: "Express" },
      { name: "Expo / Flutter" },
    ],
  },
  {
    title: "Bases de données",
    icon: "lucide:database",
    description:
      "Systèmes de gestion de données relationnelles, NoSQL et ORM.",
    tools: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "HFSQL" },
      { name: "Prisma (ORM)" },
    ],
  },
  {
    title: "Outils & Cloud",
    icon: "lucide:cloud",
    description:
      "Outillage DevOps, hébergement et plateformes cloud.",
    tools: [
      { name: "Docker" },
      { name: "Git / GitHub" },
      { name: "Redis" },
      { name: "Nginx" },
      { name: "VPS Linux" },
      { name: "Vercel" },
      { name: "Railway" },
      { name: "Supabase" },
    ],
  },
  {
    title: "IA & Data",
    icon: "lucide:brain-circuit",
    description:
      "Analyse de données, annotation et intégration de modèles d'IA.",
    tools: [
      { name: "Power BI" },
      { name: "Label Studio" },
      { name: "OpenAI API" },
      { name: "pandas (Python)" },
    ],
  },
  {
    title: "Autre",
    icon: "lucide:wrench",
    description:
      "Compétences complémentaires : développement desktop, infographie et drone.",
    tools: [
      { name: "WinDev 25 / WebDev 25" },
      { name: "Infographie (Photoshop, Illustrator)" },
      { name: "Pilotage de drone DJI" },
    ],
  },
];

const experience: PortfolioData["about"]["experience"] = [
  {
    title: "Fondateur & Développeur principal — BENSOFTCG",
    date: "2022 – présent",
    icon: "mdi:rocket-launch",
    description: [
      "Développement et commercialisation de SOFTEDUC (gestion scolaire) et GEST-H (gestion hôtelière).",
      "Conception de Falanka, plateforme fintech de transfert Mobile Money multi-pays (NestJS, PostgreSQL, Expo).",
      "Pilotage d'une communauté tech congolaise pour la digitalisation des PME.",
    ],
  },
  {
    title: "Développeur Frontend (Next.js) — Congo Digital Service",
    date: "Oct. 2024 – Juil. 2025",
    icon: "mdi:MonitorDashboard",
    description: [
      "Interfaces Next.js / Vue.js / Expo pour des apps de gestion d'homologation (ARPCE) et immobilière.",
      "Plateforme de collecte de données audio / image / texte pour le projet IA Lingala & Kituba (PNUD).",
    ],
  },
  {
    title: "Développeur Backend FastAPI — Projet PNUD — IA Lingala & Kituba",
    date: "Juil. – Août 2024",
    icon: "mdi:Api",
    description: [
      "Pipeline de prédiction ML intégrant Label Studio, OpenAI et MinIO / S3.",
    ],
  },
      {
        title: "BTS — Analyse et Programmation des Données",
        date: "2020 – 2022",
        icon: "mdi:school-outline",
        description: "Analyse et programmation des données à Brazzaville.",
      },
      {
        title:
          "Certifications Cisco Networking Academy (Cybersécurité, Cybercriminalité, Python Essentials 1, Data Science avec Python)",
        date: "2026",
        icon: "mdi:certificate",
        description: "Certifications en cybersécurité, cybercriminalité, Python Essentials 1 et Data Science avec Python — En ligne.",
      },
    ];

const projects: PortfolioData["projects"]["work"] = [
  {
    id: 1,
    title: "Falanka",
    category: "Fintech",
    description:
      "Plateforme fintech Mobile Money multi-pays (en développement).",
    details:
      "Plateforme fintech Mobile Money multi-pays (en développement) — NestJS microservices, PostgreSQL/Prisma, Redis, Auth0, Expo, Next.js admin.",
    image:
      "falanka.png",
    gallery: [
      "falanka.png",
      "falanka.png-1",
      "falanka.png-2",
    ],
    github: "https://github.com",
    live: "https://benibantsimba.bensoftcg.com",
      tech: [
        { name: "NestJS", icon: "mdi:server" },
        { name: "PostgreSQL", icon: "mdi:database" },
        { name: "Redis", icon: "mdi:memory" },
        { name: "Expo", icon: "mdi:cellphone" },
        { name: "Next.js", icon: "mdi:react" },
      ],
  },
  {
    id: 2,
    title: "SOFTEDUC",
    category: "Éducation",
    description:
      "Logiciel de gestion scolaire complet (WinDev 25).",
    details:
      "Logiciel de gestion scolaire complet (WinDev 25) : apprenants, examens, comptabilité, reporting. Produit commercialisé au Congo.",
    image:
      "softeduc.jpeg",
    gallery: [
      "softeduc.jpeg",
      "softeduc.jpeg-1",
      "softeduc.jpeg-2",
    ],
    github: "https://github.com",
    live: "https://benibantsimba.bensoftcg.com",
      tech: [
        { name: "WinDev 25", icon: "mdi:monitor" },
        { name: "HFSQL", icon: "mdi:database" },
        { name: "WebDev 25", icon: "mdi:web" },
      ],
  },
  {
    id: 3,
    title: "MINI ERP PRATIC",
    category: "IA & Data",
    description:
      "MINI ERP est une solution de gestion tout-en-un conçue pour les petites et moyennes entreprises. Elle centralise les ventes, les achats, les stocks, la facturation, la comptabilité et les rapports dans une interface moderne, simple et intuitive afin d'améliorer la productivité et la prise de décision.",
    details:
      "Annotation de données pour entraîner des modèles IA sur les langues Lingala et Kituba (FastAPI, Label Studio, MinIO).",
    image:
      "pratic.png",
    gallery: [
      "pratic.png",
      "pratic.png-1",
      "pratic.png-2",
    ],
    github: "https://github.com",
    live: "https://benibantsimba.bensoftcg.com",
      tech: [
        { name: "FastAPI", icon: "mdi:api" },
        { name: "Label Studio", icon: "mdi:tag-outline" },
        { name: "MinIO", icon: "mdi:aws" },
        { name: "OpenAI API", icon: "mdi:robot" },
      ],
  },
];

export const fr: PortfolioData = {
  home: {
    hero: {
      name: "Béni Duvin BANTSIMBA IBINDA",
      title: "Développeur full-stack & entrepreneur tech",
      subtitle:
        "Développeur full-stack et entrepreneur tech basé à Brazzaville, Congo. Fondateur de BENSOFTCG, je conçois et commercialise des solutions logicielles adaptées aux réalités africaines. Passionné par la fintech, l'IA et la digitalisation des institutions.",
    },
    skills: {
      sectionTitle: "Compétences & Expertise",
      sectionDescription:
        "Un aperçu des technologies et domaines sur lesquels je travaille au quotidien.",
      categories: skillCategories,
    },
    work: {
      sectionTitle: "Projets notables",
      sectionDescription:
        "Une sélection de mes projets récents en développement, fintech, éducation et intelligence artificielle.",
    },
    testimonials: {
      sectionTitle: "Témoignages",
      sectionDescription: "",
      items: [],
    },
    involvement: {
      sectionTitle: "Engagement & activités",
      sectionDescription:
        "Au-delà du code : communauté, musique et diffusion de connaissances.",
    },
  },
  about: {
    profile: {
      name: "Béni Duvin BANTSIMBA IBINDA",
      title: "Développeur full-stack & entrepreneur tech",
      image:
        "beni.jpeg",
      description: [
        "Développeur full-stack et entrepreneur tech basé à Brazzaville, Congo. Fondateur de BENSOFTCG, je conçois et commercialise des solutions logicielles adaptées aux réalités africaines.",
        "Passionné par la fintech, l'IA et la digitalisation des institutions, je m'appuie sur des technologies modernes (NestJS, Next.js, FastAPI, PostgreSQL) pour bâtir des produits concrets et utiles.",
        "Engagé auprès de la communauté tech congolaise, je partage mes connaissances et accompagne les PME dans leur transformation numérique.",
      ],
    },
    education: [
      {
        title:
          "Licence Professionnelle — Systèmes Informatiques et Réseaux",
        date: "2022 – 2023",
        icon: "mdi:school",
        description:
          "Formation en systèmes informatiques et réseaux à Brazzaville.",
      },
      {
        title: "BTS — Analyse et Programmation des Données",
        date: "2020 – 2022",
        icon: "mdi:school-outline",
        description: "Analyse et programmation des données à Brazzaville.",
      },
    ],
    experience,
    certifications: [
      {
        title: "Certificat sur les Fondamentaux de la Gestion de Projet",
        issuer: "Cornerstone OnDemand Foundation (DisasterReady.org)",
        date: "Juillet 2026",
        icon: "mdi:certificate",
      },
      {
        title: "Cybersecurity Fundamentals",
        issuer: "IBM SkillsBuild",
        date: "Juillet 2026",
        icon: "mdi:certificate",
      },
      {
        title: "Claude Code 101",
        issuer: "Anthropic",
        date: "2026",
        icon: "mdi:certificate",
      },
      {
        title: "Claude 101",
        issuer: "Anthropic",
        date: "2026",
        icon: "mdi:certificate",
      },
      {
        title:
          "Certifications Cisco Networking Academy (Cybersécurité, Cybercriminalité, Python Essentials 1, Data Science avec Python)",
        issuer: "Cisco Networking Academy",
        date: "2026",
        icon: "mdi:certificate",
      },
    ],
    skills: {
      sectionTitle: "Compétences techniques",
      categories: skillCategories,
    },
    languages: {
      sectionTitle: "Langues",
      description:
        "Langues parlées et niveaux de maîtrise.",
      items: [
        { name: "Français", level: "Courant (langue maternelle)" },
        { name: "Anglais", level: "Intermédiaire" },
        { name: "Espagnol", level: "Notions" },
        { name: "Lingala / Kituba", level: "Langues locales" },
      ],
    },
    involvement: {
      sectionTitle: "Engagement & activités",
      sectionDescription:
        "Au-delà du code : communauté, musique et diffusion de connaissances.",
      items: [
        {
          title: "Communauté BENSOFTCG",
          description:
            "Fondateur de la communauté BENSOFTCG — réseau d'étudiants et professionnels congolais pour la digitalisation des entreprises locales.",
          icon: "lucide:users",
        },
        {
          title: "Musique",
          description:
            "Musicien (trombone, piano, guitare) — prestations scéniques en cabaret ; formation musicale depuis 2010.",
          icon: "lucide:music",
        },
        {
          title: "Ressource éducative",
          description:
            "Auteur d'un document éducatif — « Initiation à l'informatique pour les enfants » diffusé auprès d'écoles partenaires.",
          icon: "lucide:book-open",
        },
      ],
    },
    sectionTitles: {
      education: "Formation",
      experience: "Expérience",
      skills: "Compétences",
      certifications: "Certifications",
      languages: "Langues",
      involvement: "Engagement & activités",
    },
  },
  projects: {
    sectionTitle: "Projets notables",
    sectionDescription:
      "Une sélection de mes projets récents en développement, fintech, éducation et intelligence artificielle.",
    work: projects,
  },
  contact: {
    heading:
      "Un projet en tête ? Contactez-moi et créons quelque chose d'utile ensemble.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127729.48088992334!2d15.1834936!3d-4.2633592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33a09b7a1e3b%3A0x...!2sBrazzaville%2C%20Congo!5e0!3m2!1sfr!2scg!4v1715701234567!5m2!1sfr!2scg",
      address: "Brazzaville, Congo",
    },
  },
  footer: {
    name: "Béni Duvin BANTSIMBA IBINDA",
    description:
      "Toujours ouvert aux nouveaux projets et collaborations.",
    contact: {
      email: "benibantsimba@bensoftcg.com",
      phone: "(+242) 066 883 659",
      phoneHref: "tel:+242066883659",
      location: "Brazzaville, Congo",
    },
    socialLinks: [
      {
        platform: "Site",
        url: "https://benibantsimba.bensoftcg.com",
        icon: "mdi:web",
      },
      {
        platform: "Email",
        url: "mailto:benibantsimba@bensoftcg.com",
        icon: "lucide:mail",
      },
    ],
    services: [
      "Développement web",
      "Applications mobiles",
      "Fintech & IA",
      "Conseil & formation",
    ],
  },
  navigation: [
    { name: "Accueil", href: "/", icon: "lucide:home" },
    { name: "À propos", href: "/about", icon: "lucide:user" },
    { name: "Projets", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  morphingTexts: {
    about: ["À propos", "Parcours", "Vision"],
    projects: ["Mes Projets", "Créations", "Solutions"],
    contact: ["Échangeons", "Ensemble", "Contact"],
  },
  ui: {
    nav: {
      brand: "Portfolio",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    hero: {
      greeting: "Bonjour, je suis",
      headline: "je conçois et code des expériences web modernes.",
      downloadCV: "Télécharger le CV",
      viewWork: "Voir mes réalisations",
    },
    projects: {
      viewDetails: "Voir les détails",
      technologiesUsed: "Technologies utilisées :",
      close: "Fermer",
      viewOnGitHub: "Voir sur GitHub",
      viewLive: "Voir le projet en ligne",
      all: "Tous",
    },
    about: {
      education: "Formation",
      experience: "Expérience",
      skills: "Compétences",
      certifications: "Certifications",
      languages: "Langues",
      involvement: "Engagement & activités",
    },
    footer: {
      letsConnect: "Restons en contact",
      servicesTitle: "Services",
      contactTitle: "Contact",
      madeWith: "fait avec ♥",
    },
    contact: {
      mapTitle: "Carte de localisation",
      mapError: "Impossible de charger la carte",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom complet",
        email: "Email",
        emailPlaceholder: "votre.email@exemple.com",
        subject: "Sujet",
        subjectPlaceholder: "Type de projet ou demande",
        message: "Message",
        messagePlaceholder:
          "Parlez-moi de votre projet, du calendrier et des besoins...",
        sending: "Envoi...",
        submit: "Envoyer le message",
        reset: "Réinitialiser",
        resetAria: "Réinitialiser le formulaire",
        sendAria: "Envoyer",
      },
      success: {
        title: "Message envoyé avec succès !",
        body: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
        another: "Envoyer un autre message",
        anotherAria: "Envoyer un autre message",
      },
      toast: {
        errorTitle: "Échec de l'envoi du message",
        configError:
          "La configuration email est incomplète. Veuillez vérifier les variables d'environnement.",
        successTitle: "Message envoyé avec succès",
        successBody:
          "Merci pour votre message ! Je vous répondrai très bientôt.",
      },
    },
  },
};

export const defaultLang: Lang = "fr";
