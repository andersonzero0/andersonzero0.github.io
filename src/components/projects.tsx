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
      prefix: "platform/finance",
      title: "Migracao Backend v1 -> v2",
      description:
        "Migracao de dados entre versoes de backend com mapeamento de tabelas, scripts de migracao e orquestrador baseado em dependencias para reduzir risco operacional.",
      year: "2025",
      tags: ["NestJS", "PostgreSQL", "TypeORM", "API REST"],
    },
    {
      prefix: "tenant/propagation",
      title: "Propagacao Multi-Tenant",
      description:
        "Funcionalidade de replicacao de dados entre tenants com AWS SQS e DynamoDB, incluindo historico de execucao para auditabilidade e seguranca do processo.",
      year: "2025",
      tags: ["NestJS", "AWS SQS", "DynamoDB", "AWS"],
    },
    {
      prefix: "data/realtime",
      title: "Chat Real-time Microservice",
      description:
        "Servico de chat com milhares de conexoes simultaneas, baixa latencia e alta disponibilidade com NestJS, Socket.io, Redis, MongoDB, Kafka e Prisma.",
      year: "2024",
      tags: ["WebSocket", "Redis", "MongoDB", "Kafka"],
      link: "https://github.com/andersonzero0/websocket-multiclusters-redis",
    },
    {
      prefix: "platform/operations",
      title: "Plataforma de Stands",
      description:
        "Plataforma fullstack para negociacao e contratacao de servicos de construcao de stands, com foco em comunicacao entre partes, contratos e pagamentos.",
      year: "2024",
      tags: ["NestJS", "Angular", "PostgreSQL", "TypeORM"],
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

