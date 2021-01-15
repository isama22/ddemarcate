import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../Pages/Home/Home'
import EnterPage from '../../Pages/Enterpage/EnterPage';
import NavBar from '../../components/NavBar/NavBar'
import LoginPage from '../../Pages/LoginPage/LoginPage'
import SignupPage from '../../Pages/SignupPage/SignupPage'
import Dana1 from '../../Pages/Dana/Dana1/Dana1'
import Dana2 from '../../Pages/Dana/Dana2/Dana2'
import Dana3 from '../../Pages/Dana/Dana3/Dana3'
import AddDanaLine from '../../Pages/Dana/AddDanaLine/AddDanaLine'
import DanaEdit from '../../Pages/Dana/DanaEdit/DanaEdit'
import DanaPage from '../../Pages/Dana/DanaPage/DanaPage'
import Carson1 from '../../Pages/Carson/Carson1/Carson1'
import Carson2 from "../../Pages/Carson/Carson2/Carson2";
import Carson3 from "../../Pages/Carson/Carson3/Carson3";
import AddCarsonLine from '../../Pages/Carson/AddCarsonLine/AddCarsonLine'
import CarsonPage from '../../Pages/Carson/Carsonpage/CarsonPage'
import CarsonEdit from '../../Pages/Carson/CarsonEdit/CarsonEdit'
import Derksen1 from '../../Pages/Derksen/Derksen1/Derksen1'
import Derksen2 from "../../Pages/Derksen/Derksen2/Derksen2";
import Derksen3 from "../../Pages/Derksen/Derksen3/Derksen3";
import AddDerksenLine from '../../Pages/Derksen/AddDerksenLine/AddDerksenLine'
import DerksenPage from '../../Pages/Derksen/DerksenPage/DerksenPage'
import userService from '../../utils/userService';
import * as danaLinesAPI from '../../services/danaLines-api'
import * as carsonLinesAPI from '../../services/carsonLines-api'
import * as derksenLinesAPI from '../../services/derksenLines-api'

class App extends Component {
  state = {
    user: userService.getUser(),
    danaLines: [],
    carsonLines: [],
    derksenLines: []
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }
  //dana functions
  handleAddDanaLine = async newDanaData => {
    const newDana = await danaLinesAPI.create(newDanaData)
    this.setState(state => ({
      danaLines: [...state.danaLines, newDana]
    }),
      () => this.props.history.push('/danapage'))
  }

  handleUpdateDanaLine = async updatedDanaLineData => {
    const updatedDanaLine = await danaLinesAPI.update(updatedDanaLineData)
    const newDanaLinesArray = this.state.danaLines.map(e =>
      e._id === updatedDanaLine._id ? updatedDanaLine : e
    )
    this.setState(
      { danaLines: newDanaLinesArray },
      () => this.props.history.push('/danapage')
    )
  }

  handleDeleteDanaLine = async id => {
    await danaLinesAPI.deleteOne(id)
    this.setState(state => ({
      danaLines: state.danaLines.filter(danaLine => danaLine._id !== id)
    }), () => this.props.history.push('/danapage'))
  }

  handleGetAllDanaLines = async () => {
    const danaLines = await danaLinesAPI.getAll()
    this.setState({ danaLines: danaLines })
  }
  //carson functions 
  handleAddCarsonLine = async newCarsonData => {
    const newCarson = await carsonLinesAPI.create(newCarsonData)
    this.setState(state => ({
      carsonLines: [...state.carsonLines, newCarson]
    }),
      () => this.props.history.push('/carsonpage'))
  }

  handleUpdateCarsonLine = async updatedCarsonLineData => {
    const updatedCarsonLine = await carsonLinesAPI.update(updatedCarsonLineData)
    const newCarsonLinesArray = this.state.carsonLines.map(e =>
      e._id === updatedCarsonLine._id ? updatedCarsonLine : e
    )
    this.setState(
      { danaLines: newCarsonLinesArray },
      () => this.props.history.push('/carsonpage')
    )
  }

