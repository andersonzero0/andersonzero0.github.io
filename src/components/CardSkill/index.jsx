import './style.css';

export function CardSkill(props) {

    return (
        <div className="conteiner-card">

            <div>
                <img className="img_Card" src={props.img}/>
            </div>

            <div>
                <strong>{props.title}</strong>
            </div>
            
        </div>
    )

}