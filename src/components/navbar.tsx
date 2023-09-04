import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const Navbar: React.FC = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />;
};

export default Navbar;
