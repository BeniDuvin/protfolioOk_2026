"use client";

import { ProfileCard } from "@/components/about/profile-card";
import { EducationTimeline } from "@/components/about/timelines/education-timeline";
import { ExperienceTimeline } from "@/components/about/timelines/experience-timeline";
import { CertificationTimeline } from "@/components/about/timelines/certification-timeline";
import { Skills } from "@/components/about/skills";
import { LanguagesSection } from "@/components/about/languages";
import { InvolvementSection } from "@/components/about/involvement";
import { PageHeader } from "@/components/page-header";
import { useData } from "@/lib/i18n";

export default function AboutPage() {
  const { about, morphingTexts } = useData();
  const { education, experience, certifications, profile, skills, languages, involvement, sectionTitles } =
    about;

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-foreground">
      <PageHeader texts={morphingTexts.about} />
      <ProfileCard
        description={profile.description}
        image={profile.image}
        name={profile.name}
        title={profile.title}
      />

      <EducationTimeline title={sectionTitles.education} education={education} />
      <ExperienceTimeline
        title={sectionTitles.experience}
        experience={experience}
      />
      <CertificationTimeline
        title={sectionTitles.certifications}
        certifications={certifications}
      />
      <Skills title={sectionTitles.skills} categories={skills.categories} />
      <LanguagesSection
        title={sectionTitles.languages}
        description={languages.description}
        items={languages.items}
      />
      <InvolvementSection
        title={sectionTitles.involvement}
        description={involvement.sectionDescription}
        items={involvement.items}
      />
    </section>
  );
}
