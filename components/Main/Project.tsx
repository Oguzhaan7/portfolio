import { ProjectCard } from "../Project/ProjectCard";

export const Project = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto py-4 lg:pt-32 lg:pb-4 px-8">
      <h3 className="text-4xl lg:text-5xl font-bold text-center pb-4 lg:pb-16">
        A small selection of{" "}
        <span className="text-[#CBACF9]">recent projects</span>
      </h3>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          <div className="flex flex-1 lg:flex-1/2">
            <ProjectCard
              image="project-1.png"
              liveUrl="https://testora-web.vercel.app/"
              title="AI-Powered Study Platform"
              description="A modern, full-stack educational platform that uses Gemini AI to generate smart questions and study content."
              techStacks={[
                "next",
                "fastify",
                "tailwind",
                "typescript",
                "vercel",
                "mongo",
              ]}
            />
          </div>
          <div className="flex flex-1 lg:flex-1/2">
            <ProjectCard
              image="project-2.png"
              liveUrl="https://soppir.vercel.app/"
              title="Soppier e-Commerce"
              description="Modern e-commerce platform built with Next.js 15, featuring secure payments, admin dashboard, and seamless shopping experience."
              techStacks={[
                "next",
                "tailwind",
                "supabase",
                "postgre",
                "stripe",
                "shadcn",
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          <div className="flex flex-1 lg:flex-1/2">
            <ProjectCard
              image="project-3.png"
              liveUrl="https://footbally.vercel.app/"
              title="Modern Football League Management Platform"
              description="Perfect for football enthusiasts & sports management!"
              techStacks={[
                "next",
                "nodejs",
                "graphql",
                "mongo",
                "vercel",
                "zod",
              ]}
            />
          </div>
          <div className="flex flex-1 lg:flex-1/2">
            <ProjectCard
              image="project-4.png"
              liveUrl=""
              title="Rentino"
              description="Full-stack developer specializing in Vue.js/Nuxt.js frontend and Node.js/Fastify backend development"
              techStacks={[
                "nuxt",
                "fastify",
                "prisma",
                "postgre",
                "tailwind",
                "typescript",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
