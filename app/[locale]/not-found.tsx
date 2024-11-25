import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4">404 - {t("title")}</h1>
      <p className="text-xl mb-8 text-muted-foreground">{t("info")}</p>
      <Button asChild>
        <Link href="/">{t("button")}</Link>
      </Button>
    </div>
  );
}
