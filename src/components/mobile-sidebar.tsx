"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useEffect, useState } from "react";

interface IMobileSidebar {
  apiLimitCount: number;
  isPro: boolean;
}
const MobileSidebar: React.FC<IMobileSidebar> = ({ apiLimitCount, isPro }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="md:hidden pt-2 px-2 ">
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} size={"icon"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0">
          <div className="h-full bg-gradient-to-br from-slate-800 to-black">
            <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
