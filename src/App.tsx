import React from 'react';
import Home from './Home';
import CategoryMeal from './categoryMeal';
import Meal from "./meal";
import Information from "./information"
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
            <CategoryMeal/>
          </Route>
          <Route path='/dinner'>
            <CategoryMeal/>
          </Route>
          <Route path='/lunch'>
            <CategoryMeal/>
          </Route>
          <Route path='/drink'>
            <CategoryMeal/>
          </Route>
          <Route path='/bakery'>
            <CategoryMeal/>
          </Route>
          <Route path='/snacks'>
            <CategoryMeal/>
          </Route>
          <Route path='/meal'>
            <Meal/>
          </Route>
          <Route path='/info'>
            <Information/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </main>
  );
}

export default App;
