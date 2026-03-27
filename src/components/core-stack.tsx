import { TechTag } from "./tech-tag";

export function CoreStack() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
        <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter">
          Core Stack
        </h2>
        <span className="font-label text-xs text-on-surface-variant uppercase tracking-[0.2em]">
          0x01 // Infrastructure
        </span>
      </div>

      {/* Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Languages */}
        <div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-lg space-y-4">
          <h3 className="font-label text-primary text-xs uppercase tracking-widest">
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            <TechTag>TypeScript</TechTag>
            <TechTag>JavaScript</TechTag>
            <TechTag>SQL</TechTag>
            <TechTag>NoSQL</TechTag>
          </div>
        </div>

        {/* Frameworks */}
        <div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-lg space-y-4">
          <h3 className="font-label text-primary text-xs uppercase tracking-widest">
            Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            <TechTag>NestJS</TechTag>
            <TechTag>Node.js</TechTag>
            <TechTag>React</TechTag>
            <TechTag>Angular</TechTag>
            <TechTag>Next.js</TechTag>
            <TechTag>REST API</TechTag>
          </div>
        </div>

        {/* Databases */}
        <div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-lg space-y-4">
          <h3 className="font-label text-primary text-xs uppercase tracking-widest">
            Data Persistence
          </h3>
          <div className="flex flex-wrap gap-2">
            <TechTag>PostgreSQL</TechTag>
            <TechTag>MySQL</TechTag>
            <TechTag>MongoDB</TechTag>
            <TechTag>Redis</TechTag>
            <TechTag>DynamoDB</TechTag>
          </div>
        </div>

        {/* DevOps */}
        <div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-lg space-y-4">
          <h3 className="font-label text-primary text-xs uppercase tracking-widest">
            Platform
          </h3>
          <div className="flex flex-wrap gap-2">
            <TechTag>Docker</TechTag>
            <TechTag>AWS</TechTag>
            <TechTag>EC2</TechTag>
            <TechTag>AWS SQS</TechTag>
            <TechTag>Kafka</TechTag>
            <TechTag>CI/CD</TechTag>
            <TechTag>Git</TechTag>
          </div>
        </div>
      </div>
    </div>
  );
}
