import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RecipesList from './RecipesList';
import RecipeDetails from './RecipeDetails';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/recipe/:id" component={RecipeDetails} />

      <Route component={RecipesList} />
    </Switch>
  </Router>
);

export default Routes;
