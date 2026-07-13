"use client";

import { Button, ButtonGroup } from "@heroui/react";
import { motion } from "framer-motion";

import { LANGUAGES } from "@/data";
import { useLanguage } from "@/lib/i18n";

export const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <ButtonGroup
        aria-label="Language"
        className="border border-divider rounded-medium overflow-hidden"
        radius="md"
        size="sm"
      >
        {LANGUAGES.map(({ code, label }) => (
          <Button
            key={code}
            aria-label={`Switch to ${label}`}
            className={`min-w-10 font-semibold ${
              lang === code
                ? "bg-primary-500 text-white"
                : "bg-transparent text-foreground hover:bg-content1"
            }`}
            variant="flat"
            onPress={() => setLang(code)}
          >
            {label}
          </Button>
        ))}
      </ButtonGroup>
    </motion.div>
  );
};
