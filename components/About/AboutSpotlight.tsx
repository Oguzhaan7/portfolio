export const AboutSpotLight = () => {
  return (
    <div className="">
      <div className="absolute hidden lg:block z-10 left-32 -top-8">
        <div className="w-4 h-[32rem] blur-[40px] opacity-[0.30] bg-[linear-gradient(to_right,#fff_0%,#D3D8DF_100%)] -rotate-45 absolute -left-2 -top-14"></div>
        <div className="w-4 h-96 blur-[40px] opacity-[0.12] bg-[linear-gradient(to_right,#fff_0%,#D3D8DF_100%)] -rotate-45 absolute -left-24 top-48"></div>
        <div className="w-4 h-96 blur-[40px] opacity-[0.25] bg-[linear-gradient(to_right,#fff_0%,#D3D8DF_100%)] -rotate-45 absolute -top-24 left-48"></div>
      </div>
      <div className="absolute hidden lg:block z-10 right-32 -top-8">
        <div className="w-4 h-[32rem] blur-[40px] opacity-[0.30] bg-[linear-gradient(to_right,#fff_0%,#D3D8DF_100%)] rotate-45 absolute -right-2 -top-14"></div>
        <div className="w-4 h-96 blur-[40px] opacity-[0.12] bg-[linear-gradient(to_right,#fff_0%,#D3D8DF_100%)] rotate-45 absolute -right-24 top-48"></div>
        <div className="w-4 h-96 blur-[40px] opacity-[0.25] bg-[linear-gradient(to_right,#fff_0%,#D3D8DF_100%)] rotate-45 absolute -top-24 right-48"></div>
      </div>
    </div>
  );
};
