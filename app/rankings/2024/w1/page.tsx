import { fetchLeagueInfo, merge } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import photo from "@/public/2024w1.jpg";

const rankings = [
  {
    //Shiv
    owner: "739628392529408000",
    position: 7,
    lastPosition: 10,
    up: "Kyler Murrat",
    down: "Cooper Kupp",
    game: "Rachaad White",
    blurb: `This wasn't a bad draft, but there's a handful of sticking points for us. Aside from Kyren being a punt returner now, him and Kupp in 4 rounds is only slightly more palatable than what Logan did.
    Jefferson has Darnold working against him, Pitts has Kyle working against him, Pickens has black forces working against him, Kyler has the top shelf working against him, etc etc etc. There's a lot of adversity being faced by this roster,
    and we just feel that it limits the upside. That being said, maybe minus Kyle Pitts and swapping Kupp for another receiver from the 4th round, we'd be pretty happy with this roster being our own.`,
    roster: `1.6: J. Jefferson (WR), 2.5: K. Williams (RB), 3.6: R. White (RB), 4.5: C. Kupp (WR), 5.6: D. Smith (WR), 6.5: K. Pitts (TE), 7.6: G. Pickens (WR), 8.5: Z. White (RB), 9.6: K. Murray (QB), 10.5: J. Smith-Njigba (WR), 11.6: T. Benson (RB), 12.5: J. Burrow (QB), 13.6: J. Jeudy (WR), 14.5: S. 49ers (DEF), 15.6: J. Tucker (K), 16.5: D. Wicks (WR)`,
  },
  {
    //Danny
    owner: "739529793342726144",
    position: 2,
    lastPosition: 9,
    up: "Brian Robinson",
    down: "Aaron Jones",
    game: "Kenneth Walker",
    blurb: `There's a lot we don't like here, but on the objective side, this roster is stellar. Bijan, Walker, and Jones is a great trio. Brooks can work out, and we think Brian Robinson
    is the actual B. Robinson RB, so the depth there is crazy. Adams, Pittman, Cooper, Ridley is pretty good, but could be better, but also with WRs there's plenty of room to trade or add
    a talent that can make that room look best in the league. Kelce will be good but maybe not his usual peak, and Dak should be fine, but in general this is about as well rounded as you could hope
    to be. And the floor feels like it's very, very, very high, even if this is really the year Jones finally, FINALLY falls off (but he has Ty Chandler anyways). `,
    roster: `1.5: B. Robinson (RB), 2.6: D. Adams (WR), 3.5: T. Kelce (TE), 4.6: K. Walker (RB), 5.5: M. Pittman (WR), 6.6: A. Jones (RB), 7.5: A. Cooper (WR), 8.6: C. Ridley (WR), 9.5: J. Brooks (RB), 10.6: C. Sutton (WR), 11.5: B. Robinson (RB), 12.6: T. Chandler (RB), 13.5: D. Prescott (QB), 14.6: N. Jets (DEF), 15.5: L. Musgrave (TE), 16.6: C. Dicker (K)`,
  },
  {
    //Allan
    owner: "740648111118147584",
    position: 6,
    lastPosition: 8,
    up: "Jake Ferguson",
    down: "De'Von Achane",
    game: "Tyler Bass",
    blurb: `Even with Nandan's strategy constantly fucking him over, Allan had a pretty strong draft. If this is the result of a compromised war room, maybe he needs to hire different
    generals, because There's not a lot bad here. MHJ probably will pan out, but its a big risk for his top receiver. Achane is a freak but is tiny, was hurt a bunch, and McDaniel will
    plug in any zippy RB in his place in a heartbeat. Bpwers is similar to MHJ, but with a way better security blanket in Ferguson who could be Dallas's WR2, so that's not a big deal. Aside
    from those nits, the only real problem is RB depth, which is why he got dropped to the bottom half over Ram. We really like what this looks like.`,
    roster: `1.1: C. McCaffrey (RB), 2.10: M. Harrison (WR), 3.1: D. Achane (RB), 4.10: D. Metcalf (WR), 5.1: P. Mahomes (QB), 6.10: R. Rice (WR), 7.1: T. Dell (WR), 8.10: B. Bowers (TE), 9.1: T. McLaurin (WR), 10.10: B. Thomas (WR), 11.1: B. Corum (RB), 12.10: R. Dowdle (RB), 13.1: J. Dobbins (RB), 14.10: D. Cowboys (DEF), 15.1: J. Ferguson (TE), 16.10: T. Bass (K)`,
  },
  {
    //Nicole
    owner: "739660607032352768",
    position: 1,
    lastPosition: 7,
    up: "Josh Jacobs",
    down: "DeAndre Hopkins",
    game: "Breece Hall",
    blurb: `How did we let this happen? This team is insane. Going for the intelligent picks over the flashy players for the most part, Nicole got an RB on a team that's going to give him seven million
    touches, a WR on a team who only has an octogenarian RB as the other option, the greatest vulture in the history of the NFL, depth for days and maybe not ideal TE who was a freaking stud last year.
    That's pretty much the only weakness, but if Njoku is even 75% of what he did last year, this is lights out shit. Breece and Jacobs, not flashy but insane. Olave and Deebo, not flashy but insane. Hurts
    produces, Njoku produces, and bench options of Montgomery, Reed and Allen is wild. This is the deepest and most balanced team in the league. Not finding a waiverable TE might be the only issue we see, and that's a pretty damn
    good spot to be in.`,
    roster: `1.3: B. Hall (RB), 2.8: C. Olave (WR), 3.3: J. Jacobs (RB), 4.8: D. Samuel (WR), 5.3: J. Hurts (QB), 6.8: D. Montgomery (RB), 7.3: D. Njoku (TE), 8.8: J. Reed (WR), 9.3: K. Allen (WR), 10.8: D. Hopkins (WR), 11.3: C. Brown (RB), 12.8: K. Shakir (WR), 13.3: E. McPherson (K), 14.8: B. Ravens (DEF), 15.3: J. Downs (WR), 16.8: J. McLaughlin (RB)`,
  },
  {
    //Nandan
    owner: "741390106056941568",
    position: 9,
    lastPosition: 6,
    up: "D.J. Moore",
    down: "Najee Harris",
    game: "Tyreek Hill",
    blurb: `Truth be told, Nandan had a pretty good draft. The funny name strat yielded some really solid later round picks. But good drafts can still result in bad rosters (like probably
    not true but you see what we're saying?). The RBs are not ideal. Did no one else see Derrick Henry visibly not look the same last season? Ravens or not, the juice isn't there anymore.
    Maybe there's a resurgence, but solidifying that RB room with Najee is just truly hilarious. And to be clear, the only reason he's getting away with Drake London not being his worst
    pick is being London with an N is such gold that no other team could have drafted him. All in all, we don't love the team, but that doesn't mean he has to puka different strat.`,
    roster: `1.2: T. Hill (WR), 2.9: P. Nacua (WR), 3.2: D. Henry (RB), 4.9: D. London (WR), 5.2: D. Moore (WR), 6.9: E. Engram (TE), 7.2: N. Harris (RB), 8.9: Z. Moss (RB), 9.2: C. Stroud (QB), 10.9: T. Lockett (WR), 11.2: G. Edwards (RB), 12.9: C. Hubbard (RB), 13.2: J. Polk (WR), 14.9: Y. Koo (K), 15.2: C. Browns (DEF), 16.9: C. Kmet (TE)`,
  },
  {
    //Mike
    owner: "870659100365737984",
    position: 8,
    lastPosition: 5,
    up: "Christian Kirk",
    down: "Isiah Pacheco",
    game: "Josh Allen",
    blurb: `This was an odd one, and a lot of the negativity here is personal bias. Pacheco is young and strong but the Chiefs never show commitment to anyone on offense except Mahomes, 
    Kelce, and once upon a time, Tyreek. There is no draft pedigree or historic moment protexting Pacheco from losing a substaintial role to Samaje Perine. Mixon has been on the downturn for a minute,
    and this high-flying Texans offense may give him some juice but we just don't have faith. Allen and Kincaid is excellent, Lamb and Kirk are a pretty solid duo, and Flowers has some potential. Good things
    can certainly be brewing here, but we just don't love the recipe right now. Also how on earth did taking Jordan Love over Dak make sense?`,
    roster: `1.4: C. Lamb (WR), 2.7: I. Pacheco (RB), 3.4: J. Mixon (RB), 4.7: J. Allen (QB), 5.4: D. Kincaid (TE), 6.7: Z. Flowers (WR), 7.4: A. Ekeler (RB), 8.7: C. Kirk (WR), 9.4: D. Goedert (TE), 10.7: T. Spears (RB), 11.4: J. Williams (WR), 12.7: B. Aubrey (K), 13.4: J. Love (QB), 14.7: G. Davis (WR), 15.4: P. Eagles (DEF), 16.7: J. Wright (RB)`,
  },
  {
    //Logan
    owner: "739556159849140224",
    position: 10,
    lastPosition: 4,
    up: "Jared Goff",
    down: "Jahmyr Gibbs",
    game: "Lamar Jackson",
    blurb: `What do we even say at this point. We do not like this team, we do not like the draft strategy, we do not like the prospect of him winning a 4th title. But it always seems
    to work out somehow. But look at this shit fr. Lions players back to back, then a potential WR3, then 5 of the most unbeleivably sub-mid running backs imaginable. How are we supposed to be bullish
    on this team? How? He's gonna wind up winning a million games and making the 'yoffs anyways. Whatever.`,
    roster: `1.7: A. St. Brown (WR), 2.4: J. Gibbs (RB), 3.7: N. Collins (WR), 4.4: M. Evans (WR), 5.7: L. Jackson (QB), 6.4: G. Kittle (TE), 7.7: R. Stevenson (RB), 8.4: R. Mostert (RB), 9.7: J. Williams (RB), 10.4: K. Coleman (WR), 11.7: J. Addison (WR), 12.4: E. Elliott (RB), 13.7: Z. Charbonnet (RB), 14.4: J. Goff (QB), 15.7: T. Buccaneers (DEF), 16.4: J. Elliott (K)`,
  },
  {
    //Neel
    owner: "722992153168531456",
    position: 3,
    lastPosition: 3,
    up: "Nick Chubb",
    down: "Anthony Richardson",
    game: "Anthony Richardson",
    blurb: `Our glorious leader comes in at #3, sporting a roster with very few holes in it. This is the best RB duo in the league (and it should be, going round 1 and 2), it's quite a 
    favorable WR situation, with Aiyuk likely to at least match his production last year, and Waddle set to exceed his when Tyreek's legs finally fall off. Tee Higgins is a stud in his contract year,
    and then you have the upside shots in Brown, Ladd, and Mitchell. McBride is tracking to be a top 5 TE this season, and Anthony Richardson could be a generational fantasy talent (and if he's not,
    Tua is gonna pass for 5000 yards anyways). OH YEAH AND NICK CHUBB, it's actually gonna be the best RB trio. Really, the worst thing here is Richardson and JT on the same roster, limiting the max rushing potential, but that
    can always work itself out. This is a good team.`,
    roster: `1.10: J. Taylor (RB), 2.1: T. Etienne (RB), 3.10: B. Aiyuk (WR), 4.1: J. Waddle (WR), 5.10: T. McBride (TE), 6.1: T. Higgins (WR), 7.10: A. Richardson (QB), 8.1: N. Chubb (RB), 9.10: H. Brown (WR), 10.1: L. McConkey (WR), 11.10: J. Ford (RB), 12.1: A. Mitchell (WR), 13.10: T. Tagovailoa (QB), 14.1: M. Williams (WR), 15.10: T. Tracy (RB), 16.1: S. Seahawks (DEF)`,
  },
  {
    //Saarang
    owner: "739672661684346880",
    position: 4,
    lastPosition: 2,
    up: "Curtis Samuel",
    down: "Brock Purdy",
    game: "Ja'Marr Chase",
    blurb: `Saarang has consistently been making it towards the top of the post draft rankings, to the ponit where #4 is almost a bad showing from him. Thankfully, he continually let's us down,
    so there will be plenty of oppostunities to make fun of him this season. Chase and Brown (not the Cincy RB) is the best duo in the league, Kamara should get volume, Swift, should get volume, and Singletary
    should get volume, LaPorta will be in the top 3 TEs, and the WR depth is really, really good. Why is he down here then? None of the RBs are like actually good, but more importantly, he didn't take Burrow
    for some god forsaken reason, and then took Brock of all people. So this is as high as he's legally allowed to be placed.`,
    roster: `1.8: J. Chase (WR), 2.3: A. Brown (WR), 3.8: A. Kamara (RB), 4.3: S. LaPorta (TE), 5.8: S. Diggs (WR), 6.3: D. Swift (RB), 7.8: C. Godwin (WR), 8.3: T. Pollard (RB), 9.8: D. Johnson (WR), 10.3: D. Singletary (RB), 11.8: C. Samuel (WR), 12.3: R. Doubs (WR), 13.8: B. Purdy (QB), 14.3: C. Williams (QB), 15.8: M. Dolphins (DEF), 16.3: K. Fairbairn (K)`,
  },
  {
    //Ram
    owner: "739540158155743232",
    position: 5,
    lastPosition: 1,
    up: "James Cook",
    down: "Saquon Barkley",
    game: "Garrett Wilson",
    blurb: `Our gracious host had a solid draft. While he's a bit rookie obsessed, we felt this was a good effort. What we didn't love was that Saquon will be vultured to hell, Nabers is a rookie, Worthy is a rookie, Odunze is a rookie, and Dotson
    is just bad. But for the positives, Wilson's volumne figures to be insane, and the same goes for Cook. Andrews is good but unreliable maybe, so backing up with Hock is great. Conner is an excellent 3rd option at RB. If the WRs pan out, IF, then this
    team has absolutely wild upside. But the floor should still be pretty, pretty good.`,
    roster: `1.9: G. Wilson (WR), 2.2: S. Barkley (RB), 3.9: J. Cook (RB), 4.2: M. Nabers (WR), 5.9: M. Andrews (TE), 6.2: J. Conner (RB), 7.9: X. Worthy (WR), 8.2: R. Odunze (WR), 9.9: J. Warren (RB), 10.2: C. Watson (WR), 11.9: T. Hockenson (TE), 12.2: J. Meyers (WR), 13.9: A. Rodgers (QB), 14.2: R. Shaheed (WR), 15.9: J. Dotson (WR), 16.2: K. Chiefs (DEF)`,
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
        <h5 className="text-sm font-semibold">MVP: {game}</h5>
        <h5 className="text-sm font-semibold">Best pick: {up}</h5>
        <h5 className="text-sm font-semibold">Worst pick: {down}</h5>
      </div>
      <p className="text-sm text-justify">{blurb}</p>
    </div>
  );
};

