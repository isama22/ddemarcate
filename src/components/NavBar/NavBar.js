import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?

        <div className="nav-container">
            <span>logged in as: {props.user.name}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        :
        <div>
            <Link to="/">home</Link>
            <Link to="/signup">sign up</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/login">log in</Link>
        </div>
    return (
        <div>

            {nav}
        </div>
    );

}
export default NavBar;