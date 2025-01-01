import LeaderboardTable from "@/components/LeaderboardTable";
import Stats from "@/components/Stats";
import { getTopRunners } from "@/utils/getRunnersLeaderboard";
import { getVotes } from "@/utils/getVotes";

export default async function Overview() {
  const topRunners = await getTopRunners();
  const votes = await getVotes();
  return (
    <div>
      <Stats />
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <LeaderboardTable data={topRunners} votes={votes} />
    </div>
  );
}
