import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { omit } from "lodash";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const merge = (xs: any[], ys: any[]) =>
  xs.map((x) => {
    return { ...omit(x, "owner"), ...ys.find((y) => x.owner === y.owner) };
  });

type Year = "2022" | "2023" | "2024";
type LeagueID =
  | "861492945273094144"
  | "992180769013145600"
  | "1124855256950247424";
type LeagueYear = {
  [key in Year]: LeagueID;
};

const Years: LeagueYear = {
  "2022": "861492945273094144",
  "2023": "992180769013145600",
  "2024": "1124855256950247424",
};

export const fetchLeagueInfo = async (
  year: Year,
  setter: (...args: any[]) => any[]
) => {
  let parsed;
  const leagueId = Years[year];
  const _rosters = await fetch(
    `https://api.sleeper.app/v1/league/${leagueId}/rosters`
  );
  const rosters = await _rosters.json();
  const standings = rosters.map((team: any) => {
    return {
      owner: team.owner_id,
      wins: team.settings.wins,
      losses: team.settings.losses,
      ties: team.settings.ties,
      streak: team.metadata?.streak,
    };
  });

  const _users = await fetch(
    `https://api.sleeper.app/v1/league/${leagueId}/users`
  );
  const users = await _users.json();
  const teams = users.map((team: any) => {
    return {
      owner: team.user_id,
      user: team.display_name,
      team: team.metadata.team_name,
    };
  });

  parsed = setter(teams, standings);

  return parsed;
};

export interface Team {
  owner: string;
  user: string;
  team: string;
  wins: number;
  losses: number;
  ties: number;
  streak?: number;
}
