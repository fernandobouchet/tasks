"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

function SignOutButton() {
  const handleOnClick = () => {
    signOut({ redirectTo: "/login" });
  };

  return <Button onClick={handleOnClick}>Cerrar sesión</Button>;
}
export { SignOutButton };
