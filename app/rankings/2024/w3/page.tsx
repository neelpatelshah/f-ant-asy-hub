import { fetchLeagueInfo, merge } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import photo from "@/public/2024/week3.jpeg";
import { TrendingUp, TrendingDown } from "lucide-react";

const rankings = [
  {
    //Shiv
    owner: "739628392529408000",
    position: 9,
    lastPosition: 8,
    up: "Jaxon Smith-Njigba",
    down: "Zamir White",
    game: (
      <>
        <span className="text-red-400">L</span> 124.84-155.34
      </>
    ),
    blurb: `Shiv is having a rough time out here, although this is less bad than last week. She would have beaten the other 4 losers, but she wouldn't have beaten any other winner. Still, this is a solid week and she lost anyway to go to 0-2.
    It's gotta be a curse or something at this point. We'll keep track of it throughout the season and let you all know. On the bright side, JSN finally arrived, and she has another starting caliber WR. On the downside, she will need it because
    Kupp seems to be down for several weeks now. Her backup options behind White (Rachaad) also don't look amazing, if it comes to that. But you figure if she scores good ponits every week, she'll eventually win a game. You'd think.`,
  },
  {
    //Danny
    owner: "739529793342726144",
    position: 6,
    lastPosition: 4,
    up: "Brian Robinson",
    down: "Courtland Sutton",
    game: (
      <>
        <span className="text-red-400">L</span> 112.82-136.74
      </>
    ),
    blurb: `It's getting messy over here. Even with some standout days, this team can't buy a break. Dak is bad, the Jones falloff is FINALLY here, Pittman isn't getting the yards he needs to, and Kelce is checked the fuck out. 
    The good news is that the RB situation still looks great, that Ridley had a strong day and could be a real threat with Levis, and that you just would hope some kind of normalization happens eventually. `,
  },
  {
    //Allan
    owner: "740648111118147584",
    position: 4,
    lastPosition: 5,
    up: "J.K Dobbins",
    down: "Tank Dell",
    game: (
      <>
        <span className="text-green-400">W</span> 136.74-112.82
      </>
    ),
    blurb: `Allan's team had themselves a day. Even with the bad Mahomes day and the baffling choice to go Dell over DK (????), it was a well rounded great day for him. This team has real juice with the arrivals of Bowers and Marv, and if
    Dobbins can stay on the field, at least until CMC is back, then the ceiling is very high. Adding CMC back to this lineup is a pretty crazy thought to be honest. There could be no holes on this roster by the time he's back. Like literally
    all upside, all high floor. It's insane. `,
  },
  {
    //Nicole
    owner: "739660607032352768",
    position: 2,
    lastPosition: 2,
    up: "Chris Olave",
    down: "DeAndre Hopkins",
    game: (
      <>
        <span className="text-green-400">W</span> 124.84-155.34
      </>
    ),
    blurb: `We told you there was a nice bounce back coming. A decently well rounded week without a huge carry or a huge bust. This is a good, reassuring win, even with the injury to Deebo. Breece is gonna eat, the Lions will in fact support
    2 running backs, and Jacobs obviously is gonna be real good. But most of all, the Saints are playing with that Shanahan black magic, and Klint Kubiak has Derek Carr playing like a god. This hasn't shown up in Olave's statline yet, but he's
    bound to have a monster game very, very soon.`,
  },
  {
    //Nandan
    owner: "741390106056941568",
    position: 10,
    lastPosition: 10,
    up: "Alec Pierce",
    down: "Tyler Lockett",
    game: (
      <>
        <span className="text-red-400">L</span> 84.10-142.88
      </>
    ),
    blurb: `A brutal outing earns Nandan LOTW. There were underperformances across the board, most troublingly Tyler Lockett losing his job in real time to JSN. It's a good thing Nandan isn't strictly relying on Lockett, so there's still
    bounce back room, but still. Tyreek was stymied and now is down Tua, Caleb is not unlocking DJ Moore by any means, and Zack Moss has potential to be a good contributior, but it's looking like it's not going to be ultra consistent. At least
    he has the fun name roster. Otherwise there's nothing to smile about here.`,
  },
  {
    //Mike
    owner: "870659100365737984",
    position: 8,
    lastPosition: 7,
    up: "Zay Flowers",
    down: "Dalton Schultz",
    game: (
      <>
        <span className="text-red-400">L</span> 120.36-144.28
      </>
    ),
    blurb: `Mike had a decent week. And clearly he was onto something in not trying to stack CeeDee and Dak. That said, even with the good week, things look a little tuff right now, and that's not even including the loss. Pacheco is hurt and the
    options behind him aren't great. Christian Kirk is a ghost. Davis isn't much better (although between the two, he picked the right one). Mixon is banged up and is not being super duper productive when he's on the field. And Kincaid has yet
    to get into a groove, even with more snaps and targets. On the plus side, Flowers looks for real, even with Lamar being kinda useless this week. That's huge for the balance of this team.`,
  },
  {
    //Logan
    owner: "739556159849140224",
    position: 5,
    lastPosition: 9,
    up: "Nico Collins",
    down: "Ezekiel Elliott",
    game: (
      <>
        <span className="text-green-400">W</span> 142.88-84.10
      </>
    ),
    blurb: `Alright fine he can jump up the rankings. God this is so fucking annoying. Collins looks like a god, Zeke looks like an invalid. The depth still looks miiiiiighty thin, but this team and the players are having too strong a start
    to keep any lower than this. Sorry.`,
  },
  {
    //Neel
    owner: "722992153168531456",
    position: 7,
    lastPosition: 6,
    up: "Jonathon Taylor",
    down: "Adonai Mitchell",
    game: (
      <>
        <span className="text-red-400">L</span> 100.56-132.12
      </>
    ),
    blurb: `Another dud, this time with Richardson leading the way. He salvaged his numbers towards the end of the game, but wound up with 3 picks. On the plus side, Taylor still had plenty of effective work, so that's at least reassuring. 
    On the not so plus side, Mitchell's development already seemed like it would need some coaxing along, and if Richardson is gonna be hot and cold like this, its only going to make that more difficult. A bad start to the year has this team
    sliding way down, and it can still fall further if things don't turn around soon.`,
  },
  {
    //Saarang
    owner: "739672661684346880",
    position: 3,
    lastPosition: 3,
    up: "Tony Pollard",
    down: "Jayden Daniels",
    game: (
      <>
        <span className="text-green-400">W</span> 155.34-124.84
      </>
    ),
    blurb: `Saarang backs up his win and ascension from last week with a TOTW. Led by Kamara spanking the Cowboys and supplemented by a huge kicking day for Fairbairn, this turned into a laugher. While Daniels is getting a ton of rushing volume,
    we are starting to doubt whether the overall production will be there to bolster this team, though. The QB situation needs some help. Outside that though, we'd feel pretty good if we were him. About fantasy, not anything else. God forbid we end
    up being 5'7.`,
  },
  {
    //Ram
    owner: "739540158155743232",
    position: 1,
    lastPosition: 1,
    up: "Malik Nabers",
    down: "Mark Andrews",
    game: (
      <>
        <span className="text-green-400">W</span> 144.28-120.36
      </>
    ),
    blurb: `What is Ram(p) cooking? He benched Worthy after his 2 TDs for Conner, who had a huge game. Goff was not very good. His first round pick has not yet produced like a first round pick. And yet, he's scoring a ton and is 2-0. Also, we were right,
    Daniel Jones stopped looking like Stevie Wonder for 5 minutes and Nabers went nuts. This team remains scary hours until either a catastrophic injury or Ram doing something even dumber than picking up Dotson. We're not sure what that would be, but we're sure it's possible.`,
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
            <TrendingUp className="w-5 h-5 inline text-green-400" />
          </span>{" "}
          {up}
        </h5>
        <h5 className="text-sm font-semibold">
          <span>
            <TrendingDown className="w-5 h-5 inline text-red-400" />
          </span>{" "}
          {down}
        </h5>
      </div>
      <p className="text-sm text-justify">{blurb}</p>
    </div>
  );
};

