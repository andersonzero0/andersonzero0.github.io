interface StatusBadgeProps {
  text?: string;
  className?: string;
}

export const StatusBadge = ({
  text = "Atualmente na Teddy Open Finance",
  className = "",
}: StatusBadgeProps) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface-container-high border border-outline-variant/30 text-[10px] font-label uppercase tracking-widest text-primary ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      {text}
    </div>
  );
};
