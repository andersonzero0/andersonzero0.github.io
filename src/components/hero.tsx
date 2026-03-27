import { Github, Linkedin, Mail, Phone } from "lucide-react";
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
            <span className="text-primary">Viana</span>
          </h1>
          <p className="text-xl font-headline font-medium tracking-tight text-on-surface-variant uppercase">
            Desenvolvedor de Software // Backend & Full-Stack
          </p>
        </div>

        <p className="text-lg max-w-xl text-on-surface-variant leading-relaxed">
          Desenvolvedor backend com foco em APIs robustas, arquiteturas
          escalaveis e alta disponibilidade. Experiencia com WebSockets, Kafka,
          bancos SQL e NoSQL, Docker, Redis e AWS para entregar sistemas
          eficientes que reduzem custo e melhoram performance.
        </p>

        <div className="flex flex-wrap gap-6">
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
            href="mailto:anderson11viana@gmail.com"
            className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <Mail size={20} />
            <span className="font-label text-sm uppercase tracking-widest">
              Email
            </span>
          </a>
          <a
            href="tel:+5585981393882"
            className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <Phone size={20} />
            <span className="font-label text-sm uppercase tracking-widest">
              Mobile
            </span>
          </a>
        </div>
      </div>

      {/* Right Column - Profile Card */}
      <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
        <ProfileCard
          name="Anderson Viana"
          title="Software Engineer | Node | NestJS | TypeScript"
          handle="andersonzero0"
          status="Backend Engineer at @TeddyOpenFinance"
          avatarUrl="./avatar-background.png"
          miniAvatarUrl="https://github.com/andersonzero0.png"
          showUserInfo={true}
          innerGradient="linear-gradient(145deg, #090909 0%, #101010 78%, rgba(99, 246, 191, 0.08) 100%)"
          behindGlowEnabled={false}
          contactText=""
        />
      </div>
    </div>
  );
}
