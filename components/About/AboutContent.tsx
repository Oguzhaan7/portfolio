"use client";

import Image from "next/image";
import gsap from "gsap";
import { MousePointer2 } from "lucide-react";
import { useEffect, useRef } from "react";

const stackA = [
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "React",
  "GraphQL",
  "Apollo Client",
  "Node.js",
  "Fastify",
  "Prisma",
  "PostgreSQL",
  "Zod",
  "Docker",
  "ESLint",
  "Vercel",
  "Radix UI",
  "shadcn/ui",
];

const stackB = [
  "Nuxt 3",
  "Vue.js",
  "Pinia",
  "GSAP",
  "SCSS",
  "MongoDB",
  "Mongoose",
  "Express.js",
  "Supabase",
  "REST API",
  "JWT",
  "Playwright",
  "GitHub Actions",
  "NGINX",
  "Bun",
  "Linux (WSL / Zorin)",
];

export const AboutContent = () => {
  const leftTechStackRef = useRef<HTMLDivElement>(null);
  const rightTechStackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = leftTechStackRef.current;
    const right = rightTechStackRef.current;

    if (left) {
      const height = left.scrollHeight / 2;
      gsap.to(left, {
        y: -height,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }

    if (right) {
      const height = right.scrollHeight / 2;
      gsap.set(right, { y: -height });
      gsap.to(right, {
        y: 0,
        duration: 30,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);
  const boxStyle = "rounded-3xl border border-[rgba(54,55,73,0.43)]";

  const boxGradientStyle = {
    background: "linear-gradient(90deg, #04071D, #0C0E23)",
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 h-full lg:h-[540px] w-full max-w-[1240px] px-4">
      <div style={boxGradientStyle} className={`${boxStyle} h-full  relative`}>
        <div
          style={{
            background:
              "linear-gradient(0deg, #04071D 12%, rgba(12, 14, 35, 0) 100%)",
          }}
          className="absolute h-24 w-full bottom-0 rounded-b-3xl"
        ></div>
        <span className="absolute w-[235px] lg:w-[400px] text-xl lg:text-3xl font-bold bottom-12 left-4 lg:left-12">
          I prioritize client collaboration, fostering open communication
        </span>
        <div className="absolute top-[20%] left-[10%] flex flex-col items-end">
          <MousePointer2
            fill="#D1ACFF"
            strokeWidth={0}
            className="-mr-6 rotate-90 w-6 h-6 lg:h-8 lg:w-8"
          />
          <span className="block w-[70px] h-[15px] lg:w-[120px] lg:h-[30px] bg-[#D1ACFF]  rounded-l-2xl rounded-br-2xl"></span>
        </div>

        <div className="absolute bottom-[20%] right-[5%] lg:right-[10%] flex flex-col items-start">
          <MousePointer2
            fill="#F6F056"
            strokeWidth={0}
            className="-ml-6  w-6 h-6 lg:h-8 lg:w-8"
          />
          <span className="block w-[70px] h-[15px] lg:w-[120px] lg:h-[30px] bg-[#F6F056]  rounded-r-2xl rounded-bl-2xl"></span>
        </div>

        <Image
          className="w-full rounded-3xl"
          src="/images/about-content-laptop.png"
          alt="about content laptop"
          unoptimized
          width={707}
          height={707}
        />
      </div>

      <div className="grid gap-8 h-full">
        <div
          style={boxGradientStyle}
          className={`${boxStyle} relative h-[255px] flex items-end  opacity-80`}
        >
          <span className="text-xl lg:text-3xl w-[420px] font-bold absolute top-[20%] left-[5%]">
            I’m very flexible with time zone communications
          </span>
          <div className="absolute left-[5%] top-[65%] py-2 px-4 text-[12px] border border-[rgba(54,55,73,0.43)] bg-gradient-to-b from-[#161A31]/60 to-[#06091F]/60 rounded-xl">
            USA
          </div>
          <div className="absolute left-[40%] top-[75%] py-2 px-4 text-[12px] border border-[rgba(54,55,73,0.43)] bg-gradient-to-b from-[#161A31]/60 to-[#06091F]/60 rounded-xl">
            Germany
          </div>
          <div className="absolute right-[15%] top-[60%] py-2 px-4 text-[12px] border border-[rgba(54,55,73,0.43)] bg-gradient-to-b from-[#161A31]/60 to-[#06091F]/60 rounded-xl">
            Russia
          </div>
          <div className="h-full w-full bg-gradient-to-tl from-white to-transparent opacity-25 absolute rounded-2xl"></div>
          <Image
            className="w-full h-max"
            src="/images/earth-container.png"
            alt="about content laptop"
            unoptimized
            width={521}
            height={156}
          />
        </div>
        <div
          style={boxGradientStyle}
          className={`${boxStyle} h-[255px] flex justify-between items-center overflow-hidden`}
        >
          <div className="flex flex-col gap-2 pl-6">
            <span className="w-full text-sm text-[#C1C2D3] font-medium">
              I constantly try to improve
            </span>
            <span className="w-full text-xl lg:text-3xl font-bold bottom-12 left-12">
              My tech stack
            </span>
          </div>
          <div className="flex h-full gap-3 overflow-hidden ">
            <div className=" h-full">
              <div ref={leftTechStackRef}>
                {[...stackA, ...stackA].map((item, index) => (
                  <div
                    key={`left-${index}`}
                    className="text-sm font-medium flex items-center justify-center bg-[#10132E] rounded-lg w-24 h-[50px] lg:w-32 lg:h-[68px] mb-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="h-full mr-12">
              <div ref={rightTechStackRef}>
                {[...stackB, ...stackB].map((item, index) => (
                  <div
                    key={`right-${index}`}
                    className="text-sm font-medium flex items-center justify-center bg-[#10132E] rounded-lg w-24 h-[50px] lg:w-32 lg:h-[68px mb-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
