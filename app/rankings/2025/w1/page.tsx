import { fetchLeagueInfo, merge } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import photo from "@/public/2025/w1.png";

const rankings = [
  {
    //Shiv
    owner: "739628392529408000",
    position: 4,
    lastPosition: 10,
    up: "Omarion Hampton",
    down: "James Conner",
    game: "Calvin Ridley",
    blurb: `This is a good team. I'm not super high on Adams and I think Conner wasn't great value, esp with a non-WR playing on the team already, but there is no denying how good these lineups can be week to week. Really well done with very sensible choices up and down. Except maybe Rachaad White but who cares when it gets down there.`,
    roster: `1.10: M. Nabers (WR), 2.1: D. Henry (RB), 3.10: T. McBride (TE), 4.1: O. Hampton (RB), 5.10: D. Adams (WR), 6.1: J. Conner (RB), 7.10: C. Ridley (WR), 8.1: B. Nix (QB), 9.10: J. Jeudy (WR), 10.1: J. Warren (RB), 11.10: J. Williams (RB), 12.1: C. Godwin (WR), 13.10: R. White (RB), 14.1: D. Maye (QB), 15.10: P. Steelers (DEF), 16.1: C. Little (K)`,
    record: "8-5",
  },
  {
    //Danny
    owner: "739529793342726144",
    position: 1,
    lastPosition: 9,
    up: "Saquon Barkley",
    down: "Quinshon Judkins",
    game: "Zay Flowers",
    blurb: `quinshon judkins`,
    roster: `1.3: S. Barkley (RB), 2.8: D. Achane (RB), 3.3: J. Smith-Njigba (WR), 4.8: J. Burrow (QB), 5.3: T. McLaurin (WR), 6.8: Z. Flowers (WR), 7.3: A. Jones (RB), 8.8: D. Njoku (TE), 9.3: S. Diggs (WR), 10.8: Q. Judkins (RB), 11.3: T. Bigsby (RB), 12.8: C. Kirk (WR), 13.3: O. Gordon (RB), 14.8: J. Ford (RB), 15.3: C. Dicker (K), 16.8: D. Lions (DEF)`,
    record: "10-3",
  },
  {
    //Lucas
    owner: "1133331712487890944",
    position: 9,
    lastPosition: 8,
    up: "Jamarr Chase",
    down: "Chase Brown",
    game: "Chris Olave",
    blurb: `No one gave this new guy the memo, but we hate Drake London in this town. Either way, its a pretty good WR trio and Kamara is good, but Chase + Chase is not a pairing we love. Chase Brown by no means is entitled to snaps in Cincy, and the RBs behind him are legitamately RB2s on their actual teams. The WR depth isn't flying high either. Maybe they do things differently down under?`,
    roster: `1.1: J. Chase (WR), 2.10: D. London (WR), 3.1: C. Brown (RB), 4.10: A. Kamara (RB), 5.1: M. Harrison (WR), 6.10: T. McMillan (WR), 7.1: R. Rice (WR), 8.10: C. Olave (WR), 9.1: T. Warren (TE), 10.10: R. Stevenson (RB), 11.1: T. Benson (RB), 12.10: K. Murray (QB), 13.1: T. Allgeier (RB), 14.10: C. Williams (QB), 15.1: D. Broncos (DEF), 16.10: S. 49ers (DEF)`,
    record: "4-9",
  },
  {
    //Nicole
    owner: "739660607032352768",
    position: 6,
    lastPosition: 7,
    up: "Patrick Mahomes",
    down: "Xavier Worthy",
    game: "Tony Pollard",
    blurb: `This is a good team but its hard to get excited about. St. Brown and Jacobs, good. James Cook might be cooked just based on RB aging and money and how good the Bills will be with anyone else besides him anyways. GW we love but do we love Fields? We don't know. Mahomes is insane value since he can drop a million points if he wants, Worthy is not good value. Bench is okay? It really feels like a true middle of the pack team.`,
    roster: `1.6: A. St. Brown (WR), 2.5: J. Jacobs (RB), 3.6: J. Cook (RB), 4.5: G. Wilson (WR), 5.6: P. Mahomes (QB), 6.5: X. Worthy (WR), 7.6: T. Pollard (RB), 8.5: M. Andrews (TE), 9.6: C. Kupp (WR), 10.5: J. Dobbins (RB), 11.6: J. Mason (RB), 12.5: J. Reed (WR), 13.6: D. Kincaid (TE), 14.5: J. Bates (K), 15.6: B. Bills (DEF), 16.5: C. Stroud (QB)`,
    record: "7-6",
  },
  {
    //Nandan
    owner: "741390106056941568",
    position: 2,
    lastPosition: 6,
    up: "Bijan Robinson",
    down: "Tyrone Tracy",
    game: "Khalil Shakir",
    blurb: `Nandan killed this. Strong top 5 WR, good RB duo, good QB stack, league best TE. Some well thought out dart throws. It's always remarkable how Nandan pulls together such a nice draft and then finishes with 4 wins. Will this be his year for 5?`,
    roster: `1.2: B. Robinson (RB), 2.9: A. Brown (WR), 3.2: B. Bowers (TE), 4.9: M. Evans (WR), 5.2: K. Walker (RB), 6.9: G. Pickens (WR), 7.2: B. Mayfield (QB), 8.9: T. Tracy (RB), 9.2: R. Odunze (WR), 10.9: K. Shakir (WR), 11.2: A. Ekeler (RB), 12.9: A. Cooper (WR), 13.2: J. Jennings (WR), 14.9: B. Ravens (DEF), 15.2: D. Goedert (TE), 16.9: Y. Koo (K)`,
    record: "9-4",
  },
  {
    //Mike
    owner: "870659100365737984",
    position: 7,
    lastPosition: 5,
    up: "Lamar Jackson",
    down: "Brandon Aubrey",
    game: "Evan Engram",
    blurb: `Why are we drafting kickers in round 10. Evan Engram though!`,
    roster: `1.7: C. Lamb (WR), 2.4: L. Jackson (QB), 3.7: B. Irving (RB), 4.4: T. Higgins (WR), 5.7: C. Hubbard (RB), 6.4: C. Sutton (WR), 7.7: T. Kelce (TE), 8.4: D. Samuel (WR), 9.7: T. Etienne (RB), 10.4: B. Aubrey (K), 11.7: E. Engram (TE), 12.4: R. Shaheed (WR), 13.7: J. Blue (RB), 14.4: B. Purdy (QB), 15.7: M. Vikings (DEF), 16.4: K. Allen (WR)`,
    record: "6-7",
  },
  {
    //Logan
    owner: "739556159849140224",
    position: 3,
    lastPosition: 4,
    up: "Jayden Daniels",
    down: "Kyle Pitts",
    game: "Jaylen Waddle",
    blurb: `Logan got really upset about Evan Engram because it meant Kyle Pitts.`,
    roster: `1.8: C. McCaffrey (RB), 2.3: N. Collins (WR), 3.8: L. McConkey (WR), 4.3: J. Daniels (QB), 5.8: T. Henderson (RB), 6.3: R. Harvey (RB), 7.8: J. Waddle (WR), 8.3: K. Johnson (RB), 9.8: J. Meyers (WR), 10.3: C. Skattebo (RB), 11.8: K. Pitts (TE), 12.3: T. Kraft (TE), 13.8: J. Herbert (QB), 14.3: J. Downs (WR), 15.8: T. Bass (K), 16.3: W. Commanders (DEF)`,
    record: "9-4",
  },
  {
    //Neel
    owner: "722992153168531456",
    position: 5,
    lastPosition: 3,
    up: "Josh Allen",
    down: "Joe Mixon",
    game: "D.K. Metcalf",
    blurb: `The starting lineup is great. The bench is a complete shitshow. In hindsight, Mixon probably feels like a terrible use of value, and even though the Addison stash is good value, it might be bad strategy with Jetta in the fold. Lots of bets, lots of waiting, but lots of firepower ready to go from Week 1. Good.`,
    roster: `1.5: J. Jefferson (WR), 2.6: J. Allen (QB), 3.5: K. Williams (RB), 4.6: B. Hall (RB), 5.5: D. Metcalf (WR), 6.6: T. Hockenson (TE), 7.5: J. Williams (WR), 8.6: J. Mixon (RB), 9.5: E. Egbuka (WR), 10.6: C. Loveland (TE), 11.5: J. Addison (WR), 12.6: J. Higgins (WR), 13.5: P. Eagles (DEF), 14.6: D. Sampson (RB), 15.5: J. McCarthy (QB), 16.6: C. Boswell (K)`,
    record: "8-5",
  },
  {
    //Saarang
    owner: "739672661684346880",
    position: 8,
    lastPosition: 2,
    up: "Jahmyr Gibbs",
    down: "Isaiah Pacheco",
    game: "Keon Coleman",
    blurb: `Icky draft. Gibbs is a home run, but BTJ and Travis Hunter? What? Even if Hunter is a full time WR, what? Tyreek is going to fall off a cliff, Pacheco has to be at the end of his usefulness in a Andy Reid world, and Charbs and Allen have projected roles but its a lot to bet on. JT in the third is egregious how did we allow that.`,
    roster: `1.4: J. Gibbs (RB), 2.7: B. Thomas (WR), 3.4: J. Taylor (RB), 4.7: T. Hill (WR), 5.4: S. LaPorta (TE), 6.7: I. Pacheco (RB), 7.4: D. Smith (WR), 8.7: T. Hunter (WR), 9.4: B. Robinson (RB), 10.7: J. Goff (QB), 11.4: Z. Charbonnet (RB), 12.7: K. Coleman (WR), 13.4: B. Allen (RB), 14.7: J. Ferguson (TE), 15.4: K. Fairbairn (K), 16.7: H. Texans (DEF)`,
    record: "4-9",
  },
  {
    //Ram
    owner: "739540158155743232",
    position: 10,
    lastPosition: 1,
    up: "Jalen Hurts",
    down: "Ashton Jeanty",
    game: "Ricky Pearsall",
    blurb: `Will Jeanty be good? Probably but he is the most important guy here and he's never played a snap in the NFL and is on what was a bad team. Puka has a ghost at QB, Kittle gets hurt, DJ Moore is not established with Caleb, Monty is getting phased out, the Packers receivers all normalize to 4th round talents, and D'Andre Swift literally already got traded away from Ben Johnson. Good luck, Wam.`,
    roster: `1.9: A. Jeanty (RB), 2.2: P. Nacua (WR), 3.9: J. Hurts (QB), 4.2: G. Kittle (TE), 5.9: D. Moore (WR), 6.2: D. Montgomery (RB), 7.9: M. Golden (WR), 8.2: D. Swift (RB), 9.9: R. Pearsall (WR), 10.2: M. Pittman (WR), 11.9: J. Croskey-Merritt (RB), 12.2: N. Chubb (RB), 13.9: M. Mims (WR), 14.2: N. Harris (RB), 15.9: A. Cardinals (DEF), 16.2: H. Brown (WR)`,
    record: "2-11",
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
  roster: string;
  record: string;
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
  roster,
  record,
}: RankingProps) => {
  return (
    <div className="my-4">
      <div className="w-full flex justify-between text-xl font-bold py-1 border-b border-stone-400 mb-2">
        <span className="text-xl font-bold">
          #{position}: {team || user}
        </span>
        <span>
          {wins}-{losses}
        </span>
      </div>
      <div className="mb-2 text-xs text-stone-400 italic">{roster}</div>
      <div className="mb-2 flex flex-col md:flex-row md:w-full md:justify-evenly">
        <h5 className="text-sm font-semibold">MVP: {up}</h5>
        <h5 className="text-sm font-semibold">Best pick: {game}</h5>
        <h5 className="text-sm font-semibold">Worst pick: {down}</h5>
      </div>
      <p className="text-sm text-justify">{blurb}</p>
      <div className="text-xs mt-2 font-semibold italic">
        Projection: {record}
      </div>
    </div>
  );
};

