/**
 * Checks if the user can vote based on the time of the last vote.
 * @param {Date} recentVoteDate - The date of the last vote.
 * @returns {boolean} - True if the user can vote, otherwise false.
 */
export const canVote = (recentVoteDate: Date): boolean => {
  const now = new Date();
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

  return now.getTime() - recentVoteDate.getTime() >= oneDayInMilliseconds;
};
