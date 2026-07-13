import type {
  CertificationItem,
  EducationItem,
  ExperienceItem,
  SkillCategory,
} from "@/data/types";

export interface ProfileCardProps {
  image: string;
  name: string;
  title: string;
  description: readonly string[];
}

export interface SectionHeaderProps {
  icon: string;
  title: string;
  className?: string;
}

export interface TimelineItemProps {
  title: string;
  date: string;
  description: string | string[];
  variants?: any;
  delay?: number;
}

export interface EducationItemProps {
  title: string;
  education: readonly EducationItem[];
}

export interface ExperienceTimelineProps {
  title: string;
  experience: readonly ExperienceItem[];
}

export interface CertificationTimelineProps {
  title: string;
  certifications: readonly CertificationItem[];
}

export interface SkillsProps {
  title: string;
  categories: readonly SkillCategory[];
}

export type { EducationItem, ExperienceItem, CertificationItem, SkillCategory };
