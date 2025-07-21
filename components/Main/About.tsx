import { AboutGrid } from "@/components/About/AboutGrid";
import { AboutHeader } from "@/components/About/AboutHeader";

export const About = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden relative -top-[70px]">
      <AboutGrid />
      <div className="w-full flex justify-center relative z-40 top-[270px]">
        <AboutHeader />
      </div>
    </div>
  );
};
