"use client";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Image,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    colorIcon: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    href: "/conversation",
    label: "Conversation",
    icon: MessageSquare,
    colorIcon: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    href: "/image",
    label: "Image Generator",
    icon: Image,
    colorIcon: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    href: "/video",
    label: "Video Generator",
    icon: Video,
    colorIcon: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    href: "/music",
    label: "Music Generator",
    icon: Music,
    colorIcon: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    href: "/code",
    label: "Code Generator",
    icon: Code,
    colorIcon: "text-lime-500",
    bgColor: "bg-lime-500/10",
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
    colorIcon: "text-fuchsia-500",
    bgColor: "bg-fuchsia-500/10",
  },
];
const Dashboard: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <div className="py-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Explore the power of AI
        </h2>
        <p className="px-4 md:px-20 lg:px-32">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 py-6 flex flex-col gap-4">
        {tools.map((tool, index) => (
          <Card
            onClick={() => {
              router.push(tool.href);
            }}
            key={index}
            className="border-black/5 flex items-center justify-between hover:shadow-xl transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon
                  className={cn("w-8 h-8 md:w-12 md:h-12", tool.colorIcon)}
                />
              </div>
              <p className="font-semibold">{tool.label}</p>
            </div>
            <ArrowRight className="w-5 h-5 mr-4" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
