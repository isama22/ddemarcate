import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div className="Home">
            <div className="main-image">
                <Link to="/enter" className="enter"><em>enter</em></Link>
            </div>
        </div>
    )
}
export default Home;