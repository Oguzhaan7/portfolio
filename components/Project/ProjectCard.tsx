import Image from "next/image";
import { TeckStackIcon } from "./TechStackIcon";
import { techIconMap } from "@/utils/techIconMap";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  techStacks: string[];
};

export const ProjectCard = ({
  title,
  description,
  image,
  liveUrl,
  techStacks,
}: ProjectProps) => {
  return (
    <div className="w-full max-w-2xl lg:max-w-[580px] mx-auto p-[1px] bg-gradient-to-b from-[#36374943] to-[#36374349] rounded-3xl">
      <div className="w-full lg:w-[580px] min-h-96 h-full flex flex-col gap-2 bg-gradient-to-br from-[#04071D] to-[#0C0E23] rounded-3xl py-1 px-4 lg:px-8 lg:pb-4">
        <div className="bg-[#13162D] max-w-[550px] w-full h-[218px] lg:h-[330px] flex mx-auto items-end justify-center px-4 mt-4 rounded-xl relative overflow-hidden">
          <Image
            src={`/images/${image}`}
            alt="Sol Üst Küçük"
            width={500}
            height={320}
            unoptimized
            className="object-contain lg:object-top w-[500px] h-[320px] z-20 rounded-lg rotate-2 -mb-[73px] lg:-mb-5 opacity-85"
          />
          <div
            className="h-96 absolute top-[20%] left-[40%] opacity-40 rotate-45"
            style={{
              boxShadow: `0 0 60px 60px rgba(41, 73, 137, 1), 0 0 40px 40px rgba(171, 129, 38, 0.5), 0 0 80px 120px rgba(77, 38, 140, 1)`,
            }}
          ></div>
        </div>
        <h4 className="text-xl lg:text-3xl font-bold pt-4">{title}</h4>
        <p className="text-sm lg:text-xl text-[#BEC1DD]">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex mt-4">
            {techStacks.map((stack, index) => {
              const tech = techIconMap[stack];

              if (!tech) return null;

              const Icon = tech.icon;

              return (
                <div key={index} className="-ml-[5px]">
                  <TeckStackIcon>
                    <Icon
                      className={`w-4 h-4 lg:w-6 lg:h-6 ${tech.color} ${tech.background} ${tech.rounded}`}
                    />
                  </TeckStackIcon>
                </div>
              );
            })}
          </div>
          <Link
            target="_blank"
            href={liveUrl || ""}
            className="font-medium text-sm lg:text-xl text-[#CBACF9] flex items-center gap-1"
          >
            Check Live Site
            <MoveUpRight className="w-4 h-4 lg:w-6 lg:h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
