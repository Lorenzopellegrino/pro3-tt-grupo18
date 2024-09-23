import React, { Component } from "react";
import Populares from "../components/Populares/Populares";
import Upcoming from "../components/Upcoming/Upcoming";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cargando: true
    };
}

componentDidMount() {
  this.setState({ cargando: false }); 
}


  render() {

    return (
      <>
      {this.state.cargando ? (<p>"Cargando..."</p>) : 
      (<>
      <h2>Películas Populares</h2>
      <Populares url="https://api.themoviedb.org/3/movie/popular?api_key=bf0e25b4b648e8ee928c7dede4d12427" titulo="Peliculas Populares" />
      <h2>Próximos Estrenos</h2>
      <Upcoming url="https://api.themoviedb.org/3/movie/upcoming?api_key=bf0e25b4b648e8ee928c7dede4d12427" titulo="Upcoming" />
      </>)}
        
      </>
    );
  }
}

export default Home;