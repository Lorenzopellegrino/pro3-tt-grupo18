import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <>
            <h1 className="titulo">Cuevana 5</h1>
            <nav className="navBar">
                <p> Películas Populares </p>
                
                <Link to = "/VerMas/Upcoming"> Próximos Estrenos </Link>

                <p> Favoritos</p>
            </nav>
        </>
    )
}

export default Header;