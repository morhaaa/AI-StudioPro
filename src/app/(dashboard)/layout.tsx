import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen relative flex">
      <div className="basis-3/12 hidden md:inline-block h-full">
        <Sidebar />
      </div>
      <main className="w-full">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
