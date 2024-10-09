import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CommandIcon, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Button } from "./ui/button";

interface HeaderProps {
  setOpenCommand: () => void;
}
export function Header({ setOpenCommand }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <header className="absolute w-full z-20 py-4 md:px-10 px-4 bg-white/10 backdrop-blur-lg flex flex-row justify-between items-center">
      <div className="flex flex-row gap-4 items-center justify-center">
        <Avatar className="">
          <AvatarImage src="https://github.com/andersonzero0.png" />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
        <p className="logo">anderson viana</p>
      </div>
      <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen || isMediumScreen ? "auto" : 0,
          opacity: isMenuOpen || isMediumScreen ? 1 : 0,
        }}
        transition={{ height: { duration: 0.3 }, opacity: { duration: 0.3 } }}
        className={`overflow-hidden flex flex-col md:flex-row md:items-center md:gap-4 ${
          isMenuOpen ? "block" : "hidden"
        } md:flex`}
      >
        <a href="#hero">sobre mim</a>
        <a href="#experiences">experiências</a>
        <a href="#projects">projetos</a>
        <a href="">contato</a>
      </motion.nav>
      <Button
        className="flex flex-row gap-2"
        onClick={() => {
          setOpenCommand();
        }}
      >
        <div className="flex flex-row justify-center gap-1 items-center bg-zinc-800 px-2 py-1 rounded-sm">
          <CommandIcon size={16} />K
        </div>
        <p>Navegar</p>
      </Button>
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
