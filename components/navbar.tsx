import { Button } from "@/components/ui/button";
import { Trophy, ChartNoAxesCombined } from "lucide-react";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full flex items-center justify-evenly border-b border-b-cyan-500 py-2 bg-stone-950 bg-opacity-50 md:justify-start md:pl-8 md:gap-4">
      <Button variant="ghost" asChild>
        <Link href="/">
          <Image src={logo} alt="logo" width={20} height={20} />
          <div className="ml-2 font-bold">Home</div>
        </Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/rankings">
          <ChartNoAxesCombined className="w-3 h-3 mr-2" />
          <div className="font-bold">Power Rankings</div>
        </Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/history">
          <Trophy className="w-3 h-3 mr-2" />
          <div className="font-bold">History</div>
        </Link>
      </Button>
    </div>
  );
};

export default NavBar;
