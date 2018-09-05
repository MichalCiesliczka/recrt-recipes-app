import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RecipesList from './RecipesList';

const Routes = () => (
  <Router>
    <Switch>
      <Route component={RecipesList} />
    </Switch>
  </Router>
);

export default Routes;
