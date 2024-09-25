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
    componentDidMount(){
        if(localStorage.getItem("favoritas") != null){
            if (JSON.parse(localStorage.getItem("favoritas").includes(this.state.id))){
                this.setState({
                    esFav: true
                })
            }
        }
        fetch(
            `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=bf0e25b4b648e8ee928c7dede4d12427`
        )
        .then((respuesta)=> respuesta.json())
        .then((info)=> {
            this.setState({pelicula: info, generos: info.generos});
        })
        .catch((error) => console.log(error));
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
    render(){
        const pelicula = this.state.pelicula;
        console.log("pelicula", this.state.generos)
        return(
            <main className="detallePeli">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt="Poster de la pelicula"/>
                    <span onClick={()=> this.handleFavorito()}>
                        {this.state.esFav ?(
                            <p>{" "} <FaHeart color="red"/> Eliminar de mis películas favoritas{""}</p>
                            
                        ):(
                            <p>{""} <FaRegHeart/> Agregar a mis películas favoritas {""}</p>
                        )
                    }
                    </span>
                </div>
                <div className= "dataPeli">
                    <h2>{pelicula.original_title}</h2>
                    <h4>Genero/os: {this.state.generos.map(genero => <li key={genero.id} className="peliculas-genero">{genero.name}</li>)} </h4>
                    <h4>Sinopsis: {pelicula.overview}</h4>
                    <h4>Duración: {pelicula.runtime} minutos</h4>
                    <h4>Rating: {pelicula.popularity}/10</h4>
                    <h4>Fecha de estreno: {pelicula.release_date}</h4>
                </div>
            </main>
        )
    }

}

export default Detalle;