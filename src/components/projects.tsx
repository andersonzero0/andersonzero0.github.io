import { ProjectCard } from "./project-card";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
};
export function Projects() {
  const projects: Project[] = [
    {
      title: "Live Video Streaming API with NestJS",
      description: "...",
      techStack: ["Back-end", "NodeJS", "TypeScript", "Redis"],
      image: "/live.png",
      link: "https://github.com/andersonzero0/live-streaming-nestjs",
    },
    {
      title: "Websocket Multiclusters Redis",
      description: "...",
      techStack: ["Back-end", "NodeJS", "TypeScript", "Redis"],
      image: "/ws-redis.png",
      link: "https://github.com/andersonzero0/websocket-multiclusters-redis",
    },
    {
      title: "NubbleApp",
      description: "...",
      techStack: ["Front-end", "React Native", "TypeScript", "Jest"],
      image: "/nubble.png",
      link: "https://github.com/andersonzero0/NubbleApp",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col gap-4 scroll-m-24 w-full min-h-screen items-center justify-center pb-10"
    >
      <div>
        <h2 className="overflow-hidden text-center scroll-m-20 md:text-9xl text-5xl font-extrabold tracking-tight first:mt-0 bg-gray-500 items-start justify-start bg-gradient-to-b from-gray-500 to-zinc-950 inline-block text-transparent bg-clip-text">
          PROJETOS
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} alt={index % 2 == 0} {...project} />
        ))}
      </div>
    </section>
  );
}
