import React from 'react';

import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';


import { HashRouter, Route } from "react-router-dom"
import Navigation from "./components/Navigation";
import Schana from "./routes/Schana";
import Joychant from "./routes/Joychant";
import Home from "./routes/Home";
import HanaMovement from "./routes/HanaMovement";
import HanaWorship from "./routes/HanaWorship";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Route exact path="/" component={Schana} />
        <Route path="/joychant" component={Joychant} />
        <Route path="/hanamvment" component={HanaMovement} />
        <Route path="/hanaworship" component={HanaWorship} />


      </HashRouter>
    );
  }
}
export default App;