// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid';

import RecipesTable from './RecipesTable/RecipesTable';
import type { Recipes } from '../recipesList.types';

const RecipesListComponent = ({ recipes }: { recipes: Recipes }) => (
  <Grid
    container
    alignItems="center"
    direction="column"
    spacing={16}
  >
    <Grid item>
      <RecipesTable recipes={recipes} />
    </Grid>
  </Grid>
);

export default RecipesListComponent;
