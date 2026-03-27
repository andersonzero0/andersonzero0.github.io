import { Github, Linkedin, Mail } from "lucide-react";
import { StatusBadge } from "./status-badge";
import ProfileCard from "./ProfileCard";

export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[716px]">
      {/* Left Column - Content */}
      <div className="lg:col-span-7 space-y-8">
        <StatusBadge />

        <div className="space-y-2">
          <h1 className="text-7xl font-headline font-bold tracking-tighter text-on-surface uppercase leading-none">
            Anderson
            <br />
            <span className="text-primary">Viana.sys</span>
          </h1>
          <p className="text-xl font-headline font-medium tracking-tight text-on-surface-variant uppercase">
            Software Engineer // Full-Stack Developer
          </p>
        </div>

        <p className="text-lg max-w-xl text-on-surface-variant leading-relaxed">
          Building robust, scalable applications with modern technologies.
          Specialized in React, TypeScript, Node.js, and cloud infrastructure.
          I translate complex business requirements into high-performance
          technical solutions.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/andersonzero0"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <Github size={20} />
            <span className="font-label text-sm uppercase tracking-widest">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/andersonvianaa"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
            <span className="font-label text-sm uppercase tracking-widest">
              LinkedIn
            </span>
          </a>
          <a
            href="mailto:your-email@example.com"
            className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <Mail size={20} />
            <span className="font-label text-sm uppercase tracking-widest">
              Email
            </span>
          </a>
        </div>
      </div>

      {/* Right Column - Profile Card */}
      <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
        <ProfileCard
          name="Anderson Viana"
          title="Backend Development Engineer"
          handle="andersonvianaa"
          status="Working in @TeddyOpenFinance"
          avatarUrl="./avatar-background.png"
          miniAvatarUrl="https://github.com/andersonzero0.png"
          showUserInfo={true}
          innerGradient="linear-gradient(145deg, #090909 0%, #101010 78%, rgba(99, 246, 191, 0.08) 100%)"
          behindGlowEnabled={false}
        />
      </div>
    </div>
  );
}

