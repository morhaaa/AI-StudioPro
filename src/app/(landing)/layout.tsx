import { LandingNavbar } from "@/components/landing-navbar";
import Image from "next/image";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-screen bg-[#000000] overflow-auto flex flex-col items-center justify-center relative">
      <div className="absolute z-0 w-full h-full">
        <Image
          src="/background-hero.svg"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>
      <LandingNavbar />
      <div className="h-full w-full z-0 overflow-y-auto">{children}</div>
    </main>
  );
};

export default LandingLayout;
