import LeaderboardTable from "@/components/LeaderboardTable";
import Stats from "@/components/Stats";
import { getTopRunners } from "@/utils/getRunnersLeaderboard";

export default async function Overview() {
  const topRunners = await getTopRunners();

  return (
    <div>
      <Stats />
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <LeaderboardTable data={topRunners} />
    </div>
  );
}
