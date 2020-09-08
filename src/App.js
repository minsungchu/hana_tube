import React from 'react';

import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';


import { HashRouter, Route } from "react-router-dom"
import Navigation from "./components/Navigation";
import Schana from "./routes/Schana";
import Joychant from "./routes/Joychant";
import Home from "./routes/Home";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/schana" component={Schana} />
        <Route path="/joychant" component={Joychant} />
      </HashRouter>
    );
  }
}
export default App;