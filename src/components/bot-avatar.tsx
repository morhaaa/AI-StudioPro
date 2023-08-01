import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export const BotAvatar: React.FC = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="/avatar-bot.png" className="p-1" />
    </Avatar>
  );
};
