import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Dform from './dform';
import {Route,Switch,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
      <Route path="/Home">
        <Home/>
      </Route>
      <Route path="/form">
      <Dform/>
      </Route>
      <Route path="/Home">
      <Home/>
      </Route>
      <Route path="/Home">
      <Home/>
      </Route>
    </Switch>

    
    </div>
  );
}

export default App;
