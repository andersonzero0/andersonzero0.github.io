interface Experience {
  version: string;
  company: string;
  period: string;
  role: string;
  description: string;
  achievements: string[];
}

interface ExperienceItemProps {
  experience: Experience;
  isLast?: boolean;
}

function ExperienceItem({ experience, isLast = false }: ExperienceItemProps) {
  return (
    <div className={`relative pl-12 ${!isLast ? "pb-16" : "pb-0"}`}>
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-primary rounded-full" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="font-label text-xs text-primary uppercase tracking-[0.3em]">
                {experience.version}
              </span>
              <span className="text-xs font-mono text-on-surface-variant">
                {experience.period}
              </span>
            </div>
            <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">
              {experience.company}
            </h3>
            <p className="text-sm font-label text-on-surface-variant uppercase tracking-wide">
              {experience.role}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-on-surface-variant leading-relaxed">
          {experience.description}
        </p>

        {/* Achievements */}
        {experience.achievements.length > 0 && (
          <ul className="space-y-2 text-sm text-on-surface-variant">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const experiencesData: Experience[] = [
  {
    version: "v5.0",
    company: "Teddy Open Finance",
    period: "Nov 2025 - Atual",
    role: "Engenheiro de Software Backend Junior II",
    description:
      "Atuacao no backend da plataforma White Label para solucoes financeiras personalizadas, com foco em sustentacao, evolucao continua e alta confiabilidade.",
    achievements: [
      "Contribuicao na migracao de backend v1 para v2 com mapeamento de tabelas e scripts de migracao",
      "Desenvolvimento de orquestrador para ordenacao de migracao por dependencias",
      "Implementacao de propagacao multi-tenant com AWS SQS e DynamoDB",
      "Criacao de historico de execucao para auditabilidade e seguranca",
    ],
  },
  {
    version: "v4.0",
    company: "Teddy Open Finance",
    period: "Abr 2025 - Nov 2025",
    role: "Engenheiro de Software Backend Junior I",
    description:
      "Inicio da trajetoria na Teddy com desenvolvimento backend de APIs REST e operacoes criticas da plataforma financeira.",
    achievements: [
      "Melhorias continuas de performance e estabilidade da plataforma",
      "Atuacao em AWS S3, SQS e DynamoDB para operacoes assicronas",
      "Suporte a entregas multi-tenant com foco em escalabilidade",
    ],
  },
  {
    version: "v3.0",
    company: "We Stand",
    period: "Set 2024 - Abr 2025",
    role: "Desenvolvedor Backend",
    description:
      "Desenvolvimento da plataforma para negociacao e contratacao de servicos de construcao de stands em eventos.",
    achievements: [
      "Implementacao de backend com NestJS, PostgreSQL e TypeORM",
      "Suporte ao fluxo de comunicacao entre fornecedores e clientes",
      "Base para gerenciamento de contratos e pagamentos",
    ],
  },
  {
    version: "v2.0",
    company: "Qualitare",
    period: "Set 2024 - Abr 2025",
    role: "Desenvolvedor Backend",
    description:
      "Criacao de sistema de gestao para haras, incluindo controle financeiro e operacao diaria.",
    achievements: [
      "Cadastro e acompanhamento de animais, treinadores e competicoes",
      "Estruturacao de modulos de gestao financeira",
      "Backend robusto com NestJS, PostgreSQL e TypeORM",
    ],
  },
  {
    version: "v1.0",
    company: "StageTree",
    period: "Ago 2023 - Abr 2025",
    role: "Desenvolvedor Fullstack e Estagiario",
    description:
      "Desenvolvimento de microservico de chat real-time e de sistemas de gestao para diferentes segmentos, participando de todo o ciclo de desenvolvimento.",
    achievements: [
      "Reducao de 40% no tempo de entrega de mensagens com WebSockets e Redis",
      "Integracao com Kafka para processamento assincrono e resiliente",
      "Automacao de 80% de processos manuais no sistema de gestao para haras",
      "Melhoria de 30% no tempo de fechamento de contratos na plataforma de stands",
    ],
  },
];

export function Experiences() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
        <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter">
          Career Changelog
        </h2>
        <span className="font-label text-xs text-on-surface-variant uppercase tracking-[0.2em]">
          0x03 // History
        </span>
      </div>

      {/* Timeline */}
      <div className="space-y-0 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-px before:bg-outline-variant/20">
        {experiencesData.map((experience, index) => (
          <ExperienceItem
            key={index}
            experience={experience}
            isLast={index === experiencesData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

