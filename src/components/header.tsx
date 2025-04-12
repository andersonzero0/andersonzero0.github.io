import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export function Header() {
  return (
    <header className="bg-[#416447] p-6 flex flex-row justify-between">
      <nav>
        <ul className="flex flex-row justify-center items-center gap-10">
          <li>
            <a href="#exp" className="text-white">
              Experiências
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white">
              Projetos
            </a>
          </li>
          <li>
            <a href="#blog" className="text-white">
              Blog
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-row items-center gap-3 justify-center">
        <GithubLogo size={32} color="#fff" weight="fill" />
        <LinkedinLogo size={32} color="#fff" weight="fill" />
      </div>
    </header>
  );
}
