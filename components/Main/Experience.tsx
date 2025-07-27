import Image from "next/image";

const experiences = [
  {
    image: "/images/experience1.png",
    title: "Government Projects",
    description:
      "Developed secure, scalable full-stack applications for law enforcement and administrative units. Delivered solutions using .NET, Node.js, and WebSocket for real-time data operations.",
  },
  {
    image: "/images/experience2.png",
    title: "Fintech Solutions",
    description:
      "Built robust full-stack systems in the fintech domain using Fastify, GraphQL, and PostgreSQL. Focused on performance, security, and seamless UX across platforms.",
  },
  {
    image: "/images/experience3.png",
    title: "Web Platform Architect",
    description:
      "Designed and deployed modern web platforms using Next.js, Nuxt.js, and TailwindCSS. Leveraged CI/CD pipelines via Vercel and Railway to ensure smooth delivery.",
  },
  {
    image: "/images/experience4.png",
    title: "Infrastructure & Messaging",
    description:
      "Proficient in Dockerized deployments, message brokers, and WebSocket-based communication. Implemented scalable backends with Fastify and real-time architectures.",
  },
];

export const Experience = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto py-6 px-4 lg:px-0 lg:pt-32 lg:pb-4 overflow-hidden">
      <h3 className="text-4xl lg:text-5xl font-bold text-center pb-4 lg:pb-16">
        My <span className="text-[#CBACF9]">work experience</span>
      </h3>
      <ul className="flex flex-wrap justify-between gap-4 lg:gap-8 ">
        {experiences.map((experience, index) => {
          return (
            <li
              className="p-[1px]  bg-gradient-b from-[#36374943] to-[#1c24be49] border-t-4 border-[#161935] w-full h-full lg:w-[600px] lg:h-[190px] rounded-3xl group "
              key={index}
            >
              <div className="w-full h-full min-h-[190px] flex flex-col lg:flex-row gap-4 py-4 px-10 items-start lg:items-center bg-gradient-to-br from-[#04071D] to-[#0C0E23] rounded-2xl ">
                <Image
                  src={experience.image}
                  width={95}
                  height={85}
                  alt={experience.title}
                  className="w-[66px] h-[60px] lg:w-[95px] lg:h-[85px] transition-all duration-300 ease-in-out group-hover:brightness-150 "
                />
                <div>
                  <span className="text-lg lg:text-2xl font-bold leading-12 group-hover:text-[#CBACF9] transition-colors duration-300 ease-in-out">
                    {experience.title}
                  </span>
                  <p className="text-sm lgtext-base font-medium text-[#BEC1DD]">
                    {experience.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
