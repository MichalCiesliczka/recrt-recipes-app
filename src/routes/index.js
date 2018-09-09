import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CreateRecipe from './CreateRecipe';
import RecipeDetails from './RecipeDetails';
import RecipesList from './RecipesList';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/recipe/new" component={CreateRecipe} />
      <Route path="/recipe/:id" component={RecipeDetails} />

      <Route component={RecipesList} />
    </Switch>
  </Router>
);

export default Routes;
