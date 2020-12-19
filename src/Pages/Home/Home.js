import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
// import EnterPage from '../../Pages/Enterpage/EnterPage';
import NavBar from '../../components/NavBar/NavBar'

const Home = (props) => {
    return (
        <div className="Home">
            {/* <div className="navbar-home">
                <NavBar/>
            </div> */}
                <div className="main-image">
                    <div className="enter-box">
                         <Link to="/enter" className="enter"><em>enter</em></Link>
                    </div>
                </div>
        </div>
    )
}
export default Home;