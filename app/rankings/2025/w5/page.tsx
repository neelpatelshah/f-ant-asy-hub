import { fetchLeagueInfo, merge } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import photo from "@/public/2025/w5.png";
import { TrendingUp, TrendingDown } from "lucide-react";

const rankings = [
  {
    //Shiv
    owner: "739628392529408000",
    position: 5,
    lastPosition: 1,
    up: "Bo Nix",
    down: "RIP Malik Nabers, James Conner",
    game: "L 102.34-128.78 (-26.44)",
    blurb: `From the last time we spoke, Shiv is undoubtedly the winning team with the worst roster now. We liked this team for its depth, but the depth sucks and the starters are dead. It's scary hours.`,
  },
  {
    //Danny
    owner: "739529793342726144",
    position: 9,
    lastPosition: 7,
    up: "Quinshon Judkins",
    down: "Elic Ayomanor",
    game: "L 130.08-157.30 (-27.22)",
    blurb: `Right. Best team in the league. Whatever. Probably not meant to be, 130 and its not even close is god saying to move on from this season. 0-4 and recoverable but its a baaaad place to be. It's crazy because outside TE, the team still looks solid. But nah.`,
  },
  {
    //Lucas
    owner: "1133331712487890944",
    position: 10,
    lastPosition: 10,
    up: "Tyler Warren",
    down: "Daniel Jones",
    game: "L 116.98-127.32 (-10.34)",
    blurb: `Damn who invited this guy 🔥🔥🔥 he must know ball. Tragically, every RB on this roster is now decidedly ass. Chase and Browning don't seem to be gelling. Daniel Jones is on Giants watch. It's all bleak. The waiver is opening up though, maybe there's a miracle season savor coming soon.`,
  },
  {
    //Nicole
    owner: "739660607032352768",
    position: 1,
    lastPosition: 2,
    up: "Xavier Worthy",
    down: "Cooper Kupp",
    game: "W 157.30-130.08 (+27.22)",
    blurb: `This team is looking monstrous. Mahomes, Jacobs, Cook, St. Brown, Wilson as the top 5 is grotesque. Might as well give her a playoff berth now. Insane team.`,
  },
  {
    //Nandan
    owner: "741390106056941568",
    position: 7,
    lastPosition: 4,
    up: "George Pickens",
    down: "AJ Brown",
    game: "L 124.46-141.86 (-17.40)",
    blurb: `Is the crash and burn in progress? Nandan has no reason to be as pessimistic as the 0-4 teams we have residing with us but man it's crazy how he doesn't luck into more wins. It's like the perfect rebuttal to "fantasy is all luck". Explain Nandan? He only experiences bad luck? idk man`,
  },
  {
    //Mike
    owner: "870659100365737984",
    position: 2,
    lastPosition: 3,
    up: "Courtland Sutton",
    down: "Keenan Allen",
    game: "W 128.01-102.34 (+25.67)",
    blurb: `Two 4-0 teams is pretty crazy. Mike is probably gonna be down Lamar and Bucky this week, and is playing Nicole, so you would assume we know how this will go. But both of those players could be back Week 6 and this will just feel like a blip. `,
  },
  {
    //Logan
    owner: "739556159849140224",
    position: 8,
    lastPosition: 6,
    up: "Christian McCaffrey",
    down: "Bayshul Tuten",
    game: "L 102.72-154.60 (-51.88)",
    blurb: `Is this the year Logan finally blows? We are on track to succeed. The league parity initiatives seem to be very successful. Logan has like 1 good player. Maybe 3. It's pretty funny tbh everyone go look.`,
  },
  {
    //Neel
    owner: "722992153168531456",
    position: 6,
    lastPosition: 5,
    up: "Breece Hall",
    down: "TJ Hockenson",
    game: "W 141.86-124.46 (+17.40)",
    blurb: `Somehow the only 2-2 team in the league, this team is still poised to go nuts. Josh hasn't really done any game takeovers in the last 3 weeks, but he has been plenty consistent. Jetta is working it out with Wentz, but Hock isn't, and there's pieces on the bench that could really go off as we get into the season. Things to look forward to.`,
  },
  {
    //Saarang
    owner: "739672661684346880",
    position: 3,
    lastPosition: 8,
    up: "Jake Ferguson",
    down: "RIP Tyreek Hill",
    game: "W 127.32-116.98 (+10.34)",
    blurb: `No, this is not the season Saarang puts it all together. Just watch. What is going well, however, is Jake Ferguson and Quentin Johnston. The Lions will Lion and JT is on RB1 watch, so like yeah the team is dece. He's not even really gonna miss Tyreek going down. But just watch. Trust. Just watch.`,
  },
  {
    //Ram
    owner: "739540158155743232",
    position: 4,
    lastPosition: 9,
    up: "Ashton Jeanty",
    down: "Nick Chubb",
    game: "W 154.60-102.72 (+51.88)",
    blurb: `Ram's team is kinda cooking. But if power rankings are such a scam, us decreeing him as a playoff squad should mean he will crash and burn gloriously, right? Puka is a god. Jeanty might finally be cooking. Let's see.`,
  },
];

