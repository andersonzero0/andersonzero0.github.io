import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <div>
        <h2
          id="projects"
          className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text mb-10"
        >
          Projetos
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <ProjectCard key={i} alt={i % 2 === 0} />
        ))}
      </div>
    </section>
  );
}
