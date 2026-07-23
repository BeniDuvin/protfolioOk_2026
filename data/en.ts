import type { PortfolioData } from "./types";

const skillCategories: PortfolioData["about"]["skills"]["categories"] = [
  {
    title: "Languages",
    icon: "lucide:code",
    description:
      "Languages I use daily for web, mobile and software development.",
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
      "Front-end, back-end and mobile frameworks for robust, scalable apps.",
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
    title: "Databases",
    icon: "lucide:database",
    description: "Relational, NoSQL and ORM data management systems.",
    tools: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "HFSQL" },
      { name: "Prisma (ORM)" },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: "lucide:cloud",
    description: "DevOps tooling, hosting and cloud platforms.",
    tools: [
      { name: "Docker" },
      { name: "Git / GitHub" },
      { name: "Redis" },
      { name: "Nginx" },
      { name: "Linux VPS" },
      { name: "Vercel" },
      { name: "Railway" },
      { name: "Supabase" },
    ],
  },
  {
    title: "AI & Data",
    icon: "lucide:brain-circuit",
    description: "Data analysis, annotation and AI model integration.",
    tools: [
      { name: "Power BI" },
      { name: "Label Studio" },
      { name: "OpenAI API" },
      { name: "pandas (Python)" },
    ],
  },
  {
    title: "Other",
    icon: "lucide:wrench",
    description:
      "Complementary skills: desktop development, graphic design and drone.",
    tools: [
      { name: "WinDev 25 / WebDev 25" },
      { name: "Graphic design (Photoshop, Illustrator)" },
      { name: "DJI drone piloting" },
    ],
  },
];

const experience: PortfolioData["about"]["experience"] = [
  {
    title: "Founder & Lead Developer — BENSOFTCG",
    date: "2022 – present",
    icon: "mdi:rocket-launch",
    description: [
      "Development and commercialization of SOFTEDUC (school management) and GEST-H (hotel management).",
      "Design of Falanka, a multi-country Mobile Money fintech platform (NestJS, PostgreSQL, Expo).",
      "Leading a Congolese tech community focused on SME digitalization.",
    ],
  },
  {
    title: "Frontend Developer (Next.js) — Congo Digital Service",
    date: "Oct. 2024 – Jul. 2025",
    icon: "mdi:MonitorDashboard",
    description: [
      "Next.js / Vue.js / Expo interfaces for regulatory approval (ARPCE) and real-estate management apps.",
      "Audio / image / text data collection platform for the UNDP Lingala & Kituba AI project.",
    ],
  },
  {
    title: "Backend Developer FastAPI — UNDP Project — AI Lingala & Kituba",
    date: "Jul. – Aug. 2024",
    icon: "mdi:Api",
    description: [
      "ML prediction pipeline integrating Label Studio, OpenAI, and MinIO / S3.",
    ],
  },
      {
        title: "Associate Degree (BTS) — Data Analysis and Programming",
        date: "2020 – 2022",
        icon: "mdi:school-outline",
        description: "Data analysis and programming degree in Brazzaville.",
      },
      {
        title:
          "Cisco Networking Academy Certifications (Cybersecurity, Cybercrime, Python Essentials 1, Data Science with Python)",
        date: "2026",
        icon: "mdi:certificate",
        description:
          "Certifications in Cybersecurity, Cybercrime, Python Essentials 1 and Data Science with Python — Online.",
      },
    ];

