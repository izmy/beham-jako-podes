"use client";
import { WEEKS } from "@/utils/getCurrentWeek";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WeekMenu() {
  const today = new Date();
  const currentPath = usePathname();

  return (
    <div className="flex flex-col sm:flex-row text-xs sm:text-sm justify-center gap-1">
      {WEEKS.map((week) => {
        const disabled = today.getTime() < week.from.getTime();

        if (disabled) {
          return (
            <div
              key={week.id}
              className="px-4 py-2 bg-strava-light text-white rounded cursor-not-allowed"
            >
              {week.label}
            </div>
          );
        }

        const active = currentPath === `/week/${week.id}`;

        return (
          <Link
            href={disabled ? "" : `/week/${week.id}`}
            key={week.id}
            type="button"
            className={`px-4 py-2 bg-strava text-white rounded hover:bg-strava-dark cursor 
              ${active ? "bg-strava-dark" : ""}
              `}
          >
            {week.label}
          </Link>
        );
      })}
    </div>
  );
}
