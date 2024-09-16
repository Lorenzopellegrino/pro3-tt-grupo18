import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  let menu = [
    "Home",
    "Peliculas recientes",
    "Películas Populares",
    "Favoritos"
  ]
  return (
    <React.Fragment>
      <Header elementosMenu={menu}/>
      <h1>Películas</h1>
      <main>

      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
