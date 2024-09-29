import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <>
            <Link to="/" className="titulo">
                <h3>Cuevana 5</h3>
            </Link>
            <nav className="navBar">
                <Link to= "/verMas/Populares"> Películas Populares </Link>
                
                <Link to = "/vermas/upcoming"> Próximos Estrenos </Link>

                <Link to="/favoritas"> Favoritas </Link>
            </nav>
        </>
    )
}

export default Header;