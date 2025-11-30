import SocialAuthForm from "@/components/forms/SocialAuthForm";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-auth-light dark:bg-auth-dark flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full border px-4 py-10 sm:min-w-[520px] sm:px-8">
        <div className="flex-between gap-2">
          <div className="space-y-2.5">
            <h2 className="h2-bold text-dark100_light900">Joint DevFlow</h2>
            <p className="paragraph-regular text-dark500_light400">To continue to DevFlow</p>
          </div>
          <Image src="/images/site-logo.svg" width={50} height={50} alt="DevFlow Logo" className="object-contain" />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
