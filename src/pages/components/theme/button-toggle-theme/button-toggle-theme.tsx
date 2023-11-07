"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, SunIcon } from "lucide-react";

export const ButtonToggleTheme = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="outline"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <SunIcon
        size={20}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size={20}
        className="absolute rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};
