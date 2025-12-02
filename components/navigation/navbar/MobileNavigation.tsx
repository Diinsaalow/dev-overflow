import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import NavbarLinks from "./NavbarLinks";
const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          className="invert-colors cursor-pointer sm:hidden"
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
        />
      </SheetTrigger>
      <SheetContent className="background-light900_dark200 border-none p-4" side="left">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image src="/images/site-logo.svg" height={23} width={23} alt="Logo" />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            <span>Dev</span> <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <div className="no-scroll flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavbarLinks isMobileNav />
            </section>
          </SheetClose>
        </div>
        <div className="flex flex-col gap-3">
          <SheetClose asChild>
            <Link href={ROUTES.SIGN_IN}>
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <span className="primary-text-gradient">Sign In</span>
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={ROUTES.SIGN_UP}>
              <Button className="small-medium btn-tertiary text-dark400_light900 light-border-2 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                <span className="primary-text-gradient">Sign Up</span>
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
