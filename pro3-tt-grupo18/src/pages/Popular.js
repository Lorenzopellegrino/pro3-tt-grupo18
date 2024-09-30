import React, {Component} from "react";
import CardPopulares from "../components/CardPopulares/CardPopulares";

class PopularesVerMas extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            peliculasfiltradas:[],
            valorfiltrado: "",
            paginaActual: 1 
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bf0e25b4b648e8ee928c7dede4d12427&page=${this.state.paginaActual}`)
        .then(response => response.json())
        .then(data => this.setState({
            peliculas: data.results,
            peliculasfiltradas: data.results,
            paginaActual: this.state.paginaActual + 1
        }))
        .catch((error)=> console.log(error));
    }

    handleFilter(e){
        const valorusuario = e.target.value;
        this.setState({
            valorfiltrado:valorusuario,
            peliculasfiltradas: this.state.peliculas.filter((pelicula)=>
            pelicula.title.toLowerCase().includes(valorusuario.toLowerCase()))
        })
    }
    
    handleResetFilter(){
        this.setState({
            valorfiltrado:"",
            peliculasfiltradas: this.state.peliculas,
        })
    }

    handelLoadMore(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bf0e25b4b648e8ee928c7dede4d12427&page=${this.state.paginaActual}`)
        .then(response => response.json())
        .then(data => {
            const peliculasValidas = data.results.filter(pelicula => pelicula && pelicula.id && pelicula.title);
            this.setState({
                peliculas: this.state.peliculas.concat(peliculasValidas),
                peliculasfiltradas: this.state.peliculasfiltradas.concat(peliculasValidas),
                paginaActual: this.state.paginaActual + 1
            });
        })
        .catch((error)=> console.log(error));
    }

    render(){
        return(
            <>
            <input type= 'text' value={this.state.valorfiltrado} onChange={(e)=>this.handleFilter(e)}/>
            <button onClick={()=>this.handleResetFilter()}>Reset Filter</button>
            <CardPopulares peliculas= {this.state.peliculasfiltradas}/>
            <button onClick={()=> this.handelLoadMore()}>Ver Mas </button>
            </>
        )
    }
}

export default PopularesVerMas;