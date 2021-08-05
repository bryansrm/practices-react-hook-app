import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './navbar.css';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light mb-5">
            <Link className="navbar-brand font-weight-bold" to="/">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto font-weight-bold">
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">Login</NavLink>
                </ul>
            </div>
        </nav>
    )
}
