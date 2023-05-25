import { CardProject } from '../CardProject';
import './style.css';

export function Projects() {

    const projects = [
        {
            title: "HitNumber",
            description: "Game (CSS and JavaScript)",
            link: "https://github.com/andersonzero0/hitnumber"
        },
        {
            title: "Fashion Style",
            description: "Website (PHP and MySQL)",
            link: "https://github.com/andersonzero0/fashion-style"
        },
        {
            title: "Clone Instagram",
            description: "Clone Website (CSS and JavaScript)",
            link: "https://github.com/andersonzero0/clone-instagram"
        },
        {
            title: "Layout Ubuntu (Gnome)",
            description: "Layout (CSS and JavaScript)",
            link: "https://github.com/andersonzero0/ubuntu-layout"
        },
        {
            title: "Layout Ubuntu (Gnome)",
            description: "Layout (CSS and JavaScript)",
            link: "https://github.com/andersonzero0/ubuntu-layout"
        },
        {
            title: "PsicoVerso",
            description: "Website (PHP and MySQL)",
            link: "https://github.com/andersonzero0/psicoverso"
        },
        {
            title: "SGA Empregos",
            description: "Website (PHP and MySQL)",
            link: "https://github.com/andersonzero0/sga-empregos"
        },
        {
            title: "Attendance List",
            description: "Website (React)",
            link: "https://github.com/andersonzero0/attendancelist_react"
        },
    ]

    return (
        <section className='conteiner-Geral'>
            <h3>
                <span><img className='icon_startup' src="./start-up.png"/></span>
                PROJECTS
            </h3>

            <div className='conteiner-projects'>

                {
                    projects.map(project => 
                        <CardProject title={project.title} description={project.description} link={project.link} />
                    )
                }
                
            </div>
        </section>
    )
    
}