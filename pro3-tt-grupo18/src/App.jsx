import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Upcoming from './pages/Upcoming';
import Detalles from './pages/Detalles';
import Favs from './pages/Favoritos'

function App() {
  return (
    <>
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Detalles}/>
        <Route path="/favoritas" component={Favs}/>
        <Route path='' component={NotFound}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