interface RankingProps {
  team: any;
  wins: number;
  losses: number;
  position: number;
  lastPosition: number;
  blurb: string;
  user: string;
  game: string;
  up: string;
  down: string;
}

const Ranking = ({
  team,
  wins,
  losses,
  position,
  lastPosition,
  blurb,
  user,
  game,
  up,
  down,
}: RankingProps) => {
  return (
    <div className="my-4">
      <div className="w-full flex justify-between text-xl font-bold py-1 border-b border-stone-400 mb-2">
        <span className="text-xl font-bold">
          {"#"}
          {position} {"["}
          <Change curr={position} last={lastPosition} />
          {"]:"} {team || user}
        </span>
        <span>
          {wins}-{losses}
        </span>
      </div>
      <div className="mb-2 flex flex-col md:flex-row md:w-full md:justify-evenly">
        <h5 className="text-sm font-semibold">{game}</h5>
        <h5 className="text-sm font-semibold">
          <span>
            <TrendingUp className="w-5 h-5 inline" />
          </span>{" "}
          {up}
        </h5>
        <h5 className="text-sm font-semibold">
          <span>
            <TrendingDown className="w-5 h-5 inline" />
          </span>{" "}
          {down}
        </h5>
      </div>
      <p className="text-sm text-justify">{blurb}</p>
    </div>
  );
};

const Page = async () => {
  const data = await fetchLeagueInfo("2025", merge);
  const teams = merge(data, rankings);
  teams.sort((a, b) => b.position - a.position);

  return (
    <div className="w-full px-4 mt-4 flex flex-col md:px-[32rem]">
      <h3 className="text-center font-bold"> WEEK 5 POWER RANKINGS </h3>
      <div className="mt-4 w-full">
        <p className="text-sm text-justify">
          y'all probably thought it was 3 weeks and then wraps again? well get
          ready to learn week 5 buddy. injuries showed up big time.
        </p>
        <div className="mt-4 text-sm">
          <span className="font-bold">TOTW: </span>
          <span>
            The Delight from Floor 5 - defeated quinshon judkins 157.30-130.08
            (+27.22)
          </span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">LOTW: </span>
          <span>
            Thanks Derrick Henry! - defeated by νίκη 102.34-128.78 (-26.44)
          </span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">POTW: </span>
          <span>
            {`Puka Nacua - almost carried Ram to a TOTW berth and forced a Colt to retire with 36 points`}
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <Image
          src={photo}
          alt="In Person Draft Board"
          width={400}
          height={600}
        />
      </div>
      <div className="my-4">
        {teams.map((team, index) => (
          <Ranking {...team} key={index} />
        ))}
      </div>
    </div>
  );
};

const Change = ({ curr, last }: { curr: number; last: number }) => {
  const diff = last - curr;
  const color =
    diff > 0 ? "text-green-400" : diff < 0 ? "text-red-400" : "text-yellow-400";
  const symbol = diff > 0 ? "+" : "-";

  return (
    <span className={color}>
      {symbol}
      {diff !== 0 ? Math.abs(diff) : ""}
    </span>
  );
};

export default Page;
