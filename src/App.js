import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import MovieDetail from "./routes/MovieDetail";
import "./App.css";

function App() {
  return (
  <Router>
    <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movies/:id" component={MovieDetail} />
  </Router>);
}

// without exact={true}, when we want to go to /about, 
//it renders both Home and About because url matches both / and /about
// component={} specifies which component to render

export default App;