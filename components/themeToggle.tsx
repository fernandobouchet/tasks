"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("themeToggle");

  const handleOnClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      className="w-full justify-start rounded-md"
      onClick={handleOnClick}
    >
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <span>{`${theme === "light" ? `${t("dark")}` : `${t("light")}`}`}</span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
export { ThemeToggle };
