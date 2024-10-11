import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
  alt: boolean;
}
export function ProjectCard({
  alt = false,
  title,
  image,
  techStack,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div
      className={`flex ${
        alt ? "flex-row-reverse" : "flex-row"
      } flex-wrap justify-center items-center w-full`}
    >
      <div
        className={`md:w-1/2 w-full flex flex-col gap-4 p-4 ${
          !alt
            ? "left-fade items-start text-left"
            : "right-fade items-end text-right"
        } z-10`}
      >
        <div
          className={`flex flex-col gap-2 ${alt ? "items-end" : "items-start"}`}
        >
          <li
            className={`flex flex-row ${
              alt ? "justify-end" : "justify-start"
            } items-center max-w-2xl flex-wrap gap-2 *:bg-indigo-500/40 *:p-2 *:rounded-3xl *:text-sm *:border *:border-indigo-400`}
          >
            {techStack.map((tech) => (
              <ul key={tech}>{tech}</ul>
            ))}
          </li>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {title}
          </h3>
        </div>

        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-1">{description}</p>
        </div>

        <a href={link} target="_blank">
          <div className="rounded-full flex justify-center items-center">
            <Github />
          </div>
        </a>
      </div>
      <div
        className={`md:w-92 md:block hidden ${
          alt ? "left" : "right"
        }-fade overflow-hidden rounded-lg`}
      >
        <img
          className="w-full rounded-lg transition-transform duration-300 transform hover:scale-110"
          src={image}
        />
      </div>
    </div>
  );
}
