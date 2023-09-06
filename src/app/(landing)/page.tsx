import { Montserrat } from "next/font/google";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import LandingFooter from "@/components/landing-footer";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingHero />
      <LandingContent />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
