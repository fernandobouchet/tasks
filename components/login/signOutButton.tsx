"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

function SignOutButton() {
  const t = useTranslations("Login");

  const handleOnClick = () => {
    signOut({ redirectTo: "/login" });
  };

  return (
    <Button
      variant="ghost"
      className="w-full justify-start rounded-md"
      onClick={handleOnClick}
    >
      <LogOut />
      {t("logoutButton")}
    </Button>
  );
}
export { SignOutButton };
