import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (

    <div className="nav-container">
        <span>logged in as: ___</span>
        <Link to="/signup">sign up</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/login">log in</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/">home</Link>
    </div>
    );

}
export default NavBar;