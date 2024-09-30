import React, { Component } from "react";
import "./UpcomingCard.css";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

class UpcomingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verMas: false,
            esFav: false,
        };
    }

    componentDidMount() {
        const id = this.props.results.id;
        if (localStorage.getItem("favoritas") != null) {
            if (JSON.parse(localStorage.getItem("favoritas")).includes(id)) {
                this.setState({
                    esFav: true,
                });
            }
        }
    }

    Favoritas() {
        const id = this.props.results.id;
        this.setState({
            esFav: !this.state.esFav,
        });
        if (this.state.esFav !== true) {
            if (localStorage.getItem("favoritas") === null) {
                localStorage.setItem("favoritas", JSON.stringify([id]));
            } else {
                const favoritasStorage = localStorage.getItem("favoritas");
                const favParsed = JSON.parse(favoritasStorage);
                favParsed.push(id);
                localStorage.setItem("favoritas", JSON.stringify(favParsed));
            }
        } else {
            const favoritasStorage = localStorage.getItem("favoritas");
            const favParsed = JSON.parse(favoritasStorage);
            const favFiltered = favParsed.filter((favId) => favId !== id);
            localStorage.setItem("favoritas", JSON.stringify(favFiltered));
        }
    }

    verMas() {
        this.setState({
            verMas: !this.state.verMas,
        });
    }

    render() {
        const { results } = this.props;
        const { esFav } = this.state;

        if (!results || !results.id || !results.title) {
            return null;
        }

        const { title, overview, poster_path } = results;
        return (
            <>
                <article className="peliculas-grid">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`} 
                        alt={title}
                        className="fotopelicula"
                    />
                    <h3>{title}</h3>
                    <p className="more" onClick={() => this.verMas()}>
                        {this.state.verMas ? "Ocultar descripción" : "Ver descripción"}
                    </p>
                    {this.state.verMas && (
                        <section className="extra">
                            <p>Descripción: {overview}</p>
                        </section>
                    )}
                    <button>
                        <Link to={`/movie/${results.id}`}>Ir a detalle</Link> 
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

export default UpcomingCard;
