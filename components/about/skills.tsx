"use client";
import { motion } from "framer-motion";
import { Chip } from "@heroui/react";

import { SectionHeader } from "@/components/about/section-header";
import { SkillsProps } from "@/components/about/types";

export const Skills = ({ title, categories }: SkillsProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <SectionHeader icon="mdi:tools" title={title} />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category) => (
        <div
          key={category.title}
          className="p-5 rounded-large border border-divider bg-content1"
        >
          <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
          {category.description && (
            <p className="mb-4 text-sm text-muted-foreground">
              {category.description}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {category.tools.map((tool) => (
              <Chip
                key={tool.name}
                className="bg-background text-foreground"
                radius="sm"
                size="sm"
                variant="flat"
              >
                {tool.name}
              </Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);
