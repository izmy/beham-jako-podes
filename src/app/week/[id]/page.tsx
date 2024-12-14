import React from "react";
import { getTopRunners } from "@/utils/getRunnersLeaderboard";
import LeaderboardTable from "@/components/LeaderboardTable";
import WeekMenu from "@/components/WeekMenu";
import { WEEKS } from "@/utils/getCurrentWeek";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const currentWeekId = Number.parseInt((await params).id);

  if (!currentWeekId) {
    return <div>Loading...</div>;
  }

  const selectedWeek = WEEKS.find((week) => week.id === currentWeekId);

  if (!selectedWeek) {
    return (
      <div>
        <div className="my-4">
          <WeekMenu />
        </div>
        Týden {currentWeekId} nebyl nalezen
      </div>
    );
  }

  const today = new Date();

  if (today.getTime() < selectedWeek.from.getTime()) {
    return (
      <div className="my-4">
        <div className="my-4">
          <WeekMenu />
        </div>
        Týden {currentWeekId} ještě nezačal
      </div>
    );
  }

  const topRunners = await getTopRunners(selectedWeek.from, selectedWeek.to);

  return (
    <div className="my-4">
      <div className="my-4">
        <WeekMenu />
      </div>
      <LeaderboardTable data={topRunners} />
    </div>
  );
}
