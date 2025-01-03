import { formatActivityTime } from "@/utils/formatActivityTime";
import { formatDistance } from "@/utils/formatDistance";
import type { RunnerLeaderboard } from "@/utils/getRunnersLeaderboard";
import { VotesMap } from "@/utils/getVotes";
import VoteForm from "./VoteForm";

const MIN_DISTANCE_FOR_KUDOS = 100;

type LeaderboardTableProps = {
  data: RunnerLeaderboard[];
  votes?: VotesMap;
};

export default function LeaderboardTable({
  data,
  votes,
}: LeaderboardTableProps) {
  const showKudos = votes != null;

  return (
    <div className="overflow-x-auto">
      <table className="divide-y divide-gray-200 w-full">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              #
            </th>
            {showKudos && (
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-20 w-20"
              >
                Kudos
              </th>
            )}
            <th
              scope="col"
              className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Běžec
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
            >
              Vzdálenost
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
            >
              Běhů
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
            >
              Čas
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
            >
              Nejdelší
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((runner, index) => {
            const canVote =
              showKudos && runner.totalDistance > MIN_DISTANCE_FOR_KUDOS;

            return (
              <tr key={runner.user}>
                <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-500 w-4">
                  {index + 1}.
                </td>
                {showKudos && (
                  <td className="px-2 text-sm text-gray-900">
                    {canVote && (
                      <VoteForm
                        user={runner.user}
                        voteCount={votes.get(runner.user) ?? null}
                      />
                    )}
                  </td>
                )}
                <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-900">
                  {runner.user}
                </td>
                <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-900 text-right tabular-nums">
                  {formatDistance(runner.totalDistance)}
                </td>
                <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-900 text-right tabular-nums">
                  {runner.activityCount}
                </td>
                <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-900 text-right tabular-nums">
                  {formatActivityTime(runner.totalTime)}
                </td>
                <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-900 text-right tabular-nums">
                  {formatDistance(runner.maxDistance)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
