import ActivitiesClient from "@/components/ActivitiesClient";
import prisma from "@/lib/db";
import { cookies } from "next/headers";

export default async function Activities() {
  await cookies();
  const activities = await prisma.activity.findMany({
    orderBy: {
      date: "desc",
    },
  });

  return <ActivitiesClient activities={activities} />;
}
