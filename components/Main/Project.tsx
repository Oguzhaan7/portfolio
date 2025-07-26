"use client";

import { ProjectCard } from "../Project/ProjectCard";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Project = () => {
  const projectContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = projectContainerRef.current?.querySelectorAll(".project");
    if (!images) return;

    gsap.fromTo(
      images,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectContainerRef.current,
          start: "top 50%",
        },
      }
    );
  }, []);

  return (
    <div className="w-full max-w-[1240px] px-4 mx-auto py-4 lg:pt-32 lg:pb-4">
      <h3 className="text-4xl lg:text-5xl font-bold text-center pb-4 lg:pb-16">
        A small selection of{" "}
        <span className="text-[#CBACF9]">recent projects</span>
      </h3>
      <div ref={projectContainerRef} className="flex flex-col gap-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          <div className="flex project flex-1 lg:flex-1/2">
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
          <div className="flex project flex-1 lg:flex-1/2">
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
          <div className="flex project flex-1 lg:flex-1/2">
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
          <div className="flex project flex-1 lg:flex-1/2">
            <ProjectCard
              image="project-4.png"
              liveUrl="https://github.com/Oguzhaan7/rentino"
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
