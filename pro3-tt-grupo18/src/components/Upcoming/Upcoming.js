import React, {Component} from "react";
import UpcomingCard from "../UpcomingCard/UpcomingCard";

class Upcoming extends Component {
    constructor(props){
        super(props)
        this.state = ({
            datos: [],
        });
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=bf0e25b4b648e8ee928c7dede4d12427")
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
                        this.state.datos.map((results, idx) => (
                            <UpcomingCard results = {results} key = {idx}/>)) 
                            : <p>Cargando...</p>
                    }
            </section>
            </>
        )
    }

};

export default Upcoming;