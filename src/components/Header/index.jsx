import { useEffect, useState } from "react"
import './style.css';

export function Header() {

    const [user, setUser] = useState({})

    useEffect(() => {

        fetch("https://api.github.com/users/andersonzero0")
        .then(response => response.json())
        .then(data => {

            let name_data = data.name
            name_data = name_data.toUpperCase();

            setUser({
                name: name_data,
                avatar: data.avatar_url
            })
            
        })
        
    }, [])

    return (
        <header>

            <div>
                <h2>WEB DEVELOPER</h2>

                <img className="gif_github" src="./github_mini.gif" alt="" />
            </div>

            <div className="box_user">

                <p>{user.name}</p>
                <img src={user.avatar} alt="" />

            </div>
            
        </header>
    )
    
}