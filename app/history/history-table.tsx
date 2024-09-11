import { annualHistory } from "./data";

const HistoryTable = () => {
  return (
    <div className="w-full flex flex-col mt-4 px-4 md:px-48 text-xs md:text-base">
      <div className="w-full flex space-between pb-2 border-b pl-2">
        <div className="w-full font-bold">Year</div>
        <div className="w-full font-bold">Champion</div>
        <div className="w-full font-bold">Runner-up</div>
        <div className="w-full font-bold">Best Record</div>
        <div className="w-full font-bold">Worst Record</div>
        <div className="w-full font-bold">Most Points</div>
        <div className="w-full font-bold">Least Points</div>
      </div>
      {annualHistory.map((year, index) => (
        <div
          className="w-full flex space-between pl-2 pb-2 border-b border-dotted"
          key={index}
        >
          <div className="w-full">{year.year}</div>
          <div className="w-full">{year.winner}</div>
          <div className={`w-full ${!year.runnerUp ? "text-stone-600" : ""}`}>
            {year.runnerUp ?? "unknown"}
          </div>
          <div className={`w-full ${!year.bestRecord ? "text-stone-600" : ""}`}>
            {year.bestRecord ?? "unkown"}
          </div>
          <div
            className={`w-full ${!year.worstRecord ? "text-stone-600" : ""}`}
          >
            {year.worstRecord ?? "unknown"}
          </div>
          <div className={`w-full ${!year.mostPoints ? "text-stone-600" : ""}`}>
            {year.mostPoints ?? "unknown"}
          </div>
          <div
            className={`w-full ${!year.fewestPoints ? "text-stone-600" : ""}`}
          >
            {year.fewestPoints ?? "unknown"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryTable;