const projects: PortfolioData["projects"]["work"] = [
  {
    id: 1,
    title: "Falanka",
    category: "Fintech",
    description: "Multi-country Mobile Money fintech platform (in development).",
    details:
      "Multi-country Mobile Money fintech platform (in development) — NestJS microservices, PostgreSQL/Prisma, Redis, Auth0, Expo, Next.js admin.",
    image:
      "falanka.png",
    gallery: [
      "falanka.png",
      "falanka.png-1",
      "falanka.png-2",
    ],
    github: "https://github.com/BeniDuvin",
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
    category: "Education",
    description: "Complete school management software (WinDev 25).",
    details:
      "Complete school management software (WinDev 25): students, exams, accounting, reporting. Commercially deployed in Congo.",
    image:
      "softeduc.jpeg",
    gallery: [
      "softeduc.jpeg",
      "softeduc.jpeg-1",
      "softeduc.jpeg-2",
    ],
    github: "https://github.com/BeniDuvin",
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
    category: "AI & Data",
    description:
      "MINI ERP is an all-in-one business management solution designed for small and medium-sized businesses. It centralizes sales, purchasing, inventory, invoicing, accounting, and reporting in a modern, simple, and intuitive interface, helping businesses improve productivity and make smarter decisions.",
    details:
      "Data annotation for training AI models on the Lingala and Kituba languages (FastAPI, Label Studio, MinIO).",
    image:
      "pratic.png",
    gallery: [
      "pratic.png",
      "pratic.png-1",
      "pratic.png-2",
    ],
    github: "https://github.com/BeniDuvin",
    live: "https://benibantsimba.bensoftcg.com",
      tech: [
        { name: "FastAPI", icon: "mdi:api" },
        { name: "Label Studio", icon: "mdi:tag-outline" },
        { name: "MinIO", icon: "mdi:aws" },
        { name: "OpenAI API", icon: "mdi:robot" },
      ],
  },
];

