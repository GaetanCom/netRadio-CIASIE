import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';

import Index from '../container/Index';
import Menu from '../components/menus/Menus';

function App() {
  return (
    <Router>
      <Menu />
      <main>
        <Switch>
          <Route path="/"><Index /></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
