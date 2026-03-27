import { Github, Linkedin, Mail } from "lucide-react";

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
              Let's Build Something
            </h3>
            <p className="text-on-surface-variant">
              Open for freelance projects and full-time opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:your-email@example.com"
              className="group text-2xl font-mono text-accent hover:text-primary transition-colors"
            >
              contact@anderson.dev
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
                href="mailto:your-email@example.com"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
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

