import React from 'react'
import {NavLink} from 'react-router-dom';
const Navbar = (props) => (
	<nav>
	    <h2 class = "logo"><a class = "logo-link" href = "#"> {props.title} </a></h2>
	    <ul class = "nav-menu">
		    <li><NavLink className="nav-menu-link" activeClassName="activate" exact to="/"> Home </NavLink> </li>
		    <li><NavLink className="nav-menu-link" activeClassName="activate" to="/actors"> Best Actors </NavLink> </li>
		    <li><NavLink className="nav-menu-link" activeClassName="activate" to="/actress"> Best Actress </NavLink> </li>
		    <li><NavLink className="nav-menu-link" activeClassName="activate" to="/films"> Best Films </NavLink> </li>
	    </ul>
    </nav>

	);

	export default Navbar;