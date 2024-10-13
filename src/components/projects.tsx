import { ProjectCard } from "./project-card";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  date: string;
  link?: string;
};
export function Projects() {
  const projects: Project[] = [
    {
      title: "Live Video Streaming API",
      description:
        "Criei uma API completa de Live Streaming de vídeo, onde foi usado um servidor RTMP e o protocolo HLS (HTTP Live Streaming). Foi desenvolvida usando o framework NestJS.",
      techStack: [
        "Back-end",
        "NestJS",
        "TypeScript",
        "HLS",
        "RTMP",
        "SQLite",
        "TypeORM",
      ],
      date: "Set 2024",
      image: "/live.png",
      link: "https://github.com/andersonzero0/live-streaming-nestjs",
    },
    {
      title: "Chat API Real-time",
      description:
        " Desenvolvi essa API com uma arquitetura flexível, onde seja possível que múltiplos sistemas a consumam. Foi usado NestJS, MongoDB, WebSocket, Kafka, Redis, Prisma e entre outras ferramentas.",
      techStack: [
        "Back-end",
        "NestJS",
        "TypeScript",
        "Socket.io",
        "MongoDB",
        "Redis",
        "Kafka",
      ],
      date: "Jul 2024 - Set 2024",
      image: "/chat.png",
    },
    {
      title: "Websocket Multiclusters Redis",
      description:
        "Este meu repositório hospeda um WebSocket Gateway construído com NestJS. Aproveitando o poder dos WebSockets para comunicação bidirecional em tempo real, este projeto garante conectividade perfeita entre múltiplas instâncias do gateway, funcionando como um servidor unificado.",
      techStack: [
        "Back-end",
        "NestJS",
        "TypeScript",
        "NodeJS",
        "Redis",
        "Docker",
        "WebSockets",
      ],
      image: "/ws-redis.png",
      date: "Ago 2024",
      link: "https://github.com/andersonzero0/websocket-multiclusters-redis",
    },
    {
      title: "NubbleApp",
      description:
        "Desenvolvimento de um aplicativo completo de rede social. Construído com React Native e TypeScript, do Curso de React Native do CoffStack.",
      techStack: ["Front-end", "React Native", "TypeScript"],
      image: "/nubble.png",
      date: "Mar 2024 - Em andamento",
      link: "https://github.com/andersonzero0/NubbleApp",
    },
    {
      title: "Ordem de Serviços",
      description:
        "Sistema de ordem de serviços para controle de serviços. Desenvolvi o Front-end e o Back-end com React e NestJS.",
      techStack: [
        "Front-end",
        "Back-end",
        "React",
        "TypeScript",
        "NestJS",
        "Prisma",
        "PostgreSQL",
      ],
      date: "Set 2023 - Out 2023",
      image: "/ordem.png",
      link: "https://github.com/andersonzero0/ordem-de-servicos",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col gap-4 scroll-m-24 w-full min-h-screen items-center justify-center pb-40"
    >
      <div>
        <h2 className="overflow-hidden text-center scroll-m-20 md:text-9xl text-4xl font-extrabold tracking-tight first:mt-0 bg-gray-500 items-start justify-start bg-gradient-to-b from-gray-300 to-zinc-950 inline-block text-transparent bg-clip-text">
          PROJETOS
        </h2>
      </div>
      <div className="flex flex-col justify-center snap-y snap-mandatory items-center gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} alt={index % 2 == 0} {...project} />
        ))}
      </div>
    </section>
  );
}
