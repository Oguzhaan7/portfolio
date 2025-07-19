import { HeaderGrid } from "@/components/Grid/HeaderGrid";

export const Header = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(0, 3, 25, 0) 0%, rgba(0, 3, 25, 1) 100%)",
        }}
        className="absolute w-full h-full z-20"
      ></div>
      <HeaderGrid />
    </div>
  );
};
