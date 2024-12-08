import prisma from "@/lib/db";
import { formatDistance } from "@/utils/formatDistance";

export default async function Stats() {
  const stats = await prisma.activity.aggregate({
    _sum: {
      distance: true,
    },
    _count: true,
  });

  return (
    <div className="flex justify-center mt-4">
      <div className="bg-gradient-to-b from-strava to-strava-dark text-white shadow-md rounded-lg p-6 mb-4 w-full max-w-xl">
        <p className="text-xl text-center">
          <strong>{stats._count}</strong> běžců uběhlo celkem{" "}
          <strong>
            {stats._sum.distance != null
              ? formatDistance(stats._sum.distance, 0)
              : "?"}{" "}
          </strong>{" "}
          v <strong>{stats._count}</strong> bězích
        </p>
      </div>
    </div>
  );
}
