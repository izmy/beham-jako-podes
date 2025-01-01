import prisma from "@/lib/db";
import { cookies } from "next/headers";

export type RunnerLeaderboard = {
  user: string;
  totalDistance: number;
  totalTime: number;
  activityCount: number;
  maxDistance: number;
};

export const getTopRunners = async (
  from?: Date,
  to?: Date
): Promise<RunnerLeaderboard[]> => {
  await cookies();

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
      time: true,
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
    totalTime: runner._sum.time || 0,
    activityCount: runner._count.user,
    maxDistance: runner._max.distance || 0,
  }));
};
