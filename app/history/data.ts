type AnnualHistory = {
  year: number;
  winner: string;
  runnerUp: string | null;
  bestRecord: string | null;
  worstRecord: string | null;
  mostPoints: string | null;
  fewestPoints: string | null;
};

const annualHistory: AnnualHistory[] = [
  {
    year: 2023,
    winner: "Logan",
    runnerUp: "Danny",
    bestRecord: "Ram (12-1)",
    worstRecord: "Allan (3-10)",
    mostPoints: "Danny (1742.8)",
    fewestPoints: "Allan (1436.09)",
  },
  {
    year: 2022,
    winner: "Danny",
    runnerUp: "Logan",
    bestRecord: "Danny & Shiv (9-4)",
    worstRecord: "Mike (3-10)",
    mostPoints: "Logan (1821.64)",
    fewestPoints: "Mike (1364)",
  },
  {
    year: 2021,
    winner: "Neel",
    runnerUp: "Nicole",
    bestRecord: "Logan & Neel (9-4)",
    worstRecord: "Mike, Saarang, Nandan, & Ram (5-8)",
    mostPoints: "Logan (1736.2)",
    fewestPoints: "Mike (1430.58)",
  },
  {
    year: 2020,
    winner: "Danny",
    runnerUp: "Logan",
    bestRecord: null,
    worstRecord: null,
    mostPoints: null,
    fewestPoints: null,
  },
  {
    year: 2019,
    winner: "Logan",
    runnerUp: null,
    bestRecord: null,
    worstRecord: null,
    mostPoints: null,
    fewestPoints: null,
  },
  {
    year: 2018,
    winner: "Logan",
    runnerUp: "Tyler",
    bestRecord: null,
    worstRecord: null,
    mostPoints: null,
    fewestPoints: null,
  },
];
