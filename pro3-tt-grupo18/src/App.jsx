import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Populares from './components/Populares/Populares';

function App() {
  let menu = [
    "Home",
    "Peliculas recientes",
    "Películas Populares",
    "Favoritos"
  ]
  return (
    <React.Fragment>
      <Header elementosMenu = {menu}/>
      <h1>Cuevana 2</h1>
      <main>
      <section className="top-data">
      <Populares/>
      </section>

      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
