import React, {Component} from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../Pages/Home/Home'
import EnterPage from '../../Pages/Enterpage/EnterPage';
import NavBar from '../../components/NavBar/NavBar'
import LoginPage from '../../Pages/LoginPage/LoginPage'
import SignupPage from '../../Pages/SignupPage/SignupPage'
// import userService from '../../utils/userService';

class App extends Component {
  render(){

    return (
      <div className="App">
        <NavBar />
        <Switch>
  
          <Route exact path='/' render={() => (
          <Home />
        )} />
          <Route
              exact
              path="/enter"
              render={(props) =>
                (<EnterPage {...props} />) 
              }
            />
            
          <Route path='/login' render={() =>
            <LoginPage
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
