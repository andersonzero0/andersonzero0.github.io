import { Linkedin, Github } from 'lucide-react';
import './style.css';

export function AboutMe() {

    return (
        <section className='conteiner-aboutMain'>
            <h1> <span><img className='icon_about' src="./aboutme_icon.png"/></span> ABOUT ME</h1>

            <div className='box-social'>
                <a href="https://github.com/andersonzero0"><Linkedin /></a>
                <a href="https://linkedin.com/in/andersonvianaa"><Github /></a>
            </div>
            
            <div className='conteiner-about'>
                <div className='box-info'>
                    <p>I am a web developer who is passionate about programming and creating amazing web experiences. I have been studying web development for approximately 3 years and have gained knowledge in HTML, CSS, JavaScript, PHP, MySQL, Node.js, ReactJS, and TypeScript.
                
                During my learning journey, I focused on mastering these technologies to build interactive and user-friendly websites. I love the process of turning ideas into functional and visually appealing web applications.
                
                I am always eager to learn and stay up-to-date with the latest industry trends. Collaborating with people who share similar interests and facing new challenges is what drives me.
                
                Let's connect and discuss how we can create impactful web experiences together!
                
                I look forward to connecting with you!</p>
                </div>
                <div><img className='imgGojoAbout' src="./gojo.gif" alt="" /></div>
            </div>
            
        </section>
    )
    
}