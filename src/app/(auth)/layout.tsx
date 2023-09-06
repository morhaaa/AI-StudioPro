import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen relative flex">
      <div className="absolute z-0 w-full h-full">
        <Image
          src="/background-hero.svg"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col z-50 h-full w-full">
        <nav className="px-4">
          <Link href={{ pathname: "/" }}>
            {" "}
            <p
              className={cn(
                "text-white font-semibold flex justify-center py-6 md:text-lg lg:text-xl xl:text-xl ",
                montserrat.className
              )}
            >
              AI STUDIO PRO
            </p>
          </Link>
        </nav>
        <div className="flex justify-center items-center w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
