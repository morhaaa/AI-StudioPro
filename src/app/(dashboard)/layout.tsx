import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";
import Heading from "@/components/heading";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="h-screen w-screen flex  bg-[#000000]">
      <div className="hidden h-full md:flex md:flex-col md:basis-1/5">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="w-full h-full py-6 px-4 ">
        <div className="bg-white rounded-2xl flex flex-col h-full">
          <Navbar />
          <div className="h-full w-full flex flex-col overflow-hidden">
            <Heading />
            <div className="px-4 lg:px-10 flex flex-col gap-2 md:gap-4 h-full py-4 overflow-hidden">
              <div className="bg-slate-100 h-full rounded-xl border border-slate-200 flex flex-col overflow-hidden">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
