/**
 * Calculates the pace given a distance and time.
 *
 * @param distance - The distance covered (in kilometers).
 * @param time - The time taken (in seconds).
 * @returns The pace as a string in the format "minutes:seconds min/km".
 *          Returns "N/A" if the distance or time is zero.
 */
export const calculatePace = (distance: number, time: number): string => {
  if (distance === 0 || time === 0) return "N/A";
  const pace = time / distance;
  const minutes = Math.floor(pace / 60);
  const seconds = Math.round(pace % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds} min/km`;
};