const Page = async () => {
  const data = await fetchLeagueInfo("2024", merge);
  const teams = merge(data, rankings);
  teams.sort((a, b) => b.position - a.position);

  return (
    <div className="w-full px-4 mt-4 flex flex-col md:px-[32rem]">
      <h3 className="text-center font-bold"> WEEK 3 POWER RANKINGS </h3>
      <div className="mt-4 w-full">
        <p className="text-sm text-justify">
          {`Offense remains historically low with no signs of improvements, as it feels like a historic number of 
          playmakers are now down and out. Off the top of our heads, we have CMC, Mostert, Higgins, Hollywood and A.J. Brown, Deebo, Puka, Kupp, Njoku, Ferguson, Love, and probably more we haven't even named.`}
          <br /> <br />
          {`So with that in mind, we should pay extra attention to teams that pop off, and maybe be marginally less critical of teams that score 110. It seems like we are in for an odd year.
          That's also why our top 3 has no movement this week, as they all had great weeks and wins. And we will still take not Saarang at 1-1 over Saarang at 2-0, so he doesn't gain ground
          for having a better record. That's just how it is.`}
          <br /> <br />
          {`That said, shout out to some rookie booms this week!. Marv, Nabers, and who we think is easily the best player of the group, Braelon Allen, all had huge games.`}
        </p>
        <div className="mt-4 text-sm">
          <span className="font-bold">TOTW: </span>
          <span>
            chase-in deez nutz - defeated Wickens and Pickens 155.34-124.84{" "}
            <span className="text-green-400">(+30.5)</span>
          </span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">LOTW: </span>
          <span>
            Young Hubba Chuba- defeated by Sun Gawd Worshipper 84.10-142.88{" "}
            <span className="text-red-400">(-58.78)</span>
          </span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">POTW: </span>
          <span>
            {`Alvin Kamara - snapped for 4 tuds to make Saarang's win a blowout`}
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
