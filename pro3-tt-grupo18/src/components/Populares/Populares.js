import React, {Component} from "react";
import CardPopulares from "../CardPopulares/CardPopulares";
import "./Populares.css"

class Populares extends Component {
    constructor(props){
        super(props)
        this.state = ({
            datos: [],
        });
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=bf0e25b4b648e8ee928c7dede4d12427")
        .then(response => response.json())
        .then(data => this.setState(
            { datos: data.results })
        ).catch(error => console.log(error))
    }
    render(){
        return(
            <>
            <section className="PeliPopContainer">
                    {   this.state.datos.length > 0 ? 
                        this.state.datos.slice(0,5).map((results, idx) => (
                            <CardPopulares results = {results} key = {idx}/>)) 
                            : <p>Cargando...</p>
                    }
            </section>
            </>
        )
    }

};

export default Populares;