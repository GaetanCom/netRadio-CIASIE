import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

import './App.css';

import Menu from '../components/menus/Menus';

function App() {
  return (
    <Router>
      <Menu />
      <main>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
