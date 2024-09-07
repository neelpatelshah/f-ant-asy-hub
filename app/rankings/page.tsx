import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { rankings2024 } from "./data";
import Ranking from "./components/ranking";

const tabclass = "w-full data-[state=active]:bg-yellow-400";

const Rankings = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <Tabs defaultValue="2024">
        <TabsList className="bg-stone-950">
          <TabsTrigger className={tabclass} value="2024">
            2024
          </TabsTrigger>
          <TabsTrigger className={tabclass} value="2023">
            2023
          </TabsTrigger>
          <TabsTrigger className={tabclass} value="2022">
            2022
          </TabsTrigger>
        </TabsList>
        <TabsContent value="2024">
          {rankings2024.map((week, index) => (
            <Ranking {...week} year="2024" key={index} />
          ))}
        </TabsContent>
        <TabsContent value="2023">under contruction</TabsContent>
        <TabsContent value="2022">under contruction</TabsContent>
      </Tabs>
    </div>
  );
};

export default Rankings;
