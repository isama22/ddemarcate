import React, {Component} from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import EnterPage from '../../pages/Enterpage/EnterPage';
import NavBar from '../../components/NavBar/NavBar'

const Home = (props) => {
    return (
        <div className="Home">
            <div className="navbar-home">
                <NavBar/>
            </div>
                <p>Home page</p>
               
                <div className="main-image">
                    <div className="enter-box">
                         <Link to="/enter" className="enter"><em>enter</em></Link>
                    </div>
                </div>
        </div>
    )
}
export default Home;