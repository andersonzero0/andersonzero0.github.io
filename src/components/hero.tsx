//import { Skills } from "./skills";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col scroll-m-48 py-4 items-center gap-10 min-h-screen w-full justify-center block-zoom"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-3">
          {/* <Avatar className="w-28 h-28">
            <AvatarImage src="https://github.com/andersonzero0.png" />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar> */}
          <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
            Anderson Viana
          </h1>
          <h2 className="scroll-m-20 text-center pb-2 text-2xl font-semibold tracking-tight first:mt-0 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Desenvolvedor de Software
          </h2>
        </div>

        <div className="flex flex-row gap-3">
          <a
            href="https://github.com/andersonzero0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex flex-row gap-2 rounded-3xl font-extrabold bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950 text-white border">
              <Github />
              GitHub
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/andersonvianaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex flex-row gap-2 rounded-3xl font-extrabold bg-gradient-to-r from-blue-950 via-blue-700 to-blue-950 text-white border">
              <Linkedin />
              LinkedIn
            </Button>
          </a>
        </div>

        {/* <div className="flex flex-row gap-2">
          <a href="/curriculo.pdf" download>
            <Button className="flex flex-row gap-2 justify-center items-center dark font-medium rounded-3xl backdrop-blur-3xl">
              <Download />
              Baixar Currículo
            </Button>
          </a>
        </div> */}
      </div>

      {/* <Skills /> */}
    </section>
  );
}
