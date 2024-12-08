"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getCurrentWeek } from "./WeekMenu";

type MenuItemType = {
  href: string;
  label: string;
};

const MENU: MenuItemType[] = [
  { href: "/", label: "Přehled" },
  {
    href: `/week/${getCurrentWeek()}`,
    label: "Týdenní statistiky",
  },
  { href: "/activities", label: "Seznam všech aktivit" },
  {
    href: "https://www.strava.com/clubs/behamjakopodes",
    label: "Strava club",
  },
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
  const currentPath = usePathname();

  return (
    <nav>
      <ul className="flex space-x-4">
        {MENU.map(({ href, label }) => (
          <MenuItem
            key={href}
            href={href}
            label={label}
            external={href.startsWith("http")}
            active={href === currentPath}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