  handleDeleteCarsonLine = async id => {
    await carsonLinesAPI.deleteOne(id)
    this.setState(state => ({
      carsonLines: state.carsonLines.filter(carsonLine => carsonLine._id !== id)
    }), () => this.props.history.push('/carsonpage'))
  }
  handleGetAllCarsonLines = async () => {
    const carsonLines = await carsonLinesAPI.getAll()
    this.setState({ carsonLines: carsonLines })
  }
  //derksen functions
  handleAddDerksenLine = async newDerksenData => {
    const newDerksen = await derksenLinesAPI.create(newDerksenData)
    this.setState(state => ({
      derksenLines: [...state.derksenLines, newDerksen]
    }),
      () => this.props.history.push('/derksenpage'))
  }

  handleGetAllDerksenLines = async () => {
    const derksenLines = await derksenLinesAPI.getAll()
    this.setState({ derksenLines: derksenLines })
  }
  //helper function//
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  //lifecycle functions//
  async componentDidMount() {
    const danaLines = await danaLinesAPI.getAll()
    const carsonLines = await carsonLinesAPI.getAll()
    const derksenLines = await derksenLinesAPI.getAll()
    this.setState({ danaLines, carsonLines, derksenLines })
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
          <Route path="/dana1" component={Dana1} />
          <Route path="/carson1" component={Carson1} />
          <Route path="/derksen1" component={Derksen1} />

          <Route path="/dana2" component={Dana2} />
          <Route path="/carson2" component={Carson2} />
          <Route path="/derksen2" component={Derksen2} />

          <Route path="/dana3" component={Dana3} />
          <Route path="/carson3" component={Carson3} />
          <Route path="/derksen3" component={Derksen3} />

          <Route
            exact path="/adddanaline"
            render={() =>
              userService.getUser() ?
                <AddDanaLine
                  handleAddDanaLine={this.handleAddDanaLine}
                />
                :
                <Redirect to='/login' />}
          />
          <Route
            exact path="/danapage"
            render={({ history }) =>
              userService.getUser() ?
                <DanaPage
                  danaLines={this.state.danaLines}
                  handleGetAllDanaLines={this.props.handleGetAllDanaLines}
                  history={history}
                  user={this.state.user}
                  handleDeleteDanaLine={this.handleDeleteDanaLine}
                />
                :
                <Redirect to="/login" />
            } />
          <Route
            exact path="/editdana"
            render={({ location }) =>
              userService.getUser() ?
                <DanaEdit
                  handleUpdateDanaLine={this.handleUpdateDanaLine}
                  location={location}
                  user={this.state.user}
                />
                :
                <Redirect to='/login' />
            }
          />
          <Route
            exact path="/addcarsonline"
            render={() =>
              userService.getUser() ?
                <AddCarsonLine
                  handleAddCarsonLine={this.handleAddCarsonLine}
                />
                :
                <Redirect to='/login' />}
          />
          <Route
            exact path="/carsonpage"
            render={({ history }) =>
              userService.getUser() ?
                <CarsonPage
                  carsonLines={this.state.carsonLines}
                  handleGetAllCarsonLines={this.props.handleGetAllCarsonLines}
                  history={history}
                  user={this.state.user}
                  handleDeleteCarsonLine={this.handleDeleteCarsonLine}
                />
                :
                <Redirect to="/login" />
            } />
          <Route
            exact path="/editcarson"
            render={({ location }) =>
              userService.getUser() ?
                <CarsonEdit
                  handleUpdateCarsonLine={this.handleUpdateCarsonLine}
                  location={location}
                  user={this.state.user}
                />
                :
                <Redirect to='/login' />
            }
          />
          <Route
            exact path="/addderksenline"
            render={() =>
              userService.getUser() ?
                <AddDerksenLine
                  handleAddDerksenLine={this.handleAddDerksenLine}
                />
                :
                <Redirect to='/login' />}
          />
          <Route
            exact path="/derksenpage"
            render={({ history }) =>
              userService.getUser() ?
                <DerksenPage
                  derksenLines={this.state.derksenLines}
                  handleGetAllDerksenLines={this.props.handleGetAllDerksenLines}
                  history={history}
                  user={this.state.user}
                  // handleDeleteDerksenLine={this.handleDeleteDerksenLine}
                />
                :
                <Redirect to="/login" />
            } />
        </Switch>
      </div>
    );
  }
}


export default App;
