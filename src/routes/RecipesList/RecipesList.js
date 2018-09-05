import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import RecipesListContainer from '../../features/recipesList';

const RecipesList = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          align="center"
          style={{
            width: '100%',
          }}
        >
          Recipes List
        </Typography>
      </Toolbar>
    </AppBar>
    <RecipesListContainer />
  </div>
);

export default RecipesList;
