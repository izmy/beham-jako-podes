import { voteForUser } from "@/actions/voteForUser";
import { canVote } from "@/utils/canVote";
import { getRecentVote } from "@/utils/getRecentVote";
import { headers } from "next/headers";

export default async function VoteForm({ user }: { user: string }) {
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0] ?? null;
  const recentVote = ip ? await getRecentVote(ip) : null;
  const enableVoting = !recentVote || canVote(recentVote.date);

  return (
    <form action={voteForUser}>
      <input type="hidden" name="user" value={user} />
      <button
        type="submit"
        className="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={!enableVoting}
        title={
          enableVoting
            ? `Hlasovat pro ${user}`
            : "Můžeš hlasovat pouze jednou denně"
        }
      >
        🔥
      </button>
    </form>
  );
}
