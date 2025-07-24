"use client";

import { MoveUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const AboutHeader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  const onHover = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
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
    if (buttonRef.current) {
      gsap.to(buttonRef.current, { boxShadow: "none", duration: 0.2 });
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
    <div className="flex flex-col gap-12 max-w-5xl items-center text-center">
      <h3 ref={titleRef} className="font-medium uppercase text-base tracking-[0.25em] text-[#E4ECFF]">
        Dynamic Web Magic with Next.js
      </h3>
      <div className="flex flex-col gap-12 items-center" ref={containerRef}>
        <p className="font-bold text-7xl ">
          Transforming Concepts into Seamless <span className="text-[#CBACF9]">User Experiences</span>
        </p>
        <p className="text-2xl text-[#E4ECFF] ">Hi! I’m John Doe, a Next.js Developer based in Russia</p>
        <div className="p-[1px] rounded-2xl bg-[linear-gradient(90deg,rgba(105,113,162,0.4),rgba(39,42,60,0.5))] w-fit">
          <button
            ref={buttonRef}
            onMouseEnter={onHover}
            onMouseLeave={onHoverOut}
            className="flex items-center justify-center w-52 h-16 bg-[linear-gradient(90deg,#161A31,#06091F)] rounded-2xl text-white gap-3 cursor-pointer"
          >
            See my work
            <MoveUpRight ref={iconRef} />
          </button>
        </div>
      </div>
    </div>
  );
};
