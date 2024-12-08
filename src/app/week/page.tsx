"use client";
import WeekMenu, { getCurrentWeek } from "@/components/WeekMenu";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const currentWeek = getCurrentWeek();

  router.push(`/week/${currentWeek}`);

  return (
    <div className="my-4">
      <WeekMenu />
      Vyber týden
    </div>
  );
}
