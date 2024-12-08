import ActivityTile from "@/components/ActivityTile";
import prisma from "@/lib/db";

export default async function Activities() {
  const activities = await prisma.activity.findMany({
    orderBy: {
      date: "desc",
    },
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {activities.map((activity) => (
        <ActivityTile key={activity.id} activity={activity} />
      ))}
    </div>
  );
}
