"use client";
import { cn } from "@/lib/utils";
import { ImageIcon, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";

const headers = [
  {
    id: "conversation",
    title: "Conversation",
    description: "Our most advanced AI conversation model",
    icon: <MessageSquare className={cn("w-10 h-10 text-orange-500")} />,
    bgColor: "bg-orange-500/10 border-b border-slate-200",
  },
  {
    id: "image",
    title: "Image Generation",
    description: "Turn your prompt into an image",
    icon: <ImageIcon className={cn("w-10 h-10 text-pink-700")} />,
    bgColor: "bg-pink-700/10",
  },
];

const Heading: React.FC = ({}) => {
  const pathName = usePathname();
  const value = pathName.substring(1); // remove '/' from pathName

  return headers.map((header, index) =>
    header.id === value ? (
      <div key={index} className="border-b-2 drop-shadow-md">
        <div className="px-4 lg:px-8 flex items-center gap-x-3 py-4">
          <div className={cn("p-2 w-fit rounded-md", header.bgColor)}>
            {header.icon}
          </div>
          <div>
            {" "}
            <h2 className="md:text-3xl font-bold">{header.title}</h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              {header.description}
            </p>
          </div>
        </div>
      </div>
    ) : (
      ""
    )
  );
};

export default Heading;
