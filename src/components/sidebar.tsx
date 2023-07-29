"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Code,
  Image,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  Video,
} from "lucide-react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    colorIcon: "text-sky-500",
  },
  {
    href: "/conversation",
    label: "Conversation",
    icon: MessageSquare,
    colorIcon: "text-orange-500",
  },
  {
    href: "/image",
    label: "Image Generator",
    icon: Image,
    colorIcon: "text-yellow-500",
  },
  {
    href: "/video",
    label: "Video Generator",
    icon: Video,
    colorIcon: "text-emerald-500",
  },
  {
    href: "/music",
    label: "Music Generator",
    icon: Music,
    colorIcon: "text-violet-500",
  },
  {
    href: "/code",
    label: "Code Generator",
    icon: Code,
    colorIcon: "text-lime-500",
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
    colorIcon: "text-fuchsia-500",
  },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-full bg-blue-900">
      <nav>
        <Link href={{ pathname: "/dashboard" }}>
          <div className="flex w-full gap-2">
            <p className="text-white font-semibold">LOGO</p>
            <p className={cn("text-white font-semibold", montserrat.className)}>
              AI PLATFORM
            </p>
          </div>
        </Link>
        <div>
          {routes.map((route, index) => (
            <Link
              href={route.href}
              key={index}
              className={cn(
                "flex justify-start hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex gap-2 items-center">
                <route.icon className={cn("h-10 w-10", route.colorIcon)} />
                <p className="text-2xl text-white font-medium">{route.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