const W1 = async () => {
  const data = await fetchLeagueInfo("2025", merge);
  const teams = merge(data, rankings);
  teams.sort((a, b) => b.position - a.position);

  return (
    <div className="w-full px-4 mt-4 flex flex-col md:px-[32rem]">
      <h3 className="text-center font-bold"> WEEK 1 POWER RANKINGS </h3>
      <div className="mt-4 w-full">
        <p className="text-sm text-justify">
          {
            "We are back! After finally acheiving that much desired parity in 2024 with Nicole's literal father taking the crown, we are up and running for year eight of the best fantasy league in the country."
          }
          <br /> <br />
          {
            "We have a newcomer! Welcome to the league, Lucas. It's quite fitting that Allan was in Malaysia for a while and now you're also on the other side of the planet. We are truly a global brand."
          }
          <br /> <br />
          {
            "As for the rest of you, let's try not to let Logan or Danny win, yeah?"
          }
        </p>
        <div className="mt-4 text-sm">
          <span className="font-bold">MVP: </span>
          <span>Jahmyr Gibbs</span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">ROY: </span>
          <span>Omarion Hampton</span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">MIP: </span>
          <span>Marvin Harrison Jr.</span>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <Image src={photo} alt="2025 Draft Board" width={800} height={600} />
      </div>
      <div className="my-4">
        {teams.map((team, index) => (
          <Ranking {...team} key={index} />
        ))}
      </div>
    </div>
  );
};

export default W1;
