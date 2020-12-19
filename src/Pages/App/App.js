import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../Pages/Home/Home'
import EnterPage from '../../Pages/Enterpage/EnterPage';
import NavBar from '../../components/NavBar/NavBar'
import LoginPage from '../../Pages/LoginPage/LoginPage'
import SignupPage from '../../Pages/SignupPage/SignupPage'
import Dana1 from '../../Pages/Dana1/Dana1'
import Carson1 from '../../Pages/Carson1/Carson1'
import Derksen1 from '../../Pages/Derksen1/Derksen1'
import userService from '../../utils/userService';

class App extends Component {
  state = {
    user: userService.getUser()
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }
  render() {

    return (
      <div className="App">
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
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
          <Route path='/login' render={(({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )} />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route path="/dana1" component={Dana1}/>
          <Route path="/carson1" component={Carson1}/>
          <Route path="/derksen1" component={Derksen1}/>
        </Switch>
      </div>
    );
  }
}

export default App;
