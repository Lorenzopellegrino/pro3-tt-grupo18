import {Component} from "react";
import CardPopulares from "../components/CardPopulares/CardPopulares";
import UpcomingCard from "../components/UpcomingCard/UpcomingCard";

class Favs extends Component{
    constructor(props){
        super(props);
        this.state = {
            peliculas: [],
        }
    }
    componentDidMount(){
        const favoritas = localStorage.getItem("favoritas");
        if (favoritas !== null){
            const favParsed = JSON.parse(favoritas);
            Promise.all(
                favParsed
                .map((id) =>
                fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=bf0e25b4b648e8ee928c7dede4d12427`
                ).then((respuesta) => respuesta.json())
            ))
            .then((data) => this.setState({peliculas: data}))
            .catch((e) => console.log(e))
        }
    }
    render(){
        return(
            <>
            <h1>Tus peliculas favoritas</h1>
            <CardPopulares peliculas={this.state.peliculas}/>
            <UpcomingCard peliculas = {this.state.peliculas}/>
            </>
        )
    }
}

export default Favs