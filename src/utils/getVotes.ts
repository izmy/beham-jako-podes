import prisma from "@/lib/db";
import { cookies } from "next/headers";

export type VotesMap = Map<string, number>;

export const getVotes = async (): Promise<VotesMap> => {
  await cookies();

  const votes = await prisma.votes.groupBy({
    by: ["user"],
    _count: {
      user: true,
    },
  });

  return new Map(votes.map((vote) => [vote.user, vote._count.user]));
};
