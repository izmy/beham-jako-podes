import prisma from "@/lib/db";

export type RunnerLeaderboard = {
  user: string;
  totalDistance: number;
  activityCount: number;
  maxDistance: number;
};

export const getTopRunners = async (
  from?: Date,
  to?: Date
): Promise<RunnerLeaderboard[]> => {
  const whereClause =
    from && to
      ? {
          date: {
            gte: from,
            lte: to,
          },
        }
      : {};

  const topRunners = await prisma.activity.groupBy({
    by: ["user"],
    where: whereClause,
    _sum: {
      distance: true,
    },
    _count: {
      user: true,
    },
    _max: {
      distance: true,
    },
    orderBy: {
      _sum: {
        distance: "desc",
      },
    },
  });

  return topRunners.map((runner) => ({
    user: runner.user,
    totalDistance: runner._sum.distance || 0,
    activityCount: runner._count.user,
    maxDistance: runner._max.distance || 0,
  }));
};
