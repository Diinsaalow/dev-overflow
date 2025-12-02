import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark300 shadow-light-300 fixed z-50 w-full gap-5 p-6 sm:px-12 dark:shadow-none">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/site-logo.svg" width={23} height={23} alt="DevOverflow" />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          <span>Dev</span> <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      <div>
        <p>Global Search</p>
      </div>
      <div className="flex gap-2">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
