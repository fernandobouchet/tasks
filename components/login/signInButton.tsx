"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

const SignInButton = () => {
  const t = useTranslations("Login");

  const handleOnClick = () => {
    signIn("google", { redirectTo: "/dashboard" });
  };

  return (
    <Button className="text-base h-14" onClick={handleOnClick}>
      {t("loginButton")}
    </Button>
  );
};
export { SignInButton };
