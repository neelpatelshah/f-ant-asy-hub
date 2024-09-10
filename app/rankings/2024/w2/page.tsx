import { fetchLeagueInfo, merge } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import photo from "@/public/2024/week2.jpeg";
import { TrendingUp, TrendingDown } from "lucide-react";

const rankings = [
  {
    //Shiv
    owner: "739628392529408000",
    position: 8,
    lastPosition: 7,
    up: "Kyren Williams",
    down: "Zamir White",
    game: "L 131.66-134.12",
    blurb: `Shiv outscored 6 teams in the league and lost anyways, something that she seems to do quite regularly at this point. She should simply score more points in a week where her opponent scores less points than her.
    We're not sure if she has tried this yet, but we'll report back if she does. A big pro (yes bigger than Kupp) is that Kyren is clearly the lead back. Corum was nonexistent all game. That is a huge vote of confidence in this
    lineup feeling complete, week after week. And Kupp + Jefferson could be deadly, as he was an absolute target hog when Puka went down. However, we have to see what happens when teams scheme for Kupp being option A, B, and C, and 
    then get a real sense of where this team is going. Pitts figures to have a Pitts season again, and Burrow did not look good but his receivers looked worse, so we'll give it a week. A thin bench could spell doom for this team, especially
    when upside is similarly limited by having an RB and WR on the same team.`,
  },
  {
    //Danny
    owner: "739529793342726144",
    position: 4,
    lastPosition: 2,
    up: "Brian Robinson",
    down: "Courtland Sutton",
    game: "L 85.66-135.28",
    blurb: `Danny had a disaster week, but we're not too worried. Dak won his game without numbers, and we know that won't last long. His 3 top WRs all put up duds, that also won't last long. Kelce with 3 catches might be more of a common
    occurance than you might think, but really that's the biggest bummer here. There are 4 startable RBs on this roster, AND Jordan Mason if CMC is out for an extended period of time. With that group, 3 competent WRs is totally workable while
    Danny works the waiver wire to find a replacement for Sutton, because my god did Nix look bad. Ridley has a chance to be better though, so we still like the balance and ability here. It was just a dud week, in every sense of the word. `,
  },
  {
    //Allan
    owner: "740648111118147584",
    position: 5,
    lastPosition: 6,
    up: "J.K Dobbins",
    down: "Tank Dell",
    game: "W 115.14-105.72",
    blurb: `Allan held on for the win, even without CMC (and a late MNF injury update!), and that's worth something. While he entirely benefitted from a blown up kicker and defensive performance, enough good things happened on the bench
    for us to think he has week to week stability, with or without CMC. Not jumping on Mason was a huge whiff, but Dobbins could be a savior there. Bowers looks real, and Metcalf and Marv can't possibly be this bad every single week, can they?.
    It should be an entertaining show from Allan's team every week. For now, its a slow ascention.`,
  },
  {
    //Nicole
    owner: "739660607032352768",
    position: 2,
    lastPosition: 1,
    up: "Jayden Reed",
    down: "Keenan Allen",
    game: "L 105.72-115.14",
    blurb: `Ranked #1 and immediately turns in a stinker. Seems to be a trend here. An Olave dud was really the worst offender of the week for her, and with that imrproving and Hurts playing on good old American soil again, she should be back with
    a strong win in no time. Hopkins and Allen might wind up being dead weight though, as one has a QB who falls to his knees in a walmart and the other has a QB who buys nail polish from Walmart. Still, we think the depth is good enough on this
    team to weather any storm. And that's without mentioning the 30 piece from Jayden Reed!`,
  },
  {
    //Nandan
    owner: "741390106056941568",
    position: 10,
    lastPosition: 9,
    up: "Zach Moss",
    down: "Drake London",
    game: "L 85.76-126.92",
    blurb: `The actual total is worse than what truly happened here. He had a bunch of subpar players, a hurt WR, and 1 true bust day. Drake London is just being Drake London though, and that draft capital
    sure could have been nice if it was spent somewhere else. He also was not fortunate enough to have a kicker or defense absolutely light that shit up, so a loss was basically inevitable. On the bright side,
    Zach Moss does not look like a thief, as in a bad bengals showing he was a rare bright spot. If he can be productive like that in a loss, he should be better in a win. Could be a nice piece. Look for Nandan
    to bounce back, but the reliance on Nandan with an L if Puka is out for a while is going to suck.`,
  },
  {
    //Mike
    owner: "870659100365737984",
    position: 7,
    lastPosition: 8,
    up: "Zay Flowers",
    down: "Tyjae Spears",
    game: "W 142.88-110.68",
    blurb: `Mike earns a TOTW nod, with a lot of help from his kicker and defense. Allen and Mixon boomed, and so did Jamo from the bench, but besides that this was a pretty top heavy scoring week. Spears and Ekeler looked ineffective, Kirk
    looks to have lost a little target share to Thomas, Kincaid didn't really get going at any point, and we're still just not high on Pacheco. However, Lamb should do better in the coming weeks, and Flowers got so many touches that he's bound
    to have a high floor week to week. There's things to like here, and a few things to not. We'll see what happens.`,
  },
  {
    //Logan
    owner: "739556159849140224",
    position: 9,
    lastPosition: 10,
    up: "Nico Collins",
    down: "Raheem Mostert",
    game: "W 134.12-131.66",
    blurb: `Wow, so many points, surely this means that his team is actually amazing right? No, we're not there yet. To his credit, Logan's team did not participate in the juiced kicker/defense scoring, and most of the performances
    here are replicable. Sun God should get better as the season wears on, and Collins looks to be the true #1 in Houston. However, Rhamondre Stevenson will simply not be doing what he did this week every single game, and the depth
    on this roster is BAD. We still are not optimistic looking at a whole season. The ceiling is capped and with a single injury, the floor is in the cellar.`,
  },
  {
    //Neel
    owner: "722992153168531456",
    position: 6,
    lastPosition: 3,
    up: "Anthony Richardson",
    down: "Mike Williams",
    game: "L 110.68-142.88",
    blurb: `The good news is that nothing went glaringly wrong. The bad news is that the floor of this team is not high enough to overcome the Cowboys kicker. Aiyuk had a very bad day, but seeing as he didn't practice before last
    Thursday, he should bounce back. Taylor and Etienne had mediocre days and played about at their floor, McBride got looks and should keep improving, and Zurlein scored literally 1 point. Of the rookies, Tracy doesn't look like he's going
    to get a lot of run for the same reasons Singletary is kind of useless now (read on to Saarangs), Mitchell can get open and just needs to turn his head and get AR to hit him, and Ladd cashed his first tuddy. This is with Hollywood Brown
    and Tee Higgins down and out, and there's still the Chubb stash. Future looks bright!. Especially if this is a week where everyone is going "Yeah Anthony Richardson didn't look like he had control of the game" and meanwhile he scored
    3 touchdowns. A lot to like.`,
  },
  {
    //Saarang
    owner: "739672661684346880",
    position: 3,
    lastPosition: 4,
    up: "Tony Pollard",
    down: "Devin Singletary",
    game: "W 126.92-85.76",
    blurb: `Saarang had a fairly mediocre day. A slightly juiced kicker score puts his total in the respectable 120 range, but under the surface, there's a few problems. First, he's short. Second, he says words funny. Third-ah wait
    we should probably talk about his team. Caleb + Swift both had duds, and Caleb does not look nearly as league ready as the entire world wanted you to think for 2 years. Swift should be better but truth be told, we have never been
    high on him. Diggs probably can't snag 2 TDs every week, but the postiive is aside from him and Fairbairn, Saarang's entire lineup should regularly do as well if not better as they did this week. A real bright spot could be Pollard, 
    who looked real good with the Titans and is making it not seem like a 1A/1B job with Spears. A bummer is Singletary, stuck on a floundering offense that will constantly be behind and passing a lot, and with a QB who can't hit checkdowns. He could have
    had a quietly sneaky season, but we are seriously doubting it now.`,
  },
  {
    //Ram
    owner: "739540158155743232",
    position: 1,
    lastPosition: 5,
    up: "Xavier Worthy",
    down: "Mark Andrews",
    game: "W 135.28-85.66",
    blurb: `Ram vaults into first place for two primary reasons. Nabers was okay when Daniel Jones was AWFUL, and Worthy looks like a TD waiting to happen at any time. Add that to 3 productive RBs and Garrett Wilson and you have a team
    that is set up to ruin some weekends. QB probably needs to be worked out (and we figure he will find one), and Mark Andrews looked like a bitch compared to Likely, so he's gonna have to trade for a TE because finding a capable waiver
    one does not look like its in the cards this season. But he has the pieces to do that, and with a generally floor-type performance from his team (plus a 17 point assist from his defense), this team is ready to go on a run.`,
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
  const data = await fetchLeagueInfo("2024", merge);
  const teams = merge(data, rankings);
  teams.sort((a, b) => b.position - a.position);

  return (
    <div className="w-full px-4 mt-4 flex flex-col md:px-[32rem]">
      <h3 className="text-center font-bold"> WEEK 2 POWER RANKINGS </h3>
      <div className="mt-4 w-full">
        <p className="text-sm text-justify">
          Historically low passing totals were the story of the day. This means
          that offense was down. And in a game where offense is basically
          everything, that's not ideal.
          <br /> <br />
          It's not all bad, since defenses and kickers showed the fuck out this
          week. But still, lame!
          <br /> <br />
          Aside from a handful of nice comebacks that literally were so
          devastating Will Levis fell to his knees in a Walmart (Walmart being
          Soldier Field), the most notable thing that happened in the league
          this week was Tyreek Hill joining Antifa and advocating for the
          complete dismantaling, reallocation of funds, and eventual abolition
          of the national police force.
          <br /> <br />
          In a cruel twist of fate, Saarang is the only person in the top 4 who
          won their matchup (and he's not 1, 2, or 3). Will he then be put at
          #1? No, of course not, don't be daft.
          <br /> <br />
          Here's to hoping offenses get back on track in Week 2.
        </p>
        <div className="mt-4 text-sm">
          <span className="font-bold">TOTW: </span>
          <span>
            νίκη - defeated Pee Piggins: The Return 142.88-110-68 (+32.2)
          </span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">LOTW: </span>
          <span>
            Bijan Frisé - defeated by Worthy Buttlickers 85.66-135.28 (-49.62)
          </span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">POTW: </span>
          <span>
            Saquon Barkley - the Worthy Buttlicker's RB went for 33.2 points in
            Sao Paolo
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
