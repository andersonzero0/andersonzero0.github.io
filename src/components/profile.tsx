import { Github, Linkedin, Loader2 } from "lucide-react";

export default function Profile({ name = 'Anderson VIana'}: { name?: string | null }) {
    return (
        <section className="w-full">
            <h2 className="text-lg text-gray-700">#AboutMe</h2>
            <span className="flex items-center gap-2 py-2">
                <h1 className="text-3xl font-semibold">{name ? name : <Loader2 className="animate-spin"/>}</h1>
                <div>
                    <a href="">
                        <div className="hover:bg-[#0B1726] bg-[#C1C9D9] transition-all group p-2 rounded-full">
                            <Github className="group-hover:text-white transition-all"/>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="">
                        <div className="hover:bg-[#0B1726] bg-[#C1C9D9] transition-all group p-2 rounded-full">
                            <Linkedin className="group-hover:text-white transition-all"/>
                        </div>
                    </a>
                </div>
            </span>
            <div className="flex items-center gap-3 border-2 w-96 justify-evenly rounded-md">
                <img className="h-8" src="https://i.imgur.com/HbQYHvV.png" alt="" />
                <img className="h-12" src="https://i.imgur.com/T88ibrL.png" alt="" />
                <img className="h-8" src="https://i.imgur.com/Vut9VQZ.png" alt="" />
                <img className="h-8" src="https://i.imgur.com/J3G49Xo.png" alt="" />
                <img className="h-8" src="https://i.imgur.com/3TMauWj.png" alt="" />
                <img className="h-8" src="https://i.imgur.com/fn4Jki3.png" alt="" />
                <p className="text-lg font-extrabold">...</p>
            </div>
        </section>
    )
}