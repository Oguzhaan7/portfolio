import { AboutGrid } from "@/components/About/AboutGrid";
import { AboutHeader } from "@/components/About/AboutHeader";
import { AboutContent } from "@/components/About/AboutContent";

export const About = () => {
  return (
    <div className="inline-block w-full h-full relative -top-[70px]">
      <AboutGrid />
      <div className="w-full flex flex-col items-center gap-32 justify-center relative z-40 top-[290px]">
        <AboutHeader />
        <AboutContent />
      </div>
    </div>
  );
};
