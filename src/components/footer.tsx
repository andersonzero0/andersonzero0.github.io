import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-outline-variant/20 mt-32 py-12 px-8"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-headline font-bold uppercase tracking-tighter">
              Vamos Construir Algo Relevante
            </h3>
            <p className="text-on-surface-variant">
              Backend e fullstack para produtos com foco em escalabilidade,
              performance e confiabilidade.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-label uppercase tracking-wide text-primary border border-outline-variant/30 rounded px-2 py-1">
                EC2
              </span>
              <span className="text-xs font-label uppercase tracking-wide text-primary border border-outline-variant/30 rounded px-2 py-1">
                Balanceamento de carga
              </span>
              <span className="text-xs font-label uppercase tracking-wide text-primary border border-outline-variant/30 rounded px-2 py-1">
                Escalabilidade
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:anderson11viana@gmail.com"
              className="group text-2xl font-mono text-accent hover:text-primary transition-colors"
            >
              anderson11viana@gmail.com
            </a>
            <a
              href="tel:+5585981393882"
              className="group text-lg font-mono text-on-surface-variant hover:text-primary transition-colors"
            >
              +55 85 98139-3882
            </a>
            <div className="flex gap-6">
              <a
                href="https://github.com/andersonzero0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/andersonvianaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:anderson11viana@gmail.com"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+5585981393882"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-outline-variant/10">
          <div className="space-y-3">
            <h4 className="text-sm font-label uppercase tracking-widest text-primary">
              Certificacoes
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>Escola do Trabalhador 4.0 - HTML | CSS | JavaScript</li>
              <li>AWS Lambda: Escreva codigo sem se preocupar com infra</li>
              <li>Discover&apos;s Path - Conectar</li>
              <li>Discover&apos;s Path - Especializar</li>
              <li>Suporte Tecnico em Tecnologia da Informacao</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-label uppercase tracking-widest text-primary">
              Formacao Academica
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                Gran Faculdade - Bacharelado em Ciencia da Computacao (2023 -
                2027)
              </li>
              <li>
                EEEP Walter Ramos de Araujo - Informatica e Desenvolvimento de
                Software (2021 - 2023)
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest">
            &copy; {date} Anderson Viana. All systems operational.
          </p>
          <p className="text-xs font-mono text-on-surface-variant">
            Built with React + TypeScript + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

