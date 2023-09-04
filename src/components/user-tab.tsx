import React from "react";
import { UserButton } from "@clerk/nextjs";
import { SubscriptionButton } from "./subscription-button";
import { useUser } from "@clerk/nextjs";
import { Progress } from "@/components/ui/progress";
import { MAX_FREE_COUNTS } from "@/constants";

interface Props {
  isPro: boolean;
  apiLimitCount: number;
}

const UserTab: React.FC<Props> = ({ isPro, apiLimitCount }) => {
  const { user } = useUser();
  return (
    <div className="bg-gray-700 rounded-md flex flex-col gap-6 py-6  px-2  border border-gray-600">
      {/*User Info*/}
      <div className="flex justify-center px-1">
        <div className="pr-3">
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="flex md:hidden xl:flex flex-col w-full">
          <p className="text-white font-semibold text-xs ">{user?.fullName}</p>
          <p className="text-white text-xs ">
            {user?.primaryEmailAddress
              ? user.primaryEmailAddress.emailAddress.substring(0, 18) + "..."
              : ""}
          </p>
        </div>

        <div className="flex items-center md:hidden xl:flex">
          <p className="bg-green-400 font-semibold text-xs px-1 rounded-md">
            {isPro ? "PRO" : "FREE"}
          </p>
        </div>
      </div>
      {/* Counter */}
      {!isPro && (
        <div className="px-2 flex flex-col gap-2 ">
          <p className="text-center text-sm text-white font-medium">
            {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
          </p>
          <Progress
            className="h-3"
            value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
          />
        </div>
      )}
      {/*Buttons*/}
      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

export default UserTab;
