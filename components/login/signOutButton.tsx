"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

function SignOutButton() {
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
      Cerrar sesión
    </Button>
  );
}
export { SignOutButton };
