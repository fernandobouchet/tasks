"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  const handleOnClick = () => {
    signIn("google", { redirectTo: "/dashboard" });
  };

  return <Button onClick={handleOnClick}>Iniciar sesión con Google</Button>;
};
export { SignInButton };
