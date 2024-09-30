import React, { Component } from "react";
import "./CardPopulares.css";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

class CardPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            esFav: false,
            verMas: false,
        };
    }

    componentDidMount() {
        const { results } = this.props;

        if (results && results.id) {
            const favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];
            if (favoritas.includes(results.id)) {
                this.setState({
                    esFav: true,
                });
            }
        }
    }

    Favoritas() {
        const { esFav } = this.state;
        const { results } = this.props;
        let favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];

        if (results && results.id) {
            if (!esFav) {
                favoritas.push(results.id);
            } else {
                favoritas = favoritas.filter((id) => id !== results.id);
            }
        }

        this.setState({ esFav: !esFav });
        localStorage.setItem("favoritas", JSON.stringify(favoritas));
    }

    verMas() {
        this.setState({ verMas: !this.state.verMas });
    }

    render() {
        const { results } = this.props;
        const { esFav, verMas } = this.state;

        if (!results || !results.id || !results.title || !results.poster_path) {
            return null;  
        }

        const { title, overview, poster_path } = results;
        return (
            <>
                <article className="peliculas-grid">
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className="fotopelicula" />
                    <h3>{title}</h3>
                    <p className="more" onClick={() => this.verMas()}>
                        {verMas ? "Ocultar descripción" : "Ver descripción"}
                    </p>
                    {verMas && (
                        <section className="extra">
                            <p>Descripción: {overview}</p>
                        </section>
                    )}
                    <button>
                        <Link to={`/movie/${results.id}`}> Ir al detalle</Link>
                    </button>
                    <button onClick={() => this.Favoritas()}>
                        {esFav ? (
                            <p>
                                <FaHeart color="red" /> Eliminar favorita
                            </p>
                        ) : (
                            <p>
                                <FaRegHeart /> Marcar favorita
                            </p>
                        )}
                    </button>
                </article>
            </>
        );
    }
}

export default CardPopulares;