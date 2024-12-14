"use client";
import { useState, useEffect } from "react";
import ActivityTile from "@/components/ActivityTile";
import type { Activity } from "@prisma/client";

type ActivitiesClientProps = {
  activities: Activity[];
};

const ActivitiesClient: React.FC<ActivitiesClientProps> = ({ activities }) => {
  const [search, setSearch] = useState("");
  const [filteredActivities, setFilteredActivities] = useState(activities);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = activities.filter(
        (activity) =>
          activity.name.toLowerCase().includes(search.toLowerCase()) ||
          activity.user.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredActivities(filtered);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search, activities]);

  return (
    <>
      <div className="flex justify-center items-center my-4">
        <label htmlFor="search" className="text-lg font-semibold mr-2">
          Hledat:
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((activity) => (
          <ActivityTile key={activity.id} activity={activity} />
        ))}
        {filteredActivities.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            Nic nebylo nalezeno.
          </div>
        )}
      </div>
    </>
  );
};

export default ActivitiesClient;
