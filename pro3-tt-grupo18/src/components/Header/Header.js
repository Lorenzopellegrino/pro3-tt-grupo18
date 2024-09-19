import React from "react";

function Header(props){
    return(
        <nav>
            <ul className="main-nav">
                { 
                    props.elementosMenu.map((unMenu, idx)=> <li>{unMenu}</li>)
                    
                }
            </ul>
            <div className = "main-nav">
                <input type="text" placeholder="Buscar Peliculas ....."></input>
            </div>
            <ul className="user">
                <li>Nombre usuario <img src="./img/user.jpg" alt=""/></li>
            </ul>
        </nav>
    )
}

export default Header;