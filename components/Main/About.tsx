"use client";

import { AboutGrid } from "@/components/About/AboutGrid";
import { AboutHeader } from "@/components/About/AboutHeader";
import { AboutContent } from "@/components/About/AboutContent";
import { AboutPromotion } from "@/components/About/AboutPromotion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 150,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="inline-flex  w-full relative -top-[70px]">
      <AboutGrid />
      <div className="w-full min-h-screen h-full flex flex-col items-center gap-32 justify-center relative z-40 mt-[290px]">
        <AboutHeader />
        <div ref={containerRef} className="flex flex-col gap-16 h-full ">
          <AboutContent />
          <AboutPromotion />
        </div>
      </div>
    </div>
  );
};
