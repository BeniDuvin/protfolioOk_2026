"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@/lib/icon";

import { GradientText } from "@/components/textAnimations/gradient-text";
import { useData } from "@/lib/i18n";

export const SkillsOverviewSection = () => {
  const { home } = useData();
  const { sectionTitle, sectionDescription, categories } = home.skills;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-content2">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GradientText
            className="text-3xl md:text-4xl font-bold mb-4 gradient"
            text={sectionTitle}
          />
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: index % 2 === 0 ? 20 : 20 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="border-none shadow-md h-full">
                <CardBody className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon && (
                      <div className="p-2 rounded-full bg-primary-100">
                        <Icon
                          className="w-5 h-5 text-primary-500"
                          icon={category.icon}
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <Chip
                        key={tool.name}
                        className="bg-content1 text-foreground"
                        radius="sm"
                        size="sm"
                        variant="flat"
                      >
                        {tool.name}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
