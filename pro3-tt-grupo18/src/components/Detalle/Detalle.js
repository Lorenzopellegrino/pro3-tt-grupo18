import React, {Component} from 'react';
import "./Detalle.css";
import {FaHeart} from "react-icons/fa";
import {FaRegHeart} from "react-icons/fa";

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state={
            id: props.id,
            esFav: false,
            pelicula:{},
            generos:[],
        };
    }
    componentDidMount() {
        if (localStorage.getItem("favoritas") !== null) {
            if (JSON.parse(localStorage.getItem("favoritas")).includes(this.state.id)) {
                this.setState({
                    esFav: true
                });
            }
        }
    
        fetch(
            `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=bf0e25b4b648e8ee928c7dede4d12427`
        )
        .then((respuesta) => respuesta.json())
        .then((info) => {
            if (info && info.id) {
                this.setState({ pelicula: info, generos: info.genres });
            } else {
                console.log("Película no encontrada");
                this.setState({ error: "Película no encontrada" });
            }
        })
        .catch((error) => {
            console.log(error);
            this.setState({ error: "Error al cargar la película" });
        });
    }
    handleFavorito(){
        this.setState({
            esFav: !this.state.esFav,
        })
        if(this.state.esFav !== true){
            if(localStorage.getItem("favoritas") === null){
                localStorage.setItem("favoritas", JSON.stringify([this.state.pelicula.id]))
            }else{
                const favoritasStorage = localStorage.getItem("favoritas");
                const favParsed = JSON.parse(favoritasStorage)
                favParsed.push(this.state.pelicula.id)
                const favString = JSON.stringify(favParsed)
                localStorage.setItem("favoritas", favString)
            }
        }else{
            const favoritasStorage = localStorage.getItem("favoritas");
            const favParsed = JSON.parse(favoritasStorage)
            const favFiltered = favParsed.filter(id => id !== this.state.id)
            const favString = JSON.stringify(favFiltered)
            localStorage.setItem("favoritos", favString)
        }
    }
    render() {
    const pelicula = this.state.pelicula;
    const { error } = this.state;

    if (error) {
        return <p>{error}</p>; 
    }
    return (
        <main className="detallePeli">
            <div>
                {pelicula.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt="Poster de la película" />
                ) : (
                    <p>Poster no disponible</p>
                )}
                <span onClick={() => this.handleFavorito()}>
                    {this.state.esFav ? (
                        <p><FaHeart color="red" /> Eliminar de mis películas favoritas</p>
                    ) : (
                        <p><FaRegHeart /> Agregar a mis películas favoritas</p>
                    )}
                </span>
            </div>
            <div className="dataPeli">
                <h2>{pelicula.original_title ? pelicula.original_title: "Título no disponible"}</h2>
                <h4>Sinopsis: {pelicula.overview ? pelicula.overview: "Sinopsis no disponible"}</h4>
                <h4>Duración: {pelicula.runtime ? `${pelicula.runtime} minutos` : "Duración no disponible"}</h4>
                <h4>Rating: {pelicula.vote_average ? `${pelicula.vote_average}/10` : "Rating no disponible"}</h4>
                <h4>Fecha de estreno: {pelicula.release_date ? pelicula.release_date: "Fecha no disponible"}</h4>
                <h4>Género/os:</h4>
                <ul>
                    {this.state.generos.length > 0 ? (
                        this.state.generos.map(genero => (
                            <li key={genero.id} className="peliGenero">{genero.name}</li>
                        ))
                    ) : (
                        <li>No hay géneros disponibles</li>
                    )}
                </ul>
            </div>
        </main>
    );
}

}

export default Detalle;