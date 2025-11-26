import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Experience {
  companyName: string;
  companyLogo: string;
  companyInitials: string;
  period: string;
  role: string;
  technologies: string[];
  descriptions: string[];
  colorTheme: "orange" | "green";
}

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  const colorClasses = {
    orange: {
      gradient: "from-zinc-900/95 from-20% via-orange-800/95 to-zinc-900/95 to-80%",
      badgeBg: "bg-orange-900",
      badgeBorder: "border-orange-400",
    },
    green: {
      gradient: "from-zinc-900/95 from-20% via-green-800/95 to-zinc-900/95 to-80%",
      badgeBg: "bg-green-900",
      badgeBorder: "border-green-400",
    },
  };

  const theme = colorClasses[experience.colorTheme];

  return (
    <div
      className={`w-full z-10 bg-gradient-to-r ${theme.gradient} p-4 flex flex-col gap-2 rounded-lg block-zoom`}
    >
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Avatar>
            <AvatarImage src={experience.companyLogo} />
            <AvatarFallback>{experience.companyInitials}</AvatarFallback>
          </Avatar>
          <h2 className="scroll-m-20 text-center text-lg font-semibold tracking-tight first:mt-0 inline-block">
            {experience.companyName}
          </h2>
        </div>
        <div>{experience.period}</div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">{experience.role}</h3>

          <ul className="flex flex-row flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <li
                key={index}
                className={`${theme.badgeBg} ${theme.badgeBorder} p-2 rounded-3xl text-sm border`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        {experience.descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
    </div>
  );
}

const experiencesData: Experience[] = [
  {
    companyName: "Teddy Open Finance",
    companyLogo:
      "https://liqi-tokens-profiles-account-documents-prd.s3.amazonaws.com/public/logos/1702d790-cdf8-4e7b-983f-2b65e18c37f7.png",
    companyInitials: "TD",
    period: "Abr 2025 - Atual",
    role: "Engenheiro de Software - Backend",
    technologies: [
      "NestJS",
      "NodeJS",
      "Microservices",
      "Redis",
      "PostgreSQL",
      "Docker",
      "AWS",
      "AWS SQS",
      "AWS DynamoDB",
    ],
    descriptions: [
      "Atuo como desenvolvedor backend na Teddy Open Finance, trabalhando na plataforma White Label com foco em soluções financeiras personalizadas. Contribuí para a migração do backend entre versões, criando scripts e um orquestrador de migração de dados. Implementei uma feature de propagação multi-tenant com AWS SQS e DynamoDB, garantindo auditabilidade e segurança.",
      "Além disso, participo da sustentação e evolução contínua da plataforma, otimizando performance e assegurando sua estabilidade.",
    ],
    colorTheme: "orange",
  },
  {
    companyName: "StageTree",
    companyLogo: "https://github.com/stagetreedevs.png",
    companyInitials: "ST",
    period: "Ago 2023 - Abr 2025",
    role: "Desenvolvedor Full Stack",
    technologies: [
      "NestJS",
      "NodeJS",
      "MongoDB",
      "Redis",
      "PostgreSQL",
      "ReactJS",
      "React-Native",
      "Docker",
      "Kafka",
    ],
    descriptions: [
      "Desenvolvimento de um microserviço de Chat Real-time em NestJS usando Socket.io e MongoDB. Um dos requisitos do projeto era que a API deveria ser flexível para o uso de múltiplos sistemas, assim sendo preciso usar um arquitetura que atendesse de forma adequada aos sistemas que consumisse desse microserviço.",
      "Me foi encarregado o desenvolvimento de um plugin para o sofware de engenharia e arquitetura Autodesk Revit, para a construção desse plugin foi utilizadas as tecnologias: C#, WPF e Revit API. Com o esse desenvolvimento pude demostrar e melhorar minha capacidade de aprendizado rápido e eficaz.",
    ],
    colorTheme: "green",
  },
];

export function Experiences() {
  return (
    <section
      id="experiences"
      className="flex flex-col md:scroll-m-0 scroll-m-24 gap-4 w-full min-h-screen items-center justify-center"
    >
      <h2 className="overflow-hidden text-center scroll-m-20 md:text-9xl text-4xl font-extrabold tracking-tight first:mt-0 items-start justify-start bg-gradient-to-b from-gray-300 to-zinc-950 inline-block text-transparent bg-clip-text">
        EXPERIÊNCIAS
      </h2>

      {experiencesData.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </section>
  );
}
