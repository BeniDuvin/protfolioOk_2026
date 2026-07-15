"use client";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@/lib/icon";

import { SectionHeader } from "@/components/about/section-header";
import { InvolvementItem } from "@/data/types";

interface InvolvementSectionProps {
  title: string;
  description?: string;
  items: readonly InvolvementItem[];
}

export const InvolvementSection = ({
  title,
  description,
  items,
}: InvolvementSectionProps) => (
  <motion.div
    className="mb-20"
    initial={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <SectionHeader icon="lucide:heart-handshake" title={title} />
    {description && (
      <p className="mb-6 text-sm text-muted-foreground">{description}</p>
    )}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: index * 0.15, duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="border-none shadow-md h-full bg-white/90 dark:bg-black/60">
            <CardBody className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary-100">
                  <Icon
                    className="w-5 h-5 text-primary-500"
                    icon={item.icon}
                  />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-foreground-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  </motion.div>
);
