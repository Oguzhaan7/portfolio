import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFastify,
  SiTailwindcss,
  SiVercel,
  SiMongodb,
  SiStripe,
  SiSupabase,
  SiPostgresql,
  SiShadcnui,
  SiGraphql,
  SiNodedotjs,
  SiZod,
  SiPrisma,
  SiNuxtdotjs,
} from "react-icons/si";

export const techIconMap: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    background?: string;
    rounded?: string;
  }
> = {
  react: {
    icon: SiReact,
    color: "text-[#61DAFB]",
  },
  next: {
    icon: SiNextdotjs,
    color: "text-[#fff]",
  },
  tailwind: {
    icon: SiTailwindcss,
    color: "text-[#38BDF8]",
  },
  fastify: {
    icon: SiFastify,
    color: "text-[#000]",
    background: "bg-[#fff]",
    rounded: "rounded-full",
  },
  vercel: {
    icon: SiVercel,
    color: "text-[#fff]",
    background: "bg-[#000]",
    rounded: "rounded-full p-1",
  },
  mongo: {
    icon: SiMongodb,
    color: "text-[#199554]",
    background: "bg-[#fff]",
    rounded: "rounded-full p-1",
  },
  typescript: {
    icon: SiTypescript,
    color: "text-[#377cc7]",
    background: "bg-[#F7DF1E]",
  },
  stripe: {
    icon: SiStripe,
    color: "text-[#fff]",
    background: "bg-[#635bff]",
    rounded: "rounded-full p-1",
  },
  supabase: {
    icon: SiSupabase,
    color: "text-[#3ed18f]",
    background: "bg-[#000]",
    rounded: "rounded-full p-1",
  },
  postgre: {
    icon: SiPostgresql,
    color: "text-[#7fb7e2]",
  },
  shadcn: {
    icon: SiShadcnui,
    color: "text-[#fff]",
    background: "bg-[#000]",
    rounded: "rounded-full p-1",
  },
  zod: {
    icon: SiZod,
    color: "text-[#fff]",
    background: "bg-[#4090ff]",
    rounded: "rounded-full p-1",
  },
  nodejs: {
    icon: SiNodedotjs,
    color: "text-[#5dae47]",
    background: "bg-[#000]",
    rounded: "rounded-full p-1",
  },
  graphql: {
    icon: SiGraphql,
    color: "text-[#F6009C]",
    background: "bg-[#fff]",
    rounded: "rounded-full p-1",
  },
  prisma: {
    icon: SiPrisma,
    color: "text-[#fff]",
  },
  nuxt: {
    icon: SiNuxtdotjs,
    color: "text-[#00DC82]",
  },
};
