import { CardSkill } from '../CardSkill';
import './style.css';

export function Skills() {

    const skills = [
        {
            img: "./html.png",
            title: "HTML",
            description: "lorem"
        },
        {
            img: "./css.png",
            title: "CSS",
            description: "lorem"
        },
        {
            img: "./javascript.png",
            title: "JavaScript",
            description: "lorem"
        },
        {
            img: "./react.png",
            title: "ReactJS",
            description: "lorem"
        },
        {
            img: "./php.png",
            title: "PHP",
            description: "lorem"
        },
        {
            img: "./sql.png",
            title: "SQL",
            description: "MySQL and MongoDB"
        },
    ]

    return (
        <section className='conteiner-skills'>
            <h3> <span><img src="./sword_icon.png"/></span> SKILLS</h3>

            <div className='conteiner-cards'>

                {
                    skills.map(skill => 
                        <CardSkill img={skill.img} title={skill.title}  />)
                }
                
            </div>
        </section>
    )    
    
}