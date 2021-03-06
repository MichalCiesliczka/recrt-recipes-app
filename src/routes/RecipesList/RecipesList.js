import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
    <NavLink
      to="/recipe/new"
    >
      <Button>
        Add Recipe
      </Button>
    </NavLink>
    <RecipesListContainer />
  </div>
);

export default RecipesList;
