import React, {Component} from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import EnterPage from '../../pages/Enterpage/EnterPage';

const Home = (props) => {
    return (
        <div className="Home">
                <p>Home page</p>
                {/* <Router>
                    <Route exact path="/enter" render={(props) => (
                        <EnterPage {...props}/>)}/>
                </Router> */}
                <Link to="/enter" className="enter"><em>enter</em></Link>
        </div>
    )
}
export default Home;