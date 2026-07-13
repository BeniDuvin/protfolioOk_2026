"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { SectionHeader } from "@/components/about/section-header";
import { LanguageItem } from "@/data/types";

interface LanguagesSectionProps {
  title: string;
  description?: string;
  items: readonly LanguageItem[];
}

export const LanguagesSection = ({
  title,
  description,
  items,
}: LanguagesSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
    className="mb-20"
  >
    <SectionHeader icon="lucide:languages" title={title} />
    {description && (
      <p className="mb-6 text-sm text-muted-foreground">{description}</p>
    )}
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex items-center justify-between gap-4 p-4 rounded-large border border-divider bg-content1"
        >
          <span className="flex items-center gap-3 font-medium">
            <Icon className="w-5 h-5 text-primary-500" icon="lucide:globe" />
            {item.name}
          </span>
          <span className="text-sm text-muted-foreground">{item.level}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);
