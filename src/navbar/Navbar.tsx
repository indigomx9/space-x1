import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => (
    <nav className="navbar">
        <h2>LOGO</h2>
        <ul className="navbar__ul">
            <NavLink className="navbar__link" to="/">Home</NavLink>
            <NavLink className="navbar__link" to="/about">About</NavLink>
        </ul>
    </nav>
);

