import clsx from "clsx";
import Image from "next/image";
import { Copy } from "lucide-react";

export const AboutPromotion = () => {
  const boxStyle = "rounded-3xl border border-[rgba(54,55,73,0.43)]";

  const boxGradientStyle = {
    background: "linear-gradient(90deg, #04071D, #0C0E23)",
  };

  const rows = 6;
  const cols = 12;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] gap-8 h-max lg:h-[390px] w-full max-w-[1240px] ">
      <div className="grid gap-8 h-full relative">
        <div
          style={boxGradientStyle}
          className={`${boxStyle} flex flex-col items-center justify-between w-full h-[180px]`}
        >
          <span className="text-2xl font-bold w-80 mt-4 ml-6">Tech enthusiast with a passion for development.</span>
          <div className="flex w-full justify-end px-2">
            <Image
              src="/images/section-skeleton.png"
              alt="Sol Üst Küçük"
              width={208}
              height={96}
              className="object-contain "
            />
          </div>
        </div>
        <div
          style={boxGradientStyle}
          className={`${boxStyle} relative flex flex-col items-center justify-evenly w-full h-[200px] overflow-hidden`}
        >
          <div
            style={{
              boxShadow: `0 0 40px 30px rgba(41, 73, 137, 1), 0 0 60px 60px rgba(171, 129, 38, 0.5), 0 0 80px 80px rgba(77, 38, 140, 1)`,
            }}
            className="absolute left-0 bottom-0 rounded-4xl w-1 h-1 opacity-100"
          ></div>
          <span className="text-2xl font-bold w-80 mt-4  text-center">Do you want to start a project together?</span>
          <div className="flex items-center justify-center p-[1px] rounded-lg bg-[linear-gradient(45deg,rgba(105,113,162,0.4),rgba(39,42,60,0.5))]">
            <button className="w-48 h-10 bg-gradient-to-r from-[#161A31] to-[#06091F] rounded-lg font-medium text-sm">
              <Copy size={14} className="inline mr-1" />
              Copy my email address
            </button>
          </div>
        </div>
      </div>
      <div style={boxGradientStyle} className={`${boxStyle} h-full w-full relative overflow-hidden`}>
        <div className="absolute w-full h-full z-30 flex justify-between">
          <div className="flex flex-col gap-2 justify-center px-8">
            <span className="text-[#E4ECFF] tracking-[0.2em]  uppercase">The Inside Scoop</span>
            <span className="text-white text-3xl font-bold w-80">Currently building a JS Animation library</span>
          </div>
          <div className="flex h-full w-full items-end">
            <div className="h-72 w-full bg-gradient-to-b from-[#2a234f]/30 to-transparent border border-[#252745]/80 rounded-l-2xl opacity-80">
              <div className="flex flex-col gap-2 py-8 px-6 text-lg">
                <div className="flex gap-6 ">
                  <span className="text-[#322e44]/80 font-bold ">1</span>
                  <p className="text-[#494558] ">// Importing a single module</p>
                </div>
                <div className="flex gap-6 ">
                  <span className="text-[#322e44]/80 font-bold ">2</span>
                  <p style={{ wordSpacing: "0.5rem" }} className="text-[#e67685d8]">
                    import <span className="text-[#6b63be]">moduleName</span> from
                  </p>
                </div>
                <div className="flex gap-6 ">
                  <span className="text-[#322e44]/80 font-bold ">3</span>
                  <p className="text-[#c48162] "> "modulePath"</p>
                </div>
                <div className="flex gap-6 ">
                  <span className="text-[#322e44]/80 font-bold ">4</span>
                  <p className="text-[#494558] ">// Importing multiple modules</p>
                </div>
                <div className="flex gap-6 ">
                  <span className="text-[#322e44]/80 font-bold ">5</span>
                  <p style={{ wordSpacing: "0.5rem" }} className="text-[#e67685d8]">
                    import <span className="text-[#6b63be]">{" { module1, module2 } "}</span> from
                  </p>
                </div>
                <div className="flex gap-6 ">
                  <span className="text-[#322e44]/80 font-bold ">5</span>
                  <p className="text-[#c48162] "> "modulePath"</p>
                </div>
                <div className="flex gap-6 ">
                  <span className="text-[#322e44]/80 font-bold ">6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full h-full grid-cols-12 divide-x divide-y divide-[#161A31]">
          <div className="absolute w-full h-full z-10 bg-[linear-gradient(-90deg,rgba(0,3,25,0)_0%,rgba(0,3,25,0.8)_100%)] border-b border-transparent"></div>
          {Array.from({ length: rows * cols }).map((_, i) => {
            const row = Math.floor(i / cols);
            const col = i % cols;

            return (
              <div
                key={i}
                className={clsx("w-full h-full", {
                  "bg-[#0C0F24]":
                    (row === 0 && col === 7) ||
                    (row === 1 && col === 3) ||
                    (row === 2 && col === 8) ||
                    (row === 4 && col === 2) ||
                    (row === 4 && col === 10),
                })}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
