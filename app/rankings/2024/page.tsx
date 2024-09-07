import { rankings2024 } from "../data";
import Ranking from "../components/ranking";

const Page = () => {
  return (
    <div>
      {rankings2024.slice(1).map((week, index) => (
        <Ranking {...week} year="2024" key={index} />
      ))}
    </div>
  );
};

export default Page;
