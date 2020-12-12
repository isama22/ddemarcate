import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home'
import EnterPage from '../../Pages/Enterpage/EnterPage';
import NavBar from '../../components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
           <NavBar/>
      <Router>

      {/* <Route path='/' render={() => (
        <Home />
      )} /> */}
       <Route exact path="/" component={Home} />
       <Route exact path="/enter" component={EnterPage} />
      {/* <Route
            exact
            path="/enter"
            render={(props) =>
              (<EnterPage {...props} />) 
            }
          /> */}

      </Router>
    </div>
  );
}

export default App;
