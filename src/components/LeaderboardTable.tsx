import { formatDistance } from "@/utils/formatDistance";
import type { RunnerLeaderboard } from "@/utils/getRunnersLeaderboard";

type LeaderboardTableProps = {
  data: RunnerLeaderboard[];
};

export default function LeaderboardTable({ data }: LeaderboardTableProps) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            #
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Běžec
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
          >
            Vzdálenost
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
          >
            Běhů
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
          >
            Nejdelší
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((runner, index) => (
          <tr key={runner.user}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {index + 1}.
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {runner.user}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right tabular-nums">
              {formatDistance(runner.totalDistance)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right tabular-nums">
              {runner.activityCount}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right tabular-nums">
              {formatDistance(runner.maxDistance)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
