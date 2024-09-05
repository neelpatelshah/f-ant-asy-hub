import { Button } from "@/components/ui/button";
import { House, Trophy, ChartNoAxesCombined } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full flex items-center justify-evenly border-b py-2 bg-slate-950 bg-opacity-50 md:justify-start md:pl-8 md:gap-4">
      <Button variant="ghost" asChild>
        <Link href="/">
          <House className="w-4 h-4 mr-2" />
          <div>Home</div>
        </Link>
      </Button>
      <Button variant="ghost">
        <ChartNoAxesCombined className="w-4 h-4 mr-2" />
        <div>Power Rankings</div>
      </Button>
      <Button variant="ghost">
        <Trophy className="w-4 h-4 mr-2" />
        <div>History</div>
      </Button>
    </div>
  );
};

export default NavBar;
