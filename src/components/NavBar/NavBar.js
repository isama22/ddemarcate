import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (

    <div className="nav-container">
        <span>logged in as: ___</span>
        <Link to="/signup">sign up</Link>
        <Link to="/login">log in</Link>
    </div>
    );

}
export default NavBar;