import './App.css';
import { Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home'
import EnterPage from '../../Pages/Enterpage/EnterPage';

function App() {
  return (
    <div className="App">
      <Route path='/' render={() => (
        <Home />
      )} />
      <Route
            exact
            path="/enter"
            render={(props) =>
              (
                <EnterPage {...props} />
              ) 
            }
          />
    </div>
  );
}

export default App;
