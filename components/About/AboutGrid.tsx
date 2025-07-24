import clsx from "clsx";
import { AboutFlare } from "./AboutFlare";
import { AboutSpotLight } from "./AboutSpotlight";

export const AboutGrid = () => {
  const rows = 8;
  const cols = 16;

  return (
    <div className="w-full overflow-x-hidden absolute">
      <AboutSpotLight />
      <div className="grid w-full h-full min-h-screen grid-cols-8 lg:grid-cols-16 divide-x divide-y divide-[#161A31]">
        <div className="absolute w-full h-full z-10 bg-[radial-gradient(circle,rgba(0,3,25,0)_0%,rgba(0,3,25,1)_100%)] border-b border-transparent"></div>
        {Array.from({ length: rows * cols }).map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;

          return (
            <div
              key={i}
              className={clsx("w-full h-full", {
                "bg-[#0C0F24]":
                  (row === 0 && col === 11) ||
                  (row === 1 && col === 3) ||
                  (row === 2 && col === 13) ||
                  (row === 5 && col === 1) ||
                  (row === 6 && col === 14),
              })}
            >
              {row === 1 && col === 1 && <AboutFlare />}
              {row === 1 && col === 13 && <AboutFlare isWhite={true} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
