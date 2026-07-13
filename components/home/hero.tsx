"use client";

import type { PressEvent } from "@react-aria/interactions";

import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { Hole } from "@/components/backgrounds/hole/hole";
import { useData, useUI } from "@/lib/i18n";

export const HeroSection = () => {
  const { home } = useData();
  const { hero: heroUI } = useUI();
  const { name, title, subtitle } = home.hero;

  const scrollToWork = (_e: PressEvent) => {
    const workSection = document.getElementById("work-section");

    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-background">
      <Hole />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-cyan-200 dark:to-cyan-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {heroUI.greeting} {name} &mdash; {heroUI.headline}
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-foreground-600 text-lg md:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}: {subtitle}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              download
              aria-label={heroUI.downloadCV}
              className="w-full sm:w-auto"
              href="/new CV.pdf"
            >
              <Button
                fullWidth
                aria-label={heroUI.downloadCV}
                color="primary"
                endContent={<Icon icon="lucide:download" />}
                size="lg"
                variant="shadow"
              >
                {heroUI.downloadCV}
              </Button>
            </Link>
            <Button
              fullWidth
              aria-label={heroUI.viewWork}
              className="w-full sm:w-auto"
              color="primary"
              endContent={<Icon icon="lucide:arrow-down" />}
              size="lg"
              variant="bordered"
              onPress={scrollToWork}
            >
              {heroUI.viewWork}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
