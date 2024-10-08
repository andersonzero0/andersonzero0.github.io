import { Skills } from "./skills";
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";
import Typical from "react-typical";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex scroll-m-48 flex-col items-center gap-10 h-screen w-full justify-center block-zoom"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-3">
          <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
            Anderson Viana
          </h1>
          <h2 className="scroll-m-20 text-center pb-2 text-2xl font-semibold tracking-tight first:mt-0 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Desenvolvedor de Software
          </h2>
        </div>

        <div className="flex flex-row gap-3">
          <Button className="flex flex-row gap-2 font-extrabold bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950 text-white shadow-2xl shadow-gray-50/50 border">
            <Github />
            GitHub
          </Button>

          <Button className="flex flex-row gap-2 font-extrabold bg-gradient-to-r from-blue-950 via-blue-700 to-blue-950 text-white shadow-2xl shadow-gray-50/50 border">
            <Linkedin />
            LinkedIn
          </Button>
        </div>
      </div>

      <blockquote className="mt-6 border-l-2 pl-6 italic text-center">
        <Typical
          steps={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            1000,
          ]}
          loop={1}
          wrapper="p"
        />
      </blockquote>

      <Skills />
    </section>
  );
}
