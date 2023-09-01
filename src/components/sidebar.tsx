"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FreeCounter } from "./free-Counter";
import { tools } from "@/constants";
import UserTab from "./user-tab";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

interface ISidebar {
  apiLimitCount: number;
  isPro: boolean;
}
const Sidebar: React.FC<ISidebar> = ({ apiLimitCount, isPro }) => {
  const pathname = usePathname();
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div className="flex flex-col">
        <Link href={{ pathname: "/dashboard" }}>
          {" "}
          <p
            className={cn(
              "text-white font-semibold flex justify-center py-6 md:text-lg lg:text-xl xl:text-2xl ",
              montserrat.className
            )}
          >
            AI STUDIO PRO
          </p>
        </Link>
        <nav className="px-3 py-4 flex flex-col">
          {tools.map((route, index) => (
            <Link
              href={route.href}
              key={index}
              className={cn(
                "flex justify-start hover:bg-white/10 rounded-lg transition py-2",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex gap-2 items-center">
                {route.icon}
                <p className="md:text-lg lg:text-xl xl:text-2xl text-white font-medium">
                  {route.title}
                </p>
              </div>
            </Link>
          ))}
        </nav>
      </div>
      <div className=" px-2 pb-4">
        <UserTab />
      </div>
    </div>
  );
  {
    /*
    <div className="space-y-4 py-4 flex flex-col h-full text-white bg-inherit">
      
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
    */
  }
};

export default Sidebar;
