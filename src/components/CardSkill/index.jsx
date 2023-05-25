import './style.css';

export function CardSkill(props) {

    return (
        <div className="conteiner-card">

            <div>
                <img className="img_Card" src={props.img}/>
            </div>

            <div>
                <strong className='title_card'>{props.title}</strong>
            </div>
            
        </div>
    )

}