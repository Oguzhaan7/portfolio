import clsx from "clsx";
import HeaderFlare from "./HeaderFlare";

export const HeaderGrid = () => {
  const rows = 8;
  const cols = 13;

  return (
    <div className="w-full overflow-x-hidden absolute z-0">
      <div className="grid w-full xl:w[1400px] 2xl:w-[1910px] h-[400px] md:h-[600px] lg:h-[600px] xl:h-[800px] 2xl:h-[1050px] grid-cols-13 divide-x divide-y divide-[#161A31]">
        {Array.from({ length: rows * cols }).map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;

          return (
            <div
              key={i}
              className={clsx("w-full h-full relative", {
                "bg-[#0C0F24]":
                  (row === 0 && col === 8) || (row === 1 && col === 3),
              })}
            >
              {row === 1 && col === 0 && <HeaderFlare />}
              {row === 1 && col === 10 && <HeaderFlare isWhite={true} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
