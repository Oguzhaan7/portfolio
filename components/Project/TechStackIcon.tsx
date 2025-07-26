import React from "react";

type TeckStackIconProps = {
  children: React.ReactNode;
};

export const TeckStackIcon = ({ children }: TeckStackIconProps) => {
  return (
    <div className="w-max p-[1px] bg-gradient-to-b from-[#66699C43] to-[#36374949] rounded-full ">
      <div className="w-8 h-8 lg:w-[50px] lg:h-[50px] rounded-full bg-gradient-to-br from-[#04071D] to-[#0C0E23] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
