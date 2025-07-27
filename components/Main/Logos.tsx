import Image from "next/image";

export const Logos = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:gap-16 w-full max-w-[1240px] px-4 mx-auto py-8">
      <Image
        src="/images/cloudinary.png"
        width={194}
        height={36}
        alt="Cloudinary"
        className="w-[130px] h-[26px] lg:w-[194px] lg:h-[36px]"
      />
      <Image
        src="/images/appwrite.png"
        width={191}
        height={36}
        alt="appwrite"
        className="w-[130px] h-[26px] lg:w-[191px] lg:h-[36px]"
      />
      <Image
        src="/images/hostinger.png"
        width={174}
        height={36}
        alt="hostinger"
        className="w-[116px] h-[26px] lg:w-[174px] lg:h-[36px]"
      />
      <Image
        src="/images/stream.png"
        width={178}
        height={31}
        alt="stream"
        className="w-[130px] h-[26px] lg:w-[178px] lg:h-[31px]"
      />
      <Image
        src="/images/docker.png"
        width={157}
        height={36}
        alt="docker"
        className="w-[117px] h-[26px] lg:w-[157px] lg:h-[36px]"
      />
    </div>
  );
};
