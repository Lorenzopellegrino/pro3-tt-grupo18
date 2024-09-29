import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <>
            <h1 className="titulo">Cuevana 5</h1>
            <nav className="navBar">
                <Link to= "/verMas/Populares"> Películas Populares </Link>
                
                <Link to = "/VerMas/Upcoming"> Próximos Estrenos </Link>

                <Link to="/favoritas"> Favoritos </Link>
            </nav>
        </>
    )
}

export default Header;