import { cn } from "@/lib/utils";
import { Code, ImageIcon, MessageSquare, Music, Video } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    id: "conversation",
    href: "/conversation",
    title: "Conversation",
    description: "Our most advanced AI conversation model",
    icon: <MessageSquare className={cn("w-10 h-10 text-sky-500")} />,
    bgColor: "bg-sky-500/10 border-b border-slate-200",
  },
  {
    id: "image",
    href: "/image",
    title: "Image Generation",
    description: "Turn your prompt into an image",
    icon: <ImageIcon className={cn("w-10 h-10 text-pink-700")} />,
    bgColor: "bg-pink-700/10",
  },
  {
    id: "music",
    href: "/music",
    title: "Music Generation",
    description: "Turn your prompt into music.",
    icon: <Music className={cn("w-10 h-10 text-emerald-500")} />,
    bgColor: "bg-emerald-500/10",
  },
  {
    id: "video",
    href: "/video",
    title: "Video Generation",
    description: "Turn your prompt into video.",
    icon: <Video className={cn("w-10 h-10 text-orange-700")} />,
    bgColor: "bg-orange-700/10",
  },
  {
    id: "code",
    href: "/code",
    title: "Code Generation",
    description: "Generate code using descriptive text",
    icon: <Code className={cn("w-10 h-10 text-yellow-500")} />,
    bgColor: "bg-yellow-500/10",
  },
];
