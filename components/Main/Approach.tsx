const phases = [
  {
    id: 1,
    title: "Discovery & Planning",
    description:
      "I begin by understanding your business goals and technical requirements. Whether it’s a secure system for law enforcement or a fintech platform, I outline the architecture and development roadmap accordingly.",
  },
  {
    id: 2,
    title: "Full-Stack Development",
    description:
      "Leveraging technologies like .NET, Node.js, GraphQL, and modern frameworks (Next.js, Nuxt.js), I build scalable, maintainable systems with real-time features, clean code, and efficient UX — keeping you updated at every stage.",
  },
  {
    id: 3,
    title: "Deployment & Beyond",
    description:
      "I handle end-to-end deployment using platforms like Vercel, Railway, or Docker-based infrastructure. Post-deployment, I ensure monitoring, handle bug fixes, and support future scaling or improvements.",
  },
];

export const Approach = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto py-6 px-4 lg:px-0 lg:pt-32 lg:pb-4 overflow-hidden">
      <h3 className="text-4xl lg:text-5xl font-bold text-center pb-4 lg:pb-16">
        My <span className="text-[#CBACF9]">approach</span>
      </h3>

      <ul className="flex flex-col lg:flex-row gap-4 justify-between">
        {phases.map((phase) => {
          return (
            <li
              key={phase?.id}
              className="p-[2px] bg-gradient-to-b from-[#36374943] to-[#36374949] w-full h-full lg:w-[380px] lg:h-[620px] rounded-3xl group "
            >
              <div className="w-full h-full min-h-[400px] flex flex-col gap-6 py-4 px-6 items-center justify-center bg-gradient-to-br from-[#04071D] to-[#0C0E23] rounded-3xl text-center">
                <div className="p-[1px] bg-gradient-to-br from-[#36374943] to-[#36374949] w-[100px] h-[45px] rounded-xl ">
                  <span className="w-full h-full flex items-center justify-center bg-gradient-to-l from-[#04071D] to-[#0C0E23] font-bold rounded-xl text-[#CBACF9]">
                    {" "}
                    Phase {phase?.id}{" "}
                  </span>
                </div>
                <h4 className="text-3xl font-bold mb-2">{phase?.title}</h4>
                <p className="text-[#BEC1DD] tracking-wider ">{phase?.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
