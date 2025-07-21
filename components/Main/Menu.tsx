"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const menuItems = [
  { label: "About", id: "about" },
  { label: "Project", id: "project" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export const Menu = () => {
  const [active, setActive] = useState("about");
  const menuRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    menuRefs.current = menuRefs.current.slice(0, menuItems.length);

    menuItems.forEach((item) => {
      ScrollTrigger.create({
        trigger: `#${item.id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(item.id),
        onEnterBack: () => setActive(item.id),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const handleClick = (id: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: 65 },
      ease: "power2.out",
    });
  };

  return (
    <nav className="flex justify-center sticky top-[50px] z-50 ">
      <div
        className="p-[1px] rounded-[15px] w-max"
        style={{
          background: `linear-gradient(45deg, rgba(105,113,162,0.16), rgba(39,42,60,0.37))`,
        }}
      >
        <ul className="flex items-center h-[66px] gap-8 px-16 rounded-[15px] bg-[linear-gradient(45deg,#04071D_0%,#0C0E23_100%)]">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              ref={(el) => {
                if (el) menuRefs.current[index] = el;
              }}
              className={`cursor-pointer text-white transition-all duration-100 ${
                active === item.id
                  ? " text-white "
                  : "opacity-60 hover:opacity-100"
              }`}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
