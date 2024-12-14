import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="sticky top-0 flex flex-row items-center gap-4 py-2 bg-white border-b-4 border-podes px-4 justify-around backdrop-blur transition-colors duration-500 supports-backdrop-blur:bg-white/95 dark:bg-slate-300/75">
      <Link href="/" className="flex justify-center items-center gap-4">
        <Image src="/peace.svg" alt="Peace" width={40} height={40} />
        <h1 className="text-xl sm:text-4xl font-bold text-podes uppercase tracking-tighter">
          Běhám jako Poděs
        </h1>
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
