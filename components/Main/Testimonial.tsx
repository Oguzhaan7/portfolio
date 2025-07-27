"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Director of AlphaStream Technologies",
    avatar: "/images/profile.png",
    quote:
      "Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.",
  },
  {
    name: "Michael Johnson",
    role: "Director of AlphaStream Technologies",
    avatar: "/images/profile.png",
    quote:
      "Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.",
  },
  {
    name: "Michael Johnson",
    role: "Director of AlphaStream Technologies",
    avatar: "/images/profile.png",
    quote:
      "Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.",
  },
];

export const Testimonial = () => {
  const testimonialRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = testimonialRef.current;
    if (!list) return;

    const totalWidth = list.scrollWidth / 2;

    const tween = gsap.to(list, {
      x: `-=${totalWidth}`,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    list.addEventListener("mouseenter", () => tween.pause());
    list.addEventListener("mouseleave", () => tween.play());

    return () => {
      tween.kill();
      list.removeEventListener("mouseenter", () => tween.pause());
      list.removeEventListener("mouseleave", () => tween.play());
    };
  }, []);

  return (
    <div className="w-full mx-auto py-6 lg:pt-32 lg:pb-4 overflow-hidden">
      <h3 className="text-4xl lg:text-5xl font-bold text-center pb-4 lg:pb-16">
        Kind words from{" "}
        <span className="text-[#CBACF9]">satisfied clients</span>
      </h3>

      <ul ref={testimonialRef} className="flex gap-8 flex-nowrap w-full ">
        {[...testimonials, ...testimonials].map((testimonial, index) => {
          return (
            <li
              className="group flex shrink-0 w-full h-full lg:w-[900px] lg:h-[300px] p-[2px] rounded-3xl bg-gradient-to-b from-[#36374943] to-[#36374349] transition-all duration-200
              hover:shadow-[0_0_7px_#131533]"
              key={index}
            >
              <div
                className=" w-full h-full bg-gradient-to-br from-[#04071D] to-[#0C0E23] rounded-3xl relative overflow-hidden
             group-hover:brightness-110 transition duration-200"
              >
                <div
                  className="absolute opacity-5 w-full h-full "
                  style={{
                    background:
                      "radial-gradient(circle farthest-corner at top left, rgba(41, 73, 137, 1) 0%, rgba(77, 38, 140, 1) 70%, rgba(231,27,27,0.3)  90%)",
                    WebkitBackgroundClip:
                      "radial-gradient(circle farthest-corner at top left, rgba(41, 73, 137, 1) 0%, rgba(77, 38, 140, 1) 70%, rgba(231,27,27,0.3)  90%)",
                    MozBackgroundClip:
                      "radial-gradient(circle farthest-corner at top left, rgba(41, 73, 137, 1) 0%, rgba(77, 38, 140, 1) 70%, rgba(231,27,27,0.3)  90%)",
                  }}
                ></div>
                <div className="flex flex-col justify-evenly w-full h-full p-8 gap-4 lg:gap-0">
                  <p className="text-base lg:text-xl">{testimonial.quote}</p>
                  <div className="px-2 flex gap-2 items-stretch">
                    <Image
                      width={50}
                      height={50}
                      unoptimized
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <div className="flex flex-col justify-evenly gap-0.5">
                      <span className="font-semibold text-base lg:text-lg">
                        {testimonial.name}
                      </span>
                      <span className="text-xs lg:text-sm text-[#C1C2D3]">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
