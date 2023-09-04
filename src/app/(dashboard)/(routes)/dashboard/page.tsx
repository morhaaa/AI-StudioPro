"use client";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { tools } from "@/constants";
import { useUser } from "@clerk/nextjs";

const Dashboard: React.FC = () => {
  const router = useRouter();

  const { user } = useUser();

  const userName: string = user?.firstName ? user.firstName : "";
  return (
    <div className="h-full overflow-auto flex flex-col gap-3 justify-center">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold md:py-1">
          Hi {userName.charAt(0).toUpperCase() + userName.slice(1)}
        </h2>
        <p className="px-4 md:px-20 lg:px-32 text-xl md:text-2xl">
          Unlock the power of AI
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
                {tool.icon}
              </div>
              <p className="font-semibold">{tool.title}</p>
            </div>
            <ArrowRight className="w-5 h-5 mr-4" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