export const en: PortfolioData = {
  home: {
    hero: {
      name: "Béni Duvin BANTSIMBA IBINDA",
      title: "Full-stack developer & tech entrepreneur",
      subtitle:
        "Based in Brazzaville, Congo. Founder of BENSOFTCG, building and commercializing software solutions tailored to African realities. Passionate about fintech, AI, and the digitalization of institutions.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "An overview of the technologies and domains I work with on a daily basis.",
      categories: skillCategories,
    },
    work: {
      sectionTitle: "Featured Projects",
      sectionDescription:
        "A selection of my recent projects in development, fintech, education and artificial intelligence.",
    },
    testimonials: {
      sectionTitle: "Testimonials",
      sectionDescription: "",
      items: [],
    },
    involvement: {
      sectionTitle: "Involvement & activities",
      sectionDescription:
        "Beyond code: community, music and knowledge sharing.",
    },
  },
  about: {
    profile: {
      name: "Béni Duvin BANTSIMBA IBINDA",
      title: "Full-stack developer & tech entrepreneur",
      image:
        "beni.jpeg",
      description: [
        "Based in Brazzaville, Congo. Founder of BENSOFTCG, building and commercializing software solutions tailored to African realities.",
        "Passionate about fintech, AI, and the digitalization of institutions, I rely on modern technologies (NestJS, Next.js, FastAPI, PostgreSQL) to build concrete and useful products.",
        "Engaged with the Congolese tech community, I share my knowledge and support SMEs in their digital transformation.",
      ],
    },
    education: [
      {
        title: "Professional Bachelor's Degree — Information Systems and Networks",
        date: "2022 – 2023",
        icon: "mdi:school",
        description: "Information systems and networks degree in Brazzaville.",
      },
      {
        title: "Associate Degree (BTS) — Data Analysis and Programming",
        date: "2020 – 2022",
        icon: "mdi:school-outline",
        description: "Data analysis and programming degree in Brazzaville.",
      },
    ],
    experience,
    certifications: [
      {
        title: "Project Management Fundamentals Certificate",
        issuer: "Cornerstone OnDemand Foundation (DisasterReady.org)",
        date: "July 2026",
        icon: "mdi:certificate",
      },
      {
        title: "Cybersecurity Fundamentals",
        issuer: "IBM SkillsBuild",
        date: "July 2026",
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
          "Cisco Networking Academy Certifications (Cybersecurity, Cybercrime, Python Essentials 1, Data Science with Python)",
        issuer: "Cisco Networking Academy",
        date: "2026",
        icon: "mdi:certificate",
      },
    ],
    skills: {
      sectionTitle: "Technical Skills",
      categories: skillCategories,
    },
    languages: {
      sectionTitle: "Languages",
      description: "Spoken languages and proficiency levels.",
      items: [
        { name: "French", level: "Fluent (native)" },
        { name: "English", level: "Intermediate" },
        { name: "Spanish", level: "Basic" },
        { name: "Lingala / Kituba", level: "Local languages" },
      ],
    },
    involvement: {
      sectionTitle: "Involvement & activities",
      sectionDescription:
        "Beyond code: community, music and knowledge sharing.",
      items: [
        {
          title: "BENSOFTCG Community",
          description:
            "Founder of the BENSOFTCG community — a network of Congolese students and professionals for local business digitalization.",
          icon: "lucide:users",
        },
        {
          title: "Music",
          description:
            "Musician (trombone, piano, guitar) — cabaret stage performances; musical training since 2010.",
          icon: "lucide:music",
        },
        {
          title: "Educational resource",
          description:
            "Author of an educational resource — \"Introduction to Computing for Children\" distributed to partner schools.",
          icon: "lucide:book-open",
        },
      ],
    },
    sectionTitles: {
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      certifications: "Certifications",
      languages: "Languages",
      involvement: "Involvement & activities",
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A selection of my recent projects in development, fintech, education and artificial intelligence.",
    work: projects,
  },
  contact: {
    heading:
      "Have a project in mind? Get in touch and let's create something useful together.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127729.48088992334!2d15.1834936!3d-4.2633592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33a09b7a1e3b%3A0x...!2sBrazzaville%2C%20Congo!5e0!3m2!1sen!2scg!4v1715701234567!5m2!1sen!2scg",
      address: "Brazzaville, Congo",
    },
  },
  footer: {
    name: "Béni Duvin BANTSIMBA IBINDA",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "benibantsimba@bensoftcg.com",
      phone: "(+242) 066 883 659",
      phoneHref: "tel:+242066883659",
      location: "Brazzaville, Congo",
    },
    socialLinks: [
      {
        platform: "Website",
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
      "Web development",
      "Mobile apps",
      "Fintech & AI",
      "Consulting & training",
    ],
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  morphingTexts: {
    about: ["About", "Journey", "Vision"],
    projects: ["My Work", "Creations", "Solutions"],
    contact: ["Let's", "Build", "Together"],
  },
  ui: {
    nav: {
      brand: "Portfolio",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      greeting: "Hi, I'm",
      headline: "I design & code modern web experiences.",
      downloadCV: "Download CV",
      viewWork: "View Work",
    },
    projects: {
      viewDetails: "View Details",
      technologiesUsed: "Technologies Used:",
      close: "Close",
      viewOnGitHub: "View on GitHub",
      viewLive: "View Live Project",
      all: "All",
    },
    about: {
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      certifications: "Certifications",
      languages: "Languages",
      involvement: "Involvement & activities",
    },
    footer: {
      letsConnect: "Let's Connect",
      servicesTitle: "Services",
      contactTitle: "Contact",
      madeWith: "made with ♥",
    },
    contact: {
      mapTitle: "Location Map",
      mapError: "Unable to load map",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        subject: "Subject",
        subjectPlaceholder: "Project type or inquiry topic",
        message: "Message",
        messagePlaceholder:
          "Tell me about your project, timeline, and any specific requirements...",
        sending: "Sending...",
        submit: "Send Message",
        reset: "Reset Form",
        resetAria: "Reset Form",
        sendAria: "Send",
      },
      success: {
        title: "Message Sent Successfully!",
        body: "Thank you for reaching out. I'll get back to you as soon as possible.",
        another: "Send Another Message",
        anotherAria: "Send another message",
      },
      toast: {
        errorTitle: "Failed to Send Message",
        configError:
          "Email configuration is incomplete. Please check environment variables.",
        successTitle: "Message Sent Successfully",
        successBody: "Thank you for your message! I'll get back to you soon.",
      },
    },
  },
};
