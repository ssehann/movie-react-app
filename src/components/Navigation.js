import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
    <div className="nav">
        <div className="nav__title">MoviesList</div>
        <Link className="nav__links" to="/">Home</Link>
        <Link className="nav__links" to="/about">About</Link>
    </div>);
};

export default Navigation;