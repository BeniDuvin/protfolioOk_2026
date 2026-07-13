"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/about/section-header";
import { TimelineItem } from "@/components/about/timelines/timeline-item";
import { containerVariants, itemVariants } from "@/components/about/variants";
import { CertificationTimelineProps } from "@/components/about/types";

export const CertificationTimeline = ({
  title,
  certifications,
}: CertificationTimelineProps) => (
  <div className="mb-20">
    <SectionHeader icon="mdi:certificate" title={title} />

    <motion.ol
      className="relative ml-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="absolute top-2 left-2 bottom-0 w-px bg-primary-500" />
      {certifications.map((item, idx) => (
        <TimelineItem
          key={idx}
          title={item.title}
          date={item.date}
          description={item.issuer}
          variants={itemVariants}
          delay={idx * 300}
        />
      ))}
    </motion.ol>
  </div>
);
