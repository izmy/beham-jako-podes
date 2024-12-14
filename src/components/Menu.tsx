"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type MenuItemType = {
  href: string;
  label: string;
};

const MENU: MenuItemType[] = [
  { href: "/", label: "Přehled" },
  { href: "/week", label: "Týdenní statistiky" },
  { href: "/activities", label: "Seznam aktivit" },
  { href: "https://www.strava.com/clubs/behamjakopodes", label: "Strava club" },
];

type MenuItemProps = MenuItemType & {
  active: boolean;
  external: boolean;
};

const MenuItem = ({ href, label, active, external }: MenuItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`block text-white px-4 py-2 bg-strava hover:bg-strava-dark rounded-md ${
          active ? "bg-strava-dark" : ""
        }`}
        target={external ? "_blank" : undefined}
      >
        <div className="flex gap-2">
          {label}
          {external && (
            <Image
              src="/external-link.svg"
              alt="External link"
              width={18}
              height={18}
            />
          )}
        </div>
      </Link>
    </li>
  );
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex justify-between items-center p-2 bg-strava lg:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } flex flex-col gap-2 lg:gap-0 lg:flex-row lg:flex lg:space-x-4 lg:items-center lg:bg-transparent bg-strava-dark p-4 lg:p-0 absolute lg:static top-16 left-0 w-full lg:w-auto z-10`}
      >
        {MENU.map(({ href, label }) => (
          <MenuItem
            key={href}
            href={href}
            label={label}
            external={href.startsWith("http")}
            active={
              href.startsWith(currentPath) && currentPath !== "/"
                ? href.startsWith(currentPath)
                : href === currentPath
            }
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
