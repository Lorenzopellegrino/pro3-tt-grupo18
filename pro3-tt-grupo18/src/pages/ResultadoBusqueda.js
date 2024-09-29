import React, { Component } from "react";
import UpcomingCard from "../components/UpcomingCard/UpcomingCard";
import CardPopulares from "../components/CardPopulares/CardPopulares";

class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props)
        this.state= {
            peliculas: [],
            cargando: true
        };
    }

    componentDidMount(){
        this.setState({
            cargando:true
        })
        fetch('https://api.themoviedb.org/3/search/movie?query=')
    }
}