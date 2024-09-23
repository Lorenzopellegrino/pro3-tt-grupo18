import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
/*import Detalle from './components/Detalle';*/

function App() {
  return (
    <>
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='' component={NotFound}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
