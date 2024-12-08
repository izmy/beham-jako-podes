import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-4 py-2 bg-white border-b-4 border-podes px-4 justify-around sticky top-0 md:flex-row backdrop-blur bg-slate-200/75">
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
