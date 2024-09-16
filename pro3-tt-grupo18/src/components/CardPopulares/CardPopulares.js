import React, {Component} from "react";

class CardPopulares extends Component {
    constructor(props){
        super(props)
        this.state = ({
            data: "",
            varMas: false,
        })
    }
    verMas(){
        this.setState({
            verMas: !this.state.verMas
        })
    }
    render(){
        const {title, overview, poster_path, } = this.props.results
        return(
            <>
                <article className="peliculas-grid">
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className="fotopelicula"/>
                    <h3>{title}</h3>
                    <p className="more" onClick={() => this.verMas()}>{this.state.verMas ? "Ocultar descripción" : "Ver descripción" }</p>
                    {this.state.verMas && (<section className="extra">
                        <p>Descripción: {overview}</p>
                    </section>)}
                    <button>Ir a detalle</button>
                    <button>Añadir a favoritos</button>
                </article>
            </>
        )

    }
}
export default CardPopulares;