import clsx from "clsx";
import { AboutFlare } from "./AboutFlare";
import { AboutSpotLight } from "./AboutSpotlight";

export const AboutGrid = () => {
  const rows = 8;
  const cols = 13;

  return (
    <div className="w-full overflow-x-hidden absolute">
      <AboutSpotLight />
      <div className="grid w-full xl:w[1400px] 2xl:w-[1910px] h-[400px] md:h-[600px] lg:h-[600px] xl:h-[800px] 2xl:h-[1050px] grid-cols-13 divide-x divide-y divide-[#161A31]">
        <div className="absolute w-full h-full z-10 bg-[radial-gradient(circle,rgba(0,3,25,0)_0%,rgba(0,3,25,1)_100%)]"></div>
        {Array.from({ length: rows * cols }).map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;

          return (
            <div
              key={i}
              className={clsx("w-full h-full", {
                "bg-[#0C0F24]":
                  (row === 0 && col === 8) ||
                  (row === 1 && col === 3) ||
                  (row === 2 && col === 10),
              })}
            >
              {row === 1 && col === 0 && <AboutFlare />}
              {row === 1 && col === 10 && <AboutFlare isWhite={true} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
