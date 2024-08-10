import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import MovieDetail from "./routes/MovieDetail";
import "./App.css";

function App() {
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={MovieDetail} />
  </HashRouter>
}

// without exact={true}, when we want to go to /about, 
//it renders both Home and About because url matches both / and /about
// component={} specifies which component to render

export default App;