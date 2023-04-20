import React from 'react';
import Home from './Home';
import Breakfast from './breakfast';
import Dinner from './dinner';
import Lunch from "./lunch";
import Drink from "./drink";
import Bakery from "./bakery";
import Snacks from "./snacks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
      <main>
        <Switch>
          <Route path='/breacfast'>
            <Breakfast/>
          </Route>
          <Route path='/dinner'>
            <Dinner/>
          </Route>
          <Route path='/lunch'>
            <Lunch/>
          </Route>
          <Route path='/drink'>
            <Drink/>
          </Route>
          <Route path='/bakery'>
            <Bakery/>
          </Route>
          <Route path='/snacks'>
            <Snacks/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </main>
  );
}

export default App;
