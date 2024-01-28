import {
  Github,
  Instagram,
  Linkedin,
  Loader2,
  Twitter,
} from "lucide-react";
import DialogMessage from "./dialog-message";

export default function AboutMe({
  name = "Anderson Viana",
}: {
  name?: string | null;
}) {  
  return (
    <section className="w-full p-3">
      <h2 className="text-lg text-gray-700">#AboutMe</h2>
      <span className="flex items-center gap-2 py-1">
        <div className="flex flex-row items-center max-sm:flex-col max-sm:items-start gap-2">
          <h1 className="text-3xl font-thin text-nowrap">
            {name ? name : <Loader2 className="animate-spin" />}
          </h1>
          <div className="flex flex-row gap-2 flex-wrap">
            <div>
              <a href="https://github.com/andersonzero0" target="_blank">
                <div className="hover:bg-[#0B1726] bg-[#C1C9D9] transition-all group p-2 rounded-full">
                  <Github className="group-hover:text-white transition-all" />
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/andersonvianaa/"
                target="_blank"
              >
                <div className="hover:bg-[#0B1726] bg-[#C1C9D9] transition-all group p-2 rounded-full">
                  <Linkedin className="group-hover:text-white transition-all" />
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/eu_andersonviana/"
                target="_blank"
              >
                <div className="hover:bg-[#0B1726] bg-[#C1C9D9] transition-all group p-2 rounded-full">
                  <Instagram className="group-hover:text-white transition-all" />
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/andersonn_dev" target="_blank">
                <div className="hover:bg-[#0B1726] bg-[#C1C9D9] transition-all group p-2 rounded-full">
                  <Twitter className="group-hover:text-white transition-all" />
                </div>
              </a>
            </div>

            <DialogMessage/>
          </div>
        </div>
      </span>
      <div className="flex items-center gap-3 rounded-md">
        <img className="h-6" src="https://i.imgur.com/HbQYHvV.png" alt="" />
        <img className="h-10" src="https://i.imgur.com/T88ibrL.png" alt="" />
        <img className="h-6" src="https://i.imgur.com/Vut9VQZ.png" alt="" />
        <img className="h-6" src="https://i.imgur.com/J3G49Xo.png" alt="" />
        <img className="h-6" src="https://i.imgur.com/3TMauWj.png" alt="" />
        <img className="h-6" src="https://i.imgur.com/fn4Jki3.png" alt="" />
        <p>and more.</p>
      </div>

      <p className="lg:max-w-2xl text-pretty">🔥 Developer</p>

      <div className="py-4 divide-y flex flex-col *:py-2 lg:max-w-2xl">
        <div>
          <p className="font-light">Education:</p>
          <ul className="*:list-disc mx-4">
            <li>
              <span className="font-bold">
                EEEP Walter Ramos de Araújo (Jan 2021 - Dec 2023)
              </span>
              : <span className="italic">Vocational High School</span> -{" "}
              <span className="">
                Web development with HTML, CSS, JS, PHP and MYSQL.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-light">Experiences:</p>
          <ul className="*:list-disc mx-4">
            <li>
              <span className="font-bold">StageTree (Ago 2021 - Actual)</span>:{" "}
              <span className="italic">Software Development Startup</span> -{" "}
              <span className="">
                Development with JS, NodeJS, ReactJS, NestJS, NextJS, Prisma,
                etc.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
