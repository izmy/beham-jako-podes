"use client";
import WeekMenu from "@/components/WeekMenu";
import { getCurrentWeek } from "@/utils/getCurrentWeek";
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
