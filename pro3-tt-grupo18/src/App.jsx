import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detalles from './pages/Detalles';
import Favs from './pages/Favoritas'
import UpcomingVerMas from './pages/Upcoming';


function App() {
  return (
    <>
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/VerMas/Upcoming" component={UpcomingVerMas} />
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
