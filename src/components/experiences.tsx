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
    version: "v3.0",
    company: "Teddy Open Finance",
    period: "Apr 2025 - Present",
    role: "Software Engineer - Backend",
    description:
      "Backend developer at Teddy Open Finance working on White Label platform focused on custom financial solutions. Contributed to backend migration between versions, creating scripts and data migration orchestrator.",
    achievements: [
      "Implemented multi-tenant propagation feature with AWS SQS and DynamoDB",
      "Ensured auditability and security across platform",
      "Participated in continuous platform evolution and optimization",
    ],
  },
  {
    version: "v2.0",
    company: "StageTree",
    period: "Aug 2023 - Apr 2025",
    role: "Full Stack Developer",
    description:
      "Developed real-time Chat microservice with NestJS using Socket.io and MongoDB. Built flexible API architecture for multiple system consumption.",
    achievements: [
      "Created plugin for Autodesk Revit using C#, WPF and Revit API",
      "Demonstrated rapid learning capability across different tech stacks",
      "Implemented scalable microservices architecture",
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

