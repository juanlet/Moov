import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.scss";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Footer from "components/Footer";
import Normalize from 'react-normalize';


function App() {
 

  return (
    <div className="App">
      <Router>
      <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/details' component={MovieDetails} />
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
