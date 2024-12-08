import { calculatePace } from "@/utils/calculatePace";
import { formatActivityTime } from "@/utils/formatActivityTime";
import type { Activity } from "@prisma/client";

interface ActivityTileProps {
  activity: Activity;
}

function ActivityTile({ activity }: ActivityTileProps) {
  return (
    <div className="bg-white shadow-xl rounded-lg p-3 m-4">
      <div className="flex flex-col space-y-2">
        <a
          href={`https://www.strava.com/activities/${activity.id}`}
          target="_blank"
          rel="noreferrer"
          className="block justify-between bg-strava hover:bg-strava-dark rounded-lg p-2 items-center"
        >
          <div className="text-white text-bold font-bold">{activity.user}</div>
          <span className="text-white text-xs">
            {activity.date.toLocaleDateString()}
          </span>
        </a>
        <h2 className="text-l font-bold mb-4">{activity.name}</h2>
        <p className="text-gray-700">{activity.description}</p>

        <div className="border-t border-gray-200 my-4" />

        <div className="flex justify-between">
          <span className="text-gray-700 font-bold">Distance:</span>
          <span className="text-gray-700">{activity.distance} km</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700 font-bold">Time:</span>
          <span className="text-gray-700">
            {formatActivityTime(activity.time)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700 font-bold">Pace:</span>
          <span className="text-gray-700">
            {calculatePace(activity.distance, activity.time)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ActivityTile;
