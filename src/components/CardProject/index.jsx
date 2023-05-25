import { ExternalLink } from 'lucide-react'
import './style.css';

export function CardProject({title, description, link}) {

    return (
        <div className='conteiner-project'>

            <div className='box-info'>
                <strong>{title}</strong>
                <small>{description}</small>
            </div>

            <a className='box-link' href={link}>
                <ExternalLink />
            </a>
            
        </div>
    )
    
}