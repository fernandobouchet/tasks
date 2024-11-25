import { FeatureCard } from "@/components/login/featureCard";
import { SignInButton } from "@/components/login/signInButton";
import { ClipboardCheck, Layout, PlusCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Login() {
  const t = useTranslations("Login");

  const features = [
    {
      icon: Layout,
      title: t("card1.title"),
      description: t("card1.description"),
    },
    {
      icon: ClipboardCheck,
      title: t("card2.title"),
      description: t("card2.description"),
    },
    {
      icon: PlusCircle,
      title: t("card3.title"),
      description: t("card3.description"),
    },
  ];

  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center px-4">
      <nav className="container mx-auto p-4">
        <div className="text-2xl font-bold text-primary">
          <span>SimpleTaskBoard</span>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("title")}</h1>
        <p className="text-xl mb-8 text-gray-600">{t("info")}</p>
        <SignInButton />
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("cardSectionTitle")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <FeatureCard key={index} feature={item} />
          ))}
        </div>
      </section>

      <section className="w-full bg-primary text-primary-foreground py-20">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t("titleSection3")}</h2>
          <p className="text-xl mb-8">{t("infoSection3")}</p>
        </div>
      </section>

      <footer className="container mx-auto p-4 text-center text-gray-600">
        <p>&copy; 2024 SimpleTaskBoard. {t("footer")}</p>
      </footer>
    </main>
  );
}
