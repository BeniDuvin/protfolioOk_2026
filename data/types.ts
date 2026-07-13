export type Lang = "fr" | "en";

export interface SkillTool {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon?: string;
  description?: string;
  tools: SkillTool[];
}

export interface EducationItem {
  title: string;
  date: string;
  icon?: string;
  description: string;
}

export interface ExperienceItem {
  title: string;
  date: string;
  icon?: string;
  description: string | string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  icon?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface InvolvementItem {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  category: string;
  github?: string;
  live?: string;
  gallery: string[];
  tech: SkillTool[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
  icon: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface UIStrings {
  nav: {
    brand: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    greeting: string;
    headline: string;
    downloadCV: string;
    viewWork: string;
  };
  projects: {
    viewDetails: string;
    technologiesUsed: string;
    close: string;
    viewOnGitHub: string;
    viewLive: string;
    all: string;
  };
  about: {
    education: string;
    experience: string;
    skills: string;
    certifications: string;
    languages: string;
    involvement: string;
  };
  footer: {
    letsConnect: string;
    servicesTitle: string;
    contactTitle: string;
    madeWith: string;
  };
  contact: {
    mapTitle: string;
    mapError: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      sending: string;
      submit: string;
      reset: string;
      resetAria: string;
      sendAria: string;
    };
    success: {
      title: string;
      body: string;
      another: string;
      anotherAria: string;
    };
    toast: {
      errorTitle: string;
      configError: string;
      successTitle: string;
      successBody: string;
    };
  };
}

export interface PortfolioData {
  home: {
    hero: {
      name: string;
      title: string;
      subtitle: string;
    };
    skills: {
      sectionTitle: string;
      sectionDescription: string;
      categories: SkillCategory[];
    };
    work: {
      sectionTitle: string;
      sectionDescription: string;
    };
    testimonials: {
      sectionTitle: string;
      sectionDescription: string;
      items: TestimonialItem[];
    };
    involvement: {
      sectionTitle: string;
      sectionDescription: string;
    };
  };
  about: {
    profile: {
      name: string;
      title: string;
      image: string;
      description: string[];
    };
    education: EducationItem[];
    experience: ExperienceItem[];
    certifications: CertificationItem[];
    skills: {
      sectionTitle: string;
      categories: SkillCategory[];
    };
    languages: {
      sectionTitle: string;
      description: string;
      items: LanguageItem[];
    };
    involvement: {
      sectionTitle: string;
      sectionDescription: string;
      items: InvolvementItem[];
    };
    sectionTitles: {
      education: string;
      experience: string;
      skills: string;
      certifications: string;
      languages: string;
      involvement: string;
    };
  };
  projects: {
    sectionTitle: string;
    sectionDescription: string;
    work: Project[];
  };
  contact: {
    heading: string;
    location: {
      mapSrc: string;
      address: string;
    };
  };
  footer: {
    name: string;
    description: string;
    contact: {
      email: string;
      phone: string;
      phoneHref: string;
      location: string;
    };
    socialLinks: SocialLink[];
    services: string[];
  };
  navigation: NavItem[];
  morphingTexts: {
    about: string[];
    projects: string[];
    contact: string[];
  };
  ui: UIStrings;
}
