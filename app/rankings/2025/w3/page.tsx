import { fetchLeagueInfo, merge } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import photo from "@/public/2025/w3.jpg";
import { TrendingUp, TrendingDown } from "lucide-react";

const rankings = [
  {
    //Shiv
    owner: "739628392529408000",
    position: 1,
    lastPosition: 2,
    up: "Malik Nabers",
    down: "Calvin Ridley",
    game: "W 135.04-100.14 (+34.90)",
    blurb: `Derrick Henry was worthless, and look what happened anyways. Nabers is going to have an unbelievable year by at this rate. He's averaging what, 12.5 targets a game right now? Turns out Davante is still good too. Deep team and not really a weak position
    across the board anywhere. #1 and probably not going anywhere for a Little while.`,
  },
  {
    //Danny
    owner: "739529793342726144",
    position: 7,
    lastPosition: 3,
    up: "David Njoku",
    down: "Tank Bigsby",
    game: "L 120.44-134.50 (-14.06)",
    blurb: `Ok 0-2 is admittedly not great. Also, why is he still rostering Tank Bigsby? The ceilings don't look like they're gonna be all too high for this team, but the floor does in fact look quite high. Week to week, this should yield results.
    Maybe. Eventually. Somewhat. We think.`,
  },
  {
    //Lucas
    owner: "1133331712487890944",
    position: 10,
    lastPosition: 9,
    up: "Tet McMillan",
    down: "Marvin Harrison",
    game: "L 95.90-142.10 (-46.20)",
    blurb: `Lucas is really setting the league on fire in his first year. I mean, I'm quaking in my boots. Anyways, JaMarr boomed and the team busted anyways. There's reason for optimism though. Him and McMillan down the stretch could be nasty, plus
    Warren looks like he's gonna be a star too. QB is pretty ugly though.`,
  },
  {
    //Nicole
    owner: "739660607032352768",
    position: 2,
    lastPosition: 4,
    up: "Patrick Mahomes",
    down: "Mark Andrews",
    game: "W 156.78-79.92 (+76.86)",
    blurb: `her car got stolen and she spent all day on sleeper`,
  },
  {
    //Nandan
    owner: "741390106056941568",
    position: 4,
    lastPosition: 6,
    up: "George Pickens",
    down: "AJ Brown",
    game: "W 134.50-120.44 (+14.06)",
    blurb: `This is the sort of game we think is pretty doable for Nandan, week after week after week. 134 with no player going over 20 (yeah the defense was great but still) is such a reassuring sign for our original ranking of this squad.
    It'll just be about making sure most of the right guys get started every week. Which we can expect Nandan to dutifully crash and burn at.`,
  },
  {
    //Mike
    owner: "870659100365737984",
    position: 3,
    lastPosition: 5,
    up: "Deebo Samuel",
    down: "Travis Kelce",
    game: "W 142.10-95.90 (+46.20)",
    blurb: `We are still not respecting the Brandon Aubrey pick, but man oh man does this team look like its on fire. Sutton continues to suck but outside of him what are you even upset about? Is he in line for a repeat? Surely he couldn't be, right?`,
  },
  {
    //Logan
    owner: "739556159849140224",
    position: 6,
    lastPosition: 7,
    up: "Tucker Kraft",
    down: "TreVeyon Henderson",
    game: "L 135.10-136.66 (-24.24)",
    blurb: `Logan is off to a brutal start. Rookies aside, 135 was not enough to overcome Goff and Taylor, down to MNF where there were 11 possession changes in 11 seconds for the Raiders and Chargers and neither Meyers or McConkey were able to catch a ball for 
    *checks notes* 6 yards. He's actually moving up because scoring seems to be trending in the right direction for him, and he's at 4th in PF with zero wins to show. You would
    think the ship will eventually be righted. Especially if literally any of the rookies decide to be worth shit. Also, Tucker Kraft was a hell of a shot call.`,
  },
  {
    //Neel
    owner: "722992153168531456",
    position: 5,
    lastPosition: 1,
    up: "Harold Fannin",
    down: "TJ Hockenson",
    game: "W 79.92-156.78 (-76.86)",
    blurb: `my car got stolen man`,
  },
  {
    //Saarang
    owner: "739672661684346880",
    position: 8,
    lastPosition: 10,
    up: "Jake Ferguson",
    down: "still way too many guys",
    game: "L 99.10-113.42 (-14.32)",
    blurb: `Absolutely magical win. Johnston catches a bomb for no good reason and then Logan can't get over a miniscule hump to save his life. Overall an encouraging showing, but this team is so top-heavy and getting worse, with the way BTJ, Pacheco, and Smith seem to be going.
    Bad omens. Your team will begin to cough in 7 days.`,
  },
  {
    //Ram
    owner: "739540158155743232",
    position: 9,
    lastPosition: 8,
    up: "Jameson Williams",
    down: "Jacory Croskey-Merritt",
    game: "L 100.14-135.04 (-34.90)",
    blurb: `We called this. We said he was going to lose and now he has to change his team name. Fair is fair, Ram. That said, we have our first trade of the year! We think it's pretty fair honestly. He has a big of RB depth to give up in an upside WR in Jamo,
    who we saw is indeed not in a totally cooked offense. That said, if the Raiders don't figure it out with Jeanty, this season was sunk before it ever really began.`,
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
      <h3 className="text-center font-bold"> WEEK 3 POWER RANKINGS </h3>
      <div className="mt-4 w-full">
        <p className="text-sm text-justify">balls</p>
        <div className="mt-4 text-sm">
          <span className="font-bold">TOTW: </span>
          <span>
            The Delight from Floor 5 - defeated Wam Pawanati 156.78-79.92
            (+76.86)
          </span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">LOTW: </span>
          <span>
            Wam Pawanati - defeated by The Delight from Floor 5 79.92-156.78
            (-76.86)
          </span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">POTW: </span>
          <span>
            {`Amon-Ra St. Brown - the "Delight"ful WR roared for 3 touchdowns in the Lions rout of the Bears`}
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
