import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <>
            <h1 className="titulo">Cuevana 2</h1>
            <nav className="navBar">
                <p> Películas Populares </p>
                
                <p> Próximos Estrenos </p>

                <p> Favoritos</p>
            </nav>
        </>
    )
}

export default Header;