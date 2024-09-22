import React, {Component} from "react";


class CardDetalle extends Component{
    render(){
        return(
            <div className= "character-card-new">
                <Link to={`/personaje/id/${this.props.route}`}>
                    <img src={this.props.picture} alt={this.props.name}/>
                </Link>
                <div className="text-content">
                    <h4 className="title">{this.props.name}</h4>
                    <p className="text">{this.props.description}</p>
                    <p className="text">Rating: {this.props.rating}</p>
                    <p className="text">Duración: {this.props.duration}</p>
                    <p className="text">Resumen: {this.props.synopsis}</p>
                    <p className="text">Fecha de estreno: {this.props.releaseDate}</p>
                </div>
            </div>
        );
    };
}

export default CardDetalle