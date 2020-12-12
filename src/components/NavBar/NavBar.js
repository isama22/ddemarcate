import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (

    <div className="nav-container">
        <span>logged in as: ___</span>
        <Link>log out</Link>
        {/* <Link to="/enter"> enter </Link> */}
    </div>
    );

}
export default NavBar;