import Link from "next/link";

export const getCurrentWeek = () => {
  const today = new Date();

  const currentWeek =
    WEEKS.find(
      (week) =>
        today.getTime() < week.to.getTime() &&
        today.getTime() >= week.from.getTime()
    )?.id ?? 1;

  const lastWeek = WEEKS.at(-1)?.id ?? 4;

  return currentWeek > lastWeek ? lastWeek : currentWeek;
};

type WeekType = {
  id: number;
  label: string;
  from: Date;
  to: Date;
};

export const WEEKS: WeekType[] = [
  {
    id: 1,
    label: "#1 (1. - 8. 12.)",
    from: new Date("2024-12-01T00:00:00"),
    to: new Date("2024-12-08T23:59:59"),
  },
  {
    id: 2,
    label: "#2 (9. - 15. 12.)",
    from: new Date("2024-12-09T00:00:00"),
    to: new Date("2024-12-15T23:59:59"),
  },
  {
    id: 3,
    label: "#3 (16. - 22. 12.)",
    from: new Date("2024-12-16T00:00:00"),
    to: new Date("2024-12-22T23:59:59"),
  },
  {
    id: 4,
    label: "#4 (23. - 31. 12.)",
    from: new Date("2024-12-23T00:00:00"),
    to: new Date("2024-12-31T23:59:59"),
  },
];

export default function WeekMenu() {
  const today = new Date();

  return (
    <div className="flex justify-center gap-4">
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

        return (
          <Link
            href={disabled ? "" : `/week/${week.id}`}
            key={week.id}
            type="button"
            className="px-4 py-2 bg-strava text-white rounded hover:bg-strava-dark cursor"
          >
            {week.label}
          </Link>
        );
      })}
    </div>
  );
}
