import { annualHistory } from "./data";

const HistoryTable = () => {
  return (
    <div className="w-full flex flex-col mt-4">
      <div className="w-full flex space-between">
        <div className="w-1/4">Year</div>
        <div className="w-1/4">Champion</div>
        <div className="w-1/4">Runner-up</div>
        <div className="w-1/4">Best Record</div>
        <div className="w-1/4">Worst Record</div>
        <div className="w-1/4">Most Points</div>
        <div className="w-1/4">Least Points</div>
      </div>
      <div>
        {annualHistory.map((year, index) => (
          <div className="w-full flex space-between" key={index}>
            <div className="w-1/4">{year.year}</div>
            <div className="w-1/4">{year.winner}</div>
            <div className="w-1/4">{year.runnerUp}</div>
            <div className="w-1/4">{year.bestRecord}</div>
            <div className="w-1/4">{year.worstRecord}</div>
            <div className="w-1/4">{year.mostPoints}</div>
            <div className="w-1/4">{year.fewestPoints}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryTable;
