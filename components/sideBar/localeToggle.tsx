"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/routing";

const LocaleToggle = () => {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button
      variant="ghost"
      className="w-full justify-start rounded-md"
      onClick={() => handleLanguageChange(locale === "es" ? "en" : "es")}
    >
      <Languages className="h-[1.2rem] w-[1.2rem]" />
      {t("language")}
      <span className="sr-only">{t("language")}</span>
    </Button>
  );
};

export { LocaleToggle };
