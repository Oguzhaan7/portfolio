import { AboutGrid } from "@/components/About/AboutGrid";
import { AboutSpotLight } from "@/components/About/AboutSpotlight";

export const About = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden relative -top-[70px]">
      <AboutSpotLight />
      <AboutGrid />
    </div>
  );
};
