import React, {Component} from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import EnterPage from '../../Pages/Enterpage/EnterPage';

const Home = (props) => {
    return (
        <div className="Home">
                <p>Home page</p>
                <Router>
                    <Route exact path="/enter" render={(props) => (
                        <EnterPage {...props}/>)}/>
                </Router>
        </div>
    )
}
export default Home;