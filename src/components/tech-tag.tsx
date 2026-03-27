interface TechTagProps {
  children: string;
  className?: string;
}

export const TechTag = ({ children, className = "" }: TechTagProps) => {
  return (
    <span
      className={`px-2 py-1 bg-surface-container-highest rounded text-xs font-mono text-on-surface ${className}`}
    >
      {children}
    </span>
  );
};

interface TechTagOutlineProps {
  children: string;
  className?: string;
}

export const TechTagOutline = ({
  children,
  className = "",
}: TechTagOutlineProps) => {
  return (
    <span
      className={`text-[10px] px-2 py-0.5 border border-outline-variant/30 rounded-sm text-on-surface-variant uppercase font-label ${className}`}
    >
      {children}
    </span>
  );
};
