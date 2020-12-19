import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../Pages/Home/Home'
import EnterPage from '../../Pages/Enterpage/EnterPage';
import NavBar from '../../components/NavBar/NavBar'
import LoginPage from '../../Pages/LoginPage/LoginPage'
import SignupPage from '../../Pages/SignupPage/SignupPage'
import Dana1 from '../../Pages/Dana1/Dana1'
import Dana2 from '../../Pages/Dana2/Dana2'
import Dana3 from '../../Pages/Dana3/Dana3'
import Carson1 from '../../Pages/Carson1/Carson1'
import Carson2 from "../../Pages/Carson2/Carson2";
import Carson3 from "../../Pages/Carson3/Carson3";
import Derksen1 from '../../Pages/Derksen1/Derksen1'
import Derksen2 from "../../Pages/Derksen2/Derksen2";
import Derksen3 from "../../Pages/Derksen3/Derksen3";
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

          <Route path="/dana2" component={Dana2}/>
          <Route path="/carson2" component={Carson2}/>
          <Route path="/derksen2" component={Derksen2}/>

          <Route path="/dana3" component={Dana3}/>
          <Route path="/carson3" component={Carson3}/>
          <Route path="/derksen3" component={Derksen3}/>
        </Switch>
      </div>
    );
  }
}

export default App;
