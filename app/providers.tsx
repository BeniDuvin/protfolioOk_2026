"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ToastProvider } from "@heroui/react";

import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme-provider";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider />
        <ThemeProvider
          attribute={
            typeof themeProps?.attribute === "string"
              ? themeProps.attribute
              : "class"
          }
          defaultTheme={themeProps?.defaultTheme ?? "dark"}
        >
        <LanguageProvider>{children}</LanguageProvider>
      </ThemeProvider>
    </HeroUIProvider>
  );
}
