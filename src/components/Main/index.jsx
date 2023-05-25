import { Skills } from '../Skills';
import { Projects } from '../Projects';
import { AboutMe } from '../AboutMe';
import './style.css';

export function Main() {

    return (
        <main>

            <AboutMe/>

            <Skills />
            
            <Projects />
            
        </main>
    )
    
}