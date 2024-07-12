import React from "react";
import './NavBar.css'

function NavBar () {

    return(
        <nav className="navbar">
        <div className="navbar-logo">
            <a href="#">APIGatos</a>
        </div>
        <ul className="navbar-menu">
            <li><a href="#">Inicio</a></li>
        </ul>
        </nav>
    )
}

export default NavBar