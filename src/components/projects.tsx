import { ProjectCard } from "./project-card";

type Project = {
  prefix: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
};

export function Projects() {
  const projects: Project[] = [
    {
      prefix: "sys/streaming",
      title: "Live Streaming API",
      description:
        "Complete Live Video Streaming API built with RTMP server and HLS (HTTP Live Streaming) protocol. Developed using NestJS framework for high-performance real-time video delivery.",
      year: "2024",
      tags: ["NestJS", "TypeScript", "HLS", "RTMP"],
      link: "https://github.com/andersonzero0/live-streaming-nestjs",
    },
    {
      prefix: "data/realtime",
      title: "Chat API Real-time",
      description:
        "Flexible architecture real-time chat API designed for multi-system consumption. Built with NestJS, MongoDB, WebSocket, Kafka, Redis, and Prisma for scalable messaging.",
      year: "2024",
      tags: ["NestJS", "Socket.io", "MongoDB", "Kafka"],
      linkLabel: "Case Study",
    },
    {
      prefix: "infra/gateway",
      title: "WebSocket Multiclusters",
      description:
        "WebSocket Gateway with NestJS leveraging bidirectional real-time communication. Ensures seamless connectivity between multiple gateway instances using Redis as a unified server.",
      year: "2024",
      tags: ["WebSocket", "Redis", "Docker", "TypeScript"],
      link: "https://github.com/andersonzero0/websocket-multiclusters-redis",
    },
    {
      prefix: "app/mobile",
      title: "NubbleApp",
      description:
        "Complete social network mobile application. Built with React Native and TypeScript following modern mobile development best practices.",
      year: "2024",
      tags: ["React Native", "TypeScript", "Mobile"],
      link: "https://github.com/andersonzero0/NubbleApp",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
        <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter">
          Selected Builds
        </h2>
        <span className="font-label text-xs text-on-surface-variant uppercase tracking-[0.2em]">
          0x02 // Output
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

