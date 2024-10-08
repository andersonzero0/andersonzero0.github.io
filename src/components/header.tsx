import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Header() {
  return (
    <header className="sticky top-0 z-10 py-4 px-10 bg-white/10 backdrop-blur-lg flex flex-row justify-between items-center">
      <div className="flex flex-row gap-4 items-center justify-center">
        <Avatar className="">
          <AvatarImage src="https://github.com/andersonzero0.png" />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
        <p className="logo">anderson viana</p>
      </div>
      <nav className="flex flex-row gap-4">
        <a href="">sobre mim</a>
        <a href="">projetos</a>
        <a href="">experiências</a>
        <a href="">contato</a>
      </nav>
    </header>
  );
}
