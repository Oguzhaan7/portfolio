"use client";

import { MoveUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export const AboutHeader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const linkRef = useRef<HTMLAnchorElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  const onHover = () => {
    if (linkRef.current) {
      gsap.to(linkRef.current, {
        boxShadow: "0 0 8px #CBACF9",
        duration: 0.3,
      });
    }
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        x: 6,
        y: -3,
        duration: 0.3,
      });
    }
  };

  const onHoverOut = () => {
    if (linkRef.current) {
      gsap.to(linkRef.current, { boxShadow: "none", duration: 0.2 });
    }
    if (iconRef.current) {
      gsap.to(iconRef.current, { x: 0, y: 0, duration: 0.3 });
    }
  };

  useEffect(() => {
    if (!titleRef || !containerRef.current) return;

    gsap.from(containerRef.current.children, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.fromTo(
      titleRef.current,
      { letterSpacing: "0.4em", opacity: 0 },
      {
        scaleX: 1,
        letterSpacing: "0.25em",
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.inOut",
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className="flex flex-col gap-6 lg:gap-12 max-w-5xl items-center text-center">
      <h3
        ref={titleRef}
        className="font-medium uppercase text-xs lg:text-base tracking-[0.25em] text-[#E4ECFF]"
      >
        Crafting Scalable Full-Stack Solutions
      </h3>
      <div
        className="flex flex-col gap-6 lg:gap-12 items-center"
        ref={containerRef}
      >
        <p className="font-bold text-5xl lg:text-7xl">
          Building Robust Solutions with{" "}
          <span className="text-[#CBACF9]">Modern Web Technologies</span>
        </p>
        <p className="text-base lg:text-2xl text-[#E4ECFF]">
          Hi! I’m Oguzhan, a Full-Stack Developer skilled in .NET, Node.js,
          GraphQL, and modern frameworks like Next.js and Nuxt.js.
        </p>
        <div className="p-[1px] rounded-lg lg:rounded-2xl bg-[linear-gradient(90deg,rgba(105,113,162,0.4),rgba(39,42,60,0.5))] w-fit">
          <Link
            href="https://github.com/Oguzhaan7"
            target="_blank"
            ref={linkRef}
            onMouseEnter={onHover}
            onMouseLeave={onHoverOut}
            className="flex items-center justify-center w-72 lg:w-52 h-16 bg-[linear-gradient(90deg,#161A31,#06091F)] rounded-lg lg:rounded-2xl text-white gap-3 cursor-pointer"
          >
            See my work
            <MoveUpRight ref={iconRef} />
          </Link>
        </div>
      </div>
    </div>
  );
};
