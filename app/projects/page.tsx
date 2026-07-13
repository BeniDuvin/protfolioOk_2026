"use client";

import { useState, useMemo } from "react";

import { PageHeader } from "@/components/page-header";
import { ProjectsTabs } from "@/components/projects/projects-tabs";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { useData, useUI } from "@/lib/i18n";

const ProjectsPage = () => {
  const { projects, morphingTexts } = useData();
  const { projects: projectsUI } = useUI();
  const allProjects = projects.work;

  const categories = useMemo(
    () => [projectsUI.all, ...new Set(allProjects.map((project) => project.category))],
    [allProjects, projectsUI.all],
  );

  const [selectedCategory, setSelectedCategory] = useState(projectsUI.all);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === projectsUI.all
        ? allProjects
        : allProjects.filter(
            (project) => project.category === selectedCategory,
          ),
    [selectedCategory, allProjects, projectsUI.all],
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <PageHeader texts={morphingTexts.projects} />

      <ProjectsTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProjectsGrid projects={filteredProjects} />
    </div>
  );
};

export default ProjectsPage;
