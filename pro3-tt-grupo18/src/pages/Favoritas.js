import React, { Component } from "react";
import CardPopulares from "../components/CardPopulares/CardPopulares";
import LoaderComponent from "../components/Loader/Loader";

class Favs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            loading: true, 
        };
    }

    componentDidMount() {
        const favoritas = localStorage.getItem("favoritas");
        if (favoritas) {
            const favParsed = JSON.parse(favoritas);

            if (favParsed.length === 0) {
                this.setState({ loading: false, peliculas: [] }); 
                return;
            }

            Promise.all(
                favParsed.map((id) =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bf0e25b4b648e8ee928c7dede4d12427`)
                .then((respuesta) => respuesta.json())
                )
            )
                .then((data) => {
                    const peliculasValidas = data.filter(pelicula => pelicula && pelicula.id);
                    this.setState({ peliculas: peliculasValidas, loading: false });
                })
                .catch((e) => {
                    console.log(e);
                    this.setState({ loading: false });
                });
        } else {
            this.setState({ loading: false, peliculas: [] });
        }
    }

    render() {
        const { peliculas, loading } = this.state;

        if (loading) {
            return <LoaderComponent />;
        }

        if (peliculas.length === 0) {
            return <p>No tienes películas favoritas seleccionadas.</p>;
        }

        return (
            <>
                <h1>Tus películas favoritas</h1>
                <div className="peliculas-container" style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                }}>
                    {peliculas.map((pelicula) => (
                        <CardPopulares results={pelicula} key={pelicula.id} />
                    ))}
                </div>
            </>
        );
    }
}

export default Favs;