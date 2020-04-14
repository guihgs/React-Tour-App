import React from 'react';
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import logo from '../../logo.png';

export default function Navbar(){
    return <nav className="navbar">
        <img src={logo} alt="city tours logo" />
        <ul className="nav-links">
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
        </ul>
        </nav>;
}