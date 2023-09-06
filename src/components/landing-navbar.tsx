"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="px-8 py-3 flex items-center sticky backdrop-blur-sm justify-between w-full">
      <Link href="/" className="flex items-center">
        <p
          className={cn(
            "text-white font-semibold flex justify-center md:text-lg lg:text-xl xl:text-xl ",
            font.className
          )}
        >
          AI STUDIO PRO
        </p>
        <h1
          className={cn("text-2xl font-bold text-white", font.className)}
        ></h1>
      </Link>

      <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <Button variant="outline" className="rounded-full">
          Get Started
        </Button>
      </Link>
    </nav>
  );
};