const W1 = async () => {
  const data = await fetchLeagueInfo("2024", merge);
  const teams = merge(data, rankings);
  teams.sort((a, b) => b.position - a.position);

  return (
    <div className="w-full px-4 mt-4 flex flex-col md:px-[32rem]">
      <h3 className="text-center font-bold"> WEEK 1 POWER RANKINGS </h3>
      <div className="mt-4 w-full">
        <p className="text-sm text-justify">
          {
            "We have emerged from the ayahuasca cave and are ready for the 2024 season. Let's see what we missed."
          }
          <br /> <br />
          {
            "brat summer was in full swing, by which I obviously mean diva WR after diva WR holding out for contracts. But even they were no match for Diva Edge Rusher Summer, with Haason Reddick committed to completely forgetting how to play the sport of football."
          }
          <br /> <br />
          {
            "brat summer could also mean the 4935 lawsuits and controversies that various players have managed to wrap themselves up in. From DUIs to jersey sale holdouts to sending women to the kitchen, this has certainly been one of the seasons of all time for the NFL's best but not brightest."
          }
          <br /> <br />
          {
            "From the depths, our diligent research team also uncovered a forgotten trophy, giving Logan a historic 3rd ring, the most we have ever seen. Hopefully, the rest of the league can catch up to him this year. And by god, looking at his team, this is certainly the year to do it."
          }
        </p>
        <div className="mt-4 text-sm">
          <span className="font-bold">MVP: </span>
          <span>
            Christian McCaffrey - yeah idk what else we could say here
          </span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">ROY: </span>
          <span>Marvin Harrison Jr. - also kind of a no brainer idk</span>
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold">MIP: </span>
          <span>
            Dalton Kincaid - Bills WR1, book it (derogatory if ur a bills fan)
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

export default W1;
