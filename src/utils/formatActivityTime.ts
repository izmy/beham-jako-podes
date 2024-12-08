/**
 * Formats a given time in seconds into a human-readable string.
 *
 * @param time - The time in seconds to format.
 * @returns A string representing the formatted time in hours, minutes, and seconds.
 *
 * @example
 * ```typescript
 * formatActivityTime(3661); // "1h 1m 1s"
 * formatActivityTime(59);   // "59s"
 * formatActivityTime(3600); // "1h "
 * ```
 */
export const formatActivityTime = (time: number): string => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${hours > 0 ? `${hours}h ` : ""}${minutes > 0 ? `${minutes}m ` : ""}${
    seconds > 0 ? `${seconds}s` : ""
  }`;
};
