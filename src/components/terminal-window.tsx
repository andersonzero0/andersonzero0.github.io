import { ReactNode } from "react";

import SpotlightCard from "@/components/SpotlightCard";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({
  title = "bash — 80x24",
  children,
  className = "",
}: TerminalWindowProps) => {
  return (
    <SpotlightCard
      spotlightColor="rgba(255, 255, 255, 0.15)"
      className={`bg-surface-container-high rounded-lg border border-outline-variant/20 overflow-hidden shadow-2xl ${className} !p-0`}
    >
      {/* Terminal Header */} 
      <div className="bg-surface-container-highest px-4 py-2 flex items-center justify-between border-b border-outline-variant/20">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full border border-outline-variant" />
          <div className="w-2.5 h-2.5 rounded-full border border-outline-variant" />
          <div className="w-2.5 h-2.5 rounded-full border border-outline-variant" />
        </div>
        <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
          {title}
        </span>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm space-y-2">{children}</div>
    </SpotlightCard>
  );
};

interface TerminalLineProps {
  type?: "prompt" | "command" | "output" | "success" | "error";
  children: ReactNode;
}

export const TerminalLine = ({ type = "output", children }: TerminalLineProps) => {
  const getColorClass = () => {
    switch (type) {
      case "prompt":
        return "text-primary-dim opacity-70";
      case "command":
        return "text-on-surface";
      case "success":
        return "text-primary";
      case "error":
        return "text-error";
      default:
        return "text-on-surface-variant";
    }
  };

  return <p className={getColorClass()}>{children}</p>;
};

export const TerminalCursor = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-on-surface">➜</span>
      <span className="w-2 h-5 bg-primary animate-pulse" />
    </div>
  );
};
