import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Populares from './components/Populares/Populares';
import Upcoming from './components/Upcoming/Upcoming';

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
      <h2>Películas Populares</h2>
      <section className="top-data">
      <Populares/>
      </section>
      <h2>Próximos Estrenos</h2>
      <section className="top-data">
      <Upcoming/>
      </section>

      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
