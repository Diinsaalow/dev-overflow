"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import ROUTES from "@/constants/routes";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

const SocialAuthForm = () => {
  const socialHandler = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    } catch (error) {
      toast.error("Error occurred while logging in");
    }
  };

  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";
  return (
    <div className="mt-10 flex flex-wrap gap-2">
      <Button className={buttonClass} onClick={() => socialHandler("github")}>
        <Image
          src="/icons/github.svg"
          height={23}
          width={23}
          alt="GitHub Logo"
          className="invert-colors mr-2 object-contain"
        />
        <span>Login With GitHub</span>
      </Button>
      <Button className={buttonClass} onClick={() => socialHandler("google")}>
        <Image src="/icons/google.svg" height={23} width={23} alt="GitHub Logo" className="mr-2 object-contain" />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
