import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount;
  return (
    <div className="h-screen relative flex">
      <div className="basis-3/12 hidden md:inline-block h-full">
        <Sidebar apiLimitCount={5} />
      </div>
      <main className="w-full">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
