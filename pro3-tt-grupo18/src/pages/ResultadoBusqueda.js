import React, { Component } from "react";
import CardPopulares from "../components/CardPopulares/CardPopulares";
import Loader from "../components/Loader/Loader"

class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            cargando: true
        };
    }

    componentDidMount() {
        this.setState({
            cargando: true
        })
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=bf0e25b4b648e8ee928c7dede4d12427`)
            .then((response) => response.json())
            .then((data) => this.setState({ peliculas: data.results, cargando: false }))
            .catch((e) => console.log(e))
    }

    render() {
        return (
            <>
                <div>
                    {this.state.cargando ? (
                        <Loader />
                    ) : this.state.peliculas.length > 0 ? (
                        <>
                            <h2>Resultados de búsqueda: {this.props.location.state.query}</h2>
                            {this.state.peliculas.map((result, idx) => (
                                <CardPopulares results={result} key={idx} />
                            ))}
                        </>
                    ) : (
                        <h2>No se hallaron resultados para: {this.props.location.state.query}</h2>
                    )}
                </div>
            </>
        )
    }
}

export default ResultadoBusqueda