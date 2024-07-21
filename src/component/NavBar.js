import React from 'react'
import { NavLink, useLocation } from "react-router-dom"
import '../App.css';

const NavBar = () => {
    const location = useLocation();
    
    return (
        <div>
            <nav className="NavBar">
                <span className='NavBar_logo'>News24Hours</span>
                <li className={location.pathname === "/" ? "NavBar_item active_Link" : "NavBar_item"}> <NavLink className="nav_item " to="/">Home </NavLink></li>
                <li className={location.pathname === "/business" ? "NavBar_item active_Link" : "NavBar_item"}><NavLink className="nav_item" to='/business' >Business</NavLink></li>
                <li className={location.pathname === "/entertainment" ? "NavBar_item active_Link" : "NavBar_item"}><NavLink className="nav_item" to='/entertainment'>Entertainment</NavLink></li>
                <li className={location.pathname === "/health" ? "NavBar_item active_Link" : "NavBar_item"}><NavLink className="nav_item" to='/health'>Health</NavLink></li>
                <li className={location.pathname === "/science" ? "NavBar_item active_Link" : "NavBar_item"}><NavLink className="nav_item" to='/science'>Science</NavLink></li>
                <li className={location.pathname === "/technology" ? "NavBar_item active_Link" : "NavBar_item"}><NavLink className="nav_item" to='/technology'>Technology</NavLink> </li>
            </nav>
        </div>
    )
}

export default NavBar