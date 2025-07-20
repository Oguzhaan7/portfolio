import React from "react";

type FlareProps = {
  isWhite?: boolean;
};

export const AboutFlare: React.FC<FlareProps> = ({ isWhite = false }) => {
  const color = isWhite ? "rgba(255,255,255,1)" : "rgba(249, 154, 133, 1)";

  const gradient = `linear-gradient(to top, rgba(255,255,255,0) 0%, ${color} 50%, rgba(255,255,255,0) 100%)`;

  return (
    <div className="relative">
      <div
        style={{ background: gradient }}
        className="absolute -bottom-[20px] -right-0.5 w-[1px] h-[41px] z-10"
      />
      <div
        style={{ background: gradient }}
        className="absolute -bottom-[20px] -right-0.5 w-[1px] h-[41px] z-10 rotate-90"
      />
    </div>
  );
};
