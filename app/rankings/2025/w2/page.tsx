import { fetchLeagueInfo, merge } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import photo from "@/public/2025/w2.jpg";
import { TrendingUp, TrendingDown } from "lucide-react";

const rankings = [
  {
    //Shiv
    owner: "739628392529408000",
    position: 2,
    lastPosition: 4,
    up: "Malik Nabers",
    down: "Rachaad White",
    game: "W 112.94-112.72 (+0.22)",
    blurb: `God bless Derrick Henry. Regardless, Shiv is looking really good all of a sudden. Nabers had probably his worst game of the year and it was 5 receptions on 12 targets. That man is going to eat. Javonte looks like he has some use,
    Henry will have a huge year, Hampton will come along, and you can very reasonably assume that the vets put in below average performances and will be more reliable for the rest of the year. That said, Rachaad White should be unrosterable.`,
  },
  {
    //Danny
    owner: "739529793342726144",
    position: 3,
    lastPosition: 1,
    up: "Brian Robinson",
    down: "Courtland Sutton",
    game: "L 104.72-136.26 (-31.54)",
    blurb: `In the biz, this is what we call an unconcerning loss. Burrow will score more than 8 points every week, the rest of the starters was mostly fine (not even good! They have more upside than this) Scary Terry won't be that bad every week,
    and Achane looks like the only good player in Miami. The bench? Yuck. Vomiting. But week to week this is a high output lineup with a gem in Zay Flowers not even in it (because..? Danny? any input?). We are simply not worried.`,
  },
  {
    //Lucas
    owner: "1133331712487890944",
    position: 9,
    lastPosition: 9,
    up: "Tyler Warren",
    down: "Alvin Kamara",
    game: "L 112.72-112.94 (-0.22)",
    blurb: `Derrick Henry put Lucas in the mud in an absolutely devastating bad beat. What a fANTasy debut. Not starting Marv was definitely a choice, but things look like they could improve. That said, this was a prettyt standard looking week
    for this team and they still only scored 112. Show us a win and we can move this squad up.`,
  },
  {
    //Nicole
    owner: "739660607032352768",
    position: 4,
    lastPosition: 6,
    up: "Patrick Mahomes",
    down: "Mark Andrews",
    game: "W 113.42-99.10 (+14.32)",
    blurb: `This was an encouraging start for exactly 4 reasons: James Cook got touches, Fields got GW the ball, Dalton Kincaid looks nothing like last year, and Patrick Mahomes might be back. It's crazy to talk about Mahomes as on the upswing
    or as being "back" in any way, but he kinda hasn't had that juice to overwhelm a fantasy matchup in a few years. He looked bad against the Chargers and put up 26. Could be huge.`,
  },
  {
    //Nandan
    owner: "741390106056941568",
    position: 6,
    lastPosition: 2,
    up: "Zach Moss",
    down: "Drake London",
    game: "L 88.28-120.68 (-32.40)",
    blurb: `We are on track for a normal season because we said Nandan did well and he immediately had the worst week in the league. It's truly remarkable stuff, he had an all time nothingburger week. AJ Brown was a ghost, Pickens doesn't have
    Dak's eyes, Evans was appropriately mid, and Walker had an ugly week. It won't always be this bad, but for some reason he decided that starting any defense, even the Ravens, against the Bills was a good idea. Resulting in a whopping -7.
    Do you know the last time someone started a -7 in a normal league? We don't have a fucking clue.`,
  },
  {
    //Mike
    owner: "870659100365737984",
    position: 5,
    lastPosition: 7,
    up: "Travis Etienne",
    down: "Travis Kelce",
    game: "W 136.26-104.72 (+31.54)",
    blurb: `A TOTW puts this squad firmly in the top half of the league - but only just. Up and down the roster, everyone performed at whats probably their 90th percentile game. Week to week, this is still a force, especailly with Bucky Irving seemingly
    sending Rachaad White to Jupiter, but the team is just old. We need to see week to week success to trust that Keenan Allen and Deebo Samuel actually have this kind of sauce to keep it up. Because otherwise its just folks taking advantage of fresh legs
    before they can't anymore.`,
  },
  {
    //Logan
    owner: "739556159849140224",
    position: 7,
    lastPosition: 3,
    up: "Kyle Pitts",
    down: "Jaylen Waddle",
    game: "L 104.72-128.96 (-24.24)",
    blurb: `Maybe drafting all rookies with mixed pedigree isn't the best strategy. Especially when some of the more stable picks might not have the juice to carry. Logan has 3 rookie runningbacks on his bench. They combined for 10.6 points. One
    of them was negative on the day. Troubling! Even more troubling is that the certainty that this team was initially ranked on, which is Waddle, Collins, and Daniels, are maybe not as much of a slam dunk as we had watched. Logan always figures it out,
    but does he have it in him this time? Yeah probably.`,
  },
  {
    //Neel
    owner: "722992153168531456",
    position: 1,
    lastPosition: 5,
    up: "Emeka Egbuka",
    down: "Jameson Williams",
    game: "W 128.96-104.72 (+24.24)",
    blurb: `Can you be too into your own reflection? Yep. Is that gonna change anything? Nope. Josh Allen nearly hung 40 on what should be a top 4 D in the NFL and he looked like ass for 35 minutes of the game. Even mid Kyren and JJ McCarthy needing to learn
    how to throw to Hock and Jetta in real time Monday night couldn't hamper the team success this week. The way we see it, Jamo gets swapped out easily for Egbuka, Metcalf isn't in Sauce jail, and Hock and Jetta perform at their average levels and this team is
    a buzzsaw. Near definite W2 L incoming but hey, enjoy it while it lasts.`,
  },
  {
    //Saarang
    owner: "739672661684346880",
    position: 10,
    lastPosition: 8,
    up: "Keon Coleman",
    down: "Tyreek Hill, Isiah Pacheco, Jared Goff, Brian Robinson, like a lot of the roster tbh",
    game: "L 99.10-113.42 (-14.32)",
    blurb: `Man. He's just married to the struggle. Most of his team is poised to have a terrible year, and so is he. Tyreek and the Dolphins look like a two pack of ass, Pacheco has truthfully been on borrowed time for a while now, Goff is clearly
    not all the way there with a new system, and Brian Robinson is going to be unloved behind CMC. Lucky for him, King Keonta is looking like he'll have a pretty exciting year. Gibbs, BTJ, and JT will all pull it together. Maybe a blockbuster trade could
    revive this team. But its more likely that it'll just put the tombstone on the grave.`,
  },
  {
    //Ram
    owner: "739540158155743232",
    position: 8,
    lastPosition: 10,
    up: "Puka Nacua",
    down: "David Montgomery",
    game: "W 120.68-88.28 (+32.40)",
    blurb: `Ram had a good week, but let's justify this position with all the bad stuff before we're called a scam again. Monty doesn't have psycho Ben Johnson scheming for him anymore and might get phased out, Caleb and DJ are not on the same page, Chubb looks old, Swift looks bad,
    Golden looks like a WR3 in true Green Bay fashion, and Mims is a nonfactor. Bright sides? Hurts isn't cooked yet, Jeanty is only gonna improve, Puka is going to have a monster year, and Pearsall, JCM, and Pittman look like depth picks that will pay off. When Ram
    has a shit week let's all agree he has to change his team name again.`,
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
      <h3 className="text-center font-bold"> WEEK 2 POWER RANKINGS </h3>
      <div className="mt-4 w-full">
        <p className="text-sm text-justify">
          {
            "An all time bad waiver wire week shows us that drafting well can mean you're a chip contender from week 1 \n"
          }
          <br /> <br />
          {
            "So surely our post-draft power rankings should very strongly indicate who has a great look this season and who doesn't, right? Of course not, and you're stupid for thinking that. Our top 3 teams lost, and frankly, they all looked like shit."
          }
        </p>
        <div className="mt-4 text-sm">
          <span className="font-bold">TOTW: </span>
          <span>νίκη - defeated quinshon judkins 136.26-104.72 (+31.54)</span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">LOTW: </span>
          <span>
            Bakers Dozen - defeated by Power Rankings are a Scam 88.28-120.68
            (-32.4)
          </span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">POTW: </span>
          <span>
            {`Josh Allen - Wam Pawanati's QB had 38.76 in an absurd comeback game against Baltimore`}
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
