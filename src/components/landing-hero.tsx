"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold h-[92%] text-center flex flex-col items-center justify-center relative">
      {/* content */}
      <div className="z-50 flex flex-col gap-4">
        <div className="flex flex-col gap-2 py-2 text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-gray-800">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
            AI Studio Pro
          </h1>
          <div className="flex items-center  justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <h1 className="text-end">The Best AI Tool for&nbsp;</h1>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2 l text-start">
              <TypewriterComponent
                options={{
                  strings: ["chatbot.", "photo.", "coding.", "video."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-sm md:text-xl font-light text-zinc-400">
            Unlock the power of AI
          </div>
          <div>
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button
                variant="premium"
                className="md:text-lg p-4 md:p-6 rounded-full font-semibold bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 shadow-xl"
              >
                <p className="text-purple-800 font-semibold">
                  Start Generating For Free
                </p>
              </Button>
            </Link>
          </div>
          <div className="text-zinc-400 text-xs md:text-sm font-normal">
            No credit card required.
          </div>
        </div>
      </div>
    </div>
  );
};
