import './App.css';
import { Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home'
// import EnterPage from '../../Pages/Enterpage/EnterPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          home
        </p>
      </header>

      {/* <Route component={Home} />
      <Route component={Enterpage} /> */}

      <Route path='/' render={() => (
        <Home />
      )} />
    </div>
  );
}

export default App;
