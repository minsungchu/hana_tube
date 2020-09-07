import React from 'react';

import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';


import { HashRouter, Route } from "react-router-dom"
import Navigation from "./components/Navigation";
import Schana from "./routes/Schana";
import Joychant from "./routes/Joychant";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Route path="/schana" exact={true} component={Schana} />
        <Route path="/joychant" component={Joychant} />
      </HashRouter>
    );
  }
}
export default App;