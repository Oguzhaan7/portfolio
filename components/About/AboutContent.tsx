import Image from "next/image";
import gsap from "gsap";
import { MousePointer2 } from "lucide-react";

export const AboutContent = () => {
  const boxStyle = "rounded-3xl border border-[rgba(54,55,73,0.43)]";

  const boxGradientStyle = {
    background: "linear-gradient(90deg, #04071D, #0C0E23)",
  };

  return (
    <div className="grid grid-rows-2 gap-12">
      <div className="grid grid-cols-[3fr_2fr] gap-8 h-[540px] w-[1240px]">
        <div
          style={boxGradientStyle}
          className={`${boxStyle} h-full overflow-hidden relative`}
        >
          <div
            style={{
              background:
                "linear-gradient(0deg, #04071D 12%, rgba(12, 14, 35, 0) 100%)",
            }}
            className="absolute h-24 w-full bottom-0"
          ></div>
          <p className="absolute w-[400px] text-3xl font-bold bottom-12 left-12">
            I prioritize client collaboration, fostering open communication{" "}
          </p>
          <div className="absolute top-[20%] left-[10%] flex flex-col items-end">
            <MousePointer2
              fill="#D1ACFF"
              strokeWidth={0}
              size={32}
              className="-mr-6 rotate-90"
            />
            <span className="block w-[120px] h-[30px] bg-[#D1ACFF]  rounded-l-2xl rounded-br-2xl"></span>
          </div>

          <div className="absolute bottom-[20%] right-[10%] flex flex-col items-start">
            <MousePointer2
              fill="#F6F056"
              strokeWidth={0}
              size={32}
              className="-ml-6 "
            />
            <span className="block w-[120px] h-[30px] bg-[#F6F056]  rounded-r-2xl rounded-bl-2xl"></span>
          </div>

          <Image
            className="w-full"
            src="/images/about-content-laptop.png"
            alt="about content laptop"
            unoptimized
            width={707}
            height={707}
          />
        </div>

        <div className="grid gap-8 h-full">
          <div style={boxGradientStyle} className={`${boxStyle}  opacity-60`}>
            Sağ Üst Küçük
          </div>
          <div style={boxGradientStyle} className={`${boxStyle} `}>
            Sağ Alt Küçük
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[2fr_5fr] gap-8 h-[390px] w-[1240px]">
        <div className="grid gap-8 h-full">
          <div style={boxGradientStyle} className={`${boxStyle} `}>
            Sol Üst Küçük
          </div>
          <div style={boxGradientStyle} className={`${boxStyle}  `}>
            Sol Alt Küçük
          </div>
        </div>
        <div style={boxGradientStyle} className={`${boxStyle} h-full`}>
          Sağ Tek Büyük
        </div>
      </div>
    </div>
  );
};
