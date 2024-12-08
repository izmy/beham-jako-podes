"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCurrentWeek } from "./WeekMenu";

type MenuItemType = {
  href: string;
  label: string;
};

const MENU: MenuItemType[] = [
  { href: "/", label: "Přehled" },
  { href: `/week/${getCurrentWeek()}`, label: "Týdenní statistiky" },
  { href: "/activities", label: "Seznam všech aktivit" },
];

type MenuItemProps = MenuItemType & {
  active: boolean;
};

const MenuItem = ({ href, label, active }: MenuItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`block text-white px-4 py-2 bg-strava hover:bg-strava-dark rounded-md ${
          active ? "bg-strava-dark" : ""
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

const Menu = () => {
  const currentPath = usePathname();

  return (
    <nav>
      <ul className="flex space-x-4">
        {MENU.map(({ href, label }) => (
          <MenuItem
            key={href}
            href={href}
            label={label}
            active={href === currentPath}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
