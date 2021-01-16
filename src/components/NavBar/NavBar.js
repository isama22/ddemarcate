import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?

        <div className="nav-container">
            <span>welcome :: {props.user.name}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="" className="nav-links" onClick={props.handleLogout}>logout</Link>
        </div>
        :
        <div className="nav-container">
            <Link to="/signup" className="nav-links">sign up</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/login" className="nav-links">log in</Link>
        </div>
    return (
        <div>

            {nav}
        </div>
    );

}
export default NavBar;