"use server";
import prisma from "@/lib/db";
import { canVote } from "@/utils/canVote";
import { getRecentVote } from "@/utils/getRecentVote";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const voteForUser = async (formData: FormData) => {
  const user = formData.get("user") as string;
  const ip = (await headers()).get("x-forwarded-for");
  const date = new Date();

  if (ip == null) {
    return;
  }

  const recentVote = await getRecentVote(ip);

  if (recentVote != null && !canVote(recentVote.date)) {
    return;
  }

  await prisma.votes.create({
    data: {
      user,
      ip,
      date,
    },
  });

  revalidatePath("/");
};
