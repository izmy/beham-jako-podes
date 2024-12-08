/**
 * Formats a given distance to a string with a specified precision.
 *
 * @param distance - The distance to format.
 * @param precision - The number of decimal places to include in the formatted distance. Defaults to 2.
 * @returns The formatted distance as a string with the specified precision followed by " km".
 */
export function formatDistance(distance: number, precision = 2): string {
  return `${distance.toFixed(precision)} km`;
}
