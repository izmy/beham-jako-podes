import prisma from "@/lib/db";
import { cookies } from "next/headers";

export const getRecentVote = async (ip: string) => {
  await cookies();

  const recentVote = await prisma.votes.findFirst({
    where: {
      ip,
    },
    orderBy: {
      date: "desc",
    },
  });

  return recentVote;
};
