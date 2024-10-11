import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Experiences() {
  return (
    <section
      id="experiences"
      className="flex flex-col scroll-m-24 gap-4 w-full min-h-screen items-center justify-center"
    >
      <h2 className="overflow-hidden text-center scroll-m-20 md:text-9xl text-5xl font-extrabold tracking-tight first:mt-0 items-start justify-start bg-gradient-to-b from-gray-500 to-zinc-950 inline-block text-transparent bg-clip-text">
        EXPERIÊNCIAS
      </h2>
      <div className="w-full z-10 bg-gradient-to-r from-zinc-900/95 from-20% via-green-800/95 to-zinc-900/95 to-80% p-4 flex flex-col gap-2 rounded-lg">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/stagetreedevs.png" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <h2 className="scroll-m-20 text-center text-lg font-semibold tracking-tight first:mt-0 inline-block">
              StageTree
            </h2>
          </div>
          <div>Mar 2023 - Atual</div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Desenvolvedor Full Stack</h3>

            <li className="flex flex-row flex-wrap gap-2 *:bg-green-900 *:p-2 *:rounded-3xl *:text-sm *:border *:border-green-400">
              <ul>NestJS</ul>
              <ul>NodeJS</ul>
              <ul>MongoDB</ul>
              <ul>Redis</ul>
              <ul>PostgreSQL</ul>
              <ul>ReactJS</ul>
              <ul>React-Native</ul>
              <ul>Docker</ul>
              <ul>Kafka</ul>
            </li>
          </div>
          <p>
            Desenvolvimento de um microserviço de Chat Real-time em NestJS
            usando Socket.io e MongoDB. Um dos requisitos do projeto era que a
            API deveria ser flexível para o uso de múltiplos sistemas, assim
            sendo preciso usar um arquitetura que atendesse de forma adequada
            aos sistemas que consumisse desse microserviço.
          </p>
          <p>
            Me foi encarregado o desenvolvimento de um plugin para o sofware de
            engenharia e arquitetura Autodesk Revit, para a construção desse
            plugin foi utilizadas as tecnologias: C#, WPF e Revit API. Com o
            esse desenvolvimento pude demostrar e melhorar minha capacidade de
            aprendizado rápido e eficaz.
          </p>
        </div>
      </div>
    </section>
  );
}
