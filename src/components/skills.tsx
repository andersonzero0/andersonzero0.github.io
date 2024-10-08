import { SkillCard } from "./skill-card";

export function Skills() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
        Experiência com
      </h2>

      <SkillCard />
    </div>
  );
}
