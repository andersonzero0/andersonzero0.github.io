import { ExternalLink, ArrowUpRight } from "lucide-react";
import { TechTagOutline } from "./tech-tag";

interface ProjectCardProps {
  prefix: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
}

export function ProjectCard({
  prefix,
  title,
  description,
  year,
  tags,
  link,
  linkLabel = "Source Code",
}: ProjectCardProps) {
  return (
    <div className="group relative bg-surface-container p-8 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em]">
            {prefix}
          </span>
          <h3 className="text-2xl font-headline font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        <span className="text-xs font-mono text-on-surface-variant">{year}</span>
      </div>

      {/* Description */}
      <p className="text-on-surface-variant mb-8 line-clamp-3">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <TechTagOutline key={tag}>{tag}</TechTagOutline>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <ExternalLink size={14} />
            {linkLabel}
          </a>
        ) : (
          <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant/50">
            Coming Soon
          </span>
        )}
        <ArrowUpRight
          size={20}
          className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
}

