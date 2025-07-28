"use client";

import clsx from "clsx";
import { useRef } from "react";
import gsap from "gsap";
import { MoveUpRight } from "lucide-react";

export const Contact = () => {
  const rows = 7;
  const cols = 9;

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

  return (
    <div className="w-full max-w-5xl h-[20rem] lg:h-[45rem] mx-auto relative flex justify-center items-center ">
      <div className="flex flex-col gap-4 justify-center items-center max-w-3xl h-full absolute z-30 text-center px-4">
        <h3 className="text-3xl lg:text-5xl font-bold ">
          Ready to take <span className="text-[#CBACF9]">your</span> digital presence to the next level?
        </h3>
        <p className="text-[#C1C2D3]">Reach out to me today and let's discuss how I can help you achieve your goals.</p>

        <div className="p-[1px] rounded-lg lg:rounded-2xl bg-[linear-gradient(90deg,rgba(105,113,162,0.4),rgba(39,42,60,0.5))] w-fit mt-8">
          <a
            href="mailto:contact@oguzhandag.dev"
            ref={linkRef}
            onMouseEnter={onHover}
            onMouseLeave={onHoverOut}
            className="flex items-center justify-center w-72 lg:w-52 h-16 bg-[linear-gradient(90deg,#161A31,#06091F)] rounded-lg lg:rounded-2xl text-white gap-3 cursor-pointer"
          >
            Contact Me Now
            <MoveUpRight ref={iconRef} />
          </a>
        </div>
      </div>
      <div className="grid w-full h-full grid-cols-9 divide-x divide-y divide-[#161A31] ">
        <div className="absolute w-full h-full bottom-0 z-10 bg-[radial-gradient(circle,rgba(0,3,25,.2)_0%,rgba(0,3,25,1)_100%)] border border-transparent"></div>
        {Array.from({ length: rows * cols }).map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;

          return (
            <div
              key={i}
              className={clsx("w-full h-full", {
                "bg-gradient-to-t from-[#fff]/80 to-[#0C0F24] opacity-5":
                  (row === 0 && col === 5) ||
                  (row === 1 && col === 3) ||
                  (row === 3 && col === 4) ||
                  (row === 4 && col === 2) ||
                  (row === 4 && col === 10),
              })}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
