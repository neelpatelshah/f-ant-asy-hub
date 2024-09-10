import { Button } from "@/components/ui/button";
import { merge, fetchLeagueInfo, Team } from "@/lib/utils";
import { TrendingUpDown } from "lucide-react";
import Link from "next/link";

const val = "w-3 text-sm flex h-full items-center";

const Page = async () => {
  const setter = (newData: any, standings: any) => {
    const data = merge(newData, standings);
    data.sort((a, b) => b.wins - a.wins);
    return data;
  };

  const data = (await fetchLeagueInfo("2024", setter)) as Team[];

  return (
    <div className="px-4 md:px-[32rem]">
      <div className="flex flex-col items-center mt-4 gap-2 mb-2">
        <h1 className="font-semibold">
          Reigning Champ: Kyren Williams Enjoyer 🏆🏆🏆
        </h1>
        <p className="text-xs">
          {"Runner Up: whatever Danny's team name was 🏆🏆"}
        </p>
      </div>
      <div className="flex w-full flex-col mt-4">
        <div className="flex w-full justify-between border-b-2 border-b-stone-400 px-2 pb-1 mb-2">
          <div>
            <span className="text-sm">Team</span>
          </div>
          <div className="flex gap-4">
            <span className={val}>W</span>
            <span className={val}>L</span>
            <span className={val}>T</span>
            <span className={val}>
              <TrendingUpDown className="w-3 h-3" />
            </span>
          </div>
        </div>
        {data.map((team) => (
          <div
            key={team.owner}
            className="flex w-full justify-between border-b-2 border-dotted border-b-stone-400 px-2 pb-2 mb-2"
          >
            <div className="flex flex-col">
              <span className="text-sm">{team.team}</span>
              <span className="text-xs text-stone-400">{team.user}</span>
            </div>
            <div className="flex gap-4">
              <span className={val}>{team.wins}</span>
              <span className={val}>{team.losses}</span>
              <span className={val}>{team.ties}</span>
              <span className={val}>{team.streak}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 w-full flex justify-center">
        <Button className="bg-yellow-400" variant="secondary" asChild>
          <Link href="/rankings/2024/w2">Week 2 Power Rankings</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
